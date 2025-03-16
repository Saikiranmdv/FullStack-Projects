const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "This is an example",
  });
});

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING...");
});

const URI = process.env.MONGODB_URL;

mongoose
  .connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParserv: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch(err => {
    console.log(err);
  });
