import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as cors from "cors";

import { TestNumerous } from "./model/testNumerous";
import { Helper } from "./helper";
import { Routes } from "./routes";
import { SocketController } from "./controller/socketController";

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const localUrl = "http://localhost:8080";
const corsOptions = {
    origin: localUrl,
    credentials: true,
    optionsSuccessStatus: 200
};

createConnection().then(async connection => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors(corsOptions));
    app.use(express.static("../frontend/dist"));

    Routes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    io.on("connection", SocketController);

    server.listen(Helper.port);
    console.info("Backend running! port: " + Helper.port);

}).catch(error => console.error(error));

TestNumerous.runAllTests();
