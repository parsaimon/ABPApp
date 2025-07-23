import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Metrices';
import { useTheme } from './ThemeProvider';
import { useSelector } from 'react-redux';
import { RightArrow } from '../utils/FileMaster';

interface ListFooterProps {
  onPressSeeMore: () => void;
}

const ListFooter: React.FC<ListFooterProps> = ({ onPressSeeMore }) => {
  const { theme } = useTheme();
  const { feedList, sectionHeading } = useSelector((state: any) => state.feed);
  return feedList.length > 0 ? (
    <TouchableOpacity
      onPress={onPressSeeMore}
      style={{
        width: horizontalScale(350),
        justifyContent: 'flex-start',
        paddingVertical: verticalScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(20),
      }}
    >
      <Text
        style={{
          color: theme.textColor,
          fontSize: moderateScale(15),
          fontWeight: '700',
        }}
      >
        {'আরো দেখুন'}
      </Text>
      <RightArrow size={moderateScale(20)} color={theme.textColor} />
    </TouchableOpacity>
  ) : null;
};

export default ListFooter;
