import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { replaceZip, selectZip } from './LocationSlice';
import { WeatherCard } from '../Weather/WeatherCard';
// Consider making dropdown menu for country selection

export const LocationForm: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const zipSelector = useAppSelector(selectZip);
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
          dispatch(replaceZip(location));
        }}
      >
        Submit
      </button>
      {zipSelector ? <WeatherCard zipcode={zipSelector} /> : null}
    </div>
  );
};
