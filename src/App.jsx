import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import { useEffect, useState } from 'react';

function App() {
 
  return (
    <div className="border border-danger p-2 m-2">
      <Todolist></Todolist>
    </div>
  );
}

export default App;
