import "../App.css"

const Input = ({handleAddBtn, handleText, handleDate}) => {


  return <>
    <div className="inputContainer">
      <input onChange={handleText} type="text" placeholder="Enter products here" />
      <input onChange={handleDate} type="date" />
      <button onClick={handleAddBtn}>Add</button>
    </div>
  </>
}

export default Input;