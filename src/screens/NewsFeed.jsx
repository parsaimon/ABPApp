import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  Image,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useCallback, useMemo } from 'react';
import ScreensContainer from '../components/ScreensContainer';
import Header from '../components/Header';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Metrices';
import { useTheme } from '../components/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, updateLimit } from '../redux/features/feedSlice';
import NewsCard from '../components/NewsCard';
import ListHeader from '../components/ListHeader';
import { setIsRefreshing } from '../redux/features/loaderSlice';
import ListFooter from '../components/ListFooter';
import ListEmptyComponent from '../components/ListEmptyComponent';

const NewsFeed = () => {
  const { theme } = useTheme();
  const { feedList, limit, maxDataPerSet } = useSelector(state => state.feed);
  const { isRefreshing } = useSelector(state => state.loader);
  const dispatch = useDispatch();
  const styles = CustomStyle();

  const getNewsFeed = useCallback(() => {
    dispatch(getNews());
  }, [dispatch]);

  const handleSeeMore = useCallback(() => {
    dispatch(updateLimit(limit + maxDataPerSet));
  }, [dispatch, limit, maxDataPerSet]);

  const handleRefreshPress = useCallback(() => {
    dispatch(setIsRefreshing(true));
    getNewsFeed();
  }, [dispatch, getNewsFeed]);

  useEffect(() => {
    getNewsFeed();
  }, [limit, getNewsFeed]);

  const renderListHeader = useCallback(() => <ListHeader />, []);
  const renderListFooter = useCallback(
    () => <ListFooter onPressSeeMore={handleSeeMore} />,
    [handleSeeMore],
  );

  const renderListEmpty = useCallback(
    () => <ListEmptyComponent onRefreshPress={handleRefreshPress} />,
    [handleRefreshPress],
  );

  const renderItem = useCallback(
    ({ item }) => <NewsCard item={item} onPressCard={() => {}} />,
    [],
  );

  return (
    <ScreensContainer head={<Header />}>
      <FlatList
        data={feedList}
        style={styles.listStyle}
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={renderListFooter}
        ListEmptyComponent={renderListEmpty}
        refreshControl={
          <RefreshControl
            colors={[theme.accentColor]}
            tintColor={theme.accentColor}
            refreshing={isRefreshing}
            onRefresh={() => dispatch(updateLimit(maxDataPerSet))}
          />
        }
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={renderItem}
      />
    </ScreensContainer>
  );
};

export default NewsFeed;

const CustomStyle = () => {
  const styles = StyleSheet.create({
    listStyle: {
      width: horizontalScale(375),
      paddingTop: verticalScale(20),
      paddingBottom: verticalScale(Platform.OS === 'ios' ? 20 : 0),
      marginBottom: verticalScale(Platform.OS === 'ios' ? 0 : 20),
    },
  });
  return styles;
};
