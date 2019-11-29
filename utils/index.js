import React from "react";
import { Label } from "../src/templates/FormLabel";

export const [ERROR_FULLNAME, ERROR_PASSWORD, ERROR_EMAIL] = [
  "Ingrese un nombre valido",
  "La contraseña debe tener al menos 2 caracteres",
  "Ingrese un email valido"
];

export function validatePass(pass) {
  return pass.length <= 2 ? false : true;
}

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
    <Label>
      {fieldName}:{" "}
      <input
        onChange={e => setFn(e.target.value)}
        type={fieldType(fieldName)}
        style={inputStyle}
      />
      <br />
    </Label>
  );
};

/**
 * Validates if given string is an email address
 * @param {String} email Email to validate
 * @returns {Boolean} boolean
 */
export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Validates if a given integer has 8 digits
 * @param {Integer} dni number to check
 * @returns {Boolean}
 */
export const validateDNI = dni => {
  return dni.length === 8;
};

/**
 * Validates if a given string contains at least 4 letters and 2 words
 * @param {String} fullName name to check
 * @returns {Boolean}
 */
export const validateFullName = fullName =>
  fullName.length > 4 && fullName.includes(" ");
