import { Card } from "../numerous/card";

export class Player {
    id: string;
    username: string;
    hand: Card[];
    table: Card[];

    constructor(id: string, username: string) {
        this.id = id;
        this.username = username;
    }
}