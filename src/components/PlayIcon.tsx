import { View, Text, ViewStyle } from 'react-native';
import React from 'react';
import { Play } from '../utils/FileMaster';
import { useTheme } from './ThemeProvider';
import { moderateScale } from '../utils/Metrices';

interface PlayIconProps {
  playIconSize?: number;
  playIconContainerStyle?: ViewStyle;
}

const PlayIcon: React.FC<PlayIconProps> = ({
  playIconSize = 15,
  playIconContainerStyle,
}) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        {
          height: moderateScale(25),
          width: moderateScale(25),
          aspectRatio: 1,
          backgroundColor: theme.accentColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: moderateScale(3),
          position: 'absolute',
          zIndex: 100,
          left: moderateScale(3),
          bottom: moderateScale(3),
        },
        playIconContainerStyle,
      ]}
    >
      <Play color={theme.textColor} size={moderateScale(playIconSize)} />
    </View>
  );
};

export default PlayIcon;
