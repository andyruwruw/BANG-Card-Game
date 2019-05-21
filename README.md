<style>
@font-face {
    font-family: "RioGrande";
    src: url('./fonts/RioGrande.ttf') format('truetype');
}
</style>
<span style="font-family: 'RioGrande', Fallback, sans-serif; font-size: 5em;">BANG-Card-Game</span>

Following my completion of Express-Chess and To-Do List, I thought it'd be fun to try to combine what I've learned to recreate one of my favorite card games with the family. The app will use Vue CLI for the front-end, and Express and Mongo for the back-end.

<span style="font-family: 'RioGrande', Fallback, sans-serif; font-size: 3em;">Preparation</span>

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

## Characters
Each Western character has some special abilities, which make you unique. The **bullets** you have shown how many **life points** you begin the game with, i.e. how many times you can be hit before being **eliminated from play**.

Moreover, the mullets indicate **how many cards** the player can hold in his hand at **the end of his turn** (hand size limit).

<span style="font-family: 'RioGrande', Fallback, sans-serif; font-size: 3em;">The Game</span>

The Sheriff begins. The game is played in turns, in clockwise order. Each player's turn is divided into three phases:

    1. Draw Cards;
    2. Play any number of cards;
    3. Discard excess cards.

### 1. Draw Two Cards
Draw the top two cards from the draw pile. As soon as the draw pile is empty
shuffle the discard pile to create a new playing deck.

### 2. Play any number of cards
Now you may play cards to hep yourself or hurt the other players, trying to eliminate them. You can only play cards during your turn (exception: *Missed!* and *Beer*, see below). You are not forced to play cards during this phase. You can play any number of cards; there are only **three limitations**:

    You can play only 1 BANG! card per turn;
    You can only have 1 copy of any one card in play;
    You can only have 1 weapon in play.

*Example: If you put a Barrel in play, you cannot play another one, since you would end up having two copies of the same card in front of you.*

There are two types of cards: **brown-bordered cards** (play and discard) and **blue-bordered cards** (weapons and other objects).

### Brown-Bordered Cards
Play these cards by putting them directly into the discard pile and applying the effect described with text or with symbols on the cards.

### Blue-Bordered Cards
Play these cards by playing them face up in front of you (exception *Jail*). Blue cards in front of you are hence defined to be "in play". The effect of these cards last until they are discarded or removed somehow (e.g. through the play of a *Cat Balou*),, or a special event occurs (e.g. in the case of *Dynamite*). There is no limit on the cards you can have in front of you provided they do not share the same name.

### 3. Discard Excess Cards
Once the second phase is over (you do not want to or cannot play any more cards), then you must discard from you hand any cards exceeding your hand-size limit. Remember that your **hand size limit**, at the **end of your turn**, is equal to the number of bullets (i.e. life points) you currently have. Then it is the next players turn, in clockwise order.

### Distance Between Players
The distance between two players is the **minimum number of places between them**, counting clockwise or counter-clockwise. The distance is very imporant, because all cards with a sight take it into account. Normally you can reach only targets with a **distance of 1**. When a player is eliminated, he is no longer counted when evaluating the distance: some players will get "closer" when someone is eliminated.

### Eliminating a Character
When **you lose your last life point**, you are eliminated and **your game is over**, unless you immediately play a *Beer*. When you are eliminated from the game, show your **role** card and discard all the cards you have in hand and in play.

### Penalties and Rewards
    
    If the Sheriff eliminates a Deputy, the Sheriff must discard all the cards he has in hand and in play.

    Any player eliminating an Outlaw (even if the eliminating player is himself and Outlaw) must draw a reward of 3 cards from the deck.

<span style="font-family: 'RioGrande', Fallback, sans-serif; font-size: 3em;">End of the Game</span>

The game ends when one of the following conditions are met:

    a) The Sheriff is killed. If the Renegade is the only one alive, he wins. Otherwise, the Outlaws win;

    b) All the Outlaws and the Renegade are killed. The Sheriff and his Deputies win.



