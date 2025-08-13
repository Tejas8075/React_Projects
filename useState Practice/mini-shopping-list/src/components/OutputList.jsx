import "../App.css"

const OutputList = ({ value, handleDeleteBtn }) => {

  return <>
    <div className="container">
      <div className="list">
        <span>{value.text}</span>
        <span>{value.date}</span>
        <button onClick={handleDeleteBtn}>Delete</button>
      </div>
    </div>
  </>
}

export default OutputList;