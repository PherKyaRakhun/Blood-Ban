const InputType = ({
  name,
  value,
  inputType,
  onChange,
  labelText,
  lablefor,
}) => {
  return (
    <>
      <div className="mb-1">
        <label htmlFor={lablefor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
