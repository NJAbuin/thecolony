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
import { removeSingleClient } from "../store/actions/clients";
import { removeSingleRecruiter } from "../store/actions/recruiters";

import Axios from "axios";

function RecruiterClientEditForm({
  recruiterSelected,
  clientSelected,
  removeSingleClient,
  removeSingleRecruiter
}) {
  const [email, setEmail] = useState(recruiterSelected.email || "");
  const [fullName, setfullName] = useState(recruiterSelected.fullName || "");
  const [logoURL, setLogoURL] = useState(recruiterSelected.logoURL);
  const [phone, setPhone] = useState(recruiterSelected.phone);
  const [website, setWebsite] = useState(recruiterSelected.website);
  const [warningMessage, setWarningMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => setWarningMessage(null), 1);
  }, []);

  useEffect(() => {
    if (!validateEmail(email)) return setWarningMessage(ERROR_EMAIL);
    if (!validateFullName(fullName)) return setWarningMessage(ERROR_FULLNAME);
    return setWarningMessage(null);
  }, [email, fullName]);

  useEffect(() => {
    return () => {
      removeSingleClient();
      removeSingleRecruiter();
    };
  }, []);

  // We join them both together, because since the hook empties
  // them on unMount, only one will be mounted at a time.
  const userToEdit = { ...recruiterSelected, ...clientSelected };

  const editHandler = e => {
    e.preventDefault();
    if (!warningMessage) {
      return Axios.put(`/api/admin/${userToEdit.type}s/${userToEdit.id}`, {
        email,
        fullName,
        logoURL,
        phone,
        website
      }).then(res =>
        !res.data
          ? alert(
              `Hubo un problema al editar el usuario ${userToEdit.fullName}`
            )
          : (setWarningMessage(null),
            alert(`Usuario ${userToEdit.fullName} editado con exito!`))
      );
    }
  };

  return (
    <form>
      {labelInputCreator("Full Name", setfullName, "text", userToEdit.fullName)}
      {labelInputCreator("Email", setEmail, "text", userToEdit.email)}
      {labelInputCreator("URL Logo", setLogoURL, "text", userToEdit.logoURL)}
      {labelInputCreator("Phone", setPhone, "text", userToEdit.phone)}
      {labelInputCreator("Website", setWebsite, "text", userToEdit.website)}
      <p style={{ color: "red" }}>{warningMessage}</p>
      <Button onClick={e => editHandler(e)}>Editar</Button>
    </form>
  );
}

const mapStateToProps = ({ recruiterSelected, clientSelected }) => ({
  recruiterSelected,
  clientSelected
});

const mapDispatchToProps = {
  removeSingleClient,
  removeSingleRecruiter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecruiterClientEditForm);
