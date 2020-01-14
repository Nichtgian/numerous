<template>
    <v-row justify="center">
        <v-dialog v-model="showDialog" persistent max-width="600px">
            <v-card v-if="loading || user == null">
                <v-card-title>Not Found</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="showDialog=false">Close</v-btn>
                </v-card-actions>
            </v-card>

            <v-card v-else>
                <v-card-title>{{ user.username }}</v-card-title>

                <v-list style="max-height: 400px" class="overflow-y-auto" dense>
                    <v-list-item v-for="message in messages" :key="message.id">
                        <v-list-item-content>
                            <template v-if="userId == message.senderId">
                                <p>{{ message.text }}</p>
                            </template>
                            <template v-else>
                                <p style="text-align: right">{{ message.text }}</p>
                            </template>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-container>
                    <v-text-field v-model="text" :append-icon="'mdi-send'" outlined hide-details dense required label="Send message" type="text" @click:append="sendMessage"/>
                </v-container>

                <v-card-actions>
                    <v-btn color="success" width="40%" v-if="!alreadyFriends" outlined @click="friendRequest">Send friend request</v-btn>
                    <v-btn color="error" width="40%" v-else outlined @click="removeFriend">Remove friend</v-btn>
                    <v-spacer></v-spacer>
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
    import { SocialService } from "../services/socialService";

    export default {
        name: "ProfileMenu",
        data: () => {
            return {
                loading: false,
                user: null,
                messages: [],
                alreadyFriends: true,
                text: ""
            }
        },
        props: {
            value: Boolean,
            userId: Number
        },
        computed: {
            showDialog: {
                get () {
                    if (this.value) {
                        this.loadUser();
                    }
                    return this.value;
                },
                set (value) {
                    this.$emit("input", value);
                }
            }
        },
        methods: {
            loadUser() {
                this.loading = false;
                if (this.userId == null || this.userId == 0) {
                    return;
                }
                return (SocialService.getUserAndChat(this.userId).then((response) => {
                    this.user = response.data.user;
                    this.messages = response.data.messages;
                    this.alreadyFriends = response.data.alreadyFriends;
                    this.loading = false;
                }));
            },
            friendRequest() {
                this.loading = false;
                if (this.userId == null || this.userId == 0) {
                    return;
                }
                return (SocialService.addFriend(this.userId).then(() => {
                    this.alreadyFriends = true;
                    this.loading = false;
                }));
            },
            removeFriend() {
                this.loading = false;
                if (this.userId == null || this.userId == 0) {
                    return;
                }
                return (SocialService.removeFriend(this.userId).then(() => {
                    this.alreadyFriends = false;
                    this.loading = false;
                }));
            },
            sendMessage() {
                this.loading = false;
                if (this.userId == null || this.userId == 0 || this.text == "") {
                    return;
                }
                return (SocialService.sendMessage(this.userId, this.text).then(() => {
                    this.loadUser();
                    this.text = "";
                    this.loading = false;
                }));
            }
        }
    }
</script>
