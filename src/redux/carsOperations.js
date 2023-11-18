import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b7ee1e21b9aa6eb0794d9b.mockapi.io/';

export const getCars = createAsyncThunk(
  'adverts/getAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=12`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCarsForFilter = createAsyncThunk(
  'adverts/getForFilter',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFirstPage = createAsyncThunk(
  'adverts/getFirst',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=1&limit=12`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const getCarById = createAsyncThunk(
  'adverts/getOne',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/:${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);