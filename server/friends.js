const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const friendsSchema = new mongoose.Schema({

    created: {
      type: Date,
      default: Date.now
    },
});
  
const Friends = mongoose.model('Friends', friendsSchema);

  module.exports = {
    model: Friends,
    routes: router,
  }