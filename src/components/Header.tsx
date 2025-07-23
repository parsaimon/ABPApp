import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Metrices';
import { useTheme } from './ThemeProvider';
import { banner, Menu, User } from '../utils/FileMaster';
import CircularBtn from './CircularBtn';
import { colors } from '../utils/colors';
import { useDispatch } from 'react-redux';
import { showSnack } from '../redux/features/snackSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const styles = CustomStyle();
  return (
    <View style={styles.headerContainer as ViewStyle}>
      <TouchableOpacity>
        <Image
          source={banner}
          resizeMode="contain"
          style={styles.bannerStyle}
        />
      </TouchableOpacity>
      <View style={styles.rightView}>
        <CircularBtn
          buttonContainerStyle={styles.userIcon}
          onPressIcon={() => {
            dispatch(
              showSnack({
                isShowSnack: true,
                snackText: 'Please login',
                snackColor: colors.red,
              }),
            );
          }}
          icon={<User size={moderateScale(24)} color={theme.textColor} />}
        />
        <CircularBtn
          onPressIcon={() => {
            dispatch(
              showSnack({
                isShowSnack: true,
                snackText: 'This section is under development',
                snackColor: colors.red,
              }),
            );
          }}
          icon={<Menu size={moderateScale(24)} color={theme.textColor} />}
        />
      </View>
    </View>
  );
};

export default Header;
const CustomStyle = () => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    headerContainer: {
      width: horizontalScale(375),
      paddingTop:
        Platform.OS === 'android' && Platform.Version > 34
          ? horizontalScale(50)
          : horizontalScale(10),
      paddingBottom: horizontalScale(10),
      backgroundColor: theme.headerColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(20),
    },
    bannerStyle: {
      height: verticalScale(40),
      width: horizontalScale(140),
    },
    userIcon: {
      backgroundColor: colors.black,
      marginRight: horizontalScale(20),
    },
    rightView: { flexDirection: 'row', alignItems: 'center' },
  });
  return styles;
};
