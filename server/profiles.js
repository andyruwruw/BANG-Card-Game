const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const profileSchema = new mongoose.Schema({

    created: {
      type: Date,
      default: Date.now
    },
});
  
const Profile = mongoose.model('Profile', profileSchema);

  module.exports = {
    model: Profile,
    routes: router,
  }