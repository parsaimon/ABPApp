import {
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { ReactNode } from 'react';
import { useTheme } from './ThemeProvider';
import { horizontalScale, moderateScale } from '../utils/Metrices';

interface CircularBtnProps {
  icon: ReactNode;
  onPressIcon: () => void;
  buttonContainerStyle?: ViewStyle;
}

const CircularBtn: React.FC<CircularBtnProps> = ({
  icon,
  onPressIcon,
  buttonContainerStyle,
}) => {
  const styles = CustomStyle();
  return (
    <TouchableOpacity
      style={[styles.button as ViewStyle, buttonContainerStyle]}
      onPress={onPressIcon}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default CircularBtn;
const CustomStyle = () => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    button: {
      width: moderateScale(30),
      height: moderateScale(30),
      borderRadius: moderateScale(15),
      backgroundColor: theme.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio: 1,
    },
  });
  return styles;
};
