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

        const files = fs.readdirSync(blogDirectory);
        const blogList: string[] = [];

        for (const file of files) {
          if (path.extname(file) === '.md') {
            const mdFilePath = path.join(blogDirectory, file);
            const htmlFilePath = path.join(outputDirectory, file.replace('.md', '.html'));
            const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
            try {
              const htmlContent = await marked(mdContent);
              fs.writeFileSync(htmlFilePath, htmlContent);

              // Add the filename (without extension) to the blog list
              blogList.push(file.replace('.md', ''));
            } catch (err) {
              console.error('Error in marked:', err);
            }
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
