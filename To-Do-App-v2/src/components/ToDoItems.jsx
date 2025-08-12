import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems1 }) => {
  return <div className="items-container">
    {todoItems1.map((item) => (
      <ToDoItem todoName={item.pName} todoDate={item.dueDate} />
    ))}
  </div>
}
export default ToDoItems;