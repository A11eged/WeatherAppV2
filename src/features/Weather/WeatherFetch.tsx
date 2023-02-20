import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { key } from '../../app/constants';

export const getData = <T extends unknown>(url: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const dataFetch = async () => {
      const response = await (await fetch(url)).json();
      setData(response);
    };
    if (!data) {
      dataFetch();
    }
  }, [url]);

  return { data: data };
};

export const getDataWithCoordinates = <T extends unknown>(
  url: string,
  coordinates: string[]
) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const dataFetch = async () => {
      const response = await (
        await fetch(getEndpointCoordinates(coordinateEndpoint, coordinates))
      ).json();

      setData(response);
    };
    if (!data) {
      dataFetch();
    }
  }, [url]);

  return { data: data };
};

// Use zipcode to get coordinates and then use coordinates to get weather data
// export const getDataOneMove = <T extends unknown>(url: string) => {
//   const [data, setData] = useState<T>();

//   useEffect(() => {
//     const dataFetch = async () => {
//       const response = await (
//         await fetch(getEndpointZipcode(plain_endpoint, zipcode))
//       ).json();
//       const coordinates = [response.lat, response.lon];
//       const weatherData = await (
//         await fetch(getEndpointCoordinates(coordinateEndpoint, coordinates))
//       ).json();
//       setData(weatherData);
//     };
//     if (!data) {
//       dataFetch();
//     }
//   });

//   return { data: data };
// };
