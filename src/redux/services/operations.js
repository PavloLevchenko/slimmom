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

export const logout = createAsyncThunk('/api/auth/logout', async () => {
  try {
    await axios.get(`/api/auth/logout`);
    token.unset();
  } catch (error) {}
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      token.set(persistedToken);
      const res = await axios.get('/api/auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const setUserParams = createAction('auth/save');

export const deleteDiaryProduct = createAsyncThunk(
  'delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/diary/${id}`);
    } catch (error) {
      toast('product is not correct');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getAllDiaryProduct = createAsyncThunk(
  'getAllDiaryProduct',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const { data } = await axios.get(`/api/diary/${date}`);
      token.set(persistedToken);
      return data;
    } catch (error) {
      toast('something went wrong!!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addDiaryProduct = createAsyncThunk(
  'addDiaryProduct',
  async (data, thunkAPI) => {
    const { product, weight, date } = data;
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      token.set(persistedToken);
      await axios.post('api/diary', { product, weight, date });
      toast('Product added success!');
    } catch (error) {
      toast('something went wrong!!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNameProducts = createAsyncThunk(
  '/api/products',
  async (userQuery, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      token.set(persistedToken);

      const { data } = await axios.get(`/api/products`, {
        params: { title: userQuery },
      });
      data.message && toast.success(data.message);
      return data;
    } catch (err) {
      toast.error(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
