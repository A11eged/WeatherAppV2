import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/Weather/WeatherSliceWork';
// import weatherReducer from '../features/Weather/WeatherSlice';
const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
