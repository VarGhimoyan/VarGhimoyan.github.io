const express = require("express");
const cors = require("cors");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
const user = require("./app/controllers/user.controller");


// const user = require("../controllers/user.controller.js");
// const user = require("./app/controllers/user.controller");
// var router = require("express").Router();



const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const { USER } = require("./app/config/db.config");
const passport = require("passport");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
// simple route


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    user.isRegistered
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "jwt_secret",
    },
    user.isLogged
  )
);


require("./app/routes/turorial.routes")(app);
require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


