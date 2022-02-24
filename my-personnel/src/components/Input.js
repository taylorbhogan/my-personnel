const Input = ({
  type,
  value,
  placeholder,
  ariaLabel,
  onChange,
  required,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      aria-label={ariaLabel}
      onChange={onChange}
      required={required}
    ></input>
  );
};

export default Input;
