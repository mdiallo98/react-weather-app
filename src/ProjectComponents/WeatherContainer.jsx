import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Weather from './Weather';
function WeatherContainer() {
  const [weather, Getweather] = useState();
  const [searchData, SetSearch] = useState('');
  const apikey = '0e70b0ad034bbdb765793eff6eec2313';
  const workingKey =
    'http://api.weatherapi.com/v1/current.json?key=28ca387252884dfbbf7102312221502&q=New York &aqi=no';

  useEffect(() => {
    fetch(
      `  http://api.weatherapi.com/v1/current.json?key=28ca387252884dfbbf7102312221502&q=New York &aqi=no
        `
    )
      .then((response) => response.json())
      .then((data) => {
        Getweather(data);
        console.log(data, 'mydata');
      });
  }, []);
  return (
    <div>
      <Weather
        weather={weather}
        searchData={searchData}
        SetSearch={SetSearch}
      />
    </div>
  );
}

export default WeatherContainer;
