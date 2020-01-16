<template>
    <v-container fill-height fluid>
        <v-card class="mx-auto" min-width="300" raised justify="center">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline">Login</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-form>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field label="Username" v-model="user.username" outlined hide-details dense required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field label="Password" v-model="user.password" :error-messages="loginErrorMessage" type="password" outlined dense required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn color="primary" width="100%" @click="login">
                                Login <v-icon right>mdi-account-outline</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn outlined color="primary" width="100%" @click="playAsGuest">
                                Play as Guest <v-icon right>mdi-account-off-outline</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn outlined color="secondary" width="100%" to="/register">
                                Register <v-icon right>mdi-account-plus-outline</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
    import router from "@/router";
    import { UserService } from "@/services/userService";

    export default {
        name: "Login",
        data: () => {
            return {
                user: {
                    username: "",
                    password: ""
                },
                loginErrorMessage: ""
            };
        },
        methods: {
            async login () {
                try {
                    await UserService.login(this.user.username, this.user.password);
                    router.push("/");
                } catch (e) {
                    this.loginErrorMessage = e;
                }
            },
            playAsGuest () {
                UserService.guestLogin();
                router.push("/");
            }
        },
    }
</script>
