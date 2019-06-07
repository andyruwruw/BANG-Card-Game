const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

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