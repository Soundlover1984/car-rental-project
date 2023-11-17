import { createSlice } from '@reduxjs/toolkit';
import { getCars, getFirstPage } from './carsOperations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFirstPageFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};
const handleGetCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = [...state.cars, ...action.payload];
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getFirstPage.pending, handlePending)
      .addCase(getFirstPage.fulfilled, handleFirstPageFulfilled)
      .addCase(getFirstPage.rejected, handleRejected)
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, handleGetCarsFulfilled)
      .addCase(getCars.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;