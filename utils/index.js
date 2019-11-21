import React from "react";

/**
 *labelInputCreator: output a label and an input determined by parameters
 * @param {String} fieldName label name to show
 * @param {Function} setFn function: setFunction for controlled input use
 */

export const labelInputCreator = (fieldName, setFn) => {
  const inputStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box"
  };

  const fieldType = labelName => {
    if (labelName === "Password") return "password";
    else return "text";
  };

  return (
    <label>
      {fieldName}:{" "}
      <input
        onChange={e => {
          setFn(e.target.value);
        }}
        type={fieldType(fieldName)}
        style={inputStyle}
      />
      <br />
      <br />
    </label>
  );
};
