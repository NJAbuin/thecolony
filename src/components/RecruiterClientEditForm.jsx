import {
  labelInputCreator,
  validateEmail,
  validateFullName,
  ERROR_EMAIL,
  ERROR_FULLNAME
} from "../../utils/formLoginRegister";
import { Button } from "../templates/Button";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function RecruiterClientEditForm({ recruiterSelected }) {
  const [email, setEmail] = useState(recruiterSelected.email || "");
  const [fullName, setfullName] = useState(recruiterSelected.fullName || "");
  const [logoURL, setLogoURL] = useState(recruiterSelected.logoURL);
  const [phone, setPhone] = useState(recruiterSelected.phone);
  const [website, setWebsite] = useState(recruiterSelected.website);
  const [warningMessage, setWarningMessage] = useState(null);

  useEffect(() => {
    if (!validateEmail(email)) return setWarningMessage(ERROR_EMAIL);
    if (!validateFullName(fullName)) return setWarningMessage(ERROR_FULLNAME);
    return setWarningMessage(null);
  }, [email, fullName]);

  const editHandler = e => {
    e.preventDefault();
    if (!warningMessage) {
      switch (recruiterSelected.type) {
        case "recruiter":
          Axios.put(`/api/admin/recruiters/${recruiterSelected.id}`, {
            email,
            fullName,
            logoURL,
            phone,
            website
          }).then(res => {
            if (!res.data) alert("Hubo un problema al editar el recrutador");
            else
              setWarningMessage(null), alert("Recrutador editado con exito!");
          });
      }
    }
  };

  return (
    <form>
      {labelInputCreator(
        "Full Name",
        setfullName,
        "text",
        recruiterSelected.fullName
      )}
      {labelInputCreator("Email", setEmail, "text", recruiterSelected.email)}
      {labelInputCreator(
        "URL Logo",
        setLogoURL,
        "text",
        recruiterSelected.logoURL
      )}
      {labelInputCreator("Phone", setPhone, "text", recruiterSelected.phone)}
      {labelInputCreator(
        "Website",
        setWebsite,
        "text",
        recruiterSelected.website
      )}
      <p style={{ color: "red" }}>{warningMessage}</p>
      <Button onClick={e => editHandler(e)}>Editar</Button>
    </form>
  );
}

const mapStateToProps = ({ recruiterSelected }) => ({
  recruiterSelected
});

export default connect(mapStateToProps, null)(RecruiterClientEditForm);
