import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(__dirname, '..');

const skApiDir = path.resolve(docsRoot, 'docs/api');
const enApiDir = path.resolve(docsRoot, 'i18n/en/docusaurus-plugin-content-docs/current/api');

const SLOVAK_HINT_WORDS = new Set([
  'a',
  'aj',
  'alebo',
  'atribút',
  'atribúty',
  'componentu',
  'dokumentácia',
  'element',
  'ikona',
  'komponent',
  'komponentu',
  'metóda',
  'metódy',
  'obsah',
  'ovládanie',
  'použiť',
  'použitie',
  'predvolené',
  'prvok',
  'prístupnosť',
  'stav',
  'tlačidlo',
  'udalosť',
  'udalosti',
  'vlastnosť',
  'vlastnosti',
  'zobraziť',
]);

const ENGLISH_HINT_WORDS = new Set([
  'accessibility',
  'api',
  'button',
  'component',
  'components',
  'content',
  'custom',
  'description',
  'documentation',
  'event',
  'events',
  'method',
  'methods',
  'property',
  'properties',
  'slots',
  'styling',
  'use',
]);

function readApiFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => path.resolve(dir, fileName))
    .sort((a, b) => a.localeCompare(b));
}

function stripMarkdown(input) {
  return String(input || '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function sentenceClamp(text, maxLength = 190) {
  const normalized = stripMarkdown(text);
  if (!normalized) {
    return '';
  }

  if (normalized.length <= maxLength) {
    return /[.!?]$/.test(normalized) ? normalized : `${normalized}.`;
  }

  const softCut = normalized.slice(0, maxLength);
  const punctuationIndex = Math.max(softCut.lastIndexOf('. '), softCut.lastIndexOf('! '), softCut.lastIndexOf('? '));
  const fallbackIndex = softCut.lastIndexOf(' ');
  const cutIndex = punctuationIndex > 110 ? punctuationIndex + 1 : fallbackIndex > 110 ? fallbackIndex : maxLength;
  const shortened = normalized.slice(0, cutIndex).trim();

  return /[.!?]$/.test(shortened) ? shortened : `${shortened}.`;
}

function wordMatches(text, dictionary) {
  const words = String(text || '').toLowerCase().match(/[a-záäčďéíĺľňóôŕšťúýž]+/g) || [];
  let count = 0;
  for (const word of words) {
    if (dictionary.has(word)) {
      count += 1;
    }
  }
  return count;
}

function isLikelySlovak(text) {
  const value = String(text || '').trim();
  if (!value) {
    return false;
  }
  if (/[áäčďéíĺľňóôŕšťúýž]/i.test(value)) {
    return true;
  }
  return wordMatches(value, SLOVAK_HINT_WORDS) >= 2;
}

function isLikelyEnglish(text) {
  const value = String(text || '').trim();
  if (!value) {
    return false;
  }
  if (/[áäčďéíĺľňóôŕšťúýž]/i.test(value)) {
    return false;
  }
  return wordMatches(value, ENGLISH_HINT_WORDS) >= 2;
}

function extractLeadParagraph(source) {
  const bodyMatch = source.match(/<EncapsulationPill[^>]*\/>\s*([\s\S]*?)\n##\s/m);
  if (!bodyMatch) {
    return '';
  }

  const body = bodyMatch[1]
    .replace(/:::[\s\S]*?:::/g, ' ')
    .replace(/import\s+[^\n]+/g, ' ')
    .replace(/<[^>]*>/g, ' ');

  const lines = body
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return '';
  }

  return sentenceClamp(lines.slice(0, 4).join(' '));
}

function fallbackMeta(locale, slug) {
  const tag = `wje-${slug}`;

  if (locale === 'en') {
    return `API documentation for ${tag}, including usage guidance, attributes, events, methods, styling options, and slots.`;
  }

  return `API dokumentácia pre ${tag} vrátane odporúčaného použitia, atribútov, udalostí, metód, možností štýlovania a slotov.`;
}

function replaceMetaDescription(source, description) {
  const escaped = String(description || '').replace(/"/g, '&quot;');
  const canonicalMeta = `<meta\n    name="description"\n    content="${escaped}"\n  />`;
  const metaPattern = /<meta[\s\S]*?name="description"[\s\S]*?\/>/m;

  if (!metaPattern.test(source)) {
    return source;
  }

  return source.replace(metaPattern, canonicalMeta);
}

function ensureHeadClosingTag(source) {
  if (!source.includes('<head>') || source.includes('</head>')) {
    return source;
  }

  const metaPattern = /<meta[\s\S]*?name="description"[\s\S]*?\/>/m;
  const metaMatch = source.match(metaPattern);

  if (metaMatch) {
    return source.replace(metaPattern, `${metaMatch[0]}\n</head>`);
  }

  const encapsulationImport = /import\s+EncapsulationPill\s+from\s+'@components\/page\/api\/EncapsulationPill';/;
  if (encapsulationImport.test(source)) {
    return source.replace(encapsulationImport, `</head>\n\nimport EncapsulationPill from '@components/page/api/EncapsulationPill';`);
  }

  return source;
}

function applyTerminology(source, locale) {
  const replacements =
    locale === 'sk'
      ? [
          [/## Atribúty a Vlastnosti/g, '## Atribúty a vlastnosti'],
          [/## Eventy/g, '## Udalosti'],
          [/## CSS Shadow Parts/g, '## CSS tieňové časti'],
          [/## CSS Custom Vlastnosti/g, '## CSS vlastné premenné'],
          [/### CSS Custom Vlastnosti/g, '### CSS vlastné premenné'],
          [/WebJET design systému/g, 'WebJET dizajn systému'],
          [/focus states/gi, 'focus stavy'],
          [/naming konvencií/gi, 'konvencií pomenovania'],
          [/design tokenov/gi, 'dizajnových tokenov'],
        ]
      : [
          [/## Editing styles/g, '## Styling'],
          [/## The shape of the button/g, '## Button Shape'],
          [/## Button filling/g, '## Button Fill'],
        ];

  let updated = source;
  for (const [pattern, replacement] of replacements) {
    updated = updated.replace(pattern, replacement);
  }

  return updated;
}

function processFile(filePath, locale) {
  const slug = path.basename(filePath, '.md');
  const original = fs.readFileSync(filePath, 'utf8');
  let next = applyTerminology(original, locale);

  const lead = extractLeadParagraph(next);
  let description = lead || fallbackMeta(locale, slug);

  if (locale === 'en' && isLikelySlovak(description)) {
    description = fallbackMeta('en', slug);
  }
  if (locale === 'sk' && isLikelyEnglish(description)) {
    description = fallbackMeta('sk', slug);
  }

  next = replaceMetaDescription(next, sentenceClamp(description));
  next = ensureHeadClosingTag(next);

  if (next !== original) {
    fs.writeFileSync(filePath, next);
    return true;
  }

  return false;
}

function run() {
  const skFiles = readApiFiles(skApiDir);
  const enFiles = readApiFiles(enApiDir);

  let changed = 0;
  for (const filePath of skFiles) {
    if (processFile(filePath, 'sk')) {
      changed += 1;
    }
  }
  for (const filePath of enFiles) {
    if (processFile(filePath, 'en')) {
      changed += 1;
    }
  }

  console.log(`Editorial pass updated files: ${changed}`);
}

run();
