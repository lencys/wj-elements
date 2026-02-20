import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const docsRoot = path.resolve(__dirname, '..');

const skApiDir = path.resolve(docsRoot, 'docs/api');
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

function toKebabCase(value) {
  return value
    .replace(/\.md$/i, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase();
}

function normalizeCandidate(value) {
  return value.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function findSlug(value, slugs) {
  const kebab = toKebabCase(value);
  if (slugs.has(kebab)) {
    return kebab;
  }

  const normalized = normalizeCandidate(value);
  for (const slug of slugs) {
    if (normalizeCandidate(slug) === normalized) {
      return slug;
    }
  }

  return null;
}

function categoryForSlug(slug) {
  const map = {
    form: new Set([
      'checkbox',
      'color-picker',
      'copy-button',
      'file-upload',
      'file-upload-item',
      'form',
      'input',
      'input-file',
      'option',
      'options',
      'pagination',
      'radio',
      'radio-group',
      'rate',
      'select',
      'slider',
      'step',
      'stepper',
      'textarea',
      'toggle',
    ]),
    layout: new Set([
      'aside',
      'col',
      'container',
      'footer',
      'grid',
      'header',
      'layout',
      'main',
      'masonry',
      'panel',
      'row',
      'sliding-container',
      'split-view',
      'toolbar',
      'toolbar-action',
      'toolbar-actions',
    ]),
    navigation: new Set([
      'breadcrumb',
      'breadcrumbs',
      'menu',
      'menu-button',
      'menu-item',
      'menu-label',
      'route',
      'router',
      'router-link',
      'router-outlet',
      'tab',
      'tab-group',
      'tab-panel',
      'timeline',
      'timeline-item',
      'tree',
      'tree-item',
      'orgchart',
      'orgchart-group',
      'orgchart-item',
    ]),
    feedback: new Set([
      'dialog',
      'dropdown',
      'level-indicator',
      'popup',
      'progress-bar',
      'status',
      'toast',
      'tooltip',
    ]),
    media: new Set([
      'avatar',
      'badge',
      'card',
      'card-content',
      'card-controls',
      'card-header',
      'card-subtitle',
      'card-title',
      'carousel',
      'carousel-item',
      'chip',
      'icon',
      'icon-picker',
      'img',
      'img-comparer',
      'item',
      'list',
      'qr-code',
      'relative-time',
      'thumbnail',
    ]),
  };

  for (const [category, slugs] of Object.entries(map)) {
    if (slugs.has(slug)) {
      return category;
    }
  }

  return 'general';
}

function skGuidance(slug) {
  const tag = `wje-${slug}`;
  const category = categoryForSlug(slug);

  const byCategory = {
    form: {
      use: `Použite \`${tag}\`, keď používateľ zadáva hodnotu, vyberá možnosti alebo vykonáva akciu vo formulári.`,
      avoid:
        'Nepoužívajte ho len ako vizuálny dekoratívny prvok bez interakcie. V takom prípade uprednostnite prezentačné komponenty.',
      a11y:
        'Vždy prepojte komponent s popisom (`label`/`aria-label`), zachovajte ovládanie klávesnicou a pri validačných chybách zobrazte zrozumiteľnú správu.',
      practices: [
        'Majte jednotné validačné pravidlá a error stavy naprieč celým formulárom.',
        'Pri asynchrónnych operáciách zobrazte stav načítania alebo disabled stav.',
        'Pri zložitých formulároch preferujte menšie sekcie a okamžitú spätnú väzbu.',
      ],
    },
    layout: {
      use: `Použite \`${tag}\` na skladanie stabilného rozloženia stránky s jasnou hierarchiou obsahu.`,
      avoid: 'Nepoužívajte ho na riešenie biznis logiky ani na stavovú orchestráciu komponentov.',
      a11y:
        'Zachovajte semantiku dokumentu (`header`, `main`, `aside`, `footer`) a logické poradie fokusovateľných prvkov.',
      practices: [
        'Najprv definujte desktop/mobile breakpoints a až potom dolaďujte detaily.',
        'Preferujte konzistentné spacing tokeny pred ad-hoc margin/padding hodnotami.',
        'Pri layoutoch s overflow vždy otestujte klávesnicovú navigáciu a čítačky.',
      ],
    },
    navigation: {
      use: `Použite \`${tag}\`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.`,
      avoid: 'Nepoužívajte viac paralelných navigačných vzorov, ktoré si navzájom konkurujú.',
      a11y:
        'Zabezpečte jasné active/selected stavy, predvídateľné poradie tabulátora a pomenovanie ovládacích prvkov.',
      practices: [
        'Držte URL a UI stav v synchronizácii, aby bola navigácia reprodukovateľná.',
        'Používajte konzistentné názvoslovie položiek naprieč menu, breadcrumbom a tabmi.',
        'Pri hlbokých štruktúrach pridajte pomocný kontext (breadcrumb, nadpis, ikony).',
      ],
    },
    feedback: {
      use: `Použite \`${tag}\`, keď potrebujete používateľovi okamžite komunikovať stav, výsledok akcie alebo ďalší krok.`,
      avoid: 'Nepoužívajte viacero konkurenčných feedback kanálov naraz pre jednu udalosť.',
      a11y:
        'Status správy oznamujte cez vhodné ARIA live regióny a pri modálnych prvkoch spravujte fokus (open/close).',
      practices: [
        'Vyberte závažnosť správ (info/success/warning/error) podľa reálneho dopadu na používateľa.',
        'Pri blokujúcich akciách preferujte potvrdenie iba tam, kde hrozí nevratná zmena.',
        'Nastavte konzistentné timeouty, aby používateľ stihol správu prečítať.',
      ],
    },
    media: {
      use: `Použite \`${tag}\` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.`,
      avoid: 'Nepoužívajte ho ako náhradu za štruktúrované dáta tam, kde je potrebná presná interakcia.',
      a11y:
        'Doplňte alternatívny text pre obrázky, čitateľné kontrasty a textové ekvivalenty pre ikony bez popisu.',
      practices: [
        'Komprimujte médiá a používajte lazy loading pri veľkých zoznamoch.',
        'Pri kartách a zoznamoch držte konzistentné informačné priority.',
        'Neopakujte rovnakú informáciu súčasne textom aj ikonou bez pridanej hodnoty.',
      ],
    },
    general: {
      use: `Použite \`${tag}\`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET design systému.`,
      avoid: 'Nepoužívajte komponent mimo jeho zodpovednosti; pri netypickom prípade radšej zložte viac menších prvkov.',
      a11y:
        'Skontrolujte klávesnicové ovládanie, focus states, kontrast a zrozumiteľné pomenovanie interaktívnych prvkov.',
      practices: [
        'Preferujte API komponentu pred ručnými DOM zásahmi.',
        'Držte sa dizajnových tokenov a konzistentných naming konvencií.',
        'Pred nasadením otestujte komponent v reálnych dátových scenároch.',
      ],
    },
  };

  const content = byCategory[category];
  return `
## Kedy použiť

${content.use}

## Kedy nepoužiť

${content.avoid}

## Prístupnosť

${content.a11y}

## Odporúčané postupy

- ${content.practices[0]}
- ${content.practices[1]}
- ${content.practices[2]}
`;
}

function enGuidance(slug) {
  const tag = `wje-${slug}`;
  const category = categoryForSlug(slug);

  const byCategory = {
    form: {
      use: `Use \`${tag}\` when users need to enter values, choose options, or trigger form-related actions.`,
      avoid: 'Do not use it as a decorative element without interaction. Prefer presentational components in that case.',
      a11y:
        'Always provide a label (`label`/`aria-label`), keep keyboard support, and surface clear validation feedback.',
      practices: [
        'Keep validation rules and error behavior consistent across the entire form.',
        'Show loading or disabled states during async operations.',
        'Split complex forms into smaller sections with immediate feedback.',
      ],
    },
    layout: {
      use: `Use \`${tag}\` to compose stable page structure with clear visual and semantic hierarchy.`,
      avoid: 'Do not use layout components to handle business logic or application orchestration.',
      a11y:
        'Preserve document semantics (`header`, `main`, `aside`, `footer`) and logical tab/focus order.',
      practices: [
        'Define mobile/desktop breakpoints first, then refine visual details.',
        'Prefer spacing tokens over ad-hoc margin/padding overrides.',
        'Test keyboard and screen reader behavior for overflow scenarios.',
      ],
    },
    navigation: {
      use: `Use \`${tag}\` when users need to understand location, move between views, or traverse hierarchy.`,
      avoid: 'Do not combine multiple competing navigation patterns for the same user flow.',
      a11y:
        'Ensure visible active/selected states, predictable tab order, and clear control naming.',
      practices: [
        'Keep URL state and UI navigation state synchronized.',
        'Use consistent labels across menu, breadcrumbs, and tabs.',
        'Add context for deep structures (breadcrumbs, headings, icon cues).',
      ],
    },
    feedback: {
      use: `Use \`${tag}\` to communicate status, result of actions, or required next steps immediately.`,
      avoid: 'Do not show multiple feedback channels for the same event unless there is a strong reason.',
      a11y:
        'Announce status updates with suitable ARIA live regions and manage focus for modal interactions.',
      practices: [
        'Match message severity (info/success/warning/error) to actual user impact.',
        'Use confirmations only for destructive or hard-to-reverse actions.',
        'Keep timeouts consistent so users have enough time to read messages.',
      ],
    },
    media: {
      use: `Use \`${tag}\` to improve readability, scannability, and contextual understanding of content.`,
      avoid: 'Do not replace structured interactive data with media-only presentation when precision is needed.',
      a11y:
        'Provide alt text, maintain readable contrast, and include text equivalents for icon-only controls.',
      practices: [
        'Compress media and use lazy loading in larger collections.',
        'Keep information priority consistent across cards/lists.',
        'Avoid duplicating the same meaning in icon and text without added value.',
      ],
    },
    general: {
      use: `Use \`${tag}\` when you need a consistent WebJET-based implementation for this UI concern.`,
      avoid: 'Do not stretch the component beyond its responsibility; compose smaller primitives for edge cases.',
      a11y:
        'Validate keyboard behavior, focus states, contrast, and meaningful labels for interactive elements.',
      practices: [
        'Prefer component APIs over direct DOM manipulation.',
        'Stick to design tokens and naming conventions.',
        'Test components with realistic data before production rollout.',
      ],
    },
  };

  const content = byCategory[category];
  return `
## When to use

${content.use}

## When not to use

${content.avoid}

## Accessibility

${content.a11y}

## Best Practices

- ${content.practices[0]}
- ${content.practices[1]}
- ${content.practices[2]}
`;
}

function modernizeApiFile(filePath, locale, manifestTags, apiSlugs) {
  const slug = path.basename(filePath, '.md');
  let source = fs.readFileSync(filePath, 'utf8');
  const original = source;

  // Normalize legacy component tag prefix in HTML snippets.
  source = source.replace(/<\s*\/?\s*wj-/g, (match) => match.replace('wj-', 'wje-'));

  // Normalize legacy inline component tag references in prose.
  for (const tag of manifestTags) {
    const regex = new RegExp(`\\bwj-${tag}\\b`, 'g');
    source = source.replace(regex, `wje-${tag}`);
  }

  // Keep legacy usage snippet folder names unchanged.
  source = source.replace(/(@site\/static\/usage\/v1\/[^'"\s]*)wje-([a-z0-9-]+)([^'"\s]*)/g, '$1wj-$2$3');

  // Common legacy API route remnants.
  source = source.replace(/\/docs\/api\//g, '/api/');
  source = source.replace(/Ionic events/g, 'WebJET events');
  source = source.replace(/HTMLIonRouterElement/g, 'HTMLElement');
  source = source.replace(/<\/ion-router>/g, '</wje-router>');
  source = source.replace(/title:\s*'Toast TODO'/g, "title: 'Toast'");

  // Fix API internal links.
  source = source.replace(/\(\.\.\/([A-Za-z0-9_-]+)(?:\.md)?(#[^)]+)?\)/g, (_match, rawTarget, hash = '') => {
    const resolved = findSlug(rawTarget, apiSlugs);
    if (!resolved) {
      return _match;
    }
    return `(./${resolved}${hash})`;
  });

  // Insert developer-centric guidance sections when missing.
  const hasGuidance =
    source.includes('## Kedy použiť') ||
    source.includes('## When to use') ||
    source.includes('## When to Use') ||
    source.includes('## Kedy Použiť');

  const anchorHeading = locale === 'sk' ? '## Atribúty a Vlastnosti' : '## Attributes and Properties';
  if (!hasGuidance && source.includes(anchorHeading)) {
    const guidance = locale === 'sk' ? skGuidance(slug) : enGuidance(slug);
    source = source.replace(anchorHeading, `${guidance}\n${anchorHeading}`);
  }

  if (source !== original) {
    fs.writeFileSync(filePath, source);
    return true;
  }

  return false;
}

function modernizeIntroNext() {
  const introNextSk = path.resolve(docsRoot, 'docs/intro/next.md');
  const introNextEn = path.resolve(docsRoot, 'i18n/en/docusaurus-plugin-content-docs/current/intro/next.md');

  const nextTemplateSk = `---
title: Ďalšie kroky
---

<head>
  <title>Ďalšie kroky | Vývoj s WebJET Elements</title>
  <meta
    name="description"
    content="Pokračujte po inštalácii odporúčanými krokmi pre implementáciu WebJET Elements."
  />
</head>

## Ďalšie kroky pre vývojárov

Po inštalácii pokračujte týmto postupom:

1. Načítajte WebJET štýly a balík komponentov v entry pointe aplikácie.
2. Vyberte pilotnú obrazovku a nahraďte jeden existujúci UI blok WebJET komponentmi.
3. Nastavte spoločné témy a tokeny (farby, spacing, typografia) pred širším rolloutom.
4. Doplňte komponentové testy pre interakčné stavy a prístupnosť.

## Odporúčané začiatky

- Základné nastavenie a integrácia balíka: [Inštalácia WebJET Elements](./install)
- Príprava prostredia a toolchain: [Konfigurácia prostredia](./environment)
- Katalóg komponentov pre plánovanie migrácie: [Komponenty](/components)
`;

  const nextTemplateEn = `---
title: Next Steps
---

<head>
  <title>Next Steps | Build with WebJET Elements</title>
  <meta
    name="description"
    content="Continue after installation with recommended implementation steps for WebJET Elements."
  />
</head>

## Next Steps for Developers

After installation, continue with this sequence:

1. Load WebJET styles and component bundle in your app entry point.
2. Pick a pilot screen and replace one existing UI block with WebJET components.
3. Establish shared theme tokens (colors, spacing, typography) before broader rollout.
4. Add component tests for interaction states and accessibility behavior.

## Recommended Starting Points

- Core setup and package integration: [Install WebJET Elements](./install)
- Environment baseline and toolchain: [Environment Configuration](./environment)
- Component catalog for planning migration: [Components](/components)
`;

  fs.writeFileSync(introNextSk, nextTemplateSk);
  fs.writeFileSync(introNextEn, nextTemplateEn);
}

function run() {
  const manifest = readManifest();
  const manifestTags = getManifestTags(manifest);

  const skFiles = fs
    .readdirSync(skApiDir)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => path.resolve(skApiDir, fileName));
  const enFiles = fs
    .readdirSync(enApiDir)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => path.resolve(enApiDir, fileName));

  const apiSlugs = new Set(
    [...skFiles, ...enFiles]
      .map((filePath) => path.basename(filePath, '.md'))
      .map((slug) => toKebabCase(slug))
  );

  let changed = 0;
  for (const filePath of skFiles) {
    if (modernizeApiFile(filePath, 'sk', manifestTags, apiSlugs)) {
      changed += 1;
    }
  }
  for (const filePath of enFiles) {
    if (modernizeApiFile(filePath, 'en', manifestTags, apiSlugs)) {
      changed += 1;
    }
  }

  modernizeIntroNext();

  console.log(`Modernized API content files: ${changed}`);
}

run();
