import {
  View,
  Text,
  StatusBar,
  ViewProps,
  SafeAreaView,
  Platform,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, { ReactNode, useEffect, version } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from './ThemeProvider';
import { lightTheme } from '../utils/colors';
import { horizontalScale, verticalScale } from '../utils/Metrices';

interface ScreensContainerProps extends ViewProps {
  children: ReactNode;
  head: ReactNode;
  foot: ReactNode;
}
const ScreensContainer: React.FC<ScreensContainerProps> = ({
  head,
  children,
  foot,
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.headerColor,
      }}
    >
      <StatusBar
        backgroundColor={theme.headerColor}
        barStyle={theme == lightTheme ? 'dark-content' : 'light-content'}
      />
      <SafeAreaView
        style={{
          flex: 1,
          width: '100%',
        }}
      >
        {head}
        <View
          style={{
            flex: 1,
            backgroundColor: theme.backgroundColor,
          }}
        >
          {children}
        </View>
        {foot}
      </SafeAreaView>
      <View
        style={{
          backgroundColor: theme.backgroundColor,
          zIndex: 1,
          width: horizontalScale(375),
          height: verticalScale(Platform.OS == 'ios' ? 40 : 0),
        }}
      ></View>
    </TouchableOpacity>
  );
};

export default ScreensContainer;
