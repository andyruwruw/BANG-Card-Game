const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const preferencesSchema = new mongoose.Schema({

    created: {
      type: Date,
      default: Date.now
    },
});
  
const Preferences = mongoose.model('Preferences', preferencesSchema);

  module.exports = {
    model: Preferences,
    routes: router,
  }