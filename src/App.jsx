
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import Todolist from './Todolist';
function App() {
  console.log("App Rendered")
  return (
    <Provider store={store}>
      <div className="border border-2 m-2 p-2">
        <h1>India</h1>

        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
