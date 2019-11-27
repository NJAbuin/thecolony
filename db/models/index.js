const Recruiter = require("./Recruiter");
const JobPosting = require("./JobPosting");
const Client = require("./Client");
const Candidate = require("./Candidate");
const Admin = require("./Admin");

Client.hasMany(JobPosting);
JobPosting.belongsTo(Client);
Recruiter.hasMany(JobPosting);
Recruiter.hasMany(Candidate);
JobPosting.hasMany(Candidate);
Candidate.belongsTo(Recruiter);

module.exports = {
  Candidate,
  Recruiter,
  JobPosting,
  Client
};
