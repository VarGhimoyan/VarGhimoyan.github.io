const jwt = require("jsonwebtoken");
const passport = require("passport");
const { Password } = require("../lib/Password");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt")


exports.create = async (req, res) => {
    // console.log(req.body)

    let error = {}
    for (let key in req.body) {
        if (req.body[key] == '') {
            error[key] = `fill data in ${key} ...`
        }
    }
    if (Object.keys(error).length > 0) {
        return res.send({ error })
    } else {
        req.body.password = await Password.hash(req.body.password)
        console.log(req.body.password)
        await User.create({ username: req.body.name, email: req.body.email, password: req.body.password })
        return res.send({ success: true })
    }
}

exports.logIn = async (req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', function (err, user, info, status) {
        // console.log(err)
        // console.log(user)
        // console.log(info)
        // console.log(status)
        if (info) { return res.send(info) }
        else if (!user) { return res.send({ message: 'Error' }) }
        const token = jwt.sign({ id: user.id }, "jwt_secret");
        console.log(token)
        res.json({ token: token });
    })(req, res, next);
}

exports.isRegistered = async (email, password, done) => {
    console.log("isRegistered")
    let user = await User.findOne({
        where: { email: email },
    });
    if (!user) {
        return done(null, false, {
            message: "Incorrect email",
        });
    } else if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, {
            message: "Incorrect password ",
        });
    }
    return done(null, user);
}

exports.isLogged = async (jwt_payload, done) => {
    console.log("isLogged")
    User.findByPk(jwt_payload.id)
        .then((user) => {
            return done(null, user);
        })
        .catch((err) => {
            return done(err, false, {
                message: "Token not matched.",
            });
        });
}


// Validate request
// if (!req.body.title) {
//     res.status(400).send({
//         message: "Content can not be empty!"
//     });
//     return;
// }



