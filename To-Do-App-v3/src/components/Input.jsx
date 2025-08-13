import styles from "../style/Input.module.css";

const Input = ({handleInputText, handleInputDate, handleAddBtn, textValue}) => {
  return <>
    <div className="row">
      <div className="col-4"><input className={styles.textInput} type="text" placeholder="Enter your task here" onChange={handleInputText} /></div>
      <div className="col-3"><input className={styles.textInput} type="date" onChange={handleInputDate} /></div>
      <div className="col"><button type="button" className={`btn btn-success textBtn ${styles.textBtn}`} onClick={handleAddBtn}>Add</button>
      </div>
    </div>
  </>
}

export default Input;