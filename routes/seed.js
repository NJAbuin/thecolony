const express = require("express");
const seed = require("express").Router();
const { JobPosting } = require("../db/models");
const { Candidate } = require("../db/models");
var faker = require("faker");

const makeMeManyCandidatesAndJobs = () => {
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

  const candidateCreator = (
    DNI,
    fullName,
    age,
    jobTitle,
    address,
    expectedSalary,
    CV,
    jobpostingId
  ) => {
    return {
      DNI,
      fullName,
      age,
      jobTitle,
      address,
      expectedSalary,
      CV,
      jobpostingId
    };
  };

  for (let i = 0; i <= 6; i++) {
    JobPosting.create(
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
    ).then(jobposting => {
      jobposting.createCandidate(
        candidateCreator(
          faker.random.number(),
          faker.name.findName(),
          faker.random.number(),
          faker.name.jobTitle(),
          faker.address.streetAddress(),
          faker.random.number()
        )
      );
      jobposting.createCandidate(
        candidateCreator(
          faker.random.number(),
          faker.name.findName(),
          faker.random.number(),
          faker.name.jobTitle(),
          faker.address.streetAddress(),
          faker.random.number()
        )
      );
      jobposting.createCandidate(
        candidateCreator(
          faker.random.number(),
          faker.name.findName(),
          faker.random.number(),
          faker.name.jobTitle(),
          faker.address.streetAddress(),
          faker.random.number()
        )
      );
    });
  }
};

seed.get("/", function(req, res) {
  makeMeManyCandidatesAndJobs();
  res.send("Seed created, relations done, stonks up!");
});

module.exports = seed;
