const Button = ({ onClick, color = "blue", text, options}) => {
  const colorOptions = {
    gray: "border-slate-500 hover:bg-slate-500",
    blue: "border-sky-500 hover:bg-sky-500"
  }


  return (
    <button
    className={`${options} ${colorOptions[color]} border-2 rounded-lg px-3 py-1 hover:text-white`}
    onClick={onClick}
  >
    {text}
  </button>
  )
}

export default Button;
