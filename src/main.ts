import { h, render } from "preact";
import Router from "preact-router";
import { Blog } from "./Blog";
import { Home } from "./Home";

function App() {
  return h(
    Router,
    null,
    h(Home, { path: "/" }),
    h(Blog, { path: "/blog/:id", matches: { id: "default" } }),
  );
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
render(h(App, null), document.getElementById("app")!);
