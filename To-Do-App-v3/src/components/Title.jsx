import styles from "../style/Title.module.css"

const Title = ({ titleText }) => {
  return <>
    <h1 className={styles.heading}>{titleText}</h1>
  </>
}

export default Title;