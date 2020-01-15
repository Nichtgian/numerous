<template>
    <v-row justify="center">
        <v-dialog v-model="showDialog" persistent max-width="600px">
            <v-card>
                <v-tabs fixed-tabs background-color="primary" dark>
                    <v-tab>Your Friends <v-icon right>mdi-account-group-outline</v-icon></v-tab>
                    <v-tab>Search User <v-icon right>mdi-account-search-outline</v-icon></v-tab>
                    <v-tab-item>
                        <v-container>
                            <template v-if="loading">
                                <h2>loading..</h2>
                            </template>

                            <template v-else>
                                <template v-if="friends == null || friends == []">
                                    <h2>No friends.</h2>
                                </template>
                                <v-list v-else>
                                    <v-list-item v-for="friend in friends" :key="friend.id" @click="openChat(friend.id)">
                                        <v-list-item-content>
                                            <v-list-item-title v-text="friend.username"></v-list-item-title>
                                        </v-list-item-content>

                                        <v-list-item-icon>
                                            <v-icon color="primary">mdi-chat-outline</v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </v-list>
                            </template>
                        </v-container>
                    </v-tab-item>
                    <v-tab-item>
                        <v-container>
                            <v-text-field v-model="searchUsername" :append-icon="'mdi-magnify'" outlined label="Username" type="text" @click:append="searchUser"/>

                            <template v-if="loading">
                                <h2>searching..</h2>
                            </template>

                            <template v-else>
                                <template v-if="foundUser == null">
                                    <h2>No results.</h2>
                                </template>
                                <v-list v-else>
                                    <v-list-item v-model="foundUser" :key="foundUser.id" @click="openChat(foundUser.id)">
                                        <v-list-item-content>
                                            <v-list-item-title v-text="foundUser.username"></v-list-item-title>
                                        </v-list-item-content>

                                        <v-list-item-icon>
                                            <v-icon color="primary">mdi-chat-outline</v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </v-list>
                            </template>
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
    import { SocialService } from "../services/socialService";

    export default {
        name: "SocialMenu",
        data: () => {
            return {
                loading: false,
                friends: [],
                foundUser: null,
                searchUsername: ""
            }
        },
        created() {
            this.loadFriends();
        },
        props: {
            value: Boolean
        },
        computed: {
            showDialog: {
                get () {
                    if (this.value) {
                        this.loadFriends();
                    }
                    return this.value;
                },
                set (value) {
                    this.$emit("input", value);
                }
            }
        },
        methods: {
            openChat(userId) {
                this.$emit("input", false);
                this.$emit("openUserProfile", userId);
            },
            loadFriends() {
                this.loading = true;
                return (SocialService.getFriends().then((response) => {
                    this.friends = response.data.map(x => x.friend);
                    this.loading = false;
                }));
            },
            searchUser() {
                this.loading = true;
                return (SocialService.searchUser(this.searchUsername)
                    .then((response) => {
                        this.foundUser = response.data;
                        this.loading = false;
                    }).catch(() => {
                        this.loading = false;
                    }));
            }
        }
    }
</script>
