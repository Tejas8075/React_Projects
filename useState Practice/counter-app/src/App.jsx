import { useState } from "react";
import Increase from "./components/Increase.jsx"
import Decrease from "./components/Decrease.jsx";
import Display from "./components/Display.jsx";


function App() {

  let [count, setCount] = useState(0);

  const onClickAdd = () => {
    // console.log("+ clicked");
    setCount(prev => prev + 1);
  }

  const onClickMinus = () => {
    // console.log("-clicked");
    setCount(count - 1);
  }

  // const increaseCount = () => {
  //   setCount(count + 1);
  // }

  // const decreaseCount = () => {
  //   setCount(count - 1);
  // }  

  return <>
    <Increase handleAddBtn = {onClickAdd} />
    <Display count = {count} />
    <Decrease handleMinusBtn = {onClickMinus}/>

    {/* <div>The count is: {count}</div>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button> */}
  </>
}

export default App;