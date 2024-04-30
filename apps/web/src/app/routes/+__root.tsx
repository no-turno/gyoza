import {createRootRoute, Link, Outlet} from "@tanstack/react-router"

export const Route = createRootRoute({
    component: () => <>
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
    <Outlet/>
    </>
})