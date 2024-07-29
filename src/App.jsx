import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  var [countries,setCountries]=useState([]);
  axios.get("https://restcountries.com/v3/all").then(function(res){
    setCountries([...res.data])
  })
  return (
    <div className="App">
      <h1>India</h1>
      <ul>
        {
          countries?.map((c)=>{
            return <li>{c.name.common}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
