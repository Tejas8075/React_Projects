import styles from "../style/AddItem.module.css"
const AddItem = ({ text, date, deleteTask }) => {
  return <>
    <div className="row">
      <div className={`col-4 ${styles.textInput}`}>{text}</div>
      <div className={`col-4 ${styles.textInput}`}>{date}</div>
      <div className="col"><button type="button" className={`btn btn-danger ${styles.textBtn}`} onClick={deleteTask}>Delete</button></div>
    </div>
  </>
}

export default AddItem;