import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";
import { getManager} from "typeorm";
import { User } from "../entity/user";
import { Helper } from "../helper";

export class UserService {

    static async getAllUsers(): Promise<User[]> {
        return this.getUsersBy({});
    }

    static async getUsersBy(filter): Promise<User[]> {
        const repository = getManager().getRepository(User);
        return await repository.find(filter);
    }

    static async getUsersByIncludeRelations(filter, relations): Promise<User[]> {
        const repository = getManager().getRepository(User);
        return await repository.find({ where: filter, relations: relations });
    }

    static async getUserBy(filter): Promise<User> {
        const repository = getManager().getRepository(User);
        return await repository.findOne(filter);
    }

    static async getUserByIncludeRelations(filter, relations): Promise<User> {
        const repository = getManager().getRepository(User);
        return await repository.findOne({ where: filter, relations: relations });
    }

    static async registerUser(username, password) {
        const repository = getManager().getRepository(User);
        const salt = generateSalt();

        const user = new User();
        user.username = username;
        user.password = hashPassword(password, salt);
        user.salt = salt;

        await repository.manager.save(user);
    }

    static async verifyCredentials(username, password): Promise<User> {
        const user = await this.getUserBy({ username: username });

        if (user == null) {
            return null
        }

        const hashedPassword = hashPassword(password, user.salt);

        if (user.password != hashedPassword) {
            return null;
        }

        return user;
    }

    static verifyToken(token) {
        token = token.replace("Bearer ", "");

        if (!token) {
            throw 403;
        }

        try {
            return jwt.verify(token, Helper.jwtKey);
        } catch {
            throw 500;
        }
    }
}

function generateSalt(): string {
    return crypto.randomBytes(20).toString("hex");
}

function hashPassword(password: string, salt: string): string {
    let hash = crypto.createHmac("sha512", salt);
    hash.update(password);
    return hash.digest("hex");
}