const Password = ({handleInput, value}) => {

  return <>
    <input onChange={handleInput} value={value} type="text" placeholder="Enter your password" />
  </>
}

export default Password;