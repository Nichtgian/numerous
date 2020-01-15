import { Card } from "../numerous/card";
import { Numerous } from "../numerous/numerous";
import { Player } from "./player";

export class Lobby {
    id: string;
    name: string;
    deck: Card[] = [];
    leaderId: string = null;
    players: Player[] = [];
    playing: boolean = false;
    isPrivate: boolean = false;
    password: string;

    constructor(name, password, isPrivate) {
        this.name = name;
        this.password = password;
        this.isPrivate = isPrivate;

        this.id = this.generateId();
        this.deck = Numerous.shuffleDeck(Numerous.initializeDeck());
    }

    join(playerId: string, username: string, password: string) {
        if (this.playing) {
            return false;
        }

        if (this.isPrivate && this.password != password) {
            return false;
        }

        this.players.push(new Player(playerId, username));

        if (this.leaderId == null) {
            this.leaderId = playerId;
        }

        return true;
    }

    leave(playerId: string) {
        const foundPlayerIndex = this.players.findIndex(player => player.id == playerId);

        if (foundPlayerIndex == -1) {
            return false;
        }

        this.players.splice(foundPlayerIndex, 1);

        if (this.leaderId == playerId) {
            if (this.players.length >= 2 || !this.playing && this.players.length >= 1) {
                this.leaderId = this.players[1].id;
            } else {
                // remove
            }
        }

        return true;
    }

    startGame() {
        this.playing = true;

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

    generateId() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomId = "";

        for (let i = 0; i < 20; i++) {
            randomId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomId;
    }
}