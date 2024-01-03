import { h, render } from "preact";
import Router, { Route } from "preact-router";
import { Blog } from "./Blog";
import { Home } from "./Home";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/blog/:id" component={Blog} default />
    </Router>
  );
};

const root = document.getElementById("app");
if (root !== null) {
  render(<App />, root);
}
