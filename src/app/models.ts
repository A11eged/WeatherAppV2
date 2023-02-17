export interface WeatherFetch {
  data: WeatherType;
  loading: 'idle ' | 'pending ' | 'fulfilled ' | 'rejected';
  error: [];
}

export interface WeatherType {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  name: string;
  dt: string;
  id: number;
  main: {
    feels_like: number;
    temp: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
  };
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  wind: { speed: number };
}

export interface LocationType {
  name: string;
  country: string;
  lat: string;
  lon: string;
  zipcode: string;
}
