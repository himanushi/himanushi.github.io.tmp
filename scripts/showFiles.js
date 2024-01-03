import * as fs from "fs";
import * as path from "path";
import clipboardy from "clipboardy";

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
];

function displayDirectoryContents(dir, depth = 0) {
  let output = "";
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (excludeFiles.includes(file)) continue;

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      output += `${" ".repeat(depth * 2)}Dir: ${file}\n`;
      output += displayDirectoryContents(filePath, depth + 1);
    } else {
      output += `${" ".repeat(depth * 2)}File: ${file}\n${fs.readFileSync(
        filePath,
        "utf8",
      )}\n`;
    }
  }

  return output;
}

const directoryContents = displayDirectoryContents(process.cwd());
clipboardy.writeSync(directoryContents);
