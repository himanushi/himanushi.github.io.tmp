import { h, render } from "preact";

(() => {
  const html = document.getElementById("app");
  if (!html) return;
  const App = h("h1", null, "Himanushi 雑記");
  render(App, html);
})();
