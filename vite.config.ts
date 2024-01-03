import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import buildBlogList from "./scripts/buildBlogList";
import copy404ToIndex from "./scripts/copy404ToIndex";

export default defineConfig({
  plugins: [tsconfigPaths(), buildBlogList(), copy404ToIndex()],
  build: {
    rollupOptions: {
      external: ["preact", "preact-router", "marked"],
    },
    commonjsOptions: {
      esmExternals: ["preact"],
    },
  },
});
