import { Request, Response } from "express";

export interface ISocialController {
    addFriendAsync: (req: Request, res: Response) => Promise<Response>;
    getFriendsAsync: (req: Request, res: Response) => Promise<Response>;
    searchUserAsync: (req: Request, res: Response) => Promise<Response>;
    searchUserAndChatAsync: (req: Request, res: Response) => Promise<Response>;
    removeFriendAsync: (req: Request, res: Response) => Promise<Response>;
    sendMessageAsync: (req: Request, res: Response) => Promise<Response>;
    markMessagesAsReadAsync: (req: Request, res: Response) => Promise<Response>;
}