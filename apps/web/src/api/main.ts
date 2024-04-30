import {staticPlugin} from "@elysiajs/static"
import { Elysia } from "elysia"

const app = new Elysia()
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
    .listen(8080)

    console.log("Listening on http://localhost:8080")