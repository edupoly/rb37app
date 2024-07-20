import logo from './logo.svg';
import './App.css';
import Child from './Child';

function App() {
  return (
    <div className='border border-2 m-2 p-2'>
      <h1>India</h1>
      <Child name="praveen">gubbala</Child>
    </div>
  );
}

export default App;
