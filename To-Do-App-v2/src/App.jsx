import AddToDO from "./components/AddToDo";
import AppName from "./components/AppName";
import './App.css'
import ToDoItems from "./components/ToDoItems";

function App() {

  const toDoItems = [
    {
      pName: 'Buy Milk',
      dueDate: '04/10/2023'
    },
    {
      pName: 'Go To College',
      dueDate: '04/10/2023'
    }
  ]

  return <center className="todo-container">
    <AppName />
    <AddToDO />
    <ToDoItems todoItems1 = {toDoItems} />
  </center>
}

export default App;