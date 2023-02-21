import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WeatherFetch } from '../../app/models';
const initialState = {
  data: {},
  loading: 'idle',
  error: [],
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  (weatherObj: WeatherFetch) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${weatherObj}&appid=${weatherObj}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(weatherObj),
      }
    )
      .then((res) => res.json())
      .then((data) => data);
  }
);

const weatherFetchSlice = createSlice({
  name: 'weatherFetch',
  initialState,
  reducers: {
    logoutWeather(state) {
      state.data = {};
    },
  },
  extraReducers: {
    [fetchWeather.pending](state) => {
      state.Status.loading = 'true';
    },
    [fetchWeather.fulfilled](state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { logoutWeather } = weatherFetchSlice.actions;
export default weatherFetchSlice.reducer;
