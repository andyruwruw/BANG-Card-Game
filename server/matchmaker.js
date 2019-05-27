const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const matchSchema = new mongoose.Schema({                                                               // Mongoose Schema for available matches.
    MatchId: Number,       // Id Referencing back to game.
    MatchTypeKey: String,  // A Match Type definition Key.
    PlayerLimit: Number,   // Maximum number of players that can join the match
    Properties: [],        // Modifyers Active.
    TurnTimeout: Number,   // Time for each player to complete turns.
    Players: [],           // Players queued
    AutoStart: Boolean,    // Starts match when player limit reached.
    Private: Boolean,      // Private matches only include friends.
    LastCheckin: [],
    created: {             // Time and day created.
      type: Date,
      default: Date.now
    },
});
  
const Match = mongoose.model('Match', matchSchema);                                                     // Setting object type for schema.


router.post("/find", auth.verifyToken, User.verify, async (req, res) => {                               // Player queing for available match.
  let result = {                                        // Holds results of each accompanying function to send in resolution
    MatchId: null,
    Error: null,
    Joined: false,
    Data: null
  };

  result = findAvailableMatches(result);                // Finds available matches, return result with new MatchId, or error.

  if (result.MatchId != null)                           // If an empty match was found.
  {
    result = joinMatch(result, req.user);               // Update the match with user information, if successful, update joined result.
  }
  else if (result.Error == null)                        // If no error was encountered
  {
    result = createMatch(result, req.user, req.body);   // Create a new match, and log the ID.
  }
  return res.send(result);                              // Send results back to user.
});


router.delete("/leave", auth.verifyToken, User.verify, async (req, res) => {                            // Player no longer queing for an available match.
  let result = {                                        // Holds results of each accompanying function to send in resolution
    Success: false,
    Error: "",
  };
  let match = Match.findOne({                           // Finds the match with ID.
    MatchId: req.body.MatchId,
  });
  if (match.Players.length <= 1)                        // If user is the only player in queue.
  {
    try {
      await Match.deleteOne({                           // Delete the match and report success.
        MatchId: req.body.MatchId,
      });
      result.Success = true;
      return res.send(result);
    } catch (error) {                                   // If error, report failure and error message.
      result.Error = error;
      return res.send(result);
    }
  }
  else {                                                // If user is one of many in queue.
    try {
      let newPlayers = match.Players;                   // Save the array of usernames.
      for (var i = 0; i < newPlayers.length; i++)
      {
        if (newPlayers[i] == req.user.username)         // Delete the user and report success.
        {
          newPlayers.splice(i, 1);
          result.Success = true;
          return res.send(result);
        }
      }
    } catch (error) {                                    // If error, report failure and error message.
      result.Error = error;
      return res.send(result);
    }
  }
});

router.get("/check", auth.verifyToken, User.verify, async (req, res) => {
  let match = Match.findOne({
    MatchId: req.body.MatchId,
  });
  let result = {
    CreateGame: match.AutoStart,
    StartGame: match.AutoStart,
    Players: match.Players,
    LastCheckin: match.LastCheckin,
    Success: true,
    Error: "",
    Data: null,
  };
  let currentTime = new Date();
  let disconnected = [];
  for (var i = 0; i < result.LastCheckin.length; i++)
  {
    if (result.LastCheckin[i].user == req.user.username)
    {
      result.LastCheckin[i].time = currentTime;
      break;
    }
    else 
    {
      if (currentTime.getTime() - result.LastCheckin[i].time.getTime() > 30000)
      {
        disconnected.push({user: result.LastCheckin[i].user, index: i});
      }
    }
  }
  for (var i = 0; i < disconnected.length; i++)
  {
    let newPlayers = result.Players;
    let newCheckin = result.LastCheckin;
    for (var j = 0; j < newPlayers.length; j++)
    {
      if (newPlayers[i] == disconnected[i].user)
      {
        newPlayers.splice(i, 1);
        break;
      }
    }
    newCheckin.splice(disconnected[i].index, 1);

    match = await Match.updateOne({
      MatchId = result.MatchId,
    },
    {
      $set: {"Players": newPlayers,
             "LastCheckin": newCheckin
            }
    });
  }
  result.Data = match;
  return res.send(result);
});

router.delete("/delete", auth.verifyToken, User.verify, async (req, res) => {                            // Player no longer queing for an available match.
  try {
    let result = {                              // Holds results of each accompanying function to send in resolution
      Success: false,
      Error: "",
    };
    Match.deleteOne({                           // Finds the match with ID.
      MatchId: req.body.MatchId,
    });
    result.Success = true;
    return res.send(result);
  } catch (error) {                             // If error, report failure and error message.
    result.Error = error;
    return res.send(result);
  }
});















// FINDING A NEW MATCH

async function findAvailableMatches(result) {
  try {
    let matches = await Match.find({});
    for (var i = 0; i < matches.length; i++)
    {
      if (matches[i].Players.length < matches[i].PlayerLimit && !matches[i].AutoStart)
      {
        result.MatchTypeKey = matches[i].MatchTypeKey;
        return result;
      }
    }
    return result;
  } catch (error) {
    result.Error = error;
    return result;
  }
}

async function joinMatch(result, user) {
  try {
    let match = await Match.updateOne({
      MatchId = result.MatchId,
    },
    {
      $push: {"Players": user.username,
              "LastCheckin": {user: user.username, time: new Date()}},
    });
    result.Joined = true;
    result.Data = match;
    return result;
  } catch (error) {
    result.Error = error;
    return result;
  }
}

async function createMatch(result, user, data) {
  try {
    let match = new Match({
      MatchId: data.MatchId,            // Match Identifyer
      MatchTypeKey: data.MatchTypeKey,  // A Match Type definition Key.
      PlayerLimit: data.PlayerLimit,    // Maximum number of players that can join the match
      Properties: data.Properties,      // Modifyers Active.
      TurnTimeout: data.TurnTimeout,    // Time for each player to complete turns.
      Players: [user.username],         // Players queued
      AutoStart: false,                 // Starts match when player limit reached.
      Private: data.Private,            // Private matches only include friends.
      LastCheckin: [{user: user.username, time: new Date()}],
      created: {                        // Date Created
        type: Date,
        default: Date.now
      }
    });
    await match.save();
    result.Data = match;
    return result;
  } catch (error) {
    result.Error = error;
    return result;
  }
}

// DELETING A MATCH






  module.exports = {
    model: Match,
    routes: router,
  }