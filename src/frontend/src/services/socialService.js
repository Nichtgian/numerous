import ApiService from "./apiService";

const SocialService = {
    getFriends: async function() {
        return await ApiService.get("social/getFriends");
    },
    searchUser: async function(username) {
        return await ApiService.get("social/searchUser/" + username);
    }
};

export { SocialService }