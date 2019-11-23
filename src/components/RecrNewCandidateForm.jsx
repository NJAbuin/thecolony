import React from "react";
import { labelInputCreator } from "../../utils";
import { H1 } from "../templates/H1";
import Axios from "axios";

export default function RecrNewCandidateForm(props) {
  const [DNI, setDNI] = React.useState(0);
  const [fullName, setfullName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [expectedSalary, setExpectedSalary] = React.useState("");
  const [warningMessage, setWarningMessage] = React.useState("");

  const uploadPDF = e => {
    e.preventDefault();
    alert("What do???");
  };

  const handleClick = e => {
    e.preventDefault();
    if (props.match.url === "/recruiter/candidate") {
      Axios.post("/api/recruiter/candidatos", {
        DNI,
        fullName,
        age,
        jobTitle,
        address,
        expectedSalary
      }).then(candidate => console.log(candidate));
    } else if (props.match.path === "/candidatos/edit/:id") {
      Axios.put(`/api/recruiter/candidatos/edit/${props.match.params.id}`, {
        DNI,
        fullName,
        age,
        jobTitle,
        address,
        expectedSalary
      }).then(candidate => console.log(candidate));
    }
  };

  return (
    <div>
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
          <button onClick={e => uploadPDF(e)}>Elija el archivo</button>
        </label>
        <br />
        <p style={{ color: "red" }}>{warningMessage}</p>
        <button onClick={e => handleClick(e)}>Submit</button>
      </form>
    </div>
  );
}
