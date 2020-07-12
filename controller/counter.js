
let count = 0
class Counter {

    next(req, res) {
        count++
        res.json({
            error: false,
            data: {
                count
            }
        })
    }

    current(req, res) {


        res.json({
            error: false,
            data: {
                count
            }
        })
    }

    setCurrent(req, res) {

        if (req.body.current) {
            count = req.body.current
        }
        res.json({
            error: false,
            data: {
                count
            }
        })
    }
}
module.exports = new Counter()