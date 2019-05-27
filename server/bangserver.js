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

// Routes

const users = require("./users.js");
app.use("/api/users", users.routes);

const preferences = require("./preferences.js");
app.use("/api/preferences", preferences.routes);

const profiles = require("./profiles.js");
app.use("/api/profiles", profiles.routes);

const matchmaker = require("./matchmaker.js");
app.use("/api/matchmaker", matchmaker.routes);

const game = require("./game.js");
app.use("/api/game", game.routes);

const chats = require("./chats.js");
app.use("/api/chats", chats.routes);

const friends = require("./friends.js");
app.use("/api/friends", friends.routes);

app.listen(3004, () => console.log('Server listening on port 3004!'));