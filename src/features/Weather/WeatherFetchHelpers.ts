import { key } from '../../app/constants';

export const zipcode = '02122';
export const plain_endpoint = `http://api.openweathermap.org/geo/1.0/zip?zip=zipcode,US&appid=key`;
export const zip_endpoint = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${key}`;
export const coordinate_endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=key`;

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

export const fetchWeather = (zip: string) => {
  return fetch(getEndpointZipcode(plain_endpoint, zip), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
