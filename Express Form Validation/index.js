const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const path = require("path")

const {check, validation} = require("express-validator")

const PORT = process.env.port || 3000


// Setting up View Engine for test purposes

app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

// Setting up middleware

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/", function (req, res) {
    res.render("Form")
})

app.post("/validate", [
    check("title", "title should be valid")
    .isLength({min:5, max:20}),
    check("questions", "questions are selected")
    .isLength({min: 5, max:30}),
    check("members", "members should be valid")
    .isLength({min:5, max:20}),
    check("channel", "channel is selected")
    .isLength({min: 5, max:30})
]), (req, res) => {
    const error = validation(req)

    if(!error.isEmpty()){
        res.json(error)
    }
    else{
        res.send("Form Validated Successfully")
    }
}

app.listen(PORT, function (error) {
    if (error) throw error
    console.log("Server", PORT)
})