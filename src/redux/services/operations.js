import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /auth/registration
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  '/api/auth/registration',
  async (value, thunkAPI) => {
    try {
      await axios.post(`/api/auth/registration`, value);
      const { data } = await axios.post('/api/auth/login', {
        password: value.password,
        email: value.email,
      });
      token.set(data.accessToken);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /auth/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  '/api/auth/login',
  async (value, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/login', value);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/products
 * body: userParams
 */
export const getProducts = createAsyncThunk(
  '/api/products',
  async (userParams, thunkAPI) => {
    try {
      const { data, status } = await axios.post('/api/products', userParams);
      token.set(data.token);
      if (!data) {
        return thunkAPI.rejectWithValue(status);
      }
      data.message && toast.success(data.message);
      return data;
    } catch (err) {
      toast.error(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

/*
 * POST @ /api/products/categories
 * body: userParams
 */
export const getProductsCategories = createAsyncThunk(
  '/api/products/categories',
  async (userParams, thunkAPI) => {
    try {
      const { data, status } = await axios.post(
        '/api/products/categories',
        userParams
      );
      token.set(data.token);
      if (!data) {
        return thunkAPI.rejectWithValue(status);
      }
      data.message && toast.success(data.message);
      return data;
    } catch (err) {
      toast.error(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

/*
 * GET @ /api/products?category=зерно&currentPage=1&pageSize=2
 * body: {categorie, pageNumber}
 */
export const getProductsByCategories = createAsyncThunk(
  '/api/products',
  async (credentials, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `/api/products?category=${credentials.categorie}&currentPage=1&pageSize=20`
      );
      if (!data) {
        return thunkAPI.rejectWithValue(status);
      }
      data.message && toast.success(data.message);
      return data;
    } catch (err) {
      toast.error(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

/*
 * GET @ /auth/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk('/api/auth/logout', async () => {
  try {
    await axios.get(`/api/auth/logout`);
    token.unset();
  } catch (error) {}
});

/*
 * GET @ /auth/current
 * headers: Authorization: Bearer token
 */

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      // If there is a token, add it to the HTTP header and perform the request
      token.set(persistedToken);
      const res = await axios.get('/api/auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProducts = createAsyncThunk(
  'products/addItem',
  async (product, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const persistedToken = state.auth.token;
      token.set(persistedToken);
      const result = await axios.post(`/api/diary/`, {
        ...product,
      });
      return result.data;
    } catch (error) {
      toast('Add product in diary error');
      return rejectWithValue(error.message);
    }
  }
);

export const getDailyProducts = createAsyncThunk(
  'products/getDaily',
  async (value, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const persistedToken = state.auth.token;
      token.set(persistedToken);
      const { data, status } = await axios.get('/api/diary/' + value);
      if (!data) {
        return await rejectWithValue(status);
      }
      return data;
    } catch (err) {
      toast('Get get daily products error');
      return await rejectWithValue(err.response.data);
    }
  }
);

export const setUserParams = createAction('auth/save');
