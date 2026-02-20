import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const docsRoot = path.resolve(__dirname, '..');

const docsApiDir = path.resolve(docsRoot, 'docs/api');
const enApiDir = path.resolve(docsRoot, 'i18n/en/docusaurus-plugin-content-docs/current/api');

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

  return [...new Set(tags)].sort((a, b) => a.localeCompare(b));
}

function toTitle(tag) {
  return tag
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function getPageTemplate(tag, locale) {
  const title = toTitle(tag);
  const imports = `
import Props from '@ionic-internal/component-api/v1/${tag}/props.md';
import Events from '@ionic-internal/component-api/v1/${tag}/events.md';
import Methods from '@ionic-internal/component-api/v1/${tag}/methods.md';
import Parts from '@ionic-internal/component-api/v1/${tag}/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/${tag}/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/${tag}/slots.md';
`;

  if (locale === 'en') {
    return `---
title: '${title}'
---
${imports}
import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The \`wje-${tag}\` page was auto-generated to keep API documentation coverage in sync with the current component set.
Detailed usage and best-practice guidance will be expanded in the next content phase.

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
`;
  }

  return `---
title: '${title}'
---
${imports}
import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Stránka pre \`wje-${tag}\` bola automaticky doplnená, aby dokumentácia pokrývala aktuálnu verziu komponentov.
Detailné návody na použitie a odporúčania doplníme v ďalšej obsahovej fáze.

## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />
`;
}

function ensureFile(filePath, content) {
  if (fs.existsSync(filePath)) {
    return false;
  }

  fs.writeFileSync(filePath, content);
  return true;
}

function main() {
  const manifest = readManifest();
  const tags = getManifestTags(manifest);
  const createdFiles = [];

  for (const tag of tags) {
    const skPath = path.resolve(docsApiDir, `${tag}.md`);
    const enPath = path.resolve(enApiDir, `${tag}.md`);

    if (ensureFile(skPath, getPageTemplate(tag, 'sk'))) {
      createdFiles.push(path.relative(docsRoot, skPath));
    }
    if (ensureFile(enPath, getPageTemplate(tag, 'en'))) {
      createdFiles.push(path.relative(docsRoot, enPath));
    }
  }

  if (createdFiles.length === 0) {
    console.log('No missing API pages found.');
    return;
  }

  console.log('Created API pages:');
  createdFiles.forEach((filePath) => console.log(`- ${filePath}`));
}

main();
