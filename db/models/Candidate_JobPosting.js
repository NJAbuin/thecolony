const S = require("sequelize");
const db = require("../../db");

class Candidate_JobPosting extends S.Model {}

Candidate_JobPosting.init(
  {
    candidateId: {
      type: S.INTEGER
    },
    jobPostingId: {
      type: S.INTEGER
    }
  },
  { sequelize: db, modelName: "candidate_jobposting" }
);
module.exports = Candidate_JobPosting;
