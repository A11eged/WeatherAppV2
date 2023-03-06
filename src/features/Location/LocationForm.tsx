import { NumberControlDescription } from 'framer';
import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addWeather, APPEND_WEATHER } from '../Weather/WeatherSlice';
// import { addWeather } from '../Weather/WeatherSliceWork';

export const LocationForm: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const [location, setLocation] = useState('');
  const index: number = 0;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input value={location} onChange={(e) => setLocation(e.target.value)} />
      <button
        onClick={() => {
          // Add weather and push it to weatherlist
          dispatch(APPEND_WEATHER(location));
          setLocation('');
        }}
      >
        Submit
      </button>
    </div>
  );
};
