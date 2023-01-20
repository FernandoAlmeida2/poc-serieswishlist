import express, { Request, Response, Express } from "express";
import "express-async-errors";
import { errorHandlingMiddleware } from "./middlewares/errors-middleware.js";
import seriesRouter from "./routers/series-router.js";

const server: Express = express();
server.use(express.json());

server.use(seriesRouter);

server.use(errorHandlingMiddleware);

server.listen(4000, () => {
    console.log("Server running in port: 4000");
})