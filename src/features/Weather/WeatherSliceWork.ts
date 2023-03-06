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
    REQID: [] as number[],
    weather: [initialWeather] as WeatherType[],
    errors: [] as string[],
    status: Status.idle,
  },
  reducers: {
    getWeather(state, action) {
      // First is weather[0]
      console.log(state.weather[0].base);
      console.log(state);
      state.weather = action.payload;
    },
    PREPEND_WEATHER(state, action) {
      return {
        ...state,
        weather: [action.payload, ...state.weather],
      };
    },
    APPEND_WEATHER(state, action) {
      return {
        ...state,
        weather: [...state.weather, action.payload],
      };
    },
    DELETE_WEATHER(state, action) {
      return {
        // Develop
        ...state,
      };
    },

    logWeather(state) {
      state.weather = { ...state.weather };
      console.log(state.weather);
    },
  },
  extraReducers: (builder) => {
    // Async Thunk for Coordinates
    builder.addCase(addWeather.pending, (state) => {
      state.status = Status.loading;
    });
    builder.addCase(addWeather.fulfilled, (state, action) => {
      let i: number = 0;
      state.status = Status.success;
      state.weather.push(action.payload);
      console.log('Success!');
      state.REQID.push(i);
      ++i;
    });
    builder.addCase(addWeather.rejected, (state, action) => {
      state.status = Status.failed;
      console.log(action.error.message);
      state.errors.push(action.error.message ?? 'Unknown Error');
    });
  },
});

export const { logWeather, getWeather } = weatherSlice.actions;
export const selectWeather = (state: RootState) => state.weatherList;
export default weatherSlice.reducer;
