class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    show() {
        console.log(`${this.suit} ${this.value}`);
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }
    reset() {
        this.deck = [];
        const suits = ["Hearts","Clubs","Diamonds","Spades"];
        const values = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push(`${value} of ${suit}`);
            }
        }
        return this;
    }
    shuffle() {
        let m = this.deck.length, t, i;

        // While there remain elements to shuffle...
        while (m) {

            // Pick a remaining element...
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element. 
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }
    deal() {
        return this.deck.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }
    discard() {
        this.hand.pop();
        return this;
    }
}

const deck = new Deck();
deck.reset().shuffle();
console.log(deck);

const player = new Player("Sam");
player.draw(deck).draw(deck).draw(deck);
console.log(player);
console.log(deck);