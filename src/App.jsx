
import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
  var [todos,setTodos] = React.useState(["bat","ball",'Keeper'])
  var [countries,setCountries] = React.useState([])

  
  

  useEffect(()=>{
    fetch("https://restcountries.com/v3/all")
    .then((res)=>{return res.json()})
    .then((data)=>{setCountries(data)})
  },[]);

  return (
    <div>
      <div>
        {
          countries.map((c,i)=>{
            return <div key={i}>{c.name.common}</div>
          })
        }
      </div>
    </div>
  );
}

export default App;
