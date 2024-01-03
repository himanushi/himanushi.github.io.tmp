import { h, render } from "preact";

(() => {
  const html = document.getElementById("app");
  if (!html) return;
  const App = h("h1", null, "Hello World");
  render(App, html);
})();
