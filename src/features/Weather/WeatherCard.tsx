import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectWeather } from './WeatherSlice';
import { selectZip } from '../Location/LocationSlice';
import { WeatherType } from '../../app/models';

export const WeatherCard = () => {
  const dispatch = useAppDispatch();
  const weatherSelector = useAppSelector(selectWeather);

  return (
    <div>
      {weatherSelector.base}
      Test
      {/* {clicked ? (
        <button onClick={clickHandler}>Click for Weather in {zipcode} </button>
      ) : (
        <h1>Weather is {weatherSelector.main.temp}</h1>
      )} */}
    </div>
  );
};
