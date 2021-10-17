import http from "http";
import koa from "koa";
import koaBody from "koa-body";
import cors from "@koa/cors";

import mongoose from "./config/mongo";

import {
    announcementRouter,
    userRouter
} from "./routes/index";

const app = new koa();
const server = http.createServer(app.callback());

const PORT = process.env.PORT || 5000;

app.use(cors())

app.use(koaBody({
    multipart: true
}));

app.use(announcementRouter.routes());
app.use(announcementRouter.allowedMethods());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

server.listen(PORT, () => {
    console.log(`Server work on portt: ${PORT}...`);
});