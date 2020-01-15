<template>
    <v-container>
            <v-card v-if="joinedLobbyData == null">
                <v-responsive>
                    <v-card-title>
                        <h2>Lobbybrowser</h2>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="success" outlined v-on="on" @click="getLobbies" style="margin-right: 10px;"><v-icon>mdi-reload</v-icon></v-btn>
                            </template>
                            <span>Refresh lobbies</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" outlined v-on="on" @click="showCreateLobby=!showCreateLobby">
                                    Create Lobby<v-icon right>mdi-gamepad-variant-outline</v-icon>
                                </v-btn>
                            </template>
                            <span>Create a new lobby</span>
                        </v-tooltip>
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="lobby in lobbies" :key="lobby.id" @click="joinLobby(lobby)">
                                <v-list-item-content>
                                    <v-list-item-title v-text="lobby.name"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-icon v-if="lobby.isPrivate">
                                    <v-icon>mdi-lock-outline</v-icon>
                                </v-list-item-icon>
                                <v-list-item-icon v-else>
                                    <v-icon>mdi-lock-open-outline</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-responsive>
            </v-card>

            <v-card v-else>
                <v-responsive>
                    <v-card-title>
                        <h2>Lobby {{ this.joinedLobbyData.name }}</h2>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="success" outlined v-on="on" @click="refreshLobby" style="margin-right: 10px;"><v-icon>mdi-reload</v-icon></v-btn>
                            </template>
                            <span>Refresh lobby</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="error" outlined v-on="on" @click="leaveLobby">
                                    Leave Lobby<v-icon right>mdi-arrow-left</v-icon>
                                </v-btn>
                            </template>
                            <span>Leave this lobby</span>
                        </v-tooltip>
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="player in joinedLobbyData.players" :key="player.id" @click="openChat(player.username)">
                                <v-list-item-content>
                                    <v-list-item-title v-text="player.username"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-icon>
                                    <v-icon color="primary">mdi-chat-outline</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-responsive>
            </v-card>
        <CreateLobby v-model="showCreateLobby" :lobby="newLobbyData" @createdNewLobby="createLobby"/>
    </v-container>
</template>

<script>
    import CreateLobby from "./CreateLobby";
    import Store from "../store";
    import { SocialService } from "../services/socialService";

    export default {
        name: "Numerous",
        components: {
            CreateLobby
        },
        data: () => {
            return {
                isConnected: false,
                lobbies: [],
                newLobbyData: {
                    name: "",
                    password: "",
                    isPrivate: false,
                },
                showCreateLobby: false,
                joinedLobbyData: null
            }
        },
        created() {
            this.getLobbies();
        },
        sockets: {
            connect() {
                this.isConnected = true;
            },
            disconnect() {
                this.isConnected = false;
            },
            createdLobby(lobby) {
                this.joinLobbyWithPassword(lobby.id, lobby.password);
            },
            allLobbies(data) {
                this.lobbies = data;
            },
            joinedLobby(data) {
                this.joinedLobbyData = data;
            },
            leftLobby() {
                this.joinedLobbyData = null;
                this.$socket.emit("getLobbies");
            },
            updateLobbies() {
                this.$socket.emit("getLobbies");
            },
            updateLobby(data) {
                this.joinedLobbyData = data;
            }
        },
        methods: {
            getLobbies() {
                this.$socket.emit("getLobbies");
            },
            createLobby() {
                this.$socket.emit("createLobby", this.newLobbyData);
                this.newLobbyData = { name: "", isPrivate: false, password: "" };
            },
            joinLobby(lobby) {
                let username = Store.state.user.username;
                let password = "";
                if (lobby.isPrivate) {
                    password = prompt("Enter password", "");
                }

                this.$socket.emit("joinLobby", lobby.id, username, password);
            },
            joinLobbyWithPassword(lobby, password) {
                let username = Store.state.user.username;

                this.$socket.emit("joinLobby", lobby, username, password);
            },
            leaveLobby() {
                if (this.joinedLobbyData != null) {
                    this.$socket.emit("leaveLobby", this.joinedLobbyData.id);
                }
            },
            openChat(username) {
                if (Store.state.user.username != username) {
                    return (SocialService.searchUser(username)
                        .then((response) => {
                            const foundUser = response.data;
                            this.$emit("openUserProfile", foundUser.id);
                        }).catch(() => {
                        }));
                }
            },
            refreshLobby() {
            }
        }
    }
</script>
