import logo from './logo.svg';
import './App.css';
import { UserContext } from './UserContext';
import A from './A';

function App() {
  return (
    <UserContext.Provider value={{name:'praveen gubbala',age:41}}>
      <div className="border border-2 border-danger p-2 m-2">
        <h1>App Component</h1>
        <A></A>
      </div>
    </UserContext.Provider>
  );
}

export default App;
