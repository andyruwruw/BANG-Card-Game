const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/bang', {
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const users = require("./users.js");
app.use("/api/users", users.routes);

const matchmaker = require("./matchmaker.js");
app.use("/api/matchmaker", matchmaker.routes);

const game = require("./game.js");
app.use("/api/game", game.routes);

app.listen(3004, () => console.log('Server listening on port 3004!'));