import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../API/config/API';
import { feed } from '../../API/config/urls';
import { setIsLoading, setIsRefreshing } from './loaderSlice';
import { ACCESS_TOKEN } from '@env';
import { colors } from '../../utils/colors';
import Constants from '../../utils/Constants';
import { showSnack } from './snackSlice';
import { secureStorageGetValue } from '../../utils/SecureSturageUtility';

export const getNews = createAsyncThunk(
  'feed/getNews',
  async (_, { getState, dispatch, rejectWithValue }) => {
    const { isLoading, isRefreshing } = getState().loader;
    const { feedList, limit } = getState().feed;
    if (!isRefreshing) {
      dispatch(setIsLoading(true));
    }
    try {
      const token = await secureStorageGetValue('token');
      if (!token) {
        return rejectWithValue('No token found');
      }
      const response = await API.get(
        `${feed}/?limit=${limit}&api_token=${token}`,
      );
      dispatch(setIsLoading(false));
      dispatch(setIsRefreshing(false));
      if (response.status === 200) {
        dispatch(updateLandingUrl(response.data.data.landing_url));
        dispatch(updateFeedList([...response.data.data.data]));
        dispatch(updateSectionHeading(response.data.data.display_name));
      } else {
        dispatch(
          showSnack({
            isShowSnack: true,
            snackText: response.data.message,
            snackColor: colors.red,
          }),
        );
      }
      return response.data;
    } catch (error) {
      dispatch(setIsLoading(false));
      dispatch(setIsRefreshing(false));
      dispatch(updateFeedList([]));
      dispatch(
        showSnack({
          isShowSnack: true,
          snackText: Constants.ERROR_MESSAGE,
          snackColor: colors.red,
        }),
      );
      throw error;
    }
  },
);

const initialState = {
  feedList: [],
  sectionHeading: '',
  limit: 5,
  maxDataPerSet: 5,
  landingUrl: '',
};
const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    updateFeedList: (state, action) => {
      state.feedList = action.payload;
    },
    updateLandingUrl: (state, action) => {
      state.landingUrl = action.payload;
    },
    updateLimit: (state, action) => {
      state.limit = action.payload;
    },
    updateSectionHeading: (state, action) => {
      state.sectionHeading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        console.log('getNews success...', action.payload);
      })
      .addCase(getNews.rejected, (state, action) => {
        console.log('getNews failed...', action);
      });
  },
});
export const {
  updateFeedList,
  updateSectionHeading,
  updateLimit,
  updateLandingUrl,
} = feedSlice.actions;
export default feedSlice.reducer;
