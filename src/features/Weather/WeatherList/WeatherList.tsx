import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectWeather } from '../WeatherSlice';
import { ListItem } from './ListItem';

export const WeatherList = () => {
  const weatherSelector = useAppSelector(selectWeather);
  const weatherWithoutContext = weatherSelector.WeatherList.slice(1);

  return (
    <div>
      <div className="WeatherList">
        <h1>Cities:</h1>
        {weatherWithoutContext.map((weatherWithoutContext) => (
          <ListItem
            key={weatherWithoutContext.index}
            weather={weatherWithoutContext}
          />
        ))}
      </div>
    </div>
  );
};
