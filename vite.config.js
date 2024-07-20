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
        teamlist: resolve(__dirname, "src/teamlist/index.html"),
      },
    },
  },
});