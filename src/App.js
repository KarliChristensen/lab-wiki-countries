import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
const countries = require('./countries.json');

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} props={countries}/>} />
        <Route path="/country/:id" element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}
export default App;
