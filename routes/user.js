import Router from "@koa/router";

import User from "../models/user";

const router = new Router({
    prefix: '/user'
});

router.post('/login', async (ctx, next) => {
    const {email, password} = ctx.request.body;
    const user = await User.findOne({email: email.toLowerCase()}).exec();

    if (!user || user.password !== password) {
        ctx.status = 404;
        ctx.body = "";
    } else {
        ctx.body = user;
    }

    await next();
});

router.post('/register', async (ctx, next) => {
    ctx.body = await new User(ctx.request.body).save();
    await next();
});

router.get('/:id', async (ctx) => {
    ctx.body = await User.findById(ctx.params.id).exec();
});

export default router;