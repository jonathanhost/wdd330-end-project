import {resolve} from "path";
import {defineConfig} from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html",  ),
        teampage: resolve(__dirname, "src/teampage/index.html"),
        transfers: resolve(__dirname, "src/transfers/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
      },
    },
  },
});