import * as fs from "fs";
import * as path from "path";

const excludeFiles = [
  "node_modules",
  ".git",
  "dist",
  "blog",
  ".github",
  ".vscode",
  "biome.json",
  ".DS_Store",
  "Thumbs.db",
  "package-lock.json",
  "favicon.ico",
  ".gitignore",
  "tsconfig.json",
  "package.json",
];

function displayDirectoryContents(dir, depth = 0) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (excludeFiles.includes(file)) continue;

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      console.log(`${" ".repeat(depth * 2)}Dir: ${file}`);
      displayDirectoryContents(filePath, depth + 1);
    } else {
      console.log(`${" ".repeat(depth * 2)}File: ${file}`);
      console.log(fs.readFileSync(filePath, "utf8"));
    }
  }
}

displayDirectoryContents(process.cwd());
