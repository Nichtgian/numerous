import { ApiService } from "./apiService";
import Store from "../helper/store";

export const SocialService = {
    baseURL: "/social",
    getFriendsAsync: async () => {
        return await ApiService.get(`${baseURL}/getFriendsAsync`);
    },
    searchUserAsync: async (username) => {
        return await ApiService.get(`${baseURL}/searchUserAsync/${username}`);
    },
    getUserAndChatAsync: async (userId) => {
        return await ApiService.post(`${baseURL}/searchUserAndChatAsync`, { username: Store.state.user.username, withUserId: userId });
    },
    addFriendAsync: async (userId) => {
        return await ApiService.get(`${baseURL}/addFriendAsync/${userId}`);
    },
    removeFriendAsync: async (userId) => {
        return await ApiService.get(`${baseURL}/removeFriendAsync/${userId}`);
    },
    sendMessageAsync: async (receiverId, text) => {
        return await ApiService.post(`${baseURL}/sendMessageAsync`, { receiverId: receiverId, text: text });
    }
};