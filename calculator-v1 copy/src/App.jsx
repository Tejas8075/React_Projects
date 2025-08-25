import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {

  // Declaring the state
  let [calVal, setCalVal] = useState('');

  const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '/', '=', '9', '0', '.'];

  const onButtonClick = (buttonName) => {
    console.log(buttonName);
    if(buttonName === "C"){
      setCalVal("");
    }
    else if(buttonName === "="){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      let newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue)
    }
  }

  return <div className={styles.calculator} >
    <Display displayValue={calVal} />
    <ButtonsContainer buttonInfo={buttons} onButtonClick={onButtonClick} />
  </div>
}

export default App;