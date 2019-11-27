import React from "react";
import { InfoParagraph } from "../templates/Text";
import CSVReader from "react-csv-reader";
import { H1 } from "../templates/Text";
import Axios from "axios";
import { connect } from "react-redux";

function RecrCsvForm(props) {
  const [csvValues, setCsvValues] = React.useState([]);
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true
    // transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  };

  const handleForce = data => {
    setCsvValues(data);
  };

  const bulkCreateFromCsv = (e, user) => {
    e.preventDefault();
    Axios.post("/api/recruiter/candidates/csvImport", {
      csvValues,
      user
    }).then(res => console.log(res.data));
  };

  return (
    <div>
      <H1>Importe todos sus candidatos facilmente mediante un .csv</H1>
      <InfoParagraph>
        Puede extraer los datos de sus candidatos de una planilla propia al
        exportarla como csv.
        <br />
        Debe poseer las columnas
        DNI*,fullName*,age*,jobTitle*,address,expectedSalary
      </InfoParagraph>
      <CSVReader
        cssClass="react-csv-input"
        label="Elije el archivo a subir:  "
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      <button onClick={e => bulkCreateFromCsv(e, props.user)}>
        Confirmar archivo
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.session.user
});

export default connect(mapStateToProps, null)(RecrCsvForm);
