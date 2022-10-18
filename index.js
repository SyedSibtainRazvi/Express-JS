const express = require("express")
const app = express()

const port = 3000


app.get("/" , (req, res) => {
    res.send("This is the Home Page")
})


app.get("/user" , (req, res) => {
    res.send("This is the user page")
})

app.get("/name" , (req, res) => {
    console.log("Json")
    res.status(200).json({details : "Hello"})
})

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
})