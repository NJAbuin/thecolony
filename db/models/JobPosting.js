const db = require("../index");
const S = require("sequelize");

class JobPosting extends S.Model {}
JobPosting.init(
  {
    title: {
      type: S.STRING,
      allowNull: false
    },
    description: {
      type: S.TEXT,
      allowNull: false
    },
    startingDate: {
      type: S.DATE,
      allowNull: false
    },
    openings: {
      type: S.INTEGER,
      allowNull: false
    },
    salary: {
      type: S.STRING
    },
    state: {
      type: S.ENUM(["Activa", "Terminada"]),
      defaultValue: "Activa"
    },
    workload: {
      type: S.INTEGER
    },
    imgURL: {
      type: S.STRING
    },
    benefits: {
      type: S.TEXT
    }
  },
  { sequelize: db, modelName: "jobposting" }
);

module.exports = JobPosting;
