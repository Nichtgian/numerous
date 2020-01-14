import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as cors from "cors";

import { TestNumerous } from "./model/testNumerous";
import { Helper } from "./helper";
import { Routes } from "./routes";

createConnection().then(async connection => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    const http = require("http").Server(app);
    const io = require("socket.io")(http);

    Routes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    io.on("connection", socket => {
        console.log("a user connected");
    });

    app.use(express.static("../frontend/dist"));

    app.listen(Helper.port);
    console.info("Backend running! port: " + Helper.port);

}).catch(error => console.error(error));

TestNumerous.runAllTests();
