const Button = ({ onClick, color, text, options}) => {
  return (
    <button
    className={`${options} border-2 rounded-lg px-3 py-1 border-sky-500 hover:bg-sky-500 hover:text-white`}
    onClick={onClick}
  >
    {text}
  </button>
  )
}

export default Button;
