import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import { createConnection, Connection } from "typeorm";
import { GeneralHelper } from "./helper/general.helper";
import { HttpStatusCode } from "./helper/enum/httpStatusCode.enum";
import { TestNumerous } from "./test/testNumerous";
import { SocketController } from "./controller/socket.controller";
import { LoginController } from "./controller/login.controller";
import { IRouteDefinition } from "./helper/routing/IRouteDefinition";
import { SocialController } from "./controller/social.controller";
import { Inject } from "./helper/injection/inject";

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    path: "/socket"
});

createConnection().then(async (connection: Connection) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors({
        origin: GeneralHelper.localhost,
        credentials: true,
        optionsSuccessStatus: HttpStatusCode.Success
    }));
    app.use(express.static("../frontend/dist"));

    const controllers: any[] = [
        LoginController,
        SocialController
    ];

    controllers.forEach(controller => {
        console.log(controller);
        const instance = Inject.resolve<LoginController>(controller);
        const prefix: string = Reflect.getMetadata(GeneralHelper.prefixMeta, controller);
        const routes: IRouteDefinition[] = Reflect.getMetadata(GeneralHelper.routeMeta, controller);
        console.log("PREFIX:"+prefix);
        
        routes.forEach(route => {
            app[route.method](`/api${prefix}${route.url}`, (req: express.Request, res: express.Response, next: Function) => {
                instance[route.method](req, res)
                    .then(() => next)
                    .catch(err => next(err))
            });
        });
    });

    io.on("connection", SocketController);

    server.listen(GeneralHelper.port);
    console.info(`Backend running! port: ${GeneralHelper.port}`);

}).catch(error => console.error(error));

TestNumerous.runAllTests();
