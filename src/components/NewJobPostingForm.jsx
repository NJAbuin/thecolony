import React, { useState, useEffect } from "react";
import {
  labelInputCreator,
  validateLength,
  validateDate
} from "../../utils/formLoginRegister";
import { Label } from "../templates/FormLabel";
import { connect } from "react-redux";
import axios from "axios";
import { fetchClientList } from "../store/actions/clients";

function NewJobPostingForm({
  clientList,
  fetchClientList,
  session,
  match,
  jobPostingSelected
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [openings, setOpenings] = useState(0);
  const [salary, setSalary] = useState(0);
  const [workload, setWorkload] = useState(0);
  const [imgURL, setImgURL] = useState("");
  const [benefits, setBenefits] = useState("");
  const [selectedClientID, setSelectedClientID] = useState(null);
  const [selectedClientFullName, setSelectedClientFullName] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);
  const userType = session.user.type;

  useEffect(() => {
    if (userType === "admin") fetchClientList();
  }, [userType]);

  useEffect(() => {
    if (
      match.path === "/auth/admin/jobpostings/edit/:id" &&
      clientList.length
    ) {
      let date = jobPostingSelected.startingDate || [];
      date = date
        .substring(0, 10)
        .split("-")
        .reverse()
        .join("-");

      setTitle(jobPostingSelected.title);
      setDescription(jobPostingSelected.description);
      setStartingDate(date);
      setOpenings(jobPostingSelected.openings);
      setSalary(jobPostingSelected.salary);
      setWorkload(jobPostingSelected.workload);
      setImgURL(jobPostingSelected.imgURL);
      setBenefits(jobPostingSelected.benefits);
      setSelectedClientID(
        clientList.find(client => client.id === jobPostingSelected.clientId).id
      );
      setSelectedClientFullName(
        clientList.find(client => client.id === jobPostingSelected.clientId)
          .fullName
      );
    }
  }, [clientList, selectedClientID, selectedClientFullName]);

  const clearForm = () => {
    document.querySelectorAll("input").forEach(i => (i.value = ""));
    document.querySelectorAll("textarea").forEach(i => (i.value = ""));
    return (
      setTitle(""),
      setDescription(""),
      setStartingDate(""),
      setOpenings(0),
      setSalary(0),
      setWorkload(0),
      setImgURL(""),
      setBenefits(""),
      setWarningMessage(null)
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    let dateToSend = startingDate
      .split("-")
      .reverse()
      .join("-");

    if (!warningMessage) {
      if (match.path === "/auth/admin/jobpostings/edit/:id") {
        axios
          .put(`/api/jobpostings/edit/${jobPostingSelected.id}`, {
            title,
            description,
            startingDate: dateToSend,
            openings,
            salary,
            workload,
            imgURL,
            benefits,
            clientId: selectedClientID
          })
          .then(res => {
            if (res.data) {
              return clearForm(), alert("Busqueda laboral editada");
            } else alert("Hubo un problema al editar su busqueda.");
          });
      } else
        axios
          .post("/api/jobpostings", {
            title,
            description,
            startingDate: dateToSend,
            openings,
            salary,
            workload,
            imgURL,
            benefits,
            clientId: selectedClientID
          })
          .then(res =>
            res.data
              ? (clearForm(), alert("Busqueda laboral creada"))
              : alert("Hubo un problema al cargar su busqueda.")
          );
    }
  };

  useEffect(() => {
    if (title.length < 3)
      return setWarningMessage("Ingrese un titulo de busqueda valido");
    if (!validateLength(description, 255) || description.length < 5)
      return setWarningMessage("Ingrese una descripcion valida");
    if (!validateDate(startingDate))
      return setWarningMessage("Ingrese una fecha valida");
    if (!openings)
      return setWarningMessage("Seleccione la cantidad de puestos disponibles");
    return setWarningMessage("");
  }, [title, description, startingDate, openings]);

  return (
    <div>
      <form>
        {userType === "admin" ? (
          <label>
            Crear como:
            <select
              onChange={e => {
                let newVal = e.target.value;
                setSelectedClientID(
                  newVal.match(/\d\w*\:/)[0].slice(0, newVal.indexOf(":"))
                );
              }}
            >
              {clientList.map(client => (
                <option
                  key={client.id}
                  selected={jobPostingSelected.clientId === client.id}
                >
                  {client.id}: {client.fullName}
                </option>
              ))}
            </select>
            <br />
          </label>
        ) : null}
        {labelInputCreator("Nombre de la busqueda ", setTitle, "text", title)}
        <Label>
          Descripcion: (Max 255 caracteres)
          <textarea
            style={{
              width: "100%",
              height: "100px"
            }}
            value={description}
            type="text"
            onChange={e => setDescription(e.target.value)}
          />
        </Label>
        {labelInputCreator(
          "Fecha de inicio (DD-MM-YYYY)",
          setStartingDate,
          "text",
          startingDate
        )}
        {labelInputCreator(
          "Cantidad de puestos disponibles ",
          setOpenings,
          "number",
          openings
        )}
        {labelInputCreator("Salario ", setSalary, "number", salary)}
        {labelInputCreator(
          "Horas de trabajo al dia ",
          setWorkload,
          "number",
          workload
        )}
        {labelInputCreator(
          "Link al logo de la empresa ",
          setImgURL,
          "text",
          imgURL
        )}
        <Label>
          Beneficios: <br />
          <textarea
            style={{
              width: "100%",
              height: "100px"
            }}
            type="text"
            value={benefits}
            onChange={e => {
              setBenefits(e.target.value);
            }}
          />
        </Label>

        <p style={{ color: "red" }}>{warningMessage}</p>
        <button onClick={e => handleSubmit(e)}>Crear busqueda</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ clientList, session, jobPostingSelected }) => ({
  clientList,
  session,
  jobPostingSelected
});

const mapDispatchToProps = {
  fetchClientList
};

export default connect(mapStateToProps, mapDispatchToProps)(NewJobPostingForm);
