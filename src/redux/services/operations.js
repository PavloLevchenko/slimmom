import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

export const register = createAsyncThunk(
  '/api/auth/registration',
  async (value, thunkAPI) => {
    try {
      await axios.post(`/api/auth/registration`, value);
      const { data } = await axios.post('/api/auth/login', {
        password: value.password,
        email: value.email,
      });
      return data;
    } catch (error) {
      toast.error(thunkAPI.extra.i18n.t('Registration_error'));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  '/api/auth/login',
  async (value, { rejectWithValue, extra }) => {
    try {
      const { data } = await axios.post('/api/auth/login', value);
      return data;
    } catch (error) {
      toast.error(extra.i18n.t('Sign_in_error'));
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  '/api/auth/logout',
  async (_, { rejectWithValue, extra }) => {
    try {
      await axios.get(`/api/auth/logout`);
    } catch (err) {
      toast.error(extra.i18n.t('Logout_user_error'));
      return rejectWithValue(err.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, extra }) => {
    try {
      const res = await axios.get('/api/auth/current');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProducts = createAsyncThunk(
  '/api/products',
  async (query, { rejectWithValue, extra }) => {
    try {
      const { data, status } = await axios.post(
        `/api/products?category=${query.category}&currentPage=1&pageSize=20`,
        query.userParams
      );

      if (!data) {
        return rejectWithValue(status);
      }
      data.message && toast.success(data.message);

      return data;
    } catch (err) {
      toast.error(extra.i18n.t('Get_products_error'));
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProductsCategories = createAsyncThunk(
  '/api/products/categories',
  async (userParams, { rejectWithValue, extra }) => {
    try {
      const { data, status } = await axios.post(
        '/api/products/categories',
        userParams
      );

      if (!data) {
        return rejectWithValue(status);
      }
      return data;
    } catch (err) {
      toast.error(extra.i18n.t('Get_categories_products_error'));
      return rejectWithValue(err.response.data);
    }
  }
);

export const addProducts = createAsyncThunk(
  'products/addItem',
  async (product, { rejectWithValue, extra }) => {
    try {
      const result = await axios.post(`/api/diary/`, {
        ...product,
      });
      return result.data;
    } catch (error) {
      toast.info(extra.i18n.t('Add_product_in_diary_error'));
      return rejectWithValue(error.message);
    }
  }
);

export const getDailyProducts = createAsyncThunk(
  'products/getDaily',
  async (value, { rejectWithValue, extra }) => {
    const { i18n } = extra;
    try {
      const { data, status } = await axios.get('/api/diary/' + value);
      if (!data) {
        return await rejectWithValue(status);
      }
      return data;
    } catch (err) {
      toast.warning(i18n.t('Get_daily_products_error'));
      return await rejectWithValue(err.response.data);
    }
  }
);

export const setUserParams = createAction('auth/save');
export const setDiaryDay = createAction('diary/day');

export const deleteDiaryProduct = createAsyncThunk(
  'delete',
  async (id, { rejectWithValue, extra }) => {
    try {
      await axios.delete(`/api/diary/${id}`);
      return id;
    } catch (error) {
      toast(extra.i18n.t('Delete_product_from_diary_error'));
      return rejectWithValue(error.message);
    }
  }
);
export const getAllDiaryProduct = createAsyncThunk(
  'getAllDiaryProduct',
  async (date, { rejectWithValue, extra }) => {
    const { i18n } = extra;
    try {
      const { data } = await axios.get(`/api/diary/${date}`);
      return data.notes;
    } catch (error) {
      toast.warning(i18n.t('Sorry_something_went_wrong'));
      return rejectWithValue(error.message);
    }
  }
);
export const addDiaryProduct = createAsyncThunk(
  'addDiaryProduct',
  async (data, { rejectWithValue, extra }) => {
    const { product, weight, date } = data;
    const { i18n } = extra;
    try {
      const { data } = await axios.post('api/diary', { product, weight, date });
      toast.success(i18n.t('Product_added_successfully'));
      return data.note;
    } catch (error) {
      toast.warning(i18n.t('Sorry_something_went_wrong'));
      return rejectWithValue(error.message);
    }
  }
);

export const getNameProducts = createAsyncThunk(
  '/api/products',
  async (userQuery, { rejectWithValue, extra }) => {
    try {
      const { i18n } = extra;
      const { data } = await axios.get(`/api/products`, {
        params: { title: userQuery },
      });
      data.message && toast.success(data.message);
      if (data.products.length === 0) {
        toast.info(i18n.t('Not_found_product'));
      }
      return data;
    } catch (err) {
      toast.error(err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);
