const Recruiter = require("./Recruiter");
const JobPosting = require("./JobPosting");
const Client = require("./Client");
const Candidate = require("./Candidate");
const Admin = require("./Admin");

JobPosting.belongsTo(Client);
Recruiter.hasMany(JobPosting);
Candidate.belongsTo(Recruiter);

module.exports = { Candidate, Recruiter, JobPosting, Client };
