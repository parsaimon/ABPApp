import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Nav from './src/Nav';
import { useTheme } from './src/components/ThemeProvider';
import { horizontalScale, verticalScale } from './src/utils/Metrices';
import { logo } from './src/utils/FileMaster';
import { useSelector } from 'react-redux';
import Snack from './src/components/Snack';
import { secureStorageSetValue } from './src/utils/SecureSturageUtility';
import { ACCESS_TOKEN } from '@env';

const App = () => {
  if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }
  const reduxSnack = useSelector(state => state.snackBox.show);

  const [isInitialized, setIsInitialized] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      getDataFromSecureStorage();
    }, 3000);
  }, []);

  const getDataFromSecureStorage = async () => {
    await secureStorageSetValue('token', ACCESS_TOKEN);
    setIsInitialized(true);
  };

  return isInitialized != undefined ? (
    <>
      <Nav />
      {reduxSnack && <Snack isShow={reduxSnack} />}
    </>
  ) : (
    <Splash />
  );
};

export default App;
const Splash = () => {
  const { theme } = useTheme();
  const styles = CustomStyle();
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={theme.accentColor}
        barStyle={'light-content'}
      />
      <View style={styles.bgContainer}>
        <Image resizeMode="contain" source={logo} style={styles.imgStyle} />
      </View>
    </>
  );
};
const CustomStyle = () => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    imgStyle: {
      height: verticalScale(60),
      width: horizontalScale(60),
      aspectRatio: 1,
    },
    bgContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.accentColor,
    },
  });
  return styles;
};
