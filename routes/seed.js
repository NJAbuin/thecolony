const express = require("express");
const seed = require("express").Router();
const { JobPosting } = require("../db/models");
const { Candidate } = require("../db/models");
var faker = require("faker");

let JobPostingArray;
let CandidateArray;

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

const makeMeManyCandidates = () => {
  CandidateArray = [];

  const candidateCreator = (
    DNI,
    fullName,
    age,
    jobTitle,
    address,
    expectedSalary,
    CV
  ) => {
    return {
      DNI,
      fullName,
      age,
      jobTitle,
      address,
      expectedSalary,
      CV
    };
  };

  for (let i = 0; i <= 15; i++) {
    CandidateArray.push(
      candidateCreator(
        faker.random.number(),
        faker.name.findName(),
        Math.random() * 25,
        faker.name.jobDescriptor(),
        faker.address.streetAddress(),
        faker.random.number()
      )
    );
  }
};

seed.get("/", function (req, res) {
  makeMeManyJobs();
  makeMeManyCandidates();
  JobPosting.bulkCreate(JobPostingArray)
    .then(() => {
      console.log(JobPostingArray);
    })
    .then(() => {
      Candidate.bulkCreate(CandidateArray).then(() => {
        res.send("Your db now has legit candidates and postings comrade!");
      });
    });
});

module.exports = seed;
