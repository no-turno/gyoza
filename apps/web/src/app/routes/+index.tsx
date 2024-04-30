import {createFileRoute, Outlet} from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: () => <p>app</p>
})