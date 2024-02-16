const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt');
const port = 3000;

const mongoDB = "mongodb://localhost:27017/testdb";
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", require("./api/users.js"));

app.listen(port, () => console.log(`Server listening a port ${port}!`));
