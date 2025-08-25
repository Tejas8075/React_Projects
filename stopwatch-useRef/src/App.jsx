import { useRef, useState } from "react";
import "./App.css"

function App() {

  const [time, setTime] = useState(0);

  const hrs = useRef('00');
  const mins = useRef('00');
  const secs = useRef('00');

  const handleStart = () => {
    console.log(secs.current + 1)
    setInterval(() => {
      secs.current += 1;
    }, 1000)
    setInterval(() => {
      mins.current += 1;
    }, 60000)
    setInterval(() => {
      hrs.current += 1;
    }, 3600000)
  }

  const handleStop = () => {
    secs.current
    mins.current
    hrs.current
  }

  const handleReset = () => {
    secs.current = '00'
    mins.current = '00'
    hrs.current = '00'
  }

  return (
    <>
      <div className="container">
        <div className="time-cont">
          <p>{hrs.current}</p>
          <p>:{mins.current}</p>
          <p>:{secs.current}</p>
        </div>
        <div className="btns">
          <button onClick={handleStart}>start</button>
          <button onClick={handleReset}>reset</button>
          <button onClick={handleStop}>stop</button>
        </div>
      </div>
    </>
  )
}

export default App;