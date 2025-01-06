import React, { useState } from "react";

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  validate,
  className,
  type = "text",
  required = false,
}) => {
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (validate) {
      const validationError = validate(name, value);
      setError(validationError);
    }

    onChange(e);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={className}
        required={required}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default InputField;
