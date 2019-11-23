import React from "react";
import { labelInputCreator } from "../../utils";
import { H1 } from "../templates/H1";
import CSVReader from "react-csv-reader";
import Axios from "axios";

export default function RecrNewCandidateForm(props) {
  const [DNI, setDNI] = React.useState(0);
  const [fullName, setfullName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [expectedSalary, setExpectedSalary] = React.useState("");
  const [warningMessage, setWarningMessage] = React.useState("");
  const [csvValues, setCsvValues] = React.useState([]);

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

  const handleChange = e => {
    console.log(e.target.files[0]);
  };

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true
    // transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  };

  const handleForce = data => {
    setCsvValues(data);
  };

  const bulkCreateFromCsv = e => {
    e.preventDefault();
    Axios.post("/api/recruiter/candidatos/csvImport", [...csvValues]).then(() =>
      console.log(res.data)
    );
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
          <input
            type="file"
            onChange={e => handleChange(e)}
            /*onClick={e => uploadPDF(e)}*/
          ></input>
        </label>
        <br />
        <p style={{ color: "red" }}>{warningMessage}</p>
        <button onClick={e => handleClick(e)}>Submit</button>
      </form>
      <H1>Importe todos sus candidatos facilmente mediante un .csv</H1>
      <p>
        Puede extraer los datos de sus candidatos de una planilla propia al
        exportarla como csv.
        <br />
        Debe contener poseer las columnas
        DNI,fullName,age,jobTitle,address,expectedSalary
      </p>
      <CSVReader
        cssClass="react-csv-input"
        label="Elije el archivo a subir:  "
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      <button onClick={e => bulkCreateFromCsv(e)}>Confirmar archivo</button>
    </div>
  );
}
