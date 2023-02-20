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
      setData(weatherData);
    };
    if (!data) {
      dataFetch();
    }
  });

  return { data: data };
};
