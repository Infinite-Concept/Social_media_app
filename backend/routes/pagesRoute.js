const router = require("express").Router()
const auth = require("../libs/auth")

router.get("/", auth.isAuthenticated, async(req, res) => {
    res.send("hello")
})

module.exports = router