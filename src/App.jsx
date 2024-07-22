import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

function reducer(state,action){
  if(action.type==='INC'){
    return {...state,count:state.count+1}
  }
  if(action.type==='DEC'){
    return {...state,count:state.count-1}
  }
  if(action.type==='UPDATE_NEW_TODO'){
    return {...state,newtodo:action.payload}
  }
  if(action.type==='ADD_TODO'){
    return {...state,todolist:[...state.todolist,state.newtodo]}
  }
}

function App() {
  var [state,dispatch] = useReducer(reducer,{newtodo:'',count:0,todolist:['get house','pay bills']})

  return (
    <div className="App">
      <h1>Count:{state.count}</h1>
      <button onClick={()=>{dispatch({type:"INC"})}}>Increment</button>
      <br />
      <br />
      <input type="text" onChange={(e)=>{dispatch({type:'UPDATE_NEW_TODO',payload:e.target.value})}}/>
      <button onClick={()=>{dispatch({type:"ADD_TODO"})}}>Add Todo</button>
      <ul>
        {
          state.todolist.map((t)=>{
            return <li>{t}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
