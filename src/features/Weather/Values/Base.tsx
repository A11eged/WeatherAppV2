import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { useWeatherContext } from '../../../context';
import { selectWeather } from '../WeatherSlice';

export const Base = () => {
  const { value } = useWeatherContext();
  const weatherSelector = useAppSelector(selectWeather);
  const base = weatherSelector.base;
  return (
    <div>
      <div className="clouds">{base ? base : 'base: ' + value.base}</div>
    </div>
  );
};
