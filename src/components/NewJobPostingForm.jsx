import React, { useState, useEffect } from "react";
import { labelInputCreator } from "../../utils/formLoginRegister";
import { Label } from "../templates/FormLabel";
import axios from "axios";

export default function NewJobPostingForm() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [openings, setOpenings] = useState(0);
  const [salary, setSalary] = useState(0);
  const [workload, setWorkload] = useState(0);
  const [imgURL, setImgURL] = useState(null);
  const [benefits, setBenefits] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/client/jobposting", {
        title,
        description,
        startDate,
        openings,
        salary,
        workload,
        imgURL,
        benefits
      })
      .then(data => console.log("Created", data));
  };

  React.useEffect(() => setWarningMessage(null), [
    title,
    description,
    startDate,
    openings
  ]);

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        {labelInputCreator("Nombre de la busqueda ", setTitle)}
        <Label>
          Descripcion: <br />
          (Max 255 caracteres)
          <textarea
            style={{
              width: "100%",
              height: "100px"
            }}
            type="text"
            onChange={e => {
              setDescription(e.target.value);
            }}
          />{" "}
        </Label>
        {labelInputCreator("Fecha de inicio ", setStartDate)}
        {labelInputCreator("Cantidad de puestos disponibles ", setOpenings)}
        {labelInputCreator("Salario ", setSalary)}
        {labelInputCreator("Horas de trabajo al dia ", setWorkload)}
        {labelInputCreator("Link al logo de la empresa ", setImgURL)}
        <Label>
          Beneficios: <br />
          <textarea
            style={{
              width: "100%",
              height: "100px"
            }}
            type="text"
            onChange={e => {
              setBenefits(e.target.value);
            }}
          />{" "}
        </Label>
        {warningMessage}
        <button>Crear busqueda</button>
      </form>
    </div>
  );
}
