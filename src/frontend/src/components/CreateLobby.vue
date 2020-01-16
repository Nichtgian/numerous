<template>
    <v-row justify="center">
        <v-dialog v-model="showDialog" persistent max-width="600px">
            <v-card>
                <div>
                    <v-card-title style="background-color: #6a1b9a; color: white" dark>Create Lobby</v-card-title>
                </div>

                <v-form>
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-text-field label="Lobby name" v-model="lobby.name" outlined hide-details dense required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-checkbox v-model="lobby.isPrivate" label="Make lobby private"></v-checkbox>
                                <v-text-field label="Password" v-model="lobby.password" :disabled="!lobby.isPrivate" type="password" outlined dense required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>

                <v-card-actions>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn color="error" outlined v-on="on" @click="showDialog=false">
                                <v-icon right>mdi-close</v-icon>
                            </v-btn>
                        </template>
                        <span>Close Menu</span>
                    </v-tooltip>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" v-on="on" @click="createLobby">
                                Create <v-icon right>mdi-gamepad-variant-outline</v-icon>
                            </v-btn>
                        </template>
                        <span>Create and join a new lobby</span>
                    </v-tooltip>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        name: "CreateLobby",
        props: {
            value: Boolean,
            lobby: {
                name: "",
                password: "",
                isPrivate: false,
            }
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
        },
        methods: {
            createLobby() {
                if (this.lobby.name != "") {
                    if (!this.lobby.isPrivate || this.lobby.isPrivate && this.lobby.password != "") {
                        this.$emit("createdNewLobby", this.lobby);
                        this.showDialog = false;
                    }
                }
            }
        }
    }
</script>
