const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")


const app = express()
const port = 3500 | 3400;


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


app.listen(port, () => {
    console.log(`server listeninig on port ${port}`);
})