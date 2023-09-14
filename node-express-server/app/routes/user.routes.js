module.exports = app => {
    console.log("app connect")
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.post("/", user.create);

    router.post("/logIn", user.logIn)

    app.use('/api/users', router);
}