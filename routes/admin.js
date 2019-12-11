const router = require("express").Router();
const passport = require("../db/passport/");
const {
  Admin,
  Candidate,
  JobPosting,
  Report,
  Client,
  Recruiter
} = require("../db/models/");

//get all clients
router.get("/clients", function(req, res) {
  Client.findAll().then(clients => res.send(clients));
});

//get single client
router.get("/clients/:id", (req, res) =>
  Client.findByPk(req.params.id)
    .then(client => res.send(client))
    .catch(() => res.send(false))
);

//edit clients

router.put("/clients/:id", function(req, res) {
  Client.findByPk(req.params.id).then(client => {
    if (!client) {
      res.send("No se encontro ningun cliente");
    }
    client.update(req.body).then(updated => {
      res.send(updated);
    });
  });
});

//delete clients

router.delete("/clients/:id", function(req, res) {
  Client.findByPk(req.params.id)
    .then(client => {
      client.destroy();
    })
    .then(() => res.send("Cliente eliminado con exito"))
    .catch(() => res.send("Error! No se pudo eliminar el cliente"));
});

//get all recruiters

router.get("/recruiters", function(req, res) {
  Recruiter.findAll().then(recruiters => res.send(recruiters));
});

// get one recruiter

router.get("/recruiters/:id", (req, res) =>
  Recruiter.findByPk(req.params.id).then(recruiter => res.send(recruiter))
);

//edit recruiters

router.put("/recruiters/:id", function(req, res) {
  Recruiter.findByPk(req.params.id).then(recruiter => {
    if (!recruiter) {
      res.send(false);
    }
    recruiter.update(req.body).then(updated => {
      res.send(updated);
    });
  });
});

//delete recruiters

router.delete("/recruiters/:id", function(req, res) {
  Recruiter.findByPk(req.params.id)
    .then(recruiter => {
      recruiter.destroy();
    })
    .then(() => res.send("Recrutador eliminado con exito"))
    .catch(() => res.send("Hubo un problema al eliminar el recrutador"));
});

//get admins

router.get("/admins", function(req, res) {
  Admin.findAll().then(admins => res.send(admins));
});

//edit admins

router.put("admins/edit/:id", function(req, res) {
  Admin.findByPk(req.params.id).then(admin => {
    admin.update(req.body).then(updatedAdmin => {
      res.send(updatedAdmin);
    });
  });
});

//delete admins

router.delete("/admins/:id", function(req, res) {
  Admin.findByPk(req.params.id)
    .then(admin => {
      if (admin.id === 1) res.status(403).end();
      else admin.destroy();
    })
    .then(() => res.send("Administrador eliminado con exito"))
    .catch(() => res.send("Hubo un problema al eliminar el administrador"));
});

module.exports = router;
