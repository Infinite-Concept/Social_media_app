const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const authenticate = require("./routes/authentication")
const pages = require("./routes/pagesRoute")


const app = express()
const port = 3500 | 3400;

// connect to mongoose 
mongoose.connect("mongodb://localhost/social")
    .then(() => {
        app.listen(port, () => {
            console.log(`server listeninig on port ${port}`);
        })
    })
    .catch((err) => {
        console.log("unable to connect to mongoose");
    })

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use("/user", authenticate)
app.use("/home", pages)



