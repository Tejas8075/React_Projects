const Button = ({handleOnClick, button}) => {

  return <>
    <button onClick={handleOnClick}>{button}</button>
  </>
}

export default Button;