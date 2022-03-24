const Input = ({
  type = 'text',
  value,
  name,
  onChange,
  required = false,
  autoFocus = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={name}
      aria-label={name}
      value={value}
      onChange={onChange}
      required={required}
      autoFocus={autoFocus}
      className="m-4 py-1 px-2 leading-10 bg-sky-100"
    ></input>
  );
};

export default Input;
