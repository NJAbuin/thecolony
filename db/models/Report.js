const db = require("../index");
const S = require("sequelize");

class Report extends S.Model { }

Report.init(
  {
    candidateId: {
      type: S.INTEGER
    },
    jobPostingId: {
      type: S.INTEGER
    },
    report: {
      type: S.STRING
    },
    comment: {
      type: S.STRING
    },
    status: {
      type: S.ENUM([
        "postulado/a",
        "1° entrevista",
        "2° entrevista",
        "ingresado/a",
        "rechazado/a"
      ]),
      defaultValue: "postulado/a"
    }
  },
  { sequelize: db, modelName: "report" }
);

module.exports = Report;
