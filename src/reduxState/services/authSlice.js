import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  setUserParams,
  setCookieConsent,
  refreshUser,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  userParams: {
    age: 0,
    bloodType: 0,
    currentWeight: 0,
    desiredWeight: 0,
    height: 0,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  cookieConsent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(setUserParams, (state, action) => {
        state.userParams = action.payload;
      })
      .addCase(setCookieConsent, (state, action) => {
        state.cookieConsent = action.payload;
      })
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        const { email, name, ...userParams } = action.payload.data.user;
        state.user = { email, name };
        state.userParams = userParams;
        state.token = action.payload.data.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(register.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(login.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { email, name, ...userParams } = action.payload.data.user;
        state.user = { email, name };
        state.userParams = userParams;
        state.token = action.payload.data.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logout.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logout.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.userParams = initialState.userParams;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logout.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        const { email, name, ...userParams } = action.payload.data.user;
        state.user = { email, name };
        state.userParams = userParams;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
      });
  },
});

export const authReducer = authSlice.reducer;
