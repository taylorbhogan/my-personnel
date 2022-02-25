const ButtonEmployeeEdit = ({setIsEditable}) => {
  return (
    <button
    onClick={() => setIsEditable(true)}
    className="border-2 rounded-lg px-3 py-1 border-sky-500 hover:bg-sky-500 hover:text-white">
    edit
  </button>
  )
}

export default ButtonEmployeeEdit;
