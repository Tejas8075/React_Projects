import Password from "./components/Password.jsx"
import Button from "./components/Button.jsx";
import { useState } from "react";

function App() {

  const [button, setButton] = useState("Hide");
  const [pwd, setPwd] = useState("");

  const onClickPwd = () => {
    console.log("clicked");
    if (button === "Hide") {
      let result = "Show";
      setButton(result);
    }
    else {
      let result = "Hide";
      setButton(result);
    }
  }

  const onChangeInput = (event) => {
    setPwd(event.target.value); // store the original pwd
  }

  // first store the pwd then only we can convert it to *
  const displayValue = button === "Hide" ? pwd : "*".repeat(pwd.length);

  return <>
    <Password handleInput={onChangeInput} value = {displayValue}/>
    <Button handleOnClick={onClickPwd} button={button} />
  </>
}

export default App;