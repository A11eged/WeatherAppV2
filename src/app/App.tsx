import { LocationForm } from '../features/Location/LocationForm';
import { Weather } from '../features/Weather/Weather';

function App() {
  // const zip = useAppSelector(selectZip);
  return (
    <div className="App">
      <header className="App-header" />

      {/* Some Search for Location */}
      {/* Location Form Accepts Location from User, Updates Input to State*/}
      <LocationForm />
      {/* Use Inputed from Location Form to Fetch */}
      <Weather />
      {/* Display Weather Data */}
    </div>
  );
}

export default App;
