import { Suit } from "./suit";
import { Rank } from "./rank";
import { Card } from "./card";

export class Numerous {

    static suits: Suit[] = [
        new Suit("C", "club", "♣"),
        new Suit("D", "diamond", "♦"),
        new Suit("H", "heart", "♥"),
        new Suit("S", "spade", "♠")
    ];

    static ranks: Rank[] = [
        new Rank("2", "two"),
        new Rank("3", "three"),
        new Rank("4", "four"),
        new Rank("5", "five"),
        new Rank("6", "six"),
        new Rank("7", "seven"),
        new Rank("8", "eight"),
        new Rank("9", "nine"),
        new Rank("10", "ten"),
        new Rank("J", "jack"),
        new Rank("Q", "queen"),
        new Rank("K", "king"),
        new Rank("A", "ace")
    ];

    static cardsWithSpecialRules = ["2", "3", "7", "8", "10"];
    static cardsAlwaysPlayable = ["2", "3", "10"];

    static initializeDeck(): Card[] {
        let cards: Card[] = [];
        Numerous.suits.forEach(suit => {
            Numerous.ranks.forEach(rank => {
                cards.push(new Card(suit, rank));
            });
        });
        return cards;
    }

    static shuffleDeck(cards: Card[]): Card[] {
        let current = cards.length;
        let rand;
        let temp;

        while (0 !== current) {
            rand = Math.floor(Math.random() * current);
            current -= 1;

            temp = cards[current];
            cards[current] = cards[rand];
            cards[rand] = rand;
        }

        return cards;
    }

    static getTopValueCard(stack: Card[]): Card {
        if (stack.length == 0) {
            return null;
        }

        let i = -1;
        let topCard = stack[stack.length + i];

        while (topCard.rank.code == "3") {
            if (stack.length + i <= 0) {
                return null;
            }

            i--;
            topCard = stack[stack.length + i];
        }

        return topCard;
    }

    static isCardPlayable(card: Card, stack: Card[]) {
        const stackTopValueCard = Numerous.getTopValueCard(stack);

        if (stack == null) {
            return true;
        }

        switch (card.rank.code) {
            case "2":
            case "3":
            case "10":
                return true;
            case "7":
                return Numerous.isCardSmallerThanEqualToStack(card, stackTopValueCard);
            case "8":
                return Numerous.isCardGreaterThanEqualToStack(card, stackTopValueCard);
            default:
                return Numerous.isCardGreaterThanEqualToStack(card, stackTopValueCard);
        }
    }

    static isCardAlwaysPlayable(card: Card): boolean {
        return Numerous.cardsAlwaysPlayable.indexOf(card.rank.code) != -1;
    }

    static hasCardSpecialRules(card: Card): boolean {
        return Numerous.cardsWithSpecialRules.indexOf(card.rank.code) != -1;
    }

    static isCardGreaterThanEqualToStack(card: Card, stackTopValueCard: Card): boolean {
        const cardValueIndex = Numerous.ranks.indexOf(card.rank);
        const stackValueIndex = Numerous.ranks.indexOf(stackTopValueCard.rank);

        return cardValueIndex >= stackValueIndex;
    }

    static isCardSmallerThanEqualToStack(card: Card, stackTopValueCard: Card): boolean {
        const cardValueIndex = Numerous.ranks.indexOf(card.rank);
        const stackValueIndex = Numerous.ranks.indexOf(stackTopValueCard.rank);

        return cardValueIndex <= stackValueIndex;
    }
}