import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const requiredRoutes = [
  '/',
  '/products',
  '/pod-margin-lens',
  '/pod-margin-lens/privacy',
  '/pod-margin-lens/support',
  '/pod-margin-lens/roadmap',
];
const forbiddenPatterns = [
  /google-analytics/i,
  /gtag/i,
  /plausible/i,
  /segment/i,
  /mixpanel/i,
  /stripe/i,
  /paypal/i,
  /shopify\.com\/admin/i,
];

function routeToFile(route) {
  if (route === '/') return path.join(publicDir, 'index.html');
  return path.join(publicDir, route, 'index.html');
}

function collectFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...collectFiles(fullPath));
    if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

for (const route of requiredRoutes) {
  const file = routeToFile(route);
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required route file: ${file}`);
  }
}

const files = collectFiles(publicDir);
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  for (const pattern of forbiddenPatterns) {
    if (pattern.test(content)) {
      throw new Error(`Forbidden pattern ${pattern} found in ${file}`);
    }
  }
}

const htmlFiles = files.filter((file) => file.endsWith('.html'));
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const internalLinks = [...content.matchAll(/href="(\/[^"#?]*)"/g)].map((match) => match[1]);
  for (const link of internalLinks) {
    const target = link.endsWith('/') ? link.slice(0, -1) : link;
    const route = target || '/';
    if (!requiredRoutes.includes(route) && route !== '/assets/styles.css') {
      throw new Error(`Unknown internal link ${link} in ${file}`);
    }
  }
}

console.log('Static site checks passed.');
