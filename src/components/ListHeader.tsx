import { View, Text } from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Metrices';
import { useTheme } from './ThemeProvider';
import { useSelector } from 'react-redux';

const ListHeader = () => {
  const { theme } = useTheme();
  const { feedList, sectionHeading } = useSelector((state: any) => state.feed);
  return feedList.length > 0 ? (
    <View
      style={{
        width: horizontalScale(350),
        justifyContent: 'flex-start',
        paddingVertical: verticalScale(10),
      }}
    >
      <Text
        style={{
          color: theme.textColor,
          fontSize: moderateScale(15),
          fontWeight: '700',
        }}
      >
        {sectionHeading}
      </Text>
    </View>
  ) : null;
};

export default ListHeader;
