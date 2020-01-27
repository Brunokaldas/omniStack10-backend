const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
//change to your username and password in you database;
mongoose.connect(
  "mongodb+srv://username:password@cluster0-esroc.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
