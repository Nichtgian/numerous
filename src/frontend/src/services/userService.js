import ApiService from "./apiService";
import { TokenService, StorageIdentifier } from "./tokenService";
import Store from "../store/index";

const UserService = {
    login: async function(username, password) {
        try {
            const response = await ApiService.post("login", { username: username, password: password });
            const token = response.data.token;

            TokenService.saveToken(StorageIdentifier.tokenKey, token);
            TokenService.saveToken(StorageIdentifier.refreshTokenKey, token);
            ApiService.setHeader();

            Store.state.authenticated = true;
            Store.state.user = {
                token: token,
                username: username,
                isGuest: false
            };

            return token;
        } catch (error) {
            throw "Login failed!";
        }
    },

    guestLogin: function() {
        const username = this.generateRandomName();

        Store.state.authenticated = true;
        Store.state.user = {
            token: null,
            username: username,
            isGuest: true
        };

        return username;
    },

    generateRandomName: function() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let name = "";
        for (let i = 0; i < 15; i++) {
            name += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return name;
    },

    register: async function(username, password) {
        await ApiService.post("register", {
            username: username,
            password: password
        }).then(() => {
        }).catch(() => {
            throw "Registration failed!";
        });
    },

    refreshToken: async function() {
        const refreshToken = TokenService.getToken(StorageIdentifier.refreshTokenKey);

        const requestData = {
            method: "post",
            url: "refreshToken",
            data: {
                grant_type: "refresh_token",
                refresh_token: refreshToken
            }
        };

        try {
            const response = await ApiService.customRequest(requestData);

            TokenService.saveToken(StorageIdentifier.tokenKey, response.data.newAccessToken);
            TokenService.saveToken(StorageIdentifier.refreshTokenKey, response.data.newRefreshToken);
            ApiService.setHeader();

            return response.data.newAccessToken
        } catch (error) {
            throw "Refresh token failed!";
        }

    },

    logout() {
        if (!Store.state.user.isGuest) {
            TokenService.removeToken(StorageIdentifier.tokenKey);
            TokenService.removeToken(StorageIdentifier.refreshTokenKey);
            ApiService.removeHeader();
        }

        Store.state.authenticated = false;
        Store.state.user = {
            token: null,
            username: "",
            isGuest: false
        };
    }
};

export { UserService }