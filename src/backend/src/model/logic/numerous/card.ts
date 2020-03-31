import { Suit } from "./suit"
import { Rank } from "./rank"

export class Card {
    id: string;
    suit: Suit;
    rank: Rank;

    constructor(suit, rank) {
        this.id = this.generateId();
        this.suit = suit;
        this.rank = rank;
    }

    generateId(): string {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomId = "";

        for (let i = 0; i < 20; i++) {
            randomId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomId;
    }
}