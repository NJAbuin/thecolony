const Recruiter = require("./Recruiter");
const JobPosting = require("./JobPosting");
const Client = require("./Client");
const Candidate = require("./Candidate");
const Admin = require("./Admin");
const Candidate_JobPosting = require("./Candidate_JobPosting");

//Client.hasMany(JobPosting);
//JobPosting.belongsToMany(Recruiter, { through: "recruiterJobPostings" });
//JobPosting.belongsToMany(Candidate, { through: "candidateJobPostings" });
//Candidate.belongsToMany(JobPosting, { through: "candidateJobPostings" });
JobPosting.belongsTo(Client);
Recruiter.hasMany(JobPosting);
JobPosting.hasMany(Candidate);
Candidate.belongsTo(Recruiter);

module.exports = {
  Candidate,
  Recruiter,
  JobPosting,
  Client,
  Candidate_JobPosting
};
