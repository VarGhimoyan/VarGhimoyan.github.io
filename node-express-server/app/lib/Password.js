const bcrypt = require("bcrypt")

class Password {
    static hash(plainText) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(plainText, 10, (err, result) => {
                if (err) reject(err)

                resolve(result)
            })
        })
    }

    static compare(plainText, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plainText, hash, (err, result) => {
                if (err) reject(err)

                resolve(result)
            })
        })
    }
}


module.exports = { Password }