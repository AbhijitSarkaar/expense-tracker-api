const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

app.listen(process.env.PORT);
