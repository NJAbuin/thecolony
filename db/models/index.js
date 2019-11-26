const Recruiter = require("./Recruiter");
const JobPosting = require("./JobPosting");
const Client = require("./Client");
const Candidate = require("./Candidate");
const Admin = require("./Admin");

JobPosting.belongsTo(Client);
Client.hasMany(JobPosting)
JobPosting.belongsToMany(Recruiter, { through: 'recruiterJobPostings' });
JobPosting.belongsToMany(Candidate, { through: 'candidateJobPostings' })
Candidate.belongsToMany(JobPosting, { through: 'candidateJobPostings' })
Candidate.belongsTo(Recruiter);

module.exports = { Candidate, Recruiter, JobPosting, Client };
