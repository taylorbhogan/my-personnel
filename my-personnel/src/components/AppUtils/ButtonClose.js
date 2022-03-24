const ButtonClose = ({ setFunction }) => {
  return (
    <button
      className="border-2 rounded-lg px-3 py-1 mb-3 border-slate-500 hover:bg-slate-500 hover:text-white"
      type="button"
      onClick={() => setFunction(false)}
    >
      Close
    </button>
  );
};

export default ButtonClose;
