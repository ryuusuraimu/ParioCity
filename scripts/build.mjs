import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'public');
const outputDir = path.join(root, 'dist');

if (!fs.existsSync(sourceDir)) {
  throw new Error('public/ does not exist.');
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.cpSync(sourceDir, outputDir, { recursive: true });

console.log('Built static site to dist/');
