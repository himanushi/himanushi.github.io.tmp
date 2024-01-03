import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/blog/blogList.txt?time=${Date.now()}`)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading blog post:", error));
  }, []);

  const blogPosts = content.split("\n").map((post) => {
    return h("li", null, h("a", { href: `/blog/${post}` }, post));
  });

  return h(
    "div",
    null,
    h("h1", null, "Himanushi 雑記"),
    h("ul", null, blogPosts),
  );
};
