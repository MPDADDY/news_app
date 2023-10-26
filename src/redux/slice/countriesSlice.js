import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ApiUrl = 'https://restcountries.com/v3.1/all';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  try {
    const response = await fetch(ApiUrl);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('An error occurred while fetching the data');
  }
});

const countriesSlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.payload;
      });
  },

});

export default countriesSlice.reducer;
