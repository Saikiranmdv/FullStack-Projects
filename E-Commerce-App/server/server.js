const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config()
const cookieParser = require('cookie-parser')
const app = express();

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "This is an example",
  });
});

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING...");
});

//routes
app.use('/user', require('./routes/userRouter.js'))

const URI = process.env.MONGODB_URL;

mongoose
  .connect(URI, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useNewUrlParserv: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch(err => {
    console.log(err);
  });
