const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("../db");
const chalk = require("chalk");
const passport = require("../db/passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const routes = require("../routes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 6969;

//bodyṕarser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//logger
app.use(morgan("tiny"));
app.use(express.static("dist"));

//passport
app.use(
  session({ secret: "cualquierCosa", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

//modular routes
/* app.use("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "../dist/index.html"))
); */
app.use("/api", routes);

app.use("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "../dist/index.html"))
);

//sync database then start server
db.sync({ force: false })
  .then(() => {
    console.log(chalk.bgGreen.black("Connected to database..."));
    app.listen(port, () => console.log(`Listening on port ${port}`, stonks));
  })
  .catch(console.error); //error catcher

const stonks = `                               
_____ _____ _____ _____ _____ _____ 
|   __|_   _|     |   | |  |  |   __|
|__   | | | |  |  | | | |    -|__   |
|_____| |_| |_____|_|___|__|__|_____|                                                                                                                
`;
