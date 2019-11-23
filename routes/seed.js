const express = require("express");
const seed = require("express").Router();
const JobPosting = require("../db/models/JobPosting");
var faker = require("faker");

const JobPostingArray = [];

const makeMeManyJobs = () => {
  const JobCreator = (
    title,
    description,
    startingDate,
    openings,
    salary,
    workload,
    imgURL,
    benefits,
    recruiterID
  ) => {
    return {
      title,
      description,
      startingDate,
      openings,
      salary,
      workload,
      imgURL,
      benefits
    };
  };

  for (let i = 0; i <= 10; i++) {
    JobPostingArray.push(
      JobCreator(
        faker.name.jobTitle(),
        faker.name.jobDescriptor(),
        faker.date.month(),
        faker.random.number(),
        faker.random.number(),
        faker.random.number(),
        faker.random.image(),
        faker.name.jobDescriptor()
      )
    );
  }
};

seed.get("/", function(req, res) {
  makeMeManyJobs();
  JobPosting.bulkCreate(...JobPostingArray).then(() => {
    console.log(JobPostingArray);
    res.send("Your job offers are ready comrade ");
  });
});

module.exports = seed;
