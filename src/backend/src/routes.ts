import { LoginController } from "./controller/loginController";
import { SocialController } from "./controller/socialController";

const url = "/api/";

export const Routes = [
    {
        path: url + "register",
        method: "post",
        action: LoginController.register
    },
    {
        path: url + "login",
        method: "post",
        action: LoginController.login
    },
    {
        path: url + "social/addFriend/:id",
        method: "get",
        action: SocialController.addFriend
    },
    {
        path: url + "social/searchUser/:id",
        method: "get",
        action: SocialController.searchUser
    },
    {
        path: url + "social/getFriends",
        method: "get",
        action: SocialController.getFriends
    },
    {
        path: url + "social/removeFriend/:id",
        method: "get",
        action: SocialController.removeFriend
    },
    {
        path: url + "social/sendMessage",
        method: "post",
        action: SocialController.sendMessage
    },
    {
        path: url + "social/markMessagesAsRead",
        method: "post",
        action: SocialController.markMessagesAsRead
    },
    {
        path: url + "social/searchUserAndChat",
        method: "post",
        action: SocialController.searchUserAndChat
    }
];