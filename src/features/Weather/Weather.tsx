import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectName, selectZip } from '../Location/LocationSlice';
import { WeatherCard } from './WeatherCard';

export const Weather = () => {
  // const [weather, setWeather] = useState<Weather>();
  const zipcode = useAppSelector(selectZip);
  if (!zipcode) {
    return <div>Enter a Zipcode</div>;
  }

  return <div>{/* <WeatherCard zipcode={zipcode} /> */}</div>;
};
