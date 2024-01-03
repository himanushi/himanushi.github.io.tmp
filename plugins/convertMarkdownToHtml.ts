import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const blogDirectory = './src/blog';
const outputDirectory = './dist/blog';

export default function convertMarkdownToHtml() {
  return {
    name: 'convert-markdown-to-html',
    async closeBundle() {
      try {
        if (!fs.existsSync(blogDirectory)) {
          console.error('Blog directory not found:', blogDirectory);
          return;
        }

        if (!fs.existsSync(outputDirectory)) {
          fs.mkdirSync(outputDirectory, { recursive: true });
        }

        const files = fs.readdirSync(blogDirectory).filter(file => path.extname(file) === '.md');
        const blogList: string[] = [];

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const mdFilePath = path.join(blogDirectory, file);
          const htmlFilePath = path.join(outputDirectory, file.replace('.md', '.html'));
          const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
          try {
            let htmlContent = await marked(mdContent);

            // Add previous and next buttons
            const prevLink = i > 0 ? `<a href="${files[i - 1].replace('.md', '.html')}">←</a>` : '';
            const nextLink = i < files.length - 1 ? `<a href="${files[i + 1].replace('.md', '.html')}">→</a>` : '';
            htmlContent = `<div>${prevLink} ${nextLink}</div>` + htmlContent;

            fs.writeFileSync(htmlFilePath, htmlContent);

            blogList.push(file.replace('.md', ''));
          } catch (err) {
            console.error('Error in marked:', err);
          }
        }

        // Create and write the blog list file
        fs.writeFileSync(path.join(outputDirectory, 'blogList.txt'), blogList.join('\n'));
      } catch (error) {
        console.error('Error in convertMarkdownToHtml:', error);
      }
    }
  }
}