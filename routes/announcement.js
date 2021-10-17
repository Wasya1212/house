import Router from "@koa/router";

import Cloudinary from "cloudinary";

import Announcement from "../models/announcement";
import { clearObj } from "../utils/object";

Cloudinary.config({
    cloud_name: 'dg7e39cjr',
    api_key: '723737442241262',
    api_secret: 'RJHLUnryPBkefuEStIlX9R8n6bQ',
    secure: true
});

const router = new Router({
    prefix: '/announcement'
});

router.get('/', async (ctx) => {
    const {_id, ...options} = ctx.request.query;
    const searchParams = clearObj({_id});

    ctx.body = await Announcement.find(searchParams || {}, null, options).exec();
});

router.post('/create', async (ctx, next) => {
    const image = await Cloudinary.v2.uploader.upload(ctx.request.files['image[]'].path);
    const rest = ctx.request.body;

    ctx.body = await new Announcement({ image, ...rest }).save();
    await next();
});

export default router;