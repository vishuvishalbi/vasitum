const jwt = require("../Util/jwt")
let users = new Map()

class User {

    login(req, res) {

        try {


            const { username, password } = req.body
            if ((!req.body.username || !req.body.password) || !(users.has(username) && users.get(username) == password)) {
                throw new Error("Please provide valid credentials!")
            }
            const token = jwt.getToken({ username })
            res.json({
                error: false,
                data: {
                    token,
                    username
                },
                message:"Success"
            })


        } catch ({ message }) {
            res.json({
                error: true,
                code: 500,
                message
            }, 500)
        }
    }

    register(req, res) {
        try {

            const { username, password } = req.body
            if (!req.body.username || !req.body.password) {
                throw new Error("Please provide valid credentials!")
            }
            users.set(username, password)
            const token = jwt.getToken({ username })
            res.json({
                error: false,
                data: {
                    token,
                    username
                },
                message:"Success"
            })


        } catch ({ message }) {
            res.json({
                error: true,
                code: 500,
                message
            }, 500)
        }


    } catch({ message }) {
        res.json({
            error: true,
            code: 500,
            message
        }, 500)
    }
}


module.exports = new User()