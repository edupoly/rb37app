import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
function App() {
  var [c,setC] = React.useState(0)
  var t = React.useRef()
  var [isTimerActive,setIsTimerActive] = React.useState(false)
  function start(){
    setIsTimerActive(true)
    t.current = setInterval(()=>{
      setC((prv)=>{return prv+1})
    },300)
  }
  function stop(){
    setIsTimerActive(false)
    setC(0)
    clearInterval(t.current)
  }
  function pause(){
    setIsTimerActive(false)
    clearInterval(t.current)
  }
  useEffect(()=>{
    return ()=>{
      clearInterval(t.current)
    }
  },[])
  return (
    <div className="text-center">
      <h1>Timer:{c}</h1>
      {!isTimerActive && <button onClick={start}>Start</button>}
      {isTimerActive && <button onClick={pause}>Pause</button>}
      
      
      <button onClick={stop}>Stop</button>
      <h3>sdjkh</h3>
    </div>
  );
}

export default App;
