const jwt = require('../Util/jwt')

module.exports = function verify(req, res, next) {

    try {
        let header = req.header('Authorization') || ""
        if (!header.trim().length) {
            throw new Error("Please provide valid token")
        }
        let token = header.split("Bearer")[1].trim()
        if (!token.length) {
            throw new Error("Please provide valid token")
        }
        if (!jwt.verify(token)) {
            throw new Error("Invalid Token")
        }

        next()

    } catch ({ message }) {
        return res.json({
            error: true,
            code: 500,
            message
        }, 500)
    }
}
