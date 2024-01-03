import { h } from "preact";

interface Matches {
  id: string;
}

export function Blog({ matches }: { matches: Matches }) {
  return h("h1", null, `Blog Post: ${matches.id}`);
}
