import React from "react";
import { Label } from "../src/templates/FormLabel";

export const [ERROR_FULLNAME, ERROR_PASSWORD, ERROR_EMAIL, ERROR_LOGIN] = [
  "Ingrese un nombre valido",
  `La contraseña debe tener al menos ${minPasswordLength} caracteres`,
  "Ingrese un email valido",
  "Usuario o contraseña invalidos"
];

const minPasswordLength = 2;
/**
 * Checks if given string is complies with the minPasswordLength required.
 * @param {String} pass string to check
 * @returns {Boolean}
 */
export function validatePass(pass) {
  return pass.length <= minPasswordLength ? false : true;
}

/**
 *labelInputCreator: output a label and an input determined by parameters
 * @param {String} fieldName label name to show
 * @param {Function} setFn setFunction for controlled input use
 * @param {String} inputType desired input type, "text" for default
 * @param {String} value default value of the field
 * @returns {Any} JSX with styled label and input of optional type, using setter function passed
 */

export const labelInputCreator = (
  fieldName,
  setFn,
  inputType = "text",
  value = null
) => {
  const inputStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box"
  };

  return (
    <Label>
      {fieldName}:{" "}
      <input
        onChange={e => setFn(e.target.value)}
        type={inputType}
        style={inputStyle}
        value={value}
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

/**
 * Checks if given string is at least of N length
 * @param {String} string string to check
 * @param {Integer} length  minimum length for the string
 * @returns {Boolean}
 */
export const validateLength = (string, length) =>
  string.length < length ? true : false;

/**
 * Checks if given string is in valid YYYY-MM-DD format
 * @param {String} date string to check
 * @returns {Boolean}
 */
export const validateDate = date => {
  if (date.split("-").length !== 3) return false;
  let [year, month, day] = date.split("-").reverse();

  if (year.length !== 4) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;
  else return true;
};
