import * as React from 'react';
import { motion } from 'framer-motion';

import { useAppSelector } from '../../../app/hooks';
import { useWeatherContext } from '../../../context';
import { selectWeather } from '../WeatherSlice';

export const Example = () => (
  <motion.div
    className="container"
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
    }}
  />
);

export const Clouds = () => {
  // Use Framer to make clouds move at the speed of wind
  const { value } = useWeatherContext();
  const weatherSelector = useAppSelector(selectWeather);
  const clouds = weatherSelector[0].clouds.all;
  const wind = weatherSelector[0].wind.speed;

  return (
    <div>
      <div className="clouds">
        {clouds ? clouds : 'Clouds: ' + value.clouds.all}
      </div>
    </div>
  );
};
