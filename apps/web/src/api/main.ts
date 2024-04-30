import {staticPlugin} from "@elysiajs/static"
import { Elysia } from "elysia"

export default new Elysia()
    .use(staticPlugin({
        assets: ".gyoza/app",
        prefix: "/app",
        noCache: true
    }))
    .use(staticPlugin({
        assets: "public",
        prefix: "/",
        noCache: true
    }))
    .all("/", c => {
        return Bun.file("public/index.html")
    })