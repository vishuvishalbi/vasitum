const jwt = require('jsonwebtoken')

class Jwt {

    secret = "SECRET" //For now  keeping secret out here else would have created seperate file for configs

    getToken(data) {
        return jwt.sign(data, this.secret)
    }

    decode(token) {
        return jwt.decode(token, this.secret)
    }

    verify(token) {
        return jwt.verify(token, this.secret)
    }
}

module.exports = new Jwt()