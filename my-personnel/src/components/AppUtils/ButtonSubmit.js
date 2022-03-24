const ButtonSubmit = ({ text, width }) => {
  return (
    <button
      className={` ${width} border-2 rounded-lg px-3 py-1 border-sky-500 hover:bg-sky-500 hover:text-white`}
      type="submit"
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
