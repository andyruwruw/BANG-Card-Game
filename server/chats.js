const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

// Mongoose Schemas and Objects

const chatSchema = new mongoose.Schema({
    fromUsername: String,
    fromUserID: String,

    text: String,

    type: Number,

    created: {
      type: Date,
      default: Date.now
    },
});
  
const Chat = mongoose.model('Chat', chatSchema);

const userChatsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    chats: [],
});
  
const UserChats = mongoose.model('UserChats', userChatsSchema);

const chatRoomSchema = new mongoose.Schema({
    gameId: String,
    players: [],
});

const ChatRoom = mongoose.model('ChatROom', chatRoomSchema);

// Private Chats

router.post("/user", auth.verifyToken, User.verify, async (req, res) => {
    const chatroom = new ChatRoom({
      gameId: req.body.gameId,
      chats: [],
      players: [],
    });
    try {
      await chatroom.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.put("/user/:id", auth.verifyToken, User.verify, async (req, res) => {
    const chatroom = await ChatRoom.findOne({
      gameId: req.params.id,
    });
    var varified = false;
    for (var i = 0; i < chatroom.players.length; i++)
    {
        if (req.user.name == chatroom.players[i])
        {
            verified = true;
        }
    }
    if (verified)
    {
        try {
            const newChat = new GameChat({
                fromUsername: req.user.name,
                text: req.body.text,
            });
            await ChatRoom.updateOne(
            {
                gameId: req.params.id,
            },
            {
                $push: {'chats': newChat},
            });
            return res.sendStatus(200);
        } catch (error) {
            console.log(error);
        }
    }
    return res.sendStatus(403);
});

router.get("/user/:id", auth.verifyToken, User.verify, async (req, res) => {
    try {
      let chatroom = await ChatRoom.findOne({
        gameId: req.params.id
      });
      return res.send(chatroom);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// In-Game Chats

router.post("/game", auth.verifyToken, User.verify, async (req, res) => {
    const chatroom = new ChatRoom({
      gameId: req.body.gameId,
      chats: [],
      players: [],
    });
    try {
      await chatroom.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.put("/game/:id", auth.verifyToken, User.verify, async (req, res) => {
    const chatroom = await ChatRoom.findOne({
      gameId: req.params.id,
    });
    var varified = false;
    for (var i = 0; i < chatroom.players.length; i++)
    {
        if (req.user.name == chatroom.players[i])
        {
            verified = true;
        }
    }
    if (verified)
    {
        try {
            const newChat = new GameChat({
                fromUsername: req.user.name,
                text: req.body.text,
            });
            await ChatRoom.updateOne(
            {
                gameId: req.params.id,
            },
            {
                $push: {'chats': newChat},
            });
            return res.sendStatus(200);
        } catch (error) {
            console.log(error);
        }
    }
    return res.sendStatus(403);
});

router.get("/game/:id", auth.verifyToken, User.verify, async (req, res) => {
    try {
      let chatroom = await ChatRoom.findOne({
        gameId: req.params.id
      });
      return res.send(chatroom);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

  module.exports = {
    model: UserChats,
    routes: router,
  }