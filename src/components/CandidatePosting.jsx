import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { PostingStyle } from "../templates/Candidates";

export function CandidatePosting({ posting, candidate, userType }) {
  const { id, title, report } = posting;
  const [comment, setComment] = useState("");
  const [link, setLink] = useState("");
  const [showComment, setShowComment] = useState(false);

  useEffect(() => {
    setComment(report.comment || "");
  }, [posting]);

  const jobStates = [
    "postulado/a",
    "1° entrevista",
    "2° entrevista",
    "ingresado/a",
    "rechazado/a"
  ];

  const updateCandidateStatus = (field, value) =>
    axios
      .put(`/api/jobpostings/${id}/${candidate.id}/report`, { [field]: value })
      .then(res => res.data)
      .then(updated => console.log(updated), alert("Candidato actualizado"));

  return (
    <PostingStyle>
      <Link to={`/auth/${userType}/jobpostings/${id}`}>
        <h2>{title}</h2>
      </Link>
      <select
        defaultValue={report.status}
        onChange={e => updateCandidateStatus("status", e.target.value)}
      >
        {jobStates.map(state => (
          <option value={state} key={state}>
            {state}
          </option>
        ))}
      </select>
      <br />
      <br />
      {report.report ? (
        <a
          href={
            report.report.includes("http")
              ? report.report
              : "http://" + report.report
          }
          target="_blank"
        >
          LINK AL INFORME
        </a>
      ) : (
        <div>
          <button onClick={() => updateCandidateStatus("report", link)}>
            AGREGAR LINK AL INFORME
          </button>
          <input
            type="text"
            defaultValue={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
      )}
      <br />
      <br />
      <button onClick={() => setShowComment(!showComment)}>
        {showComment ? "Ocultar Comentarios" : "Ver Comentarios"}
      </button>
      {showComment ? (
        <div>
          <h4>Comentarios</h4>
          <textarea
            name="comment"
            defaultValue={comment}
            onChange={e => {
              setComment(e.target.value);
            }}
          />
          <br />
          <button onClick={() => updateCandidateStatus("comment", comment)}>
            GUARDAR COMENTARIOS
          </button>
        </div>
      ) : null}
    </PostingStyle>
  );
}
