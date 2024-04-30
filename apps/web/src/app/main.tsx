import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { createRoot } from "react-dom/client";

const router = createRouter({
    routeTree: routeTree
})

const rootEl = document.getElementById('root') as HTMLElement

if (!rootEl.innerHTML) {
    createRoot(rootEl).render(
        <RouterProvider router={router}/>
    )
}

declare module '@tanstack/react-router' {
    interface Register {
      router: ReturnType<typeof createRouter>
    }
  }