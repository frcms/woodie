var express = require("express")

var router = express.Router()

router.get('/', async function(req, res, next) {
    res.status(200).send({
        "response": {
            "routes": router.stack,
            "version": "0.0.1",
            "code": 200
        }
    })
})

module.exports = router