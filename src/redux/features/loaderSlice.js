import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isRefreshing: false,
};
const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsRefreshing: (state, action) => {
      state.isRefreshing = action.payload;
    },
  },
});
export const { setIsLoading, setIsRefreshing } = loaderSlice.actions;
export default loaderSlice.reducer;
