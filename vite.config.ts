import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import buildBlogList from "./scripts/buildBlogList";

export default defineConfig({
  plugins: [tsconfigPaths(), buildBlogList()],
});
