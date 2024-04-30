Bun.build({
    entrypoints: ["src/app/main.tsx"],
    format: "esm",
    target: "browser",
    outdir: ".gyoza/app",
    define: {
        'globalThis.__gyoza__': JSON.stringify({
            channel: 'canary'
        })
    }
})