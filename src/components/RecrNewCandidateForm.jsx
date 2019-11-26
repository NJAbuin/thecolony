import React from "react";
import { labelInputCreator } from "../../utils";
import { H1 } from "../templates/Text";
import Axios from "axios";
import RecrCsvForm from "./RecrCsvForm";
import { InfoParagraph } from "../templates/Text";
import { connect } from "react-redux";

function RecrNewCandidateForm(props) {
  const [DNI, setDNI] = React.useState(0);
  const [fullName, setfullName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [jobTitle, setJobTitle] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [expectedSalary, setExpectedSalary] = React.useState(0);
  const [warningMessage, setWarningMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const recruiterID = props.user.id;

  const uploadPDF = e => {
    e.preventDefault();
    alert("What do???");
  };

  const handleClick = e => {
    e.preventDefault();
    validateForm(DNI, fullName, age, jobTitle);
    doTheThing();
  };

  const doTheThing = () => {
    console.log(recruiterID);
    console.log(props);
    if (warningMessage === "" && !DNI.length < 8) {
      if (props.match.url === "/recruiter/candidates") {
        (() =>
          Axios.post("/api/recruiter/candidates", {
            DNI,
            fullName,
            age,
            jobTitle,
            address,
            expectedSalary,
            recruiterID
          }))().then(candidate => {
          console.log(candidate);
        });
      } else if (
        props.match.path === "/candidates/edit/:id" &&
        DNI.length < 8
      ) {
        Axios.put(`/api/recruiter/candidates/edit/${props.match.params.id}`, {
          DNI,
          fullName,
          age,
          jobTitle,
          address,
          expectedSalary
        }).then(candidate => console.log(candidate));
      }
    }
  };
  const handleChange = e => {
    console.log(e.target.files[0]);
  };

  const form = (
    <div style={{ gridArea: "contentDash" }}>
      <form>
        <H1>Ingrese los datos del candidato a agregar:</H1>
        {labelInputCreator("DNI*", setDNI)}
        {labelInputCreator("Nombre Completo*", setfullName)}
        {labelInputCreator("Edad*", setAge)}
        {labelInputCreator("Puesto*", setJobTitle)}
        {labelInputCreator("Direccion", setAddress)}
        {labelInputCreator("Salario esperado", setExpectedSalary)}
        <label>
          Subir CV :{" "}
          <input
            type="file"
            onChange={e => handleChange(e)}
            onClick={e => uploadPDF(e)}
          ></input>
        </label>
        <br />
        <p style={{ color: "red" }}>{warningMessage}</p>
        <button onClick={e => handleClick(e)}>Submit</button>
      </form>
      <hr />
      <RecrCsvForm />
    </div>
  );

  const success = (
    <div>
      <H1>Exito!</H1>
      <InfoParagraph>
        El candidato {fullName} con DNI: {DNI} ha sido creado
      </InfoParagraph>
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
    if (DNI.length !== 8) {
      setWarningMessage("Ingrese un DNI valido sin puntos ni guiones.");
    } else if (fullName.length <= 4 || !fullName.includes(" ")) {
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
