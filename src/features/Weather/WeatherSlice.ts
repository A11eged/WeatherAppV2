import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  WeatherType,
  RequestState,
  Status,
  initialWeather,
} from '../../app/models';
import { RootState } from '../../app/store';
import { key } from '../../app/constants';
import {
  plain_endpoint,
  coordinate_endpoint,
  getEndpointZipcode,
  getEndpointCoordinates,
} from '../Weather/WeatherFetchHelpers';
import { State } from 'framer/build/events/recognizer/GestureRecognizer';

// Take Weather Object and return a Promise that resolves to Weather Object
export const fillLocation = createAsyncThunk(
  'weather/fillLocation',
  (zipcode: string) => {
    return fetch(getEndpointZipcode(plain_endpoint, zipcode), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => data);
  }
);

export const addWeather = createAsyncThunk(
  'weather/addWeather',
  (zipcode: string) => {
    return fetch(getEndpointZipcode(plain_endpoint, zipcode), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const coordinates = [data.lat, data.lon];
        return fetch(getEndpointCoordinates(coordinate_endpoint, coordinates), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => data);
      });
  }
);

const weatherArray: WeatherType[] = [];

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    WeatherList: [] as WeatherType[],
    errors: [] as string[],
    status: Status.idle,
  },
  reducers: {
    APPEND_WEATHER(state, action) {
      state.WeatherList.push(action.payload);
    },
    // Remove Weather from WeatherList
    DELETE_WEATHER(state, action) {
      const index = action.payload;
      const dumbItem = state.WeatherList[0];
      const item = state.WeatherList[index];
      console.log(dumbItem);
      console.log(item.base);
      return {
        ...state,
        WeatherList: state.WeatherList.filter(
          (item) => item.index !== action.payload
        ),
      };
    },
    // REMOVE: (state, action) => ({
    //   ...state,
    //   WeatherList: state.WeatherList.filter(
    //     (item) => item.id !== action.payload
    //   ),
    // }),
  },
  extraReducers: (builder) => {
    // Async Thunk for Coordinates
    builder.addCase(addWeather.pending, (state) => {
      state.status = Status.loading;
    });
    builder.addCase(addWeather.fulfilled, (state, action) => {
      let i: number = 1;
      state.status = Status.success;
      state.WeatherList.push(action.payload);

      i++;
    });
    builder.addCase(addWeather.rejected, (state, action) => {
      state.status = Status.failed;
      console.log(action.error.message);
      state.errors.push(action.error.message ?? 'Unknown Error');
    });
  },
});

export const { REMOVE, APPEND_WEATHER, DELETE_WEATHER } = weatherSlice.actions;
export const selectWeather = (state: RootState) => state.weatherList;
export const selectZip = (state: RootState) => state.weatherList;
export default weatherSlice.reducer;
