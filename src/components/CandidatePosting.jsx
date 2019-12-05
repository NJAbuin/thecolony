import React, { useState, useEffect } from "react";
import { ClientStyle } from "../templates/ClientStyle";

export function CandidatePosting({ posting }) {
  let [comment, setComment] = useState("");
  useEffect(() => {
    setComment(posting.report.comment || "");
  }, [posting]);
  return (
    <ClientStyle>
      <h2>{posting.title}</h2>
      {posting.report.report ? (
        <a href={posting.report.report} target="_blank">
          LINK AL INFORME
        </a>
      ) : (
        <div>
          <button>AGREGAR LINK AL INFORME</button>
          <input type="text" />
        </div>
      )}
      <textarea
        name="comment"
        defaultValue={comment}
        onChange={e => {
          setComment(e.target.value);
        }}
      />
      <button onClick={() => console.log(comment)}>
        ENVIAR NUEVO COMENTARIO
      </button>
    </ClientStyle>
  );
}
