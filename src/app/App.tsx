import { Provider } from 'react-redux';
import { useState } from 'react';
import { WeatherContext } from '../context';
import { useAppSelector } from '../app/hooks';

import { LocationForm } from '../features/Location/LocationForm';
import { initialWeather, Status, WeatherType } from '../app/models';
import { Weather } from '../features/Weather/Weather';
import { selectZip } from '../features/Weather/WeatherSlice';

function App() {
  const [value, setValue] = useState<WeatherType>(initialWeather);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>(Status.idle);
  return (
    <WeatherContext.Provider
      value={{ value, setValue, status, setStatus, errors, setErrors }}
    >
      {/* Some Search for Location */}
      {/* Location Form Accepts Location from User, Updates Input to State*/}
      <LocationForm />
      {/* Use Inputed from Location Form to Fetch */}
      {<Weather />}
      {/* Display Weather Data */}
    </WeatherContext.Provider>
  );
}

export default App;
