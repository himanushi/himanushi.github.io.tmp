import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import convertMarkdownToHtml from './plugins/convertMarkdownToHtml';

export default defineConfig({
  plugins: [tsconfigPaths(), convertMarkdownToHtml()],
});
