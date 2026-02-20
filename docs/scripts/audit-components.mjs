import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const docsRoot = path.resolve(__dirname, '..');

const LEGACY_DOC_ONLY_PAGES = new Set(['layout', 'select-option', 'select-options', 'toolbar-actions']);

function readManifest() {
  const candidates = [
    path.resolve(repoRoot, 'dist/custom-elements.json'),
    path.resolve(repoRoot, 'custom-elements.json'),
  ];

  const manifestPath = candidates.find((candidate) => fs.existsSync(candidate));
  if (!manifestPath) {
    throw new Error(
      `Unable to locate custom-elements manifest. Tried: ${candidates.join(', ')}. Run "npm run analyze" in repository root.`
    );
  }

  return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
}

function getManifestTags(manifest) {
  const declarations = (manifest.modules || []).flatMap((moduleData) => moduleData.declarations || []);
  const tags = declarations
    .map((declaration) => declaration?.tagName)
    .filter((tagName) => typeof tagName === 'string' && tagName.startsWith('wje-'))
    .map((tagName) => tagName.slice(4));

  return new Set(tags);
}

function getDocsApiPages() {
  const docsApiDir = path.resolve(docsRoot, 'docs/api');
  const files = fs.readdirSync(docsApiDir);
  const pages = files
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));

  return new Set(pages);
}

function sorted(values) {
  return [...values].sort((a, b) => a.localeCompare(b));
}

function main() {
  const manifest = readManifest();
  const manifestTags = getManifestTags(manifest);
  const docsPages = getDocsApiPages();

  const missingPages = sorted([...manifestTags].filter((tag) => !docsPages.has(tag)));
  const extraPages = sorted(
    [...docsPages].filter((page) => !manifestTags.has(page) && !LEGACY_DOC_ONLY_PAGES.has(page))
  );

  if (missingPages.length > 0) {
    console.error('Component API pages missing for the following custom elements:');
    missingPages.forEach((page) => console.error(`- ${page}`));
    process.exit(1);
  }

  console.log(`Component API coverage OK. ${manifestTags.size} custom elements are covered.`);

  if (extraPages.length > 0) {
    console.warn('Extra docs API pages found (not in current custom-elements manifest):');
    extraPages.forEach((page) => console.warn(`- ${page}`));
  }
}

main();
