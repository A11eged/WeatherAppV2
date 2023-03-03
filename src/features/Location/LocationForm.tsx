import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
// import { addWeather } from '../Weather/WeatherSlice';
import { addWeather } from '../Weather/WeatherSliceWork';

export const LocationForm: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const [location, setLocation] = useState('');

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
          dispatch(addWeather(location));
        }}
      >
        Submit
      </button>
    </div>
  );
};
