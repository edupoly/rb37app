import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Aboutus from './Aboutus';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="m-2 p-2 border border-danger">
      <h1>India</h1>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/aboutus" state={{"likes":"chicken"}}>Aboutus</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
