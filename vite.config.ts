import { defineConfig } from "vite";
import { importToCDN } from "vite-plugin-external-cdn";
import tsconfigPaths from "vite-tsconfig-paths";
import buildBlogList from "./scripts/buildBlogList";
import copy404ToIndex from "./scripts/copy404ToIndex";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    buildBlogList(),
    copy404ToIndex(),
    importToCDN({
      modules: [
        {
          name: "preact",
          var: "preact",
          path: "https://cdnjs.cloudflare.com/ajax/libs/preact/10.19.3/preact.umd.min.js",
        },
        // {
        //   name: "preact-router",
        //   var: "preact-router",
        //   path: "https://cdnjs.cloudflare.com/ajax/libs/preact-router/4.1.2/preact-router.umd.min.js",
        // },
        {
          name: "marked",
          var: "marked",
          path: "https://cdn.jsdelivr.net/npm/marked@11.1.1/lib/marked.umd.min.js",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      external: ["preact", "marked"],
    },
  },
});
