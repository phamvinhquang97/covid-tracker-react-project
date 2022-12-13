import React, {useState} from "react";
import './App.css';
import {MenuItem, FormControl, Select} from '@mui/material/';


function App() {
  const [countries, setCountries] = useState(["USA", "UK", "INDIAN"]);


  // STATE : how to write a variable in the REACT 
  return (
    <div className="App">
      <h1>COVID-19 TRACKER</h1>
      <div className="app_header">
      <FormControl className="app_dropdown">
        <Select variant="outlined" value= "abc">
          {/* Loop througt all the countries and show a drop down list of the options */}
          {
            countries.map(country => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
        </Select>
      </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field */}
      
      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}

      {/* Table */}
      {/* Grap */}

      {/* Maps */}
    </div>
  );
}

export default App;
