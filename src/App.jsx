
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';

function App() {
  console.log("App Rendered")
  return (
    <div className='border border-success p-2 m-2'>
      <h1>APP</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
