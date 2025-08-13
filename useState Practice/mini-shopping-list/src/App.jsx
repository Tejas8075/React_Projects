import Heading from "./components/Heading";
import Input from "./components/Input";
import OutputList from "./components/OutputList";

function App() {
  let title = "Mini Shopping List"

  return <>
    <Heading title = {title} />
    <Input />
    <OutputList />
  </>
}

export default App;