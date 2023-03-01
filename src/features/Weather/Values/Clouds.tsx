import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { useWeatherContext } from '../../../context';
import { selectWeather } from '../WeatherSlice';

export const Clouds = () => {
  const { value } = useWeatherContext();
  const weatherSelector = useAppSelector(selectWeather);
  const clouds = weatherSelector.clouds.all;
  return (
    <div>
      <div className="clouds">
        {clouds ? clouds : 'Clouds: ' + value.clouds.all}
      </div>
    </div>
  );
};
