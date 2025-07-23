import { configureStore } from '@reduxjs/toolkit';
import feedReducer from './features/feedSlice';
import snackReducer from './features/snackSlice';
import loaderReducer from './features/loaderSlice';

export default configureStore({
  reducer: {
    feed: feedReducer,
    snackBox: snackReducer,
    loader: loaderReducer,
  },
});
