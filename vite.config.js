import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
    },
    build: {
        outDir: "build",
    },
    resolve: {
        alias: {
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@assets": "/src/assets",
            "@": "/src",
            "@data": "/src/data",
        },
    },
});
