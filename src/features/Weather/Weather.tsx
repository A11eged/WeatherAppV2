import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addWeather, selectZip, selectWeather } from './WeatherSlice';
import { useWeatherContext } from '../../context';

// Import Components
import { Clouds } from './Values/Clouds';
import { Base } from './Values/Base';

// Container for Weather
export const Weather = () => {
  return (
    <div>
      <div className="weather">
        <Base />
        <Clouds />
      </div>
    </div>
  );
};
