<template>
    <v-row justify="center">
        <v-dialog v-model="showDialog" persistent max-width="600px">
            <v-card>
                <v-tabs fixed-tabs background-color="primary" dark>
                    <v-tab>Cards <v-icon right>mdi-cards</v-icon></v-tab>
                    <v-tab>Numerous <v-icon right>mdi-information-outline</v-icon></v-tab>

                    <v-tab-item>
                        <v-container>
                            <p>The full deck of cards and their rules are listed here.</p>
                        </v-container>

                        <v-list two-line style="max-height: 400px" class="overflow-y-auto" dense>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>2</v-list-item-title>
                                    <v-list-item-subtitle>Card always playable. Stacks new value is now 2.</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>3</v-list-item-title>
                                    <v-list-item-subtitle>Card always playable. Value is transparent and last card of stacks counts.</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>4</v-list-item-title>
                                    <v-list-item-subtitle>-</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>5</v-list-item-title>
                                    <v-list-item-subtitle>-</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>6</v-list-item-title>
                                    <v-list-item-subtitle>-</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>7</v-list-item-title>
                                    <v-list-item-subtitle>Card can only be played on 7 or higher (8-A). Next card must be smaller than or equal 7.</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>8</v-list-item-title>
                                    <v-list-item-subtitle>Next player gets skipped.</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>9</v-list-item-title>
                                    <v-list-item-subtitle>-</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>10</v-list-item-title>
                                    <v-list-item-subtitle>Always playable. All cards of stack will be removed. Player can play again.</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>J</v-list-item-title>
                                    <v-list-item-subtitle>-</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>Q</v-list-item-title>
                                    <v-list-item-subtitle>-</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>K</v-list-item-title>
                                    <v-list-item-subtitle>-</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>A</v-list-item-title>
                                    <v-list-item-subtitle>-</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>

                    </v-tab-item>

                    <v-tab-item>
                        <v-container>
                            <p>Numerous can be played up to 5 people.</p>
                            <p>
                                Each player gets 9 cards. The first 3 cards will be upside down on the table and 6 are in the hand of the player.
                                Then the player has to select 3 cards of the ones in the hand and place them on top of the hidden cards.
                                Clockwise each player puts down cards in his hand to the stack in the center of the table. If the player can't
                                play a card he has to pick up the stack. If there's still a stack of not assigned cards in the deck,
                                the users will keep 3 cards in his hand as long as he can pick up and he hasn't more than 3 cards.
                            </p>
                            <p>
                                After all cards in the hand have been played the player can choose one or more cards laying on the table.
                                When those cards have been played he can continue by randomly choosing one of the hidden cards.
                                The game is finished when all cards have been played eg. only one player is not finished.
                            </p>
                        </v-container>
                    </v-tab-item>
                </v-tabs>
                <v-card-actions>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn color="error" outlined v-on="on" @click="showDialog=false">
                                <v-icon right>mdi-close</v-icon>
                            </v-btn>
                        </template>
                        <span>Close Menu</span>
                    </v-tooltip>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        name: "InfoMenu",
        props: {
            value: Boolean
        },
        computed: {
            showDialog: {
                get () {
                    return this.value;
                },
                set (value) {
                    this.$emit("input", value);
                }
            }
        }
    }
</script>
