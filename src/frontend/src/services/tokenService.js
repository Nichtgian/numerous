const StorageIdentifier = {
    tokenKey: "access_token",
    refreshTokenKey: "refresh_token"
};

const TokenService = {
    getToken(key) {
        return localStorage.getItem(key);
    },

    saveToken(key, accessToken) {
        localStorage.setItem(key, accessToken);
    },

    removeToken(key) {
        localStorage.removeItem(key);
    }
};

export { TokenService, StorageIdentifier }