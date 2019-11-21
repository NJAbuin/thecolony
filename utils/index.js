import React from "react";

/**
 *labelInputCreator: output a label and an input determined by parameters
 * @param {String} fieldName label name to show
 * @param {Function} setFn setFunction for controlled input use
 * @returns {Any} returns JSX with styled label and form, using setter function passed
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

/**
 * Validates if given string is an email address
 * @param {String} email Email to validate
 * @returns {Boolean}
 */
export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
