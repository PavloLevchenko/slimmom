import { createSlice, isAnyOf, isRejected } from '@reduxjs/toolkit';
import { getProducts, getProductsCategories } from './operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    bad: [],
    calories: 0,
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.calories = action.payload.kCal;
      state.bad = action.payload.products;
    });
    builder.addCase(getProductsCategories.fulfilled, (state, action) => {
      state.categories = action.payload.titles;
    });
    builder.addMatcher(
      isAnyOf(getProducts.pending, getProductsCategories.pending),
      state => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isRejected(getProducts, getProductsCategories),
      (state, action) => {
        state.error = action.error;
      }
    );
    builder.addMatcher(
      isAnyOf(
        action => action.type.endsWith('/rejected'),
        action => action.type.endsWith('/fulfilled')
      ),
      state => {
        state.isLoading = false;
      }
    );
  },
});

export const productsReducer = productsSlice.reducer;
