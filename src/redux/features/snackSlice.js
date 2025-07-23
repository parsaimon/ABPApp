import { createSlice } from '@reduxjs/toolkit';
import { colors } from '../../utils/colors';

export const snackSlice = createSlice({
  name: 'snackBox',
  initialState: {
    show: false,
    message: '',
    icon: '',
    bgColor: '',
    position: 50,
  },
  reducers: {
    showSnack: (state, action) => {
      (state.show = action?.payload?.isShowSnack ?? false),
        (state.message = action?.payload?.snackText ?? ''),
        (state.icon = action?.payload?.snackIcon ?? ''),
        (state.bgColor = action?.payload?.snackColor ?? colors.green),
        (state.position = action?.payload?.position ?? 50);
    },
  },
});
export const { showSnack } = snackSlice.actions;
export default snackSlice.reducer;
