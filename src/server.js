const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("a s!");
});

module.exports = app;
