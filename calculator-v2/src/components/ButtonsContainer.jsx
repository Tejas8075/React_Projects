import styles from "./ButtonsContainer.module.css"

function ButtonsContainer({ buttonInfo, onButtonClick }) {
  return <div className={styles.buttonsContainer}>
    {buttonInfo.map((items) => (
      <button className={styles.button} onClick={() => {onButtonClick(items)}}>{items}</button>
    ))}
  </div>
}

export default ButtonsContainer;