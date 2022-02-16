import React from 'react';

function Weather({ weather, SetSearch, searchData }) {
  console.log(weather, 'this is the data');

  const getLocation = (event) => {
    SetSearch(event.target.value);
  };
  const ResetInput = () => {
    searchData('');
  };

  return (
    <div>
      <input type="text" value={searchData} onChange={getLocation()} />
      <button>Search</button>
    </div>
  );
}

export default Weather;
