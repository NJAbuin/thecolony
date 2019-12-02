import React, { useState, useEffect } from "react";
import { labelInputCreator } from "../../utils/formLoginRegister";
import { Label } from "../templates/FormLabel";

export default function NewJobPostingForm() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <form>
        {labelInputCreator("Nombre de la busqueda ", setTitle)}
        <Label>
          Descripcion: <br />
          (Max 255 caracteres)
          <input
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
      </form>
    </div>
  );
}
