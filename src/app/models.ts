export enum Status {
  idle = 'idle',
  loading = 'loading',
  failed = 'failed',
  success = 'success',
}

export type RequestState = {
  // weatherArray: WeatherType[];
  // addWeatherArray: (v: WeatherType) => void;
  // REQID: number[];
  // addREQID: (v: number) => void;
  value: WeatherType;
  setValue: (v: WeatherType) => void;
  errors: string[];
  setErrors: (e: string[]) => void;
  status: Status;
  setStatus: (s: Status) => void;
};

export type WeatherList = WeatherType[];
export interface WeatherType {
  // index will be used to index and delete
  index: number;
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  name: string;
  dt: string;
  id: number;
  zipcode: string;
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
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  wind: { speed: number };
}

export const initialWeather = {
  index: 0,
  base: '',
  clouds: { all: 0 },
  cod: 0,
  coord: { lon: 0, lat: 0 },
  name: '',
  zipcode: '',
  dt: '',
  id: 0,
  main: {
    feels_like: 0,
    temp: 0,
    humidity: 0,
    temp_max: 0,
    temp_min: 0,
    pressure: 0,
  },
  sys: {
    country: '',
    sunrise: 0,
    sunset: 0,
    type: 0,
  },
  timezone: 0,
  visibility: 0,
  wind: { speed: 0 },
};
