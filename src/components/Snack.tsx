import { Text, TouchableOpacity } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Metrices';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { showSnack } from '../redux/features/snackSlice';

interface SnackProps {
  isShow: boolean;
}

const Snack: React.FC<SnackProps> = ({ isShow }) => {
  const { theme, toggleTheme } = useTheme();
  const reduxSnack = useSelector((state: any) => state.snackBox);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isShow == true) {
      setTimeout(() => {
        dispatch(showSnack({ isShowSnack: false }));
      }, 3000);
    }
  }, []);
  return (
    <TouchableOpacity
      onPress={() => dispatch(showSnack({ isShowSnack: false }))}
      style={{
        position: 'absolute',
        bottom: reduxSnack.position,
        zIndex: 1000,
        width: '95%',
        borderRadius: moderateScale(8),
        backgroundColor: theme.snackColor,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: horizontalScale(15),
        flexDirection: 'row',
      }}
    >
      <Text
        style={{
          color: reduxSnack.bgColor,
          flex: 1,
          paddingLeft: horizontalScale(10),
          fontSize: moderateScale(14),
          fontWeight: '500',
        }}
      >
        {reduxSnack.message}
      </Text>
    </TouchableOpacity>
  );
};
export default Snack;
