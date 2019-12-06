const express = require("express");
const seed = require("express").Router();
const {
  JobPosting,
  Candidate,
  Recruiter,
  Client,
  Admin
} = require("../db/models");
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
    clientId
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
      state,
      clientId
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
    recruiterId
  ) => {
    return {
      DNI,
      fullName,
      age,
      jobTitle,
      address,
      expectedSalary,
      CV,
      recruiterId
    };
  };

  Recruiter.create({
    fullName: "Mario Soyseedeado",
    permissions: "activo",
    email: "recruiter@seed.com",
    password: "recruiter@seed.com"
  }).then(recruiter => {
    for (let i = 0; i < 2; i++) {
      Client.create({
        fullName: `Enrique Soyseedeado ${i}`,
        permissions: "activo",
        email: `cliente${i}@seed.com`,
        password: `cliente${i}@seed.com`
      })
        .then(client => {
          for (let i = 0; i <= 3; i++) {
            client
              .createJobposting(
                JobCreator(
                  faker.name.jobTitle(),
                  faker.name.jobDescriptor(),
                  new Date(),
                  faker.random.number(),
                  faker.random.number(),
                  faker.random.number(),
                  faker.random.image(),
                  faker.name.jobDescriptor(),
                  "activa"
                )
              )
              .then(jobposting => {
                jobposting.createCandidate(
                  candidateCreator(
                    faker.random.number(),
                    faker.name.findName(),
                    faker.random.number(70),
                    faker.name.jobTitle(),
                    faker.address.streetAddress(),
                    faker.random.number(),
                    "",
                    2
                  )
                );
                jobposting.createCandidate(
                  candidateCreator(
                    faker.random.number(),
                    faker.name.findName(),
                    faker.random.number(70),
                    faker.name.jobTitle(),
                    faker.address.streetAddress(),
                    faker.random.number(),
                    "",
                    2
                  )
                );
                jobposting.createCandidate(
                  candidateCreator(
                    faker.random.number(),
                    faker.name.findName(),
                    faker.random.number(70),
                    faker.name.jobTitle(),
                    faker.address.streetAddress(),
                    faker.random.number(),
                    "",
                    2
                  )
                );
              });
          }
        })
        .then(() => {
          Admin.create({
            fullName: "Dios SoySemilla",
            email: "admin@admin.com",
            password: "123"
          });
        })
        .then(() => {
          Recruiter.create({
            fullName: "Esteban Recrutador",
            permissions: "activo",
            email: "recruiter@recruiter.com",
            password: "123"
          });
        })
        .then(() => {
          Client.create({
            fullName: "Rafael SerCliente",
            permissions: "activo",
            email: "client@client.com",
            password: "123"
          });
        });
    }
  });
};

seed.get("/", function(req, res) {
  makeMeManyCandidatesAndJobs();
  res.send(
    "Seed created, relations done, stonks up! Credentials: \n || admin@admin.com : 123 || client@client.com : 123 || recruiter@recruiter.com : 123"
  );
});

module.exports = seed;
