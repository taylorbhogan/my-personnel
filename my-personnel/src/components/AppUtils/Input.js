const Input = ({
  type = "text",
  value,
  name,
  onChange,
  labelOverrideText = null,
  showLabel = false,
  required = false,
  autoFocus = false,
}) => {
  const inputClassName = "m-4 py-1 px-2 leading-10 bg-sky-100"

  if (showLabel) {
    return (
      <label>
        <span>{labelOverrideText ?? `${name}:`}</span>
        <input
          type={type}
          name={name}
          placeholder={name}
          aria-label={name}
          value={value}
          onChange={onChange}
          required={required}
          autoFocus={autoFocus}
          className={inputClassName}
        ></input>
      </label>
    );
  } else {
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
        className={inputClassName}
      ></input>
    );
  }
};

export default Input;
