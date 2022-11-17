const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("This is the Home Page");
});

app.get("/user", (req, res) => {
  res.send("This is the user page");
});

app.get("/name", (req, res) => {
  console.log("Json");
  res.status(200).json({ details: "Hello" });
});

app.get("/health", (req, res) => {
  try {
    const health = {
      uptime: process.uptime(),
      status: "200 OK",
      timestamp: Date.now(),
    };
    res.status(200).send(health);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
