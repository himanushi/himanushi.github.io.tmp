import { marked } from "marked";
import { Component, h } from "preact";

interface BlogProps {
  matches: {
    id: string;
  };
}

interface BlogState {
  content: string;
}

export class Blog extends Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);
    this.state = { content: "" };
  }

  componentDidMount() {
    const postId = this.props.matches.id;
    fetch(`/blog/${postId}.md`)
      .then((response) => response.text())
      .then(async (text) => {
        const content = await marked(text);
        this.setState({ content });
      })
      .catch((error) => console.error("Error loading blog post:", error));
  }

  render() {
    return h("div", {
      dangerouslySetInnerHTML: { __html: this.state.content },
    });
  }
}
