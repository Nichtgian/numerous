import { ApiService } from "./apiService";
import { TokenService, StorageIdentifier } from "./tokenService";
import Store from "../helper/store";

export const UserService = {
    loginAsync: async (username, password) => {
        try {
            const response = await ApiService.post("loginAsync", { username: username, password: password });
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

    guestLogin: () => {
        const username = this.generateRandomName();

        Store.state.authenticated = true;
        Store.state.user = {
            token: null,
            username: username,
            isGuest: true
        };

        return username;
    },

    generateRandomName: () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let name = "";
        for (let i = 0; i < 15; i++) {
            name += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return name;
    },

    registerAsync: async (username, password) => {
        await ApiService.post("registerAsync", {
            username: username,
            password: password
        }).then(() => {
        }).catch(() => {
            throw "Registration failed!";
        });
    },

    refreshTokenAsync: async () => {
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