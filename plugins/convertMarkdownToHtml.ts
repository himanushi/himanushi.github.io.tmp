// plugins/convertMarkdownToHtml.js
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const blogDirectory = './src/blog';
const outputDirectory = './dist/blog';

export default function convertMarkdownToHtml() {
  return {
    name: 'convert-markdown-to-html',
    closeBundle() {
      try {
        if (!fs.existsSync(blogDirectory)) {
          console.error('Blog directory not found:', blogDirectory);
          return;
        }

        if (!fs.existsSync(outputDirectory)) {
          fs.mkdirSync(outputDirectory, { recursive: true });
        }

        const files = fs.readdirSync(blogDirectory);


        files.forEach(file => {
          if (path.extname(file) === '.md') {
            const mdFilePath = path.join(blogDirectory, file);
            const htmlFilePath = path.join(outputDirectory, file.replace('.md', '.html'));

            const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
            const htmlContent = marked(mdContent);

            fs.writeFileSync(htmlFilePath, htmlContent);
          }
        });
      } catch (error) {
        console.error('Error in convertMarkdownToHtml:', error);
      }
    }
  }
}
