const router = require("express").Router();
const {
    Recruiter,
    Candidate,
    JobPosting,
    Report,
    Client,
    Admin
} = require("../db/models/");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pdf = require("pdf-parse");

//CANDIDATOS

// 1. agregar candidatos y sus CV como RECRUITER

// 1.a agregar CV

const storage = multer.diskStorage({
    destination(res, file, cb) {
        let dir = "./dist/uploads";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            fs.mkdirSync(dir + "/cv");
        }
        cb(null, "./dist/uploads/cv");
    },
    filename(req, file, cb) {
        const renowned = file.originalname.replace(/[^a-zA-Z0-9]/g, "_");
        cb(null, `${renowned}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), (req, res) => {
    Recruiter.findOne({ where: { id: req.user.id } }).then(recruiter => {
        let cv;
        req.file ? (cv = req.file.path) : (cv = "n/a");
        recruiter
            .createCandidate({
                fullName: req.body.fullName,
                DNI: req.body.DNI,
                age: req.body.age,
                jobTitle: req.body.jobTitle,
                address: req.body.adress,
                exprectedSalary: req.body.exprectedSalary,
                CV: cv
            })
            .then(candidate => {
                if (cv != "n/a") {
                    let dataBuffer = fs.readFileSync(req.file.path);
                    pdf(dataBuffer).then(data => res.status(200).send(data));
                } else {
                    res.send(candidate);
                }
            })
            .catch(e => res.send(false));
    });
});

//1.b agregarlos con el archivo CSV

router.post("/candidates/csvImport", function (req, res) {
    req.body.csvValues.forEach(candidate => {
        Recruiter.findOne({ where: { id: req.body.user.id } }).then(recruiter =>
            recruiter.createCandidate(candidate)
        );
    });
    res.send("Created");
});

//1.c agregarlos uno por uno

router.post("/candidates", function (req, res) {
    Recruiter.findOne({ where: { id: req.user.id } }).then(recruiter => {
        Candidate.create(req.body).then(candidate => {
            candidate.setRecruiter(recruiter);
            res.send(candidate);
        });
    });
});

//2. ver candidatos (como recruiter y como admin)

//2.a todos

router.get("/candidates", (req, res) => {
    if (req.user.type === "recruiter") {
        Candidate.findAll({
            where: { recruiterId: req.user.id }
        }).then(candidates => res.send(candidates));
    }
    if (req.user.type === "admin") {
        Candidate.findAll().then(candidates => res.send(candidates));
    }
});

//2.b solo uno

router.get("/candidates/:id", function (req, res) {
    if (req.user.type === "recruiter") {
        Candidate.findOne({
            where: { id: req.params.id, recruiterId: req.user.id }
        })
            .then(candidate => res.send(candidate))
            .catch(e => res.send(e));
    }
    if (req.user.type === "admin") {
        Candidate.findOne({
            where: { id: req.params.id }
        })
            .then(candidate => res.send(candidate))
            .catch(e => res.send(e));
    }
});

//3. Editar y borrar candidatos

router.put("/candidates/edit/:id", function (req, res) {
    if (req.user.type === "recruiter") {
        Candidate.findOne({
            where: { id: req.params.id, recruiterId: req.user.id }
        }).then(candidate => {
            if (!candidate) {
                res.send("No tienes ningun candidato con el ID indicado");
            }
            candidate.update(req.body).then(updatedCandidate => {
                res.send(updatedCandidate);
            });
        });
    }
    if (req.user.type === "admin") {
        Candidate.findOne({ where: { id: req.params.id } }).then(candidate => {
            candidate.update(req.body).then(updatedCandidate => {
                res.send(updatedCandidate);
            });
        });
    }
});

//BUSQUEDAS

//1. Ver busquedas
//1.a ver todas

router.get("/jobpostings", function (req, res) {
    if (req.user.type === "client") {
        JobPosting.findAll({
            include: [
                {
                    model: Candidate
                }
            ],
            where: {
                clientId: req.user.id
            }
        }).then(job => res.send(job))
            .catch(e => res.send(e));;
    }
    if (req.user.type === "admin") {
        JobPosting.findAll({
            include: [
                {
                    model: Candidate
                }
            ]
        }).then(job => res.send(job))
            .catch(e => res.send(e))
    }
    //por ahora el recruiter ve todas, pero luego deberia ver solo las que tiene asignadas
    if (req.user.type === "recruiter") {
        JobPosting.findAll({
            where: {
                state: "activa"
            }
        }).then(jobs => res.send(jobs))
            .catch(e => res.send(e))
    }
});

//1.b ver una

router.get("/jobpostings/:id", function (req, res) {
    if (req.user.type === "client") {
        JobPosting.findOne({
            include: [
                {
                    model: Candidate
                }
            ],
            where: { id: req.params.id, clientId: req.user.id }
        }).then(job => res.send(job));
    }
    if (req.user.type === "admin") {
        JobPosting.findOne({
            include: [
                {
                    model: Candidate
                }
            ],
            where: { id: req.params.id }
        }).then(job => res.send(job));
    }
    //por ahora el recruiter ve todas, pero luego deberia ver solo las que tiene asignadas
    if (req.user.type === "recruiter") {
        JobPosting.findOne({
            include: [
                {
                    model: Candidate
                }
            ],
            where: { id: req.params.id }
        }).then(job => res.send(job));
    }
});

//2. Editar busquedas

router.put("/jobpostings/edit/:id", function (req, res) {
    if (req.user.type === "client") {
        JobPosting.findOne({ where: { id: req.params.id, clientId: req.user.id } })
            .then(job => {
                return job.update(req.body);
            })
            .then(updated => res.send(updated));
    }
    if (req.user.type === "admin") {
        JobPosting.findOne({ where: { id: req.params.id } })
            .then(job => {
                return job.update(req.body);
            })
            .then(updated => res.send(updated));
    }
});

//3. Eliminar busquedas

router.delete("/jobpostings/delete/:id", function (req, res) {
    if (req.user.type === "client") {
        JobPosting.findOne({ where: { id: req.params.id, clientId: req.user.id } })
            .then(job => {
                job.destroy();
            })
            .then(() => res.send("Busqueda eliminada con exito"));
    }
    if (req.user.type === "admin") {
        JobPosting.findOne({ where: { id: req.params.id } })
            .then(job => {
                job.destroy();
            })
            .then(() => res.send("Busqueda eliminada con exito"));
    }
});

//4. Crear Busquedas

router.post("/jobposting", function (req, res) {
    const uId = req.user.type === "client" ? req.body.clientId : req.user.id;
    Client.findOne({ where: { id: uId } })
        .then(client => client.createJobposting(req.body))
        .then(() => res.status(201).send(true))
        .catch(e => res.send(e));
});

//5. Reportes
//5.a crear reporte

router.post("/jobpostings/:jobID/:candidateID/report", function (req, res) {
    Report.create(req.body).then(report => res.send(report.informe));
});

//5.b ver reporte

router.get("/jobpostings/:jobID/:candidateID/report", function (req, res) {
    Report.findOne({
        where: {
            candidateID: req.params.candidateID,
            jobPostingID: req.params.jobID
        }
    }).then(report => res.send(report));
});

//5.c editar reporte

router.put("/jobpostings/:jobID/:candidateID/report", function (req, res) {
    if (req.user.type === "admin") {
        Report.findOne({
            where: {
                candidateID: req.params.candidateID,
                jobPostingID: req.params.jobID
            }
        })
            .then(report => {
                if (!report) {
                    res.send("No se encontro el reporte");
                }
                return report.update(req.body);
            })
            .then(updated => res.send(updated));
    } else {
        res.send("Solo los administradores pueden editar el reporte");
    }
});

module.exports = router;
