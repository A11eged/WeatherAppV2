import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addWeatherCoordinates } from '../Weather/WeatherSlice';

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
          dispatch(addWeatherCoordinates(location));
        }}
      >
        Submit
      </button>
    </div>
  );
};
