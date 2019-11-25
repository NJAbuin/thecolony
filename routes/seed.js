const express = require("express");
const seed = require("express").Router();
const JobPosting = require("../db/models/JobPosting");
var faker = require("faker");

let JobPostingArray;

const makeMeManyJobs = () => {
  JobPostingArray = [];

  const JobCreator = (
    title,
    description,
    startingDate,
    openings,
    salary,
    workload,
    imgURL,
    benefits,
    state,
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
      benefits,
      state
    };
  };

  for (let i = 0; i <= 10; i++) {
    JobPostingArray.push(
      JobCreator(
        faker.name.jobTitle(),
        faker.name.jobDescriptor(),
        new Date(),
        faker.random.number(),
        faker.random.number(),
        faker.random.number(),
        faker.random.image(),
        faker.name.jobDescriptor(),
        "Activa"
      )
    );
  }
};

seed.get("/", function(req, res) {
  makeMeManyJobs();
  JobPosting.bulkCreate(JobPostingArray).then(() => {
    console.log(JobPostingArray);
    res.send("Your job offers are ready comrade ");
  });
});

module.exports = seed;
