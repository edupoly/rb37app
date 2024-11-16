import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import { useEffect, useState } from 'react';
import {app} from './configuration';
import { getDatabase,ref,onValue } from 'firebase/database';
function App() {
 useEffect(()=>{
  var database = getDatabase(app);
  const collectionRef = ref(database, "products");
 // Function to fetch data from the database
 const fetchData = () => {
  // Listen for changes in the collection
  onValue(collectionRef, (snapshot) => {
    const dataItem = snapshot.val();

    // Check if dataItem exists
    if (dataItem) {
      // Convert the object values into an array
      const displayItem = Object.values(dataItem);
      console.log("dsdf",displayItem);
    }
  });
};

// Fetch data when the component mounts
fetchData();

 },[])
  return (
    <div className="text-center p-2 m-2 d-flex justify-content-center">
      <Todolist></Todolist>
    </div>
  );
}

export default App;
