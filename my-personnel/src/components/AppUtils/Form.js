const Form = ({ children, onSubmit }) => {
  return (
    <form className="flex flex-col md:flex-row gap-2" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
