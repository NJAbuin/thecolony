import React, { useState, useEffect } from "react";
import axios from 'axios';
import { PostingStyle } from "../templates/Candidates";

export function CandidatePosting({ posting, candidate }) {
  const [comment, setComment] = useState("");

  useEffect(() => {
    setComment(posting.report.comment || "");
  }, [posting]);

  const jobStates = ["postulado/a",
    "1° entrevista",
    "2° entrevista",
    "ingresado/a",
    "rechazado/a"]

  const changeCandidateStatus = value =>
    axios
      .put(`/api/jobpostings/${posting.id}/${candidate.id}/report`, { status: value })
      .then(res => res.data)
      .then(updated => console.log(updated));
  ;

  return (
    <PostingStyle>
      <h2>{posting.title}</h2>
      <select
        defaultValue={posting.report.status}
        onChange={e => changeCandidateStatus(e.target.value)}
      >
        {jobStates.map(state =>
          <option value={state} key={state}>{state}</option>
        )}
      </select>

      {posting.report.report ?
        <a href={posting.report.report} target="_blank">
          LINK AL INFORME
        </a>
        :
        <div>
          <button>AGREGAR LINK AL INFORME</button>
          <input type="text" />
        </div>
      }
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
    </PostingStyle>
  );
}
