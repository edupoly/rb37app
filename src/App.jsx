
import './App.css';
import Counter from './features/counter/Counter';
import Countries from './features/countries/Countries';
import Todolist from './features/todolist/Todolist';

function App() {
  console.log("App Rendered")
  return (
    <div className='border border-success p-2 m-2'>
      <h1>APP</h1>
      <Countries></Countries>
      {/* <Counter></Counter>
      <Todolist></Todolist> */}
    </div>
  );
}

export default App;
