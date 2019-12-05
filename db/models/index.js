const Recruiter = require("./Recruiter");
const JobPosting = require("./JobPosting");
const Client = require("./Client");
const Candidate = require("./Candidate");
const Admin = require("./Admin");
const Report = require("./Report");

Client.hasMany(JobPosting);
JobPosting.belongsTo(Client);
Recruiter.hasMany(JobPosting);
Recruiter.hasMany(Candidate);
Candidate.belongsTo(Recruiter);
JobPosting.belongsToMany(Candidate, { through: "report", foreignKey: "jobPostingId" })
Candidate.belongsToMany(JobPosting, { through: "report", foreignKey: "candidateId" })

module.exports = {
  Admin,
  Candidate,
  Recruiter,
  JobPosting,
  Client,
  Report
};
