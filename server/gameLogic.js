const STAGE = [
    "load",
    "rolecards",
    "sheriffreveal",
    "charpick",
    "charreveal",
    "lifeassign",
    "handcards",

    "drawtwo",
    "cardplayed",
    "discard",
];

const SCENARIOS = {
    Blessing: 1,
    Curse: 1,
    GhostTown: 1,
    GoldRush: 1,
    Hangover: 1,
    Shootout: 1,
    Daltons: 1,
    Doctor: 1,
    Reverend: 1,
    Sermon: 1,
    TrainArrival: 1,
    Thirst: 1,
    HighNoon: 1,
    Schofield: 1,
}

const ORIGINAL_DECK = {
    bang: [13, 13, 0],
    missed: [6, 6],
    beer: 6,
    duel: 3,

    catbleu: 4,
    panic: 4,
    indians: 2,
    gattling: 1,

    stationwag: 2,
    wellsfargo: 1,
    generalstore: 2,
    saloon: 1,

    gvolcanic: 2,
    gscolfield: 3,
    gremington: 1,
    grevcara: 1,
    gwichester: 1,

    appaloosa: 1,
    mustang: 2,
    barrel: 2,
    dynamite: 1,
    jail: 3,
};

const DODGE_CITY = {
    bang: [0, 0, 4],
    missed: [1, 0],
    beer: 2,

    catbleu: 1,
    panic: 1,
    indians: 1,

    generalstore: 2,

    gremington: 1,
    grevcara: 1,

    mustang: 2,
    barrel: 2,
    dynamite: 1,

    ragtime: 1,
    springfield: 1,
    punch: 1,
    brawl: 1,

    whiskey: 1,
    dodge: 2,
    tequila: 1,

    binocular: 1,
    hideout: 1,

    buffalo: 1,
    pepperbox: 1,
    howitzer: 1,
    knife: 1,

    ponyexpress: 1,
    conestoga: 1,
    derringer: 1,
    cancan: 1,
    bible: 1,

    canteen: 1,
    ironplate: 2,
    hat: 1,
    sombrero: 1,
};

const ARMED_AND_DANGEROUS = {
    bang: [0, 0, 4],
    missed: 1,
    catbleu: 1,

    ammo: 32,

    caravan: 1,
    duck: 1,
    reload: 1,
    littlenip: 1,

    quickshot: 1,
    flintlock: 1,
    arrow: 1,
    rust: 1,

    squaw: 1,

    belltower: 1,
    bomb: 1,
    buntline: 1,
    bigfifty: 1,
    thunderer: 1,

    ace: 1,
    bandolier: 1,
    doublebarrel: 1,
    lockpick: 1,
    
    whip: 1,
    create: 1,
    tumbleweed: 1,
    beerkeg: 1,
};

const SUITE = [
    "h",
    "d",
    "s",
    "c",
];

const CARD_TYPE = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
];

const ROLES = [
    [],
    [],
    [],
    [],
    ["sheriff", "renegade", "outlaw", "outlaw"],
    ["sheriff", "renegade", "outlaw", "outlaw", "deputy"],
    ["sheriff", "renegade", "outlaw", "outlaw", "outlaw", "deputy"],
    ["sheriff", "renegade", "outlaw", "outlaw", "outlaw", "deputy", "deputy"],
];

function assembleCards(packs)
{
    cards = [];
    let keys = Object.keys(ORIGINAL_DECK);
    for (var i = 0; i < keys.length; i++)
    {
        let num = ORIGINAL_DECK[keys[i]];
        for (var j = 0; j < num; j++)
        {
            cards.push(Card(keys[i]));
        }
    }
    for (var i = 0; i < packs; i++)
    {
        if (packs[i] == "DodgeCity")
        {
            keys = Object.keys(DODGE_CITY);
            for (var j = 0; j < keys.length; j++)
            {
                let num = DODGE_CITY[keys[j]];
                for (var k = 0; k < num; k++)
                {
                    cards.push(Card(keys[j]));
                }
            }
        }
        if (packs[i] == "ArmedAndDangerous")
        {
            keys = Object.keys(ARMED_AND_DANGEROUS);
            for (var j = 0; j < keys.length; j++)
            {
                let num = ARMED_AND_DANGEROUS[keys[j]];
                for (var k = 0; k < num; k++)
                {
                    cards.push(Card(keys[j]));
                }
            }
        }
    }
    return cards;
}

class Deck {
    array = [];

    constructor(cards) {
        this.shuffle(cards);
    }

    getArray() {
        return this.array;
    }

    shuffle(cards) {
        while (cards.length != 0)
        {
            let index = Math.floor(Math.random() * (cards.length - 1));
            let card = cards[index];
            cards.splice(index, 1);
            this.array.push(card);
        }
    }

    draw() {
        card = this.array[this.array.length - 1];
        this.array.splice(this.array.length - 1, 1);
        return card;
    }

    top() {
        return this.array[this.array.length - 1];
    }

    reshuffle(OtherDeck) {
        this.shuffle(OtherDeck.getArray());
    }
}

function Card(key)
{
    let card = {
        key: key,
        suite: null,
        type: null,
    }
    let suite = Math.floor(Math.random() * SUITE.length);
    let type = Math.floor(Math.random * CARD_TYPE.length);
    card.suite = SUITE[suite];
    card.type = CARD_TYPE[type];
    return card;
}

function shuffleRoles(num) {
    let assigned = [];
    let tobeassigned = ROLES;
    while (ROLES.length != 0)
    {
        let index = Math.floor(Math.random() * tobeassigned.length);
        let role = tobeassigned[index];
        tobeassigned.splice(index, 1);
        this.assigned.push(role);
    }
    return assigned;
}