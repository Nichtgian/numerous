import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { UserService } from "../service/userService";
import { Helper } from "../helper";

export class LoginController {

    static async login(req: Request, res: Response) {
        const { username, password } = req.body;
        const user = await UserService.verifyCredentials(username, password);

        if (username == null ||
            password == null ||
            user == null) {
            return res.status(403).end();
        }

        const token = jwt.sign({ username: username }, Helper.jwtKey, {
            algorithm: "HS256",
            expiresIn: Helper.jwtExpire
        });

        res.send({ token: token });
    }

    static async register(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            await UserService.registerUser(username, password);
        } catch {
            return res.status(500).end();
        }

        res.send();
    }
}