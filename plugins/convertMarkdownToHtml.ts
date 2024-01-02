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


        files.forEach(async file => {
          if (path.extname(file) === '.md') {
            const mdFilePath = path.join(blogDirectory, file);
            const htmlFilePath = path.join(outputDirectory, file.replace('.md', '.html'));
            const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
            try {
              const htmlContent = await marked(mdContent);
              fs.writeFileSync(htmlFilePath, htmlContent);
            } catch (err) {
              console.error('Error in marked:', err);
            }
          }
        });
      } catch (error) {
        console.error('Error in convertMarkdownToHtml:', error);
      }
    }
  }
}
