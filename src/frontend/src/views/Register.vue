<template>
    <v-container fill-height fluid>
        <v-card class="mx-auto" min-width="300" raised justify="center">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline">Register</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-form>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field label="Username" v-model="user.username" outlined hide-details dense required ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field label="Password" v-model="user.password" type="password" outlined hide-details dense required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field label="Repeat Password" v-model="user.repeatPassword" :error-messages="registerErrorMessage" type="password" outlined dense required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn color="primary" width="100%" @click="register">Register</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn outlined color="primary" width="100%" @click="playAsGuest">Play as Guest</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn outlined color="secondary" width="100%" to="/login">Login</v-btn>
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
        name: "Register",
        data: () => {
            return {
                user: {
                    username: "",
                    password: "",
                    repeatPassword: ""
                },
                registerErrorMessage: ""
            };
        },
        methods: {
            async register () {
                try {
                    if (this.user.password != this.user.repeatPassword) {
                        this.registerErrorMessage = "Password does't match!";
                    } else {
                        await UserService.register(this.user.username, this.user.password);
                        router.push("login");
                    }
                } catch (e) {
                    this.registerErrorMessage = e;
                }
            },
            playAsGuest () {
                UserService.guestLogin();
                router.push("/");
            }
        },
    }
</script>