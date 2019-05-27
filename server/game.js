const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const gameLogic = require("./gameLogic.js");

// Mongoose Schemas and Objects

const gameSchema = new mongoose.Schema({
  GameId: Number,
  MatchTypeKey: String,
  State: [],
  Properties: [],
  StateData: {
    Roles: [],
    Hands: [],
    Actives: [],
    Health: [],
  
    DrawPile: [],
    DiscardPile: [],
  },
  OutcomeData: String,
  HasOutcome: Boolean,
  TurnTimeout: {
    Time: Number,
    Started: Date,
    Expires: Date,
  },
  WaitingTimeout: {
    Time: 30,
    Started: Date,
    Expires: Date,
  },
  Turn: {
    TurnNumber: Number,
    PlayersWaitingFor: [],
    CardInPlay: String,
  },
  TurnType: String,
  TurnOrderType: String,

  Players: [],

  created: {
    type: Date,
    default: Date.now
  },
});
  
const Game = mongoose.model('Game', gameSchema);

// Creates a game
// Returns Roles
router.post("/startgame/:MatchId", auth.verifyToken, User.verify, async (req, res) => {    // Create a match when ready.
  let result = {                                      
    MatchId: null,
    Error: null,
    Joined: false,
    Data: null
  };
  result = createGame(result, req.user, req.body);
  return res.send(result);
});

async function createGame(result, user, data) {
  try {
    let game = new Game({
      GameId: data.GameId,
      MatchTypeKey: data.MatchTypeKey,
      State: [],
      Properties: data.Properties,
      StateData: {
        Roles: [],
        Characters: [],
        Hands: [],
        Actives: [],
        Health: [],
      
        DrawPile: [],
        DiscardPile: [],
      },
      OutcomeData: "None",
      HasOutcome: false,
      TurnTimeout: {
        Time: data.TurnTimeout,
        Started: null,
        Expires: null,
      },
      WaitingTimeout: {
        Time: 30,
        Started: null,
        Expires: null,
      },
      Turn: {
        TurnNumber: 1,
        PlayersWaitingFor: [],
        CardInPlay: "",
      },
      TurnType: data.TurnType,
      TurnOrderType: data.TurnOrderType,
    
      Players: data.Players,
    
      created: {
        type: Date,
        default: Date.now
      },
    });
    
    game.DrawPile = new Deck(assembleCards(game.Properties));
    game.Roles = shuffleRoles(Players.length);
    for (var i = 0; i < game.Players.length; i++)
    {
      game.State.push("Waiting");
    }
    await game.save();
    result.Data = game;
    return result;
  } catch (error) {
    result.Error = error;
    return result;
  }
}

// Get Role, Join Game
router.put("/joingame/:MatchId", auth.verifyToken, User.verify, async (req, res) => {
  let game = await Game.findOne({
    GameId: req.params.MatchId,
  });
  return res.send(game);
});



router.get("/check/:MatchId/:PlayerNum", auth.verifyToken, User.verify, async (req, res) => {    // Create a match when ready.
  let result = {                                      
    Refresh: false,
  };
  result = createGame(result, req.user, req.body);
  return res.send(result);
});





  module.exports = {
    model: Game,
    routes: router,
  }