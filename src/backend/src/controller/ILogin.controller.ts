import { Request, Response } from "express";

export interface ILoginController {
    loginAsync: (req: Request, res: Response) => Promise<Response>;
    registerAsync: (req: Request, res: Response) => Promise<Response>;
}