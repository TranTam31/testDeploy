import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null, // Lấy token từ localStorage nếu có
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload); // Lưu token vào localStorage
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem('token'); // Xóa token khỏi localStorage khi logout
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
