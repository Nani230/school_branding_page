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
            "@animation": "/src/animation",
            "@assets": "/src/assets",
            "@data": "/src/data",
            "@": "/src", // Add this alias if you want to use '@' as the base path for src
        },
    },
});
