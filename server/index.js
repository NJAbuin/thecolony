const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("../db");
const chalk = require("chalk");

const app = express();
const port = process.env.PORT || 3001;

//logger
app.use(morgan("tiny"));

//bodyṕarser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//modular routes
app.use("/*", (req, res) => res.send("server working"));

//sync database then start server
db.sync({ force: false })
  .then(() => {
    console.log(chalk.bgGreen.black("Connected to database..."));
    app.listen(port, () =>
      console.log(chalk.bgRed.black(`Listening on port ${port}`))
    );
  })
  .catch(console.error); //error catcher
