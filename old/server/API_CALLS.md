# API Calls

# User (/users)

Account registration and login.

# Match Making (/matchmaker)

Match creation and joining, triggers game creation.


## Find a Match
    /find
**Parameters**
| Key | Description|Type|
|------------|-------|-------|
|req.user|Object|User data.|

**Return Values**
| Key | Description|Type|
|------------|-------|-------|
|result.Data.MatchId|Number|Id for given match.|
|result.Data.Error|String|Encountered errors on finding match.|
|result.Data.Joined|Boolean|Logs successfully joining match.|
|result.Data.MatchTypeKey|String|Match gamemode type.|
|result.Data.PlayerLimit|Number|Desired number of players.|
|result.Data.Properties|Array of Strings|Modifyers for match.|
|result.Data.TurnTimeout|Number|Id for given match.|
|result.Data.Players|Array of Strings|Usernames of players joined.|
|result.Data.AutoStart|Boolean|Starts the game on true.|
|result.Data.Private|Boolean|Private matches are only accesable by password|
|result.Data.created|Date|Date and time match was created.|

## Leave Match
    /leave
**Parameters**
| Key | Description|Type|
|------------|-------|-------|
|req.user|Object|User data.|
|req.body.MatchId|Number|Id for given match.|

**Return Values**
| Key | Description|Type|
|------------|-------|-------|
|result.Success|Boolean|Logs successfully leaving match.|
|result.Error|String|Encountered errors on finding match.|

## Check Match
    /check
**Parameters**
| Key | Description|Type|
|------------|-------|-------|
|req.user|Object|User data.|
|req.body.MatchId|Number|Id for given match.|

**Return Values**
| Key | Description|Type|
|------------|-------|-------|
|result.CreateGame|Boolean|If true, user creates the game data.|
|result.StartGame|Boolean|If true, user will await creation of game data.|
|result.Players|Array of Strings|Array of usernames of queued users.|
|result.Success|Boolean|Logs successfully checking match.|
|result.Error|String|Encountered errors on finding match.|


# Game (/game)

Game play and logic.

# Chat (/chats)

In game and private messages.

# Preferences (/preferences)

User settings.

# Profiles (/profiles)

User data displayed with friends.