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
  match,
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

  const editHandler = e => {
    e.preventDefault();
    if (!warningMessage) {
      if (recruiterSelected.id) {
        return Axios.put(`/api/admin/recruiters/${recruiterSelected.id}`, {
          email,
          fullName,
          logoURL,
          phone,
          website
        }).then(res => {
          if (!res.data) alert("Hubo un problema al editar el recrutador");
          else setWarningMessage(null), alert("Recrutador editado con exito!");
        });
      }

      if (clientSelected.id) {
        return Axios.put(`/api/admin/clients/${clientSelected.id}`, {
          email,
          fullName,
          logoURL,
          phone,
          website
        }).then(res => {
          if (!res.data) alert("Hubo un problema al editar el cliente");
          else setWarningMessage(null), alert("Cliente editado con exito!");
        });
      }
    }
  };

  return match.path === "/auth/admin/recruiters" ? (
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
  ) : (
    <form>
      {labelInputCreator(
        "Full Name",
        setfullName,
        "text",
        clientSelected.fullName
      )}
      {labelInputCreator("Email", setEmail, "text", clientSelected.email)}
      {labelInputCreator(
        "URL Logo",
        setLogoURL,
        "text",
        clientSelected.logoURL
      )}
      {labelInputCreator("Phone", setPhone, "text", clientSelected.phone)}
      {labelInputCreator("Website", setWebsite, "text", clientSelected.website)}
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
