/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ThemeProvider } from './src/components/ThemeProvider';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const MyApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => MyApp);
