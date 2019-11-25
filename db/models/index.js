import Recruiter from "./Recruiter";
import JobPosting from "./JobPosting";
import Client from "./Client";

JobPosting.belongsTo(Client);
Recruiter.hasMany(JobPosting);
