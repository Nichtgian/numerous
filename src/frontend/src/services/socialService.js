import ApiService from "./apiService";
import Store from "../store";

const SocialService = {
    getFriends: async function() {
        return await ApiService.get("social/getFriends");
    },
    searchUser: async function(username) {
        return await ApiService.get("social/searchUser/" + username);
    },
    getUserAndChat: async function(userId) {
        return await ApiService.post("social/searchUserAndChat", { username: Store.state.user.username, withUserId: userId });
    },
    addFriend: async function(userId) {
        return await ApiService.get("social/addFriend/" + userId);
    },
    removeFriend: async function(userId) {
        return await ApiService.get("social/removeFriend/" + userId);
    },
    sendMessage: async function(receiverId, text) {
        return await ApiService.post("social/sendMessage", { receiverId: receiverId, text: text });
    }
};

export { SocialService }