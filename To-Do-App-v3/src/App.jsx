import { useState } from "react";
import AddItem from "./components/AddItem";
import Input from "./components/Input";
import Title from "./components/Title";

function App() {

  let titleText = "Todo App";

  let [addText, setAddText] = useState('');
  let [addDate, setAddDate] = useState('');
  let [items, setItems] = useState([]);

  let onChangeInputText = (event) => {
    setAddText(event.target.value);
  }

  let onChangeInputDate = (event) => {
    setAddDate(event.target.value);
  }

  let onClickAddBtn = () => {

    if (!addText.trim() || !addDate) return; // Prevent adding empty tasks

    const newItem = { text: addText, date: addDate };
    setItems([...items, newItem]);
    setAddText("")
    setAddDate("");
  }

  let onClickDeleteBtn = (index) => {
    setItems(items.filter((_, i) => i !== index));
  }

  return <>
    <Title titleText={titleText} />
    <Input handleInputText={onChangeInputText} handleInputDate={onChangeInputDate} handleAddBtn={onClickAddBtn} textValue={addText} dateValue={addDate} />
    {items.map((item, index) => (
      <AddItem key={index} text={item.text} date={item.date} deleteTask={() => onClickDeleteBtn(index)} />
    ))}
  </>
}

export default App;