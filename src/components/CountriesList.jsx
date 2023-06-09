import React from 'react';

function CountriesList(props) {
  console.log(props.countries);
  const mapList = props.countries.map((country, index) => {
    const countryCode = country.alpha2Code.toLowerCase()
    return (
      <div key={index}>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`}
          alt=""
        />
        <a href={country.alpha3Code}>
          {country.alpha2Code} {country.name.common}
        </a>
      </div>
    );
  });
  return <div>{mapList}</div>;
}

export default CountriesList;
