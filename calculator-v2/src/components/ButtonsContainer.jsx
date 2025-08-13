import styles from "./ButtonsContainer.module.css"

function ButtonsContainer({ buttonInfo }) {
  return <div className={styles.buttonsContainer}>
    {buttonInfo.map((items) => (
      <button className={styles.button}>{items}</button>
    ))}
  </div>
}

export default ButtonsContainer;