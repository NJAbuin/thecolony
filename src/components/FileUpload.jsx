import React, { Fragment, useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Elije el CV (formato PDF): ");

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <Fragment>
      <input type="file" onChange={onChange} />
      <label>{filename}</label>
    </Fragment>
  );
}
