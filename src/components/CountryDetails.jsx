import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails({countries}) {
  const { id } = useParams();
  const targetCountry = countries.find((country) => country.alpha3Code === id);
  const countryMap = `https://flagpedia.net/data/flags/icon/72x54/${targetCountry.alpha2Code.toLowerCase()}.png`;

  return (
    <div>
      <h1>Name: {targetCountry.name.common}</h1>
      <h1>Capital: {targetCountry.capital}</h1>
    </div>
  );
}

export default CountryDetails;
