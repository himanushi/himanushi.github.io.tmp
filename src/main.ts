import { h, render } from "preact";
import Router from "preact-router";

function Home() {
  return h("h1", null, "Home Page");
}

interface Matches {
  id: string;
}

function BlogPost({ matches }: { matches: Matches }) {
  return h("h1", null, `Blog Post: ${matches.id}`);
}

function App() {
  return h(
    Router,
    null,
    h(Home, { path: "/" }),
    h(BlogPost, { path: "/blog/:id", matches: { id: "default" } }),
  );
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
render(h(App, null), document.getElementById("app")!);
