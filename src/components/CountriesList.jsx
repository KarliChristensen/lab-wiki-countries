import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  const mapList = countries.map((country, index) => {
    const countryCode = country.alpha2Code.toLowerCase();
    const countryMap = `https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`;

    return (
      <div key={index}>
        <Link to={`/${country.alpha3Code}`} key={index}>
          <img className="codeImg" src={countryMap} alt="" />
          <h3>{country.name.common}</h3>
        </Link>
      </div>
    );
  });
  return <div>{mapList}</div>;
}

export default CountriesList;
