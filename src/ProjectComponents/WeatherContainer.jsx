import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Weather from './Weather';
function WeatherContainer() {
  const [weather, Getweather] = useState();
  const [searchData, SetSearch] = useState('');
  const apikey = '0e70b0ad034bbdb765793eff6eec2313';
  const CorsBypass_Url = 'https://cors-anywhere.herokuapp.com/corsdemo';
  const workingKey = 'https://www.metaweather.com/api/location/search/?query=';
  const hold = `${CorsBypass_Url}${workingKey}${searchData}`;
  useEffect(() => {
    fetch(
      `${CorsBypass_Url}https://www.metaweather.com/api/location/search/?query=san`
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
