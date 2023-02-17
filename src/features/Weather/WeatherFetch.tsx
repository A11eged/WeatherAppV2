import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { key } from '../../app/constants';

export const zipcode = '02122';
export const plain_endpoint = `http://api.openweathermap.org/geo/1.0/zip?zip=zipcode,US&appid=key`;
export const zipEndpoint = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${key}`;
export const coordinateEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=key`;

export const getEndpointZipcode = (endpoint: string, zipcode: string) => {
  let newPoint = endpoint.replace('zipcode', zipcode);
  return newPoint.replace('key', key);
};

export const getEndpointCoordinates = (
  endpoint: string,
  coordinates: string[]
) => {
  let newPoint = endpoint.replace('latitude', coordinates[0]);
  newPoint = newPoint.replace('longitude', coordinates[1]);
  return newPoint.replace('key', key);
};

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
export const getDataOneMove = <T extends unknown>(url: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const dataFetch = async () => {
      const response = await (
        await fetch(getEndpointZipcode(plain_endpoint, zipcode))
      ).json();
      const coordinates = [response.lat, response.lon];
      const weatherData = await (
        await fetch(getEndpointCoordinates(coordinateEndpoint, coordinates))
      ).json();
      // console.log(weatherData);
      setData(weatherData);
    };
    if (!data) {
      dataFetch();
    }
  });

  return { data: data };
};

// export const getWeatherData2 = () => {
//   const [weather, setWeather] = useState();

//   useEffect(() => {
//     const getWeatherData = () => {
//       fetch('/weather/data')
//         .catch((err) => {
//           throw new TypeError('Errors getting the weather', err);
//         })
//         .then((response) => {
//           if (response.data && response.success) {
//             setWeather(response.data);
//           }
//         });
//     };

//     getWeatherData();
//   }, []);
// };
