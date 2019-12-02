import React, { useState } from "react";
import { labelInputCreator } from "../../utils/formLoginRegister";
import { H1 } from "../templates/Text";
import Axios from "axios";
import { validateDNI, validateFullName } from "../../utils";
import RecrCsvForm from "./RecrCsvForm";
import { InfoParagraph } from "../templates/Text";
import { connect } from "react-redux";
import FileUpload from "./FileUpload";

function RecrNewCandidateForm(props) {
  const [DNI, setDNI] = React.useState(0);
  const [fullName, setfullName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [jobTitle, setJobTitle] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [expectedSalary, setExpectedSalary] = React.useState(0);
  const [warningMessage, setWarningMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Elije el CV (formato PDF): ");
  const [uploadedFile, setUploadedFile] = useState({});
  const recruiterID = props.user.id;

  const onSubmit = e => {
    e.preventDefault();
    validateForm(DNI, fullName, age, jobTitle);
    let formData = new FormData();
    formData.append("DNI", DNI);
    formData.append("fullName", fullName);
    formData.append("age", age);
    formData.append("jobTitle", jobTitle);
    formData.append("file", file);
    formData.append("address", address);
    formData.append("expectedSalary", expectedSalary);

    return Axios.post("/api/recruiter/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res => setUploadedFile(res.data));
  };
  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const form = (
    <div style={{ gridArea: "contentDash" }}>
      <form onSubmit={e => onSubmit(e)}>
        <H1>Ingrese los datos del candidato a agregar:</H1>
        {labelInputCreator("DNI*", setDNI)}
        {labelInputCreator("Nombre Completo*", setfullName)}
        {labelInputCreator("Edad*", setAge)}
        {labelInputCreator("Puesto*", setJobTitle)}
        {labelInputCreator("Direccion", setAddress)}
        {labelInputCreator("Salario esperado", setExpectedSalary)}
        <input type="file" onChange={onChange} />
        <label>{filename}</label>
        <br />
        <p style={{ color: "red" }}>{warningMessage}</p>
        <button>Submit</button>
      </form>
      <hr />
      <RecrCsvForm />
    </div>
  );

  const validateForm = (
    DNI,
    fullName,
    age,
    jobTitle,
    address,
    expectedSalary
  ) => {
    if (!validateDNI(DNI)) {
      setWarningMessage("Ingrese un DNI valido sin puntos ni guiones.");
    } else if (!validateFullName(fullName)) {
      setWarningMessage("Ingrese el nombre completo del candidato.");
    } else if (!age) {
      setWarningMessage("Ingrese la edad de su candidato.");
    } else if (jobTitle.length <= 1) {
      setWarningMessage("Ingrese un titulo valido para su candidato");
    } else {
      setWarningMessage("");
    }
  };

  return form;
}

const mapStateToProps = state => ({
  user: state.session.user
});

export default connect(mapStateToProps, null)(RecrNewCandidateForm);
