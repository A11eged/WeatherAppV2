// Unneeded
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocationType } from '../../app/models';
import { RootState } from '../../app/store';

const initialState: LocationType = {
  name: '',
  country: '',
  lat: '',
  lon: '',
  zipcode: '',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState: initialState,
  reducers: {
    setLocation: (state, action) => {
      state.name = action.payload.name;
      state.country = action.payload.country;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.zipcode = action.payload.zipcode;
    },
    replaceName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    replaceZip: (state, action: PayloadAction<string>) => {
      state.zipcode = action.payload;
    },
  },
});
