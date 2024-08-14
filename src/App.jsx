
import './App.css';
import React,{useEffect, useRef} from 'react';

function App() {
  var [c,setC] = React.useState(0);
  var [active,setActive] = React.useState(false)
  var trf = useRef();
  useEffect(()=>{
    return ()=>{
      clearInterval(trf.current);
    }
  },[])
  function pause(){
    console.log('pause timer called')
    setActive(pv=>!pv);
    clearInterval(trf.current);
  }
  function start(){
    console.log('start timer called')
    clearInterval(trf.current);
    trf.current = setInterval(()=>{
      console.log("setInterval Called")
      setC((prev)=>{return prev+1})
    },100)
    setActive(pv=>!pv);
  }
  function reset(){
    console.log('reset timer called')
    clearInterval(trf.current);
    setC(0)
    setActive(()=>false);
  }
  return (
    <>
      
    <div className='d-flex flex-column align-items-center border border-2 vh-100 py-5'>
    <h1 className='btn btn-primary'><u>We learn the importance of following:</u></h1>
    <h3>setter function call</h3>
    <h3>Using refs for controlling timers</h3>
    <h3>Clearing Intervals</h3>
      <div className="border border-2 m-2 p-2 w-50 text-center">
        <h1>Counter:{c}</h1>
        {
         (c===0 || !active) && <button onClick={()=>{start()}} class="btn btn-success p-2 m-2">Start<i class="bi bi-play"></i></button>
        }
        {
          (active) && <button onClick={()=>{pause()}} class="btn btn-info p-2 m-2">Pause<i class="bi bi-pause"></i></button>
        }
        <button onClick={()=>{reset()}} class="btn btn-danger p-2 m-2">Reset<i class="bi bi-arrow-clockwise"></i></button>

      </div>
    </div>
    </>

  );
}

export default App;
