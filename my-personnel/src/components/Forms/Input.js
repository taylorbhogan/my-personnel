const Input = ({
  type,
  value,
  placeholder,
  ariaLabel,
  onChange,
  required,
  autoFocus = false,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      aria-label={ariaLabel}
      onChange={onChange}
      required={required}
      className="m-4 py-1 px-2 leading-10 bg-sky-100"
      autoFocus={autoFocus}
    ></input>
  );
};

export default Input;
