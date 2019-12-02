const db = require("../index");
const S = require("sequelize");

class Report extends S.Model { }

Report.init(
    {
        candidateID: {
            type: S.INTEGER
        },
        jobPostingID: {
            type: S.INTEGER
        },
        informe: {
            type: S.STRING
        }
    },
    { sequelize: db, modelName: "report" }
);

module.exports = Report;
