import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";
import { UserEntity } from "../model/entity/user.entity";
import { TokenHelper } from "../helper/token.helper";
import { BaseService } from "./base.service";
import { HttpStatusCode } from "../helper/enum/httpStatusCode.enum";
import { Injectable } from "../helper/injection/injectable.decorator";

@Injectable()
export class UserService extends BaseService<UserEntity> {

    public constructor() {
        super(UserEntity);
    }

    public async registerUserAsync(username, password): Promise<void> {
        const salt = UserService.generateSalt();
        const user = new UserEntity();
        user.username = username;
        user.password = UserService.hashPassword(password, salt);
        user.salt = salt;

        await super.getRepository().save(user);
    }

    public async verifyCredentialsAsync(username, password): Promise<UserEntity> {
        const user = await super.getSingleByAsync({ username: username });

        if (user == null)
            return null

        const hashedPassword = UserService.hashPassword(password, user.salt);

        if (user.password != hashedPassword)
            return null;

        return user;
    }

    public static verifyToken(token): any {
        token = token.replace("Bearer ", "");

        if (!token)
            throw HttpStatusCode.Forbidden;

        try {
            return jwt.verify(token, TokenHelper.jwtKey);
        } catch {
            throw HttpStatusCode.Error;
        }
    }

    public static generateSalt(): string {
        return crypto.randomBytes(20).toString("hex");
    }
    
    public static hashPassword(password: string, salt: string): string {
        const hash = crypto.createHmac("sha512", salt);
        hash.update(password);
        return hash.digest("hex");
    }
}