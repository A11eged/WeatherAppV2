import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { WeatherType } from '../../app/models';
import { addWeather } from './WeatherSlice';

export const Weather = () => {
  console.log(addWeather());
  return (
    <div>
      <button>Test</button>
    </div>
  );
};

// import {
//   setBase,
//   setClouds,
//   setCod,
//   setCoord,
//   setName,
//   setDt,
//   setId,
//   setMain,
//   setSys,
//   setTimezone,
//   setVisibility,
//   setWind,
//   selectWeather,
// } from './WeatherSlice';
// import {
//   getEndpointZipcode,
//   getDataOneMove,
//   plain_endpoint,
// } from './WeatherFetch';
// import { selectName, selectZip } from '../Location/LocationSlice';
// import { WeatherCard } from './WeatherCard';

// export const Weather = () => {
//   const dispatch = useAppDispatch();
//   const weatherSelector = useAppSelector(selectWeather);
//   const zipcodeSelector = useAppSelector(selectZip);
//   const { data } = getDataOneMove<WeatherType>(
//     getEndpointZipcode(plain_endpoint, zipcodeSelector)
//   );
//   const dispatchWeather = () => {
//     dispatch(setBase(data ? data.base : 'none'));
//     dispatch(setClouds(data ? data.clouds.all : 0));
//     dispatch(setCod(data ? data.cod : 0));
//     dispatch(setCoord(data ? data.coord : { lon: 0, lat: 0 }));
//     dispatch(setName(data ? data.name : 'none'));
//     dispatch(setDt(data ? data.dt : ''));
//     dispatch(setId(data ? data.id : 0));
//     dispatch(
//       setMain(
//         data
//           ? data.main
//           : {
//               temp: 0,
//               feels_like: 0,
//               temp_min: 0,
//               temp_max: 0,
//               pressure: 0,
//               humidity: 0,
//             }
//       )
//     );
//     dispatch(
//       setSys(
//         data
//           ? data.sys
//           : { type: 0, id: 0, country: 'none', sunrise: 0, sunset: 0 }
//       )
//     );
//     dispatch(setTimezone(data ? data.timezone : 0));
//     dispatch(setVisibility(data ? data.visibility : 0));
//     dispatch(setWind(data ? data.wind.speed : 0));
//   };
//   return (
//     <div>
//       <WeatherCard />
//     </div>
//   );
// };
