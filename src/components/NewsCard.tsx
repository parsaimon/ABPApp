import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Metrices';
import PlayIcon from './PlayIcon';
import { Spread } from '../utils/FileMaster';
import { useTheme } from './ThemeProvider';

interface NewsCardProps {
  item: any;
  onPressCard: () => {};
}

const NewsCard: React.FC<NewsCardProps> = ({ item, onPressCard }) => {
  const { theme } = useTheme();
  const styles = CustomStyle();
  return (
    <TouchableOpacity onPress={onPressCard} style={styles.cardContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.imageView}>
          <Image
            source={{
              uri: item?.image ?? '',
            }}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          <PlayIcon />
        </View>
        <Text style={styles.headlineText}>{item?.headline ?? ''}</Text>
      </View>
      <Spread
        color={theme.textColor}
        size={moderateScale(20)}
        style={{ alignSelf: 'flex-end' }}
      />
    </TouchableOpacity>
  );
};

export default NewsCard;
const CustomStyle = () => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    cardContainer: {
      width: horizontalScale(350),
      borderTopWidth: 1,
      borderTopColor: theme.borderColor,
      alignSelf: 'center',
      paddingVertical: verticalScale(10),
    },
    imageView: {
      height: moderateScale(80),
      width: moderateScale(80),
      aspectRatio: 1,
      borderRadius: moderateScale(5),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.placeholderColor,
    },
    imageStyle: {
      height: '100%',
      width: '100%',
      borderRadius: moderateScale(5),
    },
    headlineText: {
      color: theme.textColor,
      width: horizontalScale(250),
      marginLeft: horizontalScale(10),
      fontSize: moderateScale(14),
      fontWeight: '700',
    },
  });
  return styles;
};
