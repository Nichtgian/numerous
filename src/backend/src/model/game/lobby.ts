import { Card } from "../numerous/card";
import { Numerous } from "../numerous/numerous";
import { Player } from "./player";

export class Lobby {
    name: string;
    deck: Card[];
    players: Player[];

    constructor() {
        this.deck = Numerous.shuffleDeck(Numerous.initializeDeck());
    }

    playerJoined(username: string, id: string) {
        this.players.push(new Player(username, id));
    }

    playerLeft(id: string) {
        const index = this.players.map(player =>  {
            return player.id;
        }).indexOf(id);

        this.players.splice(index, 1);
    }

    startGame() {
        this.players.forEach(player => {
            for (let i = 0; i < 3; i++) {
                const card = this.deck.shift();
                player.table.push(card);
            }

            for (let i = 0; i < 6; i++) {
                const card = this.deck.shift();
                player.hand.push(card);
            }
        });
    }
}