const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

// Mongoose Schemas and Objects
//
//2655

const gameSchema = new mongoose.Schema({
  GameId: Number,
  Stage: String,

  Started: false,

  PlayersWaitingFor: [],

  MatchTypeKey: String,
  Properties: [],

  StateData: {
    Players: [],
  
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

  TurnNumber: Number,
  PlayerTurn: String,
  TurnOrderType: String,

  CardInPlay: String,

  created: {
    type: Date,
    default: Date.now
  },
});
  
const Game = mongoose.model('Game', gameSchema);

/*
Player
  UserName: String
  Role: String
  Character: String
  Leader: Boolean

  Hand: Array
  Blue: Array
  Green: Array
  Orange: Array
  Health: Number
  LoadTokens: Number


  Turn: Boolean

  CheckActives: Boolean
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------DESKTOP FUNCTIONS
router.post("/desktop/create/:MatchId", async (req, res) => {    // Desktop creates match.
  let result = {                                      
    Created: false,
    Error: null,
    Desktop: null
  };
  result = createGame(result, req.body, req.param.MatchId);
  return res.send(result);
});

router.get("/desktop/check/:MatchId", async (req, res) => {    // Desktop gets match data.
  let result = {                                      
    Get: false,
    Error: null,
    Desktop: null
  };
  result = checkGame(result, req.param.MatchId);
  return res.send(result);
});

// ------------------------------------------------------------------------------------------------------------------------------------------------HAND FUNCTIONS
router.put("/hand/join/:MatchId", async (req, res) => {    // Mobile joins the match.
  let result = {                                      
    Joined: false,
    Error: null,
    Player: null
  };
  result = joinGame(result, req.body, req.param.MatchId);
  return res.send(result);
});

router.put("/hand/check/:MatchId", async (req, res) => {    // Mobile checks in for changes.
  let result = {                                      
    Check: false,
    Error: null,
    Player: null
  };
  result = checkGameHand(result, req.param.MatchId);
  return res.send(result);
});

router.put("/hand/draw/:MatchId", async (req, res) => {    // Mobile discards down their cards.
  let result = {                                      
    Success: false,
    Error: null,
    Player: null
  };
  result = drawCards(result, req.body, req.param.MatchId);
  return res.send(result);
});

router.put("/hand/playcard/:MatchId", async (req, res) => {    // Mobile plays a card from their hand
  let result = {                                      
    Played: false,
    Error: null,
    Player: null
  };
  result = playCard(result, req.body, req.param.MatchId);
  return res.send(result);
});

router.put("/hand/miss/:MatchId", async (req, res) => {    // Mobile plays an out of turn card.
  let result = {                                      
    Played: false,
    Error: null,
    Player: null
  };
  result = miss(result, req.body, req.param.MatchId);
  return res.send(result);
});

router.put("/hand/discard/:MatchId", async (req, res) => {    // Mobile discards down their cards.
  let result = {                                      
    MoveOn: false,
    Error: null,
    Player: null
  };
  result = discard(result, req.body, req.param.MatchId);
  return res.send(result);
});

/*
let Data = {
  GameId: String,
  MatchTypeKey: String,
  Properties: [],

  Player: {
    UserName: "",
    Secret: "",
  },

  Cards: [],

  TurnTimeout: Number,
}

*/

// Creates a new player object.
async function createPlayer(data, leaderBool) {
  let Player = {
    UserName: data.UserName,
    Role: null,
    Character: null,
    Leader: false,
    Health: null,

    Hand: [],
    Blue: [],
    Green: null,
    Orange: null,
    LoadTokens: null,

    Turn: false,

    CheckActives: false,

    CheckIn: new Date(),
  }
  if (leaderBool) {
    Player.Leader = true;
  }
  return Player;
}

// Fisher-Yates Shuffle
async function shuffleArray(array) { 
  var currentIndex = array.length;
  var temporaryValue = null;
  var randomIndex = null;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Creates a new game and leader's player info.
async function createGame(result, data, GameId) {
  try {
    let Leader = await createPlayer(data, true);

    let game = new Game({
      GameId: GameId,
      Stage: "roles",
    
      PlayersWaitingFor: [Leader.UserName],
    
      MatchTypeKey: data.MatchTypeKey,
      Properties: data.Properties,
    
      StateData: {
        Players: [Leader],
      
        DrawPile: [await shuffleArray(data.Cards)],
        DiscardPile: [],
      },
    
      OutcomeData: "",
      HasOutcome: false,
    
      TurnTimeout: {
        Time: data.TurnTimeout,
        Started: null,
        Expires: null,
      },
    
      TurnNumber: 1,
      PlayerTurn: null,
      TurnOrderType: "normal",
    
      CardInPlay: "",
    
      created: {
        type: Date,
        default: Date.now
      },
    });
    await game.save();
    result.Data = game;
    return result;
  } catch (error) {
    result.Error = error;
    return result;
  }
}

async function joinGame(result, data, GameId) {
  try {
    let game = Game.findOne({
      GameId: GameId
    });
  } catch (error) {
    result.Error = error;
    return result;
  }
}







  module.exports = {
    model: Game,
    routes: router,
  }