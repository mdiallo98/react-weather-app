import React from 'react';
import { Button, Typography } from '@mui/material/';

function Weather({ weather, SetSearch, searchData }) {
  console.log(weather, 'this is the data');

  const getLocation = (event) => {
    SetSearch(event.target.value);
    console.log(searchData);
  };
  const ResetInput = () => {
    searchData('');
  };

  return (
    <div>
      <Typography variant="h1">Weather Center</Typography>
      <form action="">
        <input type="text" value={searchData} onChange={getLocation} />
        <Button>Search</Button>
      </form>
    </div>
  );
}

export default Weather;
