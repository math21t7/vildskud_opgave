// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        billetter: resolve(__dirname, "src/billetter.html"),
        events: resolve(__dirname, "src/events.html"),
        arkiv: resolve(__dirname, "src/arkiv.html"),
        program: resolve(__dirname, "src/program.html"),
        partout: resolve(__dirname, "src/partout.html"),
        endag: resolve(__dirname, "src/endag.html"),
        om: resolve(__dirname, "src/om.html"),
        maskeret: resolve(__dirname, "src/maskeret.html"),
        frivillige: resolve(__dirname, "src/frivillige.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
        cookies: resolve(__dirname, "src/cookies.html"),
        privateliv: resolve(__dirname, "src/privateliv.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        kontakt: resolve(__dirname, "src/Kontakt.html"),
        vildmedmig: resolve(__dirname, "src/vildmedmig.html"),
        sitemapxml: resolve(__dirname, "src/sitemap.xml"),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
