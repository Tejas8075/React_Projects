import { useState } from 'react'

import Heading from "./components/Heading";
import Input from "./components/Input";
import OutputList from "./components/OutputList";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let title = "Mini Shopping List"

  // let data = [

  //   {
  //     text: "Buy Milk",
  //     date: "25/08/2025"
  //   },

  //   {
  //     text: "Buy Milk",
  //     date: "25/08/2025"
  //   }

  // ]

  const [data, setData] = useState([]);
  const [addText, setAddText] = useState('')
  const [addDate, setAddDate] = useState('')

  const onChangeText = (event) => {
    setAddText(event.target.value);
  }

  const onChangeDate = (event) => {
    setAddDate(event.target.value);
  }

  const onClickAdd = () => {
    let newItem = {
      text: addText,
      date: addDate
    }

    setData([...data, newItem])

    // console.log("Your data is: " + data)
  }

  const onClickDelete = (index) => {
    setData(data.filter((item, i) => i !== index));
  }

  return <>
    <Heading title={title} />
    <Input handleAddBtn={onClickAdd} handleText={onChangeText} handleDate={onChangeDate} />
    {
      !addText.trim() || !addDate ? <ErrorMessage /> : data.map((item, index) => (
        <OutputList key={index} value={item} handleDeleteBtn={() => onClickDelete(index)} />
      ))
    }
  </>
}

export default App;