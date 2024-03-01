const { createSlice } = require('@reduxjs/toolkit');
const {
  getAllDiaryProduct,
  addDiaryProduct,
  deleteDiaryProduct,
  getNameProducts,
  setDiaryDay,
} = require('./operations');

const diaryProductSlice = createSlice({
  name: 'diaryProduct',
  initialState: {
    notes: [],
    selectTitle: [],
    isLoading: false,
    day: new Date().toISOString(),
  },
  extraReducers: {
    [getAllDiaryProduct.pending](state) {
      state.isLoading = true;
    },
    [addDiaryProduct.pending](state) {
      state.isLoading = true;
    },
    [deleteDiaryProduct.pending](state) {
      state.isLoading = true;
    },
    [getAllDiaryProduct.fulfilled](state, action) {
      state.notes = action.payload;
    },
    [addDiaryProduct.fulfilled](state, action) {
      state.notes = [...state.notes, action.payload];
    },
    [deleteDiaryProduct.fulfilled](state, action) {
      const index = state.notes.findIndex(({ id }) => {
        return id === action.meta.arg;
      });
      state.notes.splice(index, 1);
    },
    [getAllDiaryProduct.pending](state) {
      state.isLoading = false;
    },
    [addDiaryProduct.pending](state) {
      state.isLoading = false;
    },
    [deleteDiaryProduct.pending](state) {
      state.isLoading = false;
    },

    [getNameProducts.fulfilled](state, action) {
      state.selectTitle = action.payload.products;
    },
    [setDiaryDay]: (state, action) => {
      state.day = action.payload;
    },
  },
});
export const diaryReducer = diaryProductSlice.reducer;
