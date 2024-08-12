
import { Outlet } from 'react-router-dom';
import './App.css';
import Counter from './features/counter/Counter';
import Countries from './features/countries/Countries';
import Posts from './features/posts/Posts';
import Todolist from './features/todolist/Todolist';

function App() {
  console.log("App Rendered")
  return (
    <div className='border border-success p-2 m-2'>
      <h1>APP</h1>
      <Outlet></Outlet>
      {/* <Countries></Countries> */}
      {/* <Counter></Counter>
      <Todolist></Todolist> */}
    </div>
  );
}

export default App;
