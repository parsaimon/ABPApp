import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { useTheme } from './ThemeProvider';
import { moderateScale, verticalScale } from '../utils/Metrices';
import { Refresh } from '../utils/FileMaster';
import { colors } from '../utils/colors';
import { useSelector } from 'react-redux';

interface ListEmptyComponentProps {
  onRefreshPress: () => void;
  message?: string;
  isShowButton?: boolean;
}

const ListEmptyComponent: React.FC<ListEmptyComponentProps> = ({
  onRefreshPress,
  message = 'আবার চেষ্টা করুন',
  isShowButton = true,
}) => {
  const { theme } = useTheme();
  const { isLoading } = useSelector((state: any) => state.loader);
  return isLoading ? (
    <ActivityIndicator
      size={'large'}
      color={theme.loaderColor}
      style={{ alignSelf: 'center' }}
    />
  ) : (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: theme.textColor,
          fontSize: moderateScale(20),
          fontWeight: '700',
        }}
      >
        {message}
      </Text>
      {isShowButton && (
        <TouchableOpacity
          onPress={onRefreshPress}
          style={{
            height: moderateScale(40),
            width: moderateScale(40),
            aspectRatio: 1,
            borderRadius: moderateScale(50),
            backgroundColor: theme.buttonColor,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: verticalScale(10),
          }}
        >
          <Refresh size={moderateScale(25)} color={colors.black} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ListEmptyComponent;
