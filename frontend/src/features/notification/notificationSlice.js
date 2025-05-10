import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  type: 'success'|| 'error' | 'success' | 'info' | 'warning',
  message: '',
  icon: null, 
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      const { type, message, icon } = action.payload;
      state.open = true;
      state.type = type;
      state.message = message;
      state.icon = icon || null;
    },
    hideNotification: (state) => {
      state.open = false;
      state.message = '';
      state.icon = null;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
