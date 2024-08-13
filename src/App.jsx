import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import { useEffect, useState } from 'react';

function App() {
 
  return (
    <div className="text-center p-2 m-2 d-flex justify-content-center">
      <Todolist></Todolist>
    </div>
  );
}

export default App;
