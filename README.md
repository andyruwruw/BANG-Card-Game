
<link href="https://fonts.googleapis.com/css?family=Staatliches&display=swap" rel="stylesheet">

<span style="margin: 0 auto; width: 100%; display: block; text-align: center; font-size: 5em; font-family: 'Staatliches', cursive; font-weight: bolder">BANG! the Card Game</span>

<img src="./README Images/bang.jpg" style="margin: 0 auto; display: block; width: 50%; border: 5px solid black; border-radius: 5px;">

<p></p>

---
<span style="text-align: center; display: block;font-size: 3em; font-family: 'Staatliches', cursive; font-weight: bolder">Table Of Contents</span>

1. [Game Rules](#gamerules)
   1. [Preparation](#preparation)
      1. [Characters](#characters)
   2. [The Game](#thegame)
      1. [Draw Two Cards](#drawtwocards)
      2. [Play any Number of Cards](#playanynumberofcards)
      3. [Discard Excess Cards](#discard)
   3. [Game Over](#gameover)
   4. [Card Types](#cardtypes)
      1. [Brown-Bordered Cards](#Brown-Bordered-Cards)
      2. [Blue-Bordered Cards](#Blue-Bordered-Cards)
   5. [Other Details](#otherdetails)
      1. [Distance Between Players](#Distance-Between-Players)
      2. [Eliminating a Character](#Eliminating-a-Character)
      3. [Penalties and Rewards](#Penalties-and-Rewards)
2. [Expansions](#expansions)
   1. [Dodge City](#dodgecity)
   2. [High Noon](#highnoon)
   3. [Armed and Dangerous](#armedanddangerous)
3. [Implementation](#implementation)
   1. [Front-End](#frontend)
   2. [Back-End](#backend)


---

<span style="text-align: center; display: block;font-size: 3em; font-family: 'Staatliches', cursive; font-weight: bolder" id="gamerules">Game Rules</span>

<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="preparation">1. Preparation</span>

Take as many **role cards** as the number of players, divided as follows:

    4 Players:  1 Sheriff,  1 Renegade, 2 Outlaws
    5 Players:  1 Sheriff,  1 Renegade, 2 Outlaws, 1 Deputy
    6 Players:  1 Sheriff,  1 Renegade, 3 Outlaws, 1 Deputy
    7 Players:  1 Sheriff,  1 Renegade, 3 Outlaws, 2 Deputies


Shuffle the cards and give one, **face down**, to each player. The **Sheriff reveals himself** by turning his card **face up**. All other players look at their role but keep it **secret**.

Shuffle the **characters** and give one **face up** to each player.

Each player now announces the name of his character and reads his ability. Each player takes as many **bullets** as shown on their character.

The **Sherrif** plays the game with **one additional bullet**.

Shuffle the **playing cards**, and give each player as many cards, face down, as the bullets he has. Put the remaining playing cards facedown in the middle of the table, as a draw pile. Leave room for the discard pile.

<div style="display: flex;">
<div style="display:block; width: 45%;">
<img src="./README Images/character.png" style="display: block; width: 100%;">
</div>
<div style="display:block; width: 55%; padding: 10px; padding-top: 0px">
<span style="font-size: 1.5em" id="characters">Characters</span>

Each Western character has some special abilities, which make you unique. The **bullets** you have shown how many **life points** you begin the game with, i.e. how many times you can be hit before being **eliminated from play**.

Moreover, the mullets indicate **how many cards** the player can hold in his hand at **the end of his turn** (hand size limit).
</div>
</div>






<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="thegame">2. The Game</span>

The Sheriff begins. The game is played in turns, in clockwise order. Each player's turn is divided into three phases:

    1. Draw Cards;
    2. Play any number of cards;
    3. Discard excess cards.
<span style="font-size: 1.5em" id="drawtwocards">A. Draw two cards.</span>

Draw the top two cards from the draw pile. As soon as the draw pile is empty
shuffle the discard pile to create a new playing deck.

<span style="font-size: 1.5em" id="playanynumberofcards">B. Play any number of cards.</span>

Now you may play cards to hep yourself or hurt the other players, trying to eliminate them. You can only play cards during your turn (exception: *Missed!* and *Beer*, see below). You are not forced to play cards during this phase. You can play any number of cards; there are only **three limitations**:

    You can play only 1 BANG! card per turn;
    You can only have 1 copy of any one card in play;
    You can only have 1 weapon in play.

*Example: If you put a Barrel in play, you cannot play another one, since you would end up having two copies of the same card in front of you.*

<span style="font-size: 1.5em" id="discard">C. Discard Excess Cards</span>

Once the second phase is over (you do not want to or cannot play any more cards), then you must discard from you hand any cards exceeding your hand-size limit. Remember that your **hand size limit**, at the **end of your turn**, is equal to the number of bullets (i.e. life points) you currently have. Then it is the next players turn, in clockwise order.


<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="gameover">3. Game Over</span>

The game ends when one of the following conditions are met:

    a) The Sheriff is killed. If the Renegade is the only one alive, he wins. Otherwise, the Outlaws win;

    b) All the Outlaws and the Renegade are killed. The Sheriff and his Deputies win.

<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="cardtypes">Card Types</span>

There are two types of cards: **brown-bordered cards** (play and discard) and **blue-bordered cards** (weapons and other objects).



<div style="display: flex; margin: 0 auto; margin-bottom: 20px">
<div style="display:block; width: 40%;">
<img src="./README Images/brown.jpg" style="display: block; width: 100%;">
</div>
<div style="display:block; width: 55%; padding: 10px; padding-top: 0px">
<span style="font-size: 1.5em" id="Brown-Bordered-Cards">Brown-Bordered Cards</span>

Play these cards by putting them directly into the discard pile and applying the effect described with text or with symbols on the cards.
</div>
</div>

<div style="display: flex; margin: 0 auto;">
<div style="display:block; width: 40%;">
<img src="./README Images/blue.jpg" style="display: block; width: 100%;">
</div>
<div style="display:block; width: 55%; padding: 10px; padding-top: 0px">
<span style="font-size: 1.5em" id="Blue-Bordered-Cards">Blue-Bordered Cards</span>

Play these cards by playing them face up in front of you (exception *Jail*). Blue cards in front of you are hence defined to be "in play". The effect of these cards last until they are discarded or removed somehow (e.g. through the play of a *Cat Balou*),, or a special event occurs (e.g. in the case of *Dynamite*). There is no limit on the cards you can have in front of you provided they do not share the same name.
</div>
</div>

<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="otherdetails">Other Details</span>

## Distance Between Players
The distance between two players is the **minimum number of places between them**, counting clockwise or counter-clockwise. The distance is very imporant, because all cards with a sight take it into account. Normally you can reach only targets with a **distance of 1**. When a player is eliminated, he is no longer counted when evaluating the distance: some players will get "closer" when someone is eliminated.

## Eliminating a Character
When **you lose your last life point**, you are eliminated and **your game is over**, unless you immediately play a *Beer*. When you are eliminated from the game, show your **role** card and discard all the cards you have in hand and in play.

## Penalties and Rewards
    
    i. If the Sheriff eliminates a Deputy, the Sheriff must discard all the cards he has in hand and in play.

    ii. Any player eliminating an Outlaw (even if the eliminating player is himself and Outlaw) must draw a reward of 3 cards from the deck.

---
<span style="text-align: center; display: block;font-size: 3em; font-family: 'Staatliches', cursive; font-weight: bolder" id="expansions">Expansions</span>

<div style="margin-bottom: 60px;">
<div style="display: flex;">
<img src="./README Images/DODGECITY.jpg" style="display: block; width: 200px; height: 300px;">
<div style="width: calc(100vw - 200px); margin-left: 20px;">
<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="dodgecity">Dodge City</span>

A populous, chaotic, vibrant and... dangerous town! Its saloons are legendary, as are the characters stopping by. Attracted by the sudden richness of the city, bad guys walk the streets and shootouts appear on each day's menu. Protecting Law and Order is a task only for the bravest of Sheriffs. Are you up to the challenge, or will you be visiting the world's most famous Boot Hill?

    7 New Brown Cards

    2 New Blue Cards

    15 New Character Cards

    13 New Green Cards

</div>
</div>

<div style="display: flex; margin: 0 auto; margin-bottom: 20px">
<div style="display:block; width: 40%;">
<img src="./README Images/green.jpg" style="display: block; width: 100%;">
</div>
<div style="display:block; width: 55%; padding: 10px; padding-top: 0px">
<span style="font-size: 1.5em" id="Brown-Bordered-Cards">Green-Bordered Cards</span>

Some of the new cards have a **green** border. These cards are played in front of you, face up, like the blue-bordered cards. To use an effect, you must take the card from in front of you and **discard it**. However, you **cannot** use the green bordered cards **on the same turn** in which you have played them. Only cards with a missed symbol can be played out of turn. Green bordered cards in front of players are also defined to be "in play" and can be removed through the play of a *Cat Balou*, *Panic!*, *Can Can*, etc. just like blue-bordered cards.

Note that if you take a green card with cards like *Panic!* or *Rag Time*, you cannot use it on the same turn: in fact, you must take the card into your hand, then you have to play it in front of you, and wait until the next turn to use it.
</div>
</div>
</div>

<div style="display: flex; margin-bottom: 60px;">
<img src="./README Images/HIGH.jpg" style="display: block; width: 200px; height: 300px;">
<div style="width: calc(100vw - 200px); margin-left: 20px;">
<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="dodgecity">High Noon</span>
    
In the Wild West, the shootouts between the Outlaws and the Sheriff are becoming particularly tough. Players must be ready to welcome the Daltons, keep cool during the gold rush and be really careful when walking in the ghost town! 

Every round has a new and dangerous twist!

    15 New High Noon Scenario Cards
</div>
</div>




<div style="display: flex; margin-bottom: 20px;">
<img src="./README Images/ARMED.png" style="display: block; width: 200px; height: 300px;">
<div style="width: calc(100vw - 200px); margin-left: 20px;">
<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="dodgecity">Armed and Dangerous</span>

Armed and dangerous: that's how new Gunslingers come into town, itchin' for a fight. Not to mention that load of new goods just delivered. It holds many suprises: deadly weapons, powerful gear, and lethal ammo... the Dangerous cards! But their use is limited, and if you're not quick enough to take advantage of them, your enemies will be!

    9 New Brown Cards

    8 New Characters

    13 New Dangerous Cards: 9 Objects and 4 Weapons

    32 Load Tokens
</div>
</div>


---
<span style="text-align: center; display: block;font-size: 3em; font-family: 'Staatliches', cursive; font-weight: bolder" id="implementation">Implementation</span>

<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="armedanddangerous">Front-End</span>

<span style="font-size: 2em; font-family: 'Staatliches', cursive; font-weight: bolder" id="armedanddangerous">Back-End</span>
