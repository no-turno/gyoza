import { type Config } from "@tanstack/router-vite-plugin"

const routerConfig: Partial<Config> = {
    routesDirectory: './app/routes',
    generatedRouteTree: './app/routeTree.gen.ts',
    routeFilePrefix: '+',
    routeFileIgnorePrefix: '-',
    experimental: {
        enableCodeSplitting: true
    },
    enableRouteGeneration: true
 };

 await Bun.write("./tsr.config.json", JSON.stringify(routerConfig, null, 2));

 await Bun.$`bun --watch ./api/main.ts`