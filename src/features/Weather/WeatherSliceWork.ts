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
      .then((data) => data);
  }
);

export const addWeatherCoordinates = createAsyncThunk(
  'weather/addWeatherCoordinates',
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

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: [] as WeatherType[],
    id: 0,
    errors: [] as string[],
    status: Status.idle,
  },
  reducers: {
    addWeather(state, action) {
      state.weather[state.id] = action.payload;
      state.id++;
    },
    logWeather(state) {
      state.weather = { ...state.weather };
      console.log(state.weather);
    },
    setName: (state, action: PayloadAction<string>) => {
      state.weather[state.id].name = action.payload;
    },
    setZipcode: (state, action: PayloadAction<string>) => {
      state.weather.zipcode = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Async Thunk for addWeather
    builder.addCase(addWeather.pending, (state) => {
      state.status = Status.loading;
    });
    builder.addCase(addWeather.fulfilled, (state, action) => {
      state.status = Status.success;
      state.weather = action.payload;
      console.log('Success!');
    });
    builder.addCase(addWeather.rejected, (state, action) => {
      state.status = Status.failed;
      console.log(action.error.message);
      state.errors.push(action.error.message ?? 'Unknown Error');
    });
    // Async Thunk for Coordinates
    builder.addCase(addWeatherCoordinates.pending, (state) => {
      state.status = Status.loading;
    });
    builder.addCase(addWeatherCoordinates.fulfilled, (state, action) => {
      state.status = Status.success;
      state.weather = action.payload;
      console.log('Success!');
    });
    builder.addCase(addWeatherCoordinates.rejected, (state, action) => {
      state.status = Status.failed;
      console.log(action.error.message);
      state.errors.push(action.error.message ?? 'Unknown Error');
    });
  },
});

export const { logWeather, initWeather, setZipcode, setName } =
  weatherSlice.actions;
export const selectWeather = (state: RootState) => state.weather.weather;
export const selectZip = (state: RootState) => state.weather.weather.zipcode;
export default weatherSlice.reducer;
