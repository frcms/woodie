var express = require("express")

var router = express.Router()

router.get('/', async function(req, res, next) {
    res.status(200).send({
        "response": {
            "message": "Hello, World!",
            "version": "0.0.1",
            "code": 200
        }
    })
})

module.exports = router