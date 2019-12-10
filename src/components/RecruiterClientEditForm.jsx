import { labelInputCreator } from "../../utils/formLoginRegister";
import { Button } from "../templates/Button";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function RecruiterClientEditForm({ user }) {
  const [email, setEmail] = useState(user.email || "");
  const [fullName, setfullName] = useState(user.fullName || "");
  const [logoURL, setLogoURL] = useState(user.logoURL);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const [warningMessage, setWarningMessage] = useState(null);

  const editHandler = () => {
    switch (user.role) {
      case "recruiter":
        Axios.put("api/admin/recruiters/:id", {
          email,
          fullName,
          logoURL,
          phone,
          website
        }).then(res => {
          if (!res.data) alert("Hubo un problema al editar el recrutador");
          else alert("Recrutador editado con exito!");
        });
    }
  };

  return (
    <form>
      {labelInputCreator("Nombre Completo", setfullName)}
      {labelInputCreator("Email", setEmail)}
      {labelInputCreator("Logo URL", setLogoURL)}
      {labelInputCreator("Phone", setPhone)}
      {labelInputCreator("Website", setWebsite)}
      <p style={{ color: "red" }}>{warningMessage}</p>
      <Button onClick={editHandler}>Editar</Button>
    </form>
  );
}
