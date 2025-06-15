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
  extraReducers: builder => {
    builder
      .addCase(getAllDiaryProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllDiaryProduct.fulfilled, (state, action) => {
        state.notes = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllDiaryProduct.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addDiaryProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(addDiaryProduct.fulfilled, (state, action) => {
        state.notes = [...state.notes, action.payload];
        state.isLoading = false;
      })
      .addCase(addDiaryProduct.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteDiaryProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteDiaryProduct.fulfilled, (state, action) => {
        const index = state.notes.findIndex(({ _id }) => {
          return _id === action.meta.arg;
        });
        if (index === -1) {
          state.isLoading = false;
          return;
        }
        state.notes.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(deleteDiaryProduct.rejected, state => {
        state.isLoading = false;
      })
      .addCase(getNameProducts.fulfilled, (state, action) => {
        state.selectTitle = action.payload.products;
      })
      .addCase(setDiaryDay, (state, action) => {
        state.day = action.payload;
      });
  },
});

export const diaryReducer = diaryProductSlice.reducer;
