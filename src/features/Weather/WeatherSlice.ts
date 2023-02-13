import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherType } from '../../app/models';
import { RootState } from '../../app/store';

const initialState: WeatherType = {
  base: '',
  clouds: { all: 0 },
  cod: 0,
  coord: { lon: 0, lat: 0 },
  name: '',
  dt: '',
  id: 0,
  main: {
    feels_like: 0,
    temp: 0,
    humidity: 0,
    temp_max: 0,
    temp_min: 0,
    pressure: 0,
  },
  sys: {
    country: '',
    id: 0,
    sunrise: 0,
    sunset: 0,
    type: 0,
  },
  timezone: 0,
  visibility: 0,
  wind: { speed: 0 },
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    setBase: (state, action: PayloadAction<string>) => {
      state.base = action.payload;
    },
    setClouds: (state, action: PayloadAction<number>) => {
      state.clouds.all = action.payload;
    },
    setCod: (state, action: PayloadAction<number>) => {
      state.cod = action.payload;
    },
    setCoord: (state, action: PayloadAction<{ lon: number; lat: number }>) => {
      state.coord.lon = action.payload.lon;
      state.coord.lat = action.payload.lat;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDt: (state, action: PayloadAction<string>) => {
      state.dt = action.payload;
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setMain: (
      state,
      action: PayloadAction<{
        feels_like: number;
        temp: number;
        humidity: number;
        temp_max: number;
        temp_min: number;
        pressure: number;
      }>
    ) => {
      state.main.feels_like = action.payload.feels_like;
      state.main.temp = action.payload.temp;
      state.main.humidity = action.payload.humidity;
      state.main.temp_max = action.payload.temp_max;
      state.main.temp_min = action.payload.temp_min;
      state.main.pressure = action.payload.pressure;
    },
    setSys: (
      state,
      action: PayloadAction<{
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
      }>
    ) => {
      state.sys.country = action.payload.country;
      state.sys.id = action.payload.id;
      state.sys.sunrise = action.payload.sunrise;
      state.sys.sunset = action.payload.sunset;
      state.sys.type = action.payload.type;
    },
    setTimezone: (state, action: PayloadAction<number>) => {
      state.timezone = action.payload;
    },
    setVisibility: (state, action: PayloadAction<number>) => {
      state.visibility = action.payload;
    },
    setWind: (state, action: PayloadAction<number>) => {
      state.wind.speed = action.payload;
    },
  },
});

export const {
  setBase,
  setClouds,
  setCod,
  setCoord,
  setName,
  setDt,
  setId,
  setMain,
  setSys,
  setTimezone,
  setVisibility,
  setWind,
} = weatherSlice.actions;
export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
