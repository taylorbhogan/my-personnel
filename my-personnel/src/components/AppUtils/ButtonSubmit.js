const ButtonSubmit = ({ text, width, space }) => {
  const submitButton = (
    <button
      className={`${width} border-2 rounded-lg px-3 py-1 border-sky-500 hover:bg-sky-500 hover:text-white`}
      type="submit"
    >
      {text}
    </button>
  );

  if (space) {
    return <div className="flex justify-center my-6">{submitButton}</div>;
  } else {
    return submitButton;
  }
};

export default ButtonSubmit;
