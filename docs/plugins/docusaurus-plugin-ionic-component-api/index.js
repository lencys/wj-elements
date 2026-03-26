const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');

const COMPATIBILITY_ALIASES = {
  image: 'img',
  'image-comparer': 'img-comparer',
  'toolbar-actions': 'toolbar-action',
};

const VIRTUAL_COMPONENTS = {
  layout: {
    props: [],
    events: [],
    methods: [],
    parts: [],
    customProps: [],
    slots: [],
  },
};

const LIFECYCLE_METHODS = new Set([
  'setupAttributes',
  'beforeConnect',
  'afterConnect',
  'beforeDraw',
  'draw',
  'afterDraw',
  'beforeDisconnect',
  'afterDisconnect',
  'syncAria',
  'syncAriaLabel',
  'componentCleanup',
]);

const NON_API_HOST_ATTRIBUTES = new Set(['class', 'style', 'part', 'slot', 'role', 'tabindex', 'id']);

const BOOLEAN_ATTRIBUTE_NAMES = new Set([
  'active',
  'async',
  'checked',
  'close-hidden',
  'collapse',
  'collapsed',
  'disabled',
  'expanded',
  'hidden',
  'hidden-footer',
  'hidden-header',
  'initials',
  'multiple',
  'readonly',
  'required',
  'selected',
]);

const PROPERTY_TYPE_OVERRIDES = new Map([
  ['progress-bar.progress', 'number'],
  ['rate.disabled', 'boolean'],
  ['rate.readonly', 'boolean'],
]);

const PROPERTY_EXCLUSIONS_BY_COMPONENT = new Map([
  ['rate', new Set(['is-hover'])],
  ['reorder', new Set(['drag-el', 'clone-el', 'original-index'])],
]);

const METHOD_EXCLUSIONS_BY_COMPONENT = new Map([
  ['breadcrumb', new Set(['drawCollapsedIndicator', 'collapseDropdown', 'collapseButton'])],
  ['button-group', new Set(['findButton', 'toggle', 'updateButtonState'])],
  ['carousel', new Set([
    'syncActiveToCenter',
    'setIntersectionObserver',
    'cloneFirstAndLastItems',
    'removeActiveSlide',
    'changePagination',
    'changeThumbnails',
    'createNextButton',
    'createPreviousButton',
    'createPagination',
    'createThumbnails',
    'getSlidesWithClones',
    'getVisualIndexForLogical',
    'getLogicalIndexForVisual',
  ])],
  ['copy-button', new Set(['copyTarget'])],
  ['dialog', new Set(['htmlDialogBody', 'beforeOpen', 'afterOpen', 'beforeClose', 'afterClose', 'updateHasFooter'])],
  ['dropdown', new Set(['beforeShow', 'afterShow'])],
  ['infinite-scroll', new Set(['getPages', 'hideLoader', 'showLoader', 'hasMorePages'])],
  ['menu-item', new Set(['collapseItem', 'showSubmenu', 'hideSubmenu', 'submenuToggle', 'deactivateSubmenu', 'activateSubmenu', 'getTextFromElement'])],
  ['options', new Set(['processData', 'filterOutDrawnOptions', 'getPages', 'findSelectedOptionData'])],
  ['popup', new Set(['showHide', 'reposition', '_mountContentToPortal', '_restoreContentFromPortal', '_ensurePortalRoot', 'findDialog', 'markContentReady'])],
  ['progress-bar', new Set(['getCircleDasharray', 'getCircleDashoffset', 'setCircleProgress'])],
  ['rate', new Set(['createIcons', 'changeRate', 'getIcons', 'getValueFromXPosition', 'roundToPrecision'])],
  ['select', new Set(['selectionChanged', 'selections', 'counter', 'getChip', 'htmlOption', 'htmlSelectedItem', 'optionCheckSlot'])],
  ['sliding-container', new Set(['htmlCloseButton', 'getParentElement', 'checkForVariant', 'beforeOpen', 'afterOpen', 'beforeClose', 'afterClose', 'doAnimateTransition'])],
  ['stepper', new Set(['processStep', '_executeGoToStep', 'setStepDefault', 'setStepActive', 'setContentActive', 'getStepElement', 'renderStepContent', 'setStepDone', 'setStepLocked'])],
  ['toast', new Set(['startTimer', 'stopTimer', 'resumeTimer', 'removeChildAndStack'])],
  ['tooltip', new Set(['dispatch', 'beforeShow', 'afterShow', 'checkSelector'])],
]);

const LOCALE_COPY = {
  en: {
    missingDescription: 'No description available.',
    noProperties: 'No properties available for this component.',
    noEvents: 'No events available for this component.',
    noMethods: 'No public methods available for this component.',
    noParts: 'No CSS shadow parts available for this component.',
    noCustomProps: 'No CSS custom properties available for this component.',
    noSlots: 'No slots available for this component.',
    labelName: 'Name',
    labelDescription: 'Description',
    labelAttribute: 'Attribute',
    labelType: 'Type',
    labelDefault: 'Default',
    labelSignature: 'Signature',
    deprecatedSuffix: '(deprecated)',
    deprecatedLabel: '_Deprecated_',
  },
  sk: {
    missingDescription: 'Popis nie je dostupný.',
    noProperties: 'Pre tento komponent nie sú dostupné žiadne vlastnosti.',
    noEvents: 'Pre tento komponent nie sú dostupné žiadne udalosti.',
    noMethods: 'Pre tento komponent nie sú dostupné žiadne verejné metódy.',
    noParts: 'Pre tento komponent nie sú dostupné žiadne CSS časti tieňa.',
    noCustomProps: 'Pre tento komponent nie sú dostupné žiadne vlastné CSS vlastnosti.',
    noSlots: 'Pre tento komponent nie sú dostupné žiadne sloty.',
    labelName: 'Názov',
    labelDescription: 'Popis',
    labelAttribute: 'Atribút',
    labelType: 'Typ',
    labelDefault: 'Predvolené',
    labelSignature: 'Signatúra',
    deprecatedSuffix: '(zastarané)',
    deprecatedLabel: '_Zastarané_',
  },
};

const SK_DESCRIPTION_OVERRIDES = new Map([
  [
    'Creates and returns a dropdown UI component for collapsed breadcrumbs. This method generates a dropdown element with a button trigger and a menu populated with items corresponding to the collapsed breadcrumbs. The dropdown is configured to handle specific interactions and ensure that events are appropriately managed to avoid propagation issues. Menu items are linked to their corresponding breadcrumbs, enabling the same functionality as clicking on the original breadcrumb.',
    'Vytvorí a vráti rozbaľovacie menu pre zbalené breadcrumbs. Menu obsahuje položky pre skryté segmenty a spracúva interakcie tak, aby sa udalosti nešírili mimo komponentu. Každá položka menu smeruje na rovnakú akciu ako pôvodný breadcrumb.',
  ],
  [
    'Creates a button element that expands hidden breadcrumbs when clicked. The button is set with appropriate attributes and event listeners to handle the expanding of hidden breadcrumb elements. Clicking the button will remove the button itself, reveal hidden breadcrumbs, and stop the current event propagation.',
    'Vytvorí tlačidlo, ktoré po kliknutí zobrazí skryté breadcrumb položky. Tlačidlo nastaví potrebné atribúty a obsluhu udalostí, po kliknutí sa odstráni a zastaví ďalšie šírenie udalosti.',
  ],
  [
    'Retrieves the breadcrumb trail for the current element by returning its parent element.',
    'Vráti breadcrumb trail pre aktuálny element cez jeho nadradený element.',
  ],
  [
    'Renders the collapsed indicator based on the current collapsed variant. If the collapsed variant is \'DROPDOWN\', it invokes the collapseDropdown method. Otherwise, it invokes the collapseButton method.',
    'Vykreslí indikátor zbalenia podľa aktuálneho variantu. Pri variante `DROPDOWN` použije metódu `collapseDropdown`, inak použije `collapseButton`.',
  ],
]);

const SK_REPLACEMENTS = [
  [/No description available\./gi, 'Popis nie je dostupný.'],
  [/selected name\.?/gi, 'vybraný názov.'],
  [/fetches pages\.?/gi, 'načíta stránky.'],
  [/renders columns\.?/gi, 'vykreslí stĺpce.'],
  [/renames pool\.?/gi, 'premenuje stĺpec.'],
  [/card placeholder\.?/gi, 'placeholder karty.'],
  [/provided item\.?/gi, 'poskytnutú položku.'],
  [/representing formatted value\.?/gi, 'časť pre formátovanú hodnotu.'],
  [/Časť representing formatted hodnota\.?/gi, 'Časť pre formátovanú hodnotu.'],
  [/slot for content before the formatted value\.?/gi, 'obsah pred formátovanou hodnotou.'],
  [/slot for content after the formatted value\.?/gi, 'obsah za formátovanou hodnotou.'],
  [/selected cards/gi, 'vybrané karty'],
  [/selected items/gi, 'vybrané položky'],
  [/child items/gi, 'detské položky'],
  [/that match specific criteria/gi, 'ktoré zodpovedajú zadaným kritériám'],
  [/multiple attribute for accordion\.?/gi, 'atribút multiple pre accordion.'],
  [/index attribute for accordion\.?/gi, 'atribút index pre accordion.'],
  [/disabled attribute for accordion\.?/gi, 'atribút disabled pre accordion.'],
  [/expanded attribute for accordion\.?/gi, 'atribút expanded pre accordion.'],
  [/value of rating component\.?/gi, 'hodnota komponentu hodnotenia.'],
  [/maximum value of rating component\.?/gi, 'maximálna hodnota komponentu hodnotenia.'],
  [/Content encoded into the QR code\./gi, 'Obsah zakódovaný do QR kódu.'],
  [/Background color of the QR code\./gi, 'Farba pozadia QR kódu.'],
  [/Foreground color of the QR code\./gi, 'Farba popredia QR kódu.'],
  [/Output QR code size in pixels\./gi, 'Výstupná veľkosť QR kódu v pixeloch.'],
  [/Background alfa kanál/gi, 'Alfa kanál pozadia'],
  [/Foreground alfa kanál/gi, 'Alfa kanál popredia'],
  [/Error correction level\./gi, 'Úroveň korekcie chýb.'],
  [/Accepted values:/gi, 'Akceptované hodnoty:'],
  [/Supports aliases:/gi, 'Podporuje aliasy:'],
  [/in range/gi, 'v rozsahu'],
  [/alpha channel/gi, 'alfa kanál'],
  [/first defined attribute value from alias list\./gi, 'prvú definovanú hodnotu atribútu zo zoznamu aliasov.'],
  [/The auto process files attribute\./gi, 'Atribút pre automatické spracovanie súborov.'],
  [/The no upload button attribute\./gi, 'Atribút na skrytie tlačidla nahrávania.'],
  [/Creates (the )?dialog body\.?/gi, 'Vytvorí telo dialógu.'],
  [/Closes (the )?dialog\.?/gi, 'Zatvorí dialóg.'],
  [/Closes dialóg\.?/gi, 'Zatvorí dialóg.'],
  [/Before (the )?dialog opens\.?/gi, 'Spustí sa pred otvorením dialógu.'],
  [/After (the )?dialog opens\.?/gi, 'Spustí sa po otvorení dialógu.'],
  [/Before (the )?dialog closes\.?/gi, 'Spustí sa pred zatvorením dialógu.'],
  [/After (the )?dialog closes\.?/gi, 'Spustí sa po zatvorení dialógu.'],
  [/Defines text color within (the )?dialog\.?/gi, 'Definuje farbu textu v dialógu.'],
  [/Defines (the )?text color within (the )?dialog\.?/gi, 'Definuje farbu textu v dialógu.'],
  [/Defines text color within dialóg\.?/gi, 'Definuje farbu textu v dialógu.'],
  [/text color within dialóg/gi, 'farbu textu v dialógu'],
  [/Definuje text color v dialóg\.?/gi, 'Definuje farbu textu v dialógu.'],
  [/Controls padding inside (the )?dialog\.?/gi, 'Určuje vnútorné odsadenie dialógu.'],
  [/Controls (the )?padding inside (the )?dialog\.?/gi, 'Určuje vnútorné odsadenie dialógu.'],
  [/Controls padding inside dialóg\.?/gi, 'Určuje vnútorné odsadenie dialógu.'],
  [/padding inside dialóg/gi, 'vnútorné odsadenie v dialógu'],
  [/Určuje padding v dialóg\.?/gi, 'Určuje vnútorné odsadenie v dialógu.'],
  [/Sets border radius for corners\.?/gi, 'Nastaví zaoblenie rohov.'],
  [/Sets (the )?border radius for (the )?dialog'?s corners\.?/gi, 'Nastaví zaoblenie rohov dialógu.'],
  [/Applies a shadow effect to (the )?dialog\.?/gi, 'Aplikuje tieň pre dialóg.'],
  [/for corners/gi, ''],
  [/\sfor corners\b\.?/gi, ''],
  [/Defines /gi, 'Definuje '],
  [/Controls /gi, 'Určuje '],
  [/\btext color\b/gi, 'farbu textu'],
  [/padding v dialóg/gi, 'vnútorné odsadenie v dialógu'],
  [/\bv dialóg\b/gi, 'v dialógu'],
  [/\bv komponent\b/gi, 'v komponente'],
  [/\bv a menu item\b/gi, 'v položke menu'],
  [/\bv a položka menu\b/gi, 'v položke menu'],
  [/v\s+a\s+položka menu/gi, 'v položke menu'],
  [/v dialóg\./gi, 'v dialógu.'],
  [/Určuje\s+padding\s+v\s+dialóg\.?/gi, 'Určuje vnútorné odsadenie v dialógu.'],
  [/for text/gi, 'pre text'],
  [/\btop padding\b/gi, 'horné odsadenie'],
  [/\bbottom padding\b/gi, 'dolné odsadenie'],
  [/\bline height\b/gi, 'výšku riadku'],
  [/\bin a menu item\b/gi, 'v položke menu'],
  [/Accepts any valid CSS length value/gi, 'Akceptuje ľubovoľnú platnú CSS dĺžkovú hodnotu'],
  [/Accepts any valid CSS color value/gi, 'Akceptuje ľubovoľnú platnú CSS hodnotu farby'],
  [/\bcolor of border\b/gi, 'farbu okraja'],
  [/\be\.g\./gi, 'napr.'],
  [/napr\.,/gi, 'napr.'],
  [/\by-coordinate\b/gi, 'y-súradnicu'],
  [/\bx-coordinate\b/gi, 'x-súradnicu'],
  [/Specifies /gi, 'Určuje '],
  [/\bends\./gi, 'končí.'],
  [/\bwithin\b/gi, 'v'],
  [/\binside\b/gi, 'v'],
  [/Helps prevent accidental submenu closing when navigating\./gi, 'Pomáha predísť nechcenému zatvoreniu submenu pri navigácii.'],
  [/\bsafe triangle\b/gi, 'bezpečnostný trojuholník'],
  [/\bwhere\b/gi, 'kde'],
  [/\bstarts\./gi, 'začína.'],
  [/border radius/gi, 'zaoblenie rohov'],
  [/\bfor corners\b\.?/gi, ''],
  [/The\b/gi, ''],
  [/\b[\w-]+'s\s+/gi, ''],
  [/^[a-z-]+\s+hlavný obsah\.?$/gi, 'Hlavný obsah slotu komponentu.'],
  [/main content/gi, 'hlavný obsah'],
  [/\b[a-z-]+\s+hlavný obsah\.?/gi, 'Hlavný obsah slotu komponentu.'],
  [/dialog body/gi, 'telo dialógu'],
  [/\bdialog\b/gi, 'dialóg'],
  [/native wrapper/gi, 'natívny obal'],
  [/native part/gi, 'natívna časť'],
  [/wrapper/gi, 'obal'],
  [/part/gi, 'časť'],
  [/Creates and returns/gi, 'Vytvorí a vráti'],
  [/Creates /gi, 'Vytvorí '],
  [/Renames /gi, 'Premenuje '],
  [/Fetches /gi, 'Načíta '],
  [/Renders /gi, 'Vykreslí '],
  [/Provides /gi, 'Poskytne '],
  [/Selects /gi, 'Vyberie '],
  [/an option/gi, 'položku'],
  [/available options/gi, 'dostupných možností'],
  [/representing/gi, 'pre'],
  [/formatted value/gi, 'formátovanú hodnotu'],
  [/\bprovided\b/gi, 'poskytnutú'],
  [/\bitem\b/gi, 'položku'],
  [/Creates and renders/gi, 'Vytvorí a vykreslí'],
  [/Creates and appends/gi, 'Vytvorí a pridá'],
  [/Creates a /gi, 'Vytvorí '],
  [/Returns the /gi, 'Vráti '],
  [/Returns /gi, 'Vráti '],
  [/Retrieves the /gi, 'Získa '],
  [/Retrieves /gi, 'Získa '],
  [/Gets the /gi, 'Získa '],
  [/Gets /gi, 'Získa '],
  [/Sets the /gi, 'Nastaví '],
  [/Sets /gi, 'Nastaví '],
  [/Updates the /gi, 'Aktualizuje '],
  [/Updates /gi, 'Aktualizuje '],
  [/Handles the /gi, 'Spracuje '],
  [/Handles /gi, 'Spracuje '],
  [/Called after/gi, 'Volá sa po'],
  [/Called before/gi, 'Volá sa pred'],
  [/This method /gi, 'Táto metóda '],
  [/This element /gi, 'Tento element '],
  [/This component /gi, 'Tento komponent '],
  [/\bcomponents\b/gi, 'komponenty'],
  [/\bcomponent\b/gi, 'komponent'],
  [/\battributes\b/gi, 'atribúty'],
  [/\battribute\b/gi, 'atribút'],
  [/\bevents\b/gi, 'udalosti'],
  [/\bevent\b/gi, 'udalosť'],
  [/\bvalues\b/gi, 'hodnoty'],
  [/\bvalue\b/gi, 'hodnota'],
  [/\bbutton\b/gi, 'tlačidlo'],
  [/\bdropdown\b/gi, 'rozbaľovacie menu'],
  [/\bmenu items\b/gi, 'položky menu'],
  [/\bmenu item\b/gi, 'položka menu'],
  [/for the current element/gi, 'pre aktuálny element'],
  [/for the component/gi, 'pre komponent'],
  [/by returning/gi, 'a vráti'],
  [/ from /gi, ' z '],
  [/ with /gi, ' s '],
  [/ and /gi, ' a '],
];

const ENGLISH_HINT_WORDS = new Set([
  'a',
  'after',
  'all',
  'an',
  'and',
  'any',
  'are',
  'as',
  'attribute',
  'attributes',
  'accepts',
  'available',
  'based',
  'before',
  'background',
  'badge',
  'border',
  'button',
  'called',
  'change',
  'checks',
  'click',
  'code',
  'component',
  'components',
  'contains',
  'creates',
  'coordinate',
  'coordinates',
  'content',
  'controls',
  'corners',
  'current',
  'default',
  'defines',
  'description',
  'dialog',
  'displays',
  'draw',
  'dropdown',
  'element',
  'elements',
  'enables',
  'ensures',
  'error',
  'event',
  'events',
  'fetches',
  'font',
  'family',
  'helps',
  'foreground',
  'for',
  'from',
  'function',
  'generates',
  'gets',
  'given',
  'handles',
  'if',
  'in',
  'index',
  'input',
  'is',
  'items',
  'item',
  'level',
  'list',
  'inside',
  'method',
  'methods',
  'name',
  'native',
  'of',
  'open',
  'opens',
  'on',
  'or',
  'output',
  'properties',
  'property',
  'range',
  'renders',
  'required',
  'returns',
  'selected',
  'specific',
  'safe',
  'select',
  'sets',
  'size',
  'slot',
  'state',
  'multiple',
  'match',
  'matches',
  'text',
  'top',
  'bottom',
  'submenu',
  'supports',
  'the',
  'this',
  'to',
  'triangle',
  'type',
  'updates',
  'close',
  'closes',
  'accordion',
  'rating',
  'pool',
  'pages',
  'columns',
  'placeholder',
  'representing',
  'provided',
  'formatted',
  'child',
  'criteria',
  'used',
  'value',
  'values',
  'valid',
  'within',
  'where',
  'when',
  'with',
  'wrapper',
]);

const SLOVAK_HINT_WORDS = new Set([
  'ak',
  'alebo',
  'aktualizuje',
  'atribút',
  'atribúty',
  'alfa',
  'bez',
  'časť',
  'časti',
  'celková',
  'cez',
  'farba',
  'hlavný',
  'hodnota',
  'hodnoty',
  'komponent',
  'komponentu',
  'komponenty',
  'metóda',
  'metódy',
  'na',
  'nastaví',
  'nie',
  'obsah',
  'popis',
  'použije',
  'predvolené',
  'pre',
  'prvok',
  'prvky',
  's',
  'sa',
  'slot',
  'spracuje',
  'stav',
  'typ',
  'udalosť',
  'udalosti',
  'v',
  'vráti',
  'vytvorí',
  'z',
  'zobrazí',
]);

const ENGLISH_RESIDUAL_WORDS = new Set([
  'fetches',
  'renders',
  'renames',
  'selected',
  'criteria',
  'specific',
  'match',
  'matches',
  'placeholder',
  'multiple',
  'index',
  'disabled',
  'expanded',
  'accordion',
  'rating',
  'cards',
  'items',
  'pages',
  'columns',
  'child',
  'pool',
  'provided',
  'representing',
  'formatted',
  'item',
  'name',
  'attribute',
  'component',
  'for',
  'of',
  'that',
  'within',
  'inside',
]);

const EVENT_SOURCE_CACHE = new Map();
const SOURCE_ANALYSIS_CACHE = new Map();

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-ionic-component-api',
    async loadContent() {
      const version = getCurrentDocsVersion(context);
      const manifest = readManifest(context.siteDir);
      const locales = ['en', 'sk'];
      const localizedComponents = [];

      for (const locale of locales) {
        const localeVersion = locale === 'sk' ? `${version}-sk` : version;
        const baseComponents = getComponentDocs(manifest, { locale, siteDir: context.siteDir }).map((componentData) => ({
          ...componentData,
          version: localeVersion,
        }));

        const componentByTag = new Map(baseComponents.map((componentData) => [componentData.componentTag, componentData]));
        const aliasComponents = [];

        for (const [alias, canonicalTag] of Object.entries(COMPATIBILITY_ALIASES)) {
          const canonicalComponent = componentByTag.get(canonicalTag);
          if (!canonicalComponent || componentByTag.has(alias)) {
            continue;
          }

          aliasComponents.push({
            ...canonicalComponent,
            componentTag: alias,
          });
        }

        for (const [virtualTag, data] of Object.entries(VIRTUAL_COMPONENTS)) {
          if (componentByTag.has(virtualTag)) {
            continue;
          }

          aliasComponents.push({
            componentTag: virtualTag,
            version: localeVersion,
            props: renderProperties({ props: data.props, locale }),
            events: renderEvents({ events: data.events, locale }),
            methods: renderMethods({ methods: data.methods, locale }),
            parts: renderParts({ parts: data.parts, locale }),
            customProps: renderCustomProps({ styles: data.customProps, locale }),
            slots: renderSlots({ slots: data.slots, locale }),
          });
        }

        localizedComponents.push(...baseComponents, ...aliasComponents);
      }

      return localizedComponents;
    },
    async contentLoaded({ content, actions }) {
      const { createData } = actions;
      const promises = [];

      for (const data of content) {
        const basePath = `${data.version}/${data.componentTag}`;

        promises.push(
          createData(`${basePath}/props.md`, data.props),
          createData(`${basePath}/events.md`, data.events),
          createData(`${basePath}/methods.md`, data.methods),
          createData(`${basePath}/parts.md`, data.parts),
          createData(`${basePath}/custom-props.md`, data.customProps),
          createData(`${basePath}/slots.md`, data.slots)
        );
      }

      await Promise.all(promises);
    },
    configureWebpack() {
      const outputPath = `${context.siteDir}/.docusaurus/docusaurus-plugin-ionic-component-api/default`;

      return {
        resolve: {
          alias: {
            '@ionic-internal/component-api': outputPath,
            '@wje-internal/component-api': outputPath,
          },
        },
      };
    },
  };
};

function getCurrentDocsVersion(context) {
  const classicPreset = context.siteConfig.presets.find((preset) => preset[0] === '@docusaurus/preset-classic');
  const docsPluginOptions = classicPreset?.[1]?.docs ?? {};
  const currentVersion = docsPluginOptions.versions?.current ?? {};

  return currentVersion.path || currentVersion.label || 'v1';
}

function readManifest(siteDir) {
  const manifestCandidates = [
    path.resolve(siteDir, '../dist/custom-elements.json'),
    path.resolve(siteDir, '../custom-elements.json'),
  ];

  const manifestPath = manifestCandidates.find((candidatePath) => fs.existsSync(candidatePath));
  if (!manifestPath) {
    throw new Error(
      `Unable to locate custom elements manifest. Tried: ${manifestCandidates.join(', ')}. Run "npm run analyze" from repo root.`
    );
  }

  return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
}

function getComponentDocs(manifest, { locale = 'en', siteDir = '' } = {}) {
  const declarations = (manifest.modules || []).flatMap((moduleData) =>
    (moduleData.declarations || []).map((declaration) => ({
      declaration,
      modulePath: moduleData.path || moduleData.name || '',
    }))
  );
  const seen = new Set();
  const components = [];

  for (const entry of declarations) {
    const declaration = entry?.declaration;
    const modulePath = entry?.modulePath || '';
    const tagName = declaration?.tagName;
    if (!tagName || !tagName.startsWith('wje-')) {
      continue;
    }

    const componentTag = tagName.slice(4);
    if (seen.has(componentTag)) {
      continue;
    }
    seen.add(componentTag);

    const props = getProperties(declaration, { locale, componentTag, modulePath, siteDir });
    const events = getEvents(declaration, { locale, componentTag, modulePath, siteDir });
    const methods = getMethods(declaration, { locale, componentTag });
    const parts = getParts(declaration, { locale, componentTag });
    const customProps = getCustomProps(declaration, { locale, componentTag });
    const slots = getSlots(declaration, { locale, componentTag });

    components.push({
      componentTag,
      props: renderProperties({ props, locale }),
      events: renderEvents({ events, locale }),
      methods: renderMethods({ methods, locale }),
      parts: renderParts({ parts, locale }),
      customProps: renderCustomProps({ styles: customProps, locale }),
      slots: renderSlots({ slots, locale }),
    });
  }

  return components.sort((a, b) => a.componentTag.localeCompare(b.componentTag));
}

function toCamelCase(value) {
  return value.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
}

function toKebabCase(value) {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function getTypeText(typeRef) {
  if (!typeRef) {
    return '';
  }
  if (typeof typeRef === 'string') {
    return normalizeType(typeRef);
  }
  return normalizeType(typeRef.text || '');
}

function resolveApiDescription(meta = {}) {
  const locale = meta.locale || 'en';
  const source = sanitizeDescriptionText(meta.source || '');
  const hasSource = source.length > 0;
  const weakSource = isWeakApiDescription(source, meta);

  if (locale === 'sk') {
    if (hasSource && !weakSource && !isLikelyEnglish(source) && !containsResidualEnglish(source)) {
      return ensureSentenceCase(source);
    }
    return ensureSentenceCase(generateDescriptionSk(meta));
  }

  if (hasSource && !weakSource) {
    return ensureSentenceCase(source);
  }

  return ensureSentenceCase(generateDescriptionEn(meta));
}

function isWeakApiDescription(text, meta = {}) {
  const normalized = String(text || '').trim().toLowerCase();
  if (!normalized) {
    return true;
  }

  if (
    /(no description available|popis nie je dostupný|automaticky generovaný popis komponentu|popis atribútu komponentu|obsah slotu komponentu|popis css časti komponentu)/i.test(
      normalized
    )
  ) {
    return true;
  }

  if (/^configures?\s+`[^`]+`\s+for the component\.?$/i.test(normalized)) {
    return true;
  }

  if (/^konfiguruje voľbu\s+`[^`]+`\s+pre komponent\.?$/i.test(normalized)) {
    return true;
  }

  if (/^executes?\s+the\s+`[^`]+`\s+method\.?$/i.test(normalized)) {
    return true;
  }

  if (/^vykoná metódu\s+`[^`]+`\.?$/i.test(normalized)) {
    return true;
  }

  if (
    /^sets?\s+the\s+value\s+of\s+the\s+['"`][^'"`]+['"`]\s+attribute\.?$/i.test(normalized) ||
    /retrieves?\s+the\s+value\s+of\s+the\s+['"`][^'"`]+['"`]\s+attribute\s+from\s+the\s+element/i.test(normalized) ||
    /^if\s+the\s+['"`][^'"`]+['"`]\s+attribute\s+is\s+not\s+present,\s+returns?\s+/i.test(normalized)
  ) {
    return true;
  }

  if (
    /(selected name|attribute for accordion|value of rating component|multiple attribute|index attribute|disabled attribute|expanded attribute)/i.test(
      normalized
    )
  ) {
    return true;
  }

  if (/^the\s+[a-z-]+\s+(main content|icon|caret|start slot|end slot|toggle slot)\.?$/.test(normalized)) {
    return true;
  }

  if (/^the\s+slot\s+for\s+content\s+(before|after)\s+the\s+formatted\s+value\.?$/.test(normalized)) {
    return true;
  }

  const words = normalized.split(/\s+/).filter(Boolean);
  if (words.length <= 2) {
    return true;
  }

  if (meta.kind === 'property') {
    if (/(attribute|atribút)\s+for/i.test(normalized)) {
      return true;
    }

    if (
      /^sets?\s+the\s+[\w'"`\s-]+\s+of\s+the\s+[\w'"`\s-]+\.?$/i.test(normalized) ||
      /^gets?\s+the\s+[\w'"`\s-]+\s+of\s+the\s+[\w'"`\s-]+\.?$/i.test(normalized) ||
      /^the\s+[\w'"`\s-]+\s+of\s+the\s+[\w'"`\s-]+\s+component\.?$/i.test(normalized)
    ) {
      return true;
    }
  }

  return false;
}

function humanizeIdentifier(value) {
  return String(value || '')
    .replace(/^--/, '')
    .replace(/^wje-/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function sanitizeCssVariableName(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[;:,]+$/, '');
}

function localizeIdentifierSk(value) {
  let text = ` ${String(value || '').toLowerCase()} `;
  const replacements = [
    [/\boptions\b/g, 'položky'],
    [/\boption\b/g, 'položku'],
    [/\bitems\b/g, 'položky'],
    [/\bitem\b/g, 'položku'],
    [/\bcards\b/g, 'karty'],
    [/\bcard\b/g, 'kartu'],
    [/\bcolumns\b/g, 'stĺpce'],
    [/\bcolumn\b/g, 'stĺpec'],
    [/\bpages\b/g, 'stránky'],
    [/\bpage\b/g, 'stránku'],
    [/\bpool\b/g, 'stĺpec'],
    [/\bchildren\b/g, 'deti'],
    [/\bchild\b/g, 'dieťa'],
    [/\bicon\b/g, 'ikonu'],
    [/\bvalue\b/g, 'hodnotu'],
    [/\bselected\b/g, 'vybrané'],
    [/\bselection\b/g, 'výber'],
    [/\bselections\b/g, 'výbery'],
    [/\bevents\b/g, 'udalosti'],
    [/\bevent\b/g, 'udalosť'],
    [/\bclick\b/g, 'kliknutie'],
    [/\blisteners\b/g, 'poslucháče'],
    [/\blistener\b/g, 'poslucháč'],
    [/\bdrag\b/g, 'ťahanie'],
    [/\bdrop\b/g, 'pustenie'],
    [/\ball\b/g, 'všetky'],
    [/\bslot\b/g, 'slot'],
    [/\bplaceholder\b/g, 'zástupný prvok'],
    [/\bselect\b/g, 'výber'],
    [/\bchip\b/g, 'čip'],
  ];

  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }

  return text.replace(/\s+/g, ' ').trim();
}

function generateDescriptionEn(meta = {}) {
  switch (meta.kind) {
    case 'property':
      return describePropertyEn(meta);
    case 'event':
      return describeEventEn(meta);
    case 'method':
      return describeMethodEn(meta);
    case 'part':
      return describePartEn(meta);
    case 'cssProperty':
      return describeCssPropertyEn(meta);
    case 'slot':
      return describeSlotEn(meta);
    default:
      return 'Auto-generated API description.';
  }
}

function generateDescriptionSk(meta = {}) {
  switch (meta.kind) {
    case 'property':
      return describePropertySk(meta);
    case 'event':
      return describeEventSk(meta);
    case 'method':
      return describeMethodSk(meta);
    case 'part':
      return describePartSk(meta);
    case 'cssProperty':
      return describeCssPropertySk(meta);
    case 'slot':
      return describeSlotSk(meta);
    default:
      return 'Automaticky generovaný popis API.';
  }
}

function describePropertyEn(meta = {}) {
  const componentTag = String(meta.componentTag || '');
  const key = String(meta.attr || meta.name || '').toLowerCase();
  const componentKey = `${componentTag}.${key}`;
  const subject = humanizeIdentifier(key || meta.name || 'value');

  const specific = {
    'accordion.multiple': 'Allows multiple accordion items to be expanded at the same time.',
    'accordion.index': 'Sets the index of the currently active accordion item.',
    'accordion-item.color': 'Applies a contextual color variant to the accordion item wrapper.',
    'accordion.disabled': 'Disables user interaction with accordion items.',
    'accordion.expanded': 'Controls whether the accordion item is expanded.',
    'avatar.initials': 'Controls whether the avatar renders generated initials instead of the default slotted content.',
    'avatar.label': 'Sets the source text used for generated initials and for the host accessible label.',
    'avatar.status-placement': 'Positions the `status` slot on one of the avatar corners.',
    'animation.name': 'Sets the Animate.css animation name played on the slotted element.',
    'animation.duration': 'Sets the animation playback duration in milliseconds.',
    'animation.delay': 'Sets the delay before the animation starts.',
    'animation.enddelay': 'Sets the delay applied after the animation completes.',
    'animation.fill': 'Sets the fill mode used by the animation playback.',
    'animation.iterations': 'Sets how many times the animation should repeat.',
    'animation.iterationstart': 'Sets the starting offset for the first animation iteration.',
    'animation.direction': 'Sets the playback direction of the animation.',
    'animation.easing': 'Sets the easing function used for animation playback.',
    'dialog.headline': 'Sets the dialog headline used in the built-in header and accessible labeling.',
    'dialog.placement': 'Controls the dialog transition variant, such as `slide-up` or `slide-left`.',
    'dialog.async': 'Enables async dialog workflows where hooks can resolve content before the dialog is shown.',
    'dialog.close-hidden': 'Hides the built-in close button in the dialog header.',
    'dialog.hidden-header': 'Hides the built-in dialog header wrapper.',
    'dialog.hidden-footer': 'Hides the built-in dialog footer wrapper.',
    'progress-bar.radius': 'Sets the radius used for circular progress-bar variants.',
    'progress-bar.stroke': 'Sets the stroke width of the rendered progress indicator.',
    'progress-bar.linecap': 'Sets the line ending style used by the progress indicator.',
    'rate.value': 'Sets the current rating value.',
    'rate.max': 'Sets the maximum number of rating steps rendered by the component.',
    'rate.precision': 'Sets the step size used when selecting fractional rating values.',
    'rate.icons': 'Overrides the icon names rendered for each rating step.',
    'icon-picker.icon': 'Sets the selected icon name.',
    'file-upload.iterate': 'Controls whether file loading continues automatically in batches.',
    'file-upload-item.uploaded': 'Indicates whether the file item is already uploaded.',
    'reorder.drag-el': 'Stores a reference to the element currently being dragged.',
    'reorder.clone-el': 'Stores a clone used as a drag preview while reordering.',
    'reorder.original-index': 'Stores the original index before reordering starts.',
    'dropdown.active': 'Controls whether the dropdown is currently open.',
    'select.active': 'Controls whether the select dropdown is currently open.',
    'tooltip.active': 'Controls whether the tooltip is visible.',
    'menu.active': 'Controls whether the menu is currently active.',
    'menu.collapse': 'Controls whether the menu is rendered in collapsed mode.',
    'slider.bubble': 'Controls whether the slider value bubble is shown.',
    'input.error-inline': 'Controls whether validation errors are rendered inline.',
    'input.message': 'Sets helper or validation text shown below the input.',
    'textarea.rows': 'Sets the number of visible text rows.',
    'progress-bar.progress': 'Sets the progress value displayed by the bar.',
  };

  const common = {
    multiple: 'Allows multiple items to be active at the same time.',
    disabled: 'Disables user interaction with the component.',
    expanded: 'Controls whether the component is expanded.',
    readonly: 'Prevents the value from being edited by the user.',
    value: 'Sets the current value of the component.',
    index: 'Sets the active item index.',
    size: 'Sets the component size.',
    padding: 'Sets the inner spacing around the content.',
    foreground: 'Sets the foreground color.',
    background: 'Sets the background color.',
    level: 'Sets the error-correction level.',
    max: 'Sets the maximum allowed value.',
    min: 'Sets the minimum allowed value.',
    icon: 'Sets the icon name used by the component.',
    color: 'Sets the component color.',
    selected: 'Marks the item as selected.',
    active: 'Controls whether the component is active.',
    collapse: 'Controls whether the component is collapsed.',
    collapsed: 'Controls whether the component is collapsed.',
    required: 'Marks the component as required for form validation.',
    name: 'Sets the field name used when submitting form data.',
    type: 'Sets the input type that controls value parsing and validation.',
    placeholder: 'Sets placeholder text shown when the value is empty.',
    href: 'Sets the target URL used when the component acts as a link.',
    lang: 'Sets the locale used for formatting and labels.',
    message: 'Sets helper or validation text displayed by the component.',
    label: 'Sets the user-visible or accessible label text.',
    uploaded: 'Indicates whether the related item is already uploaded.',
  };

  if (specific[componentKey]) {
    return specific[componentKey];
  }
  if (common[key]) {
    return common[key];
  }

  const type = String(meta.type || '').toLowerCase();
  const optionName = `\`${meta.attr || meta.name || 'value'}\``;

  if (key.startsWith('aria-') || key.includes('aria')) {
    return 'Sets ARIA metadata used to improve accessibility semantics for assistive technologies.';
  }

  if (/\b(index|position|order)\b/.test(subject)) {
    return `Sets the ${subject} used by the component state logic.`;
  }

  if (/\b(url|href|src|path)\b/.test(subject)) {
    return `Sets the resource reference for ${optionName}.`;
  }

  if (/\b(error|invalid|warning|message)\b/.test(subject)) {
    return `Controls validation or status messaging for ${optionName}.`;
  }

  if (/\b(color|background|foreground|border)\b/.test(subject)) {
    return `Controls color styling related to ${optionName}.`;
  }

  if (/\b(width|height|size|rows|cols)\b/.test(subject)) {
    return `Sets sizing for ${optionName}.`;
  }

  if (/\b(label|title|placeholder|text)\b/.test(subject)) {
    return `Sets displayed text content for ${optionName}.`;
  }

  if (/\b(list|items|options|selected|selection)\b/.test(subject)) {
    return `Controls item selection behavior for ${optionName}.`;
  }

  if (type.includes('boolean')) {
    return `Controls whether ${optionName} is enabled and affects component behavior.`;
  }
  if (type.includes('number')) {
    return `Sets the numeric value used for ${optionName}.`;
  }
  if (type.includes('array') || type.includes('[]')) {
    return `Defines the list of values managed through ${optionName}.`;
  }
  if (type.includes('string')) {
    return `Sets the text value stored in ${optionName}.`;
  }

  return `Controls how ${optionName} behaves in the component.`;
}

function describePropertySk(meta = {}) {
  const componentTag = String(meta.componentTag || '');
  const key = String(meta.attr || meta.name || '').toLowerCase();
  const componentKey = `${componentTag}.${key}`;
  const subject = localizeIdentifierSk(humanizeIdentifier(key || meta.name || 'value'));

  const specific = {
    'accordion.multiple': 'Umožňuje mať rozbalených viac položiek accordionu naraz.',
    'accordion.index': 'Nastavuje index aktuálne aktívnej položky accordionu.',
    'accordion-item.color': 'Určuje významový farebný variant obalu accordion položky.',
    'accordion.disabled': 'Vypína používateľskú interakciu s accordion položkami.',
    'accordion.expanded': 'Určuje, či je accordion položka rozbalená.',
    'avatar.initials': 'Určuje, či avatar vykreslí generované iniciály namiesto predvoleného vloženého obsahu.',
    'avatar.label': 'Nastavuje zdrojový text pre generovanie iniciál aj prístupný názov avatara.',
    'avatar.status-placement': 'Určuje, do ktorého rohu avatara sa umiestni obsah slotu `status`.',
    'animation.name': 'Určuje názov animácie z knižnice Animate.css, ktorá sa prehrá nad vloženým elementom.',
    'animation.duration': 'Určuje trvanie prehrávania animácie v milisekundách.',
    'animation.delay': 'Určuje oneskorenie pred spustením animácie.',
    'animation.enddelay': 'Určuje oneskorenie po dohraní animácie.',
    'animation.fill': 'Určuje fill mode použitý pri prehrávaní animácie.',
    'animation.iterations': 'Určuje počet opakovaní animácie.',
    'animation.iterationstart': 'Určuje počiatočný posun pre prvé opakovanie animácie.',
    'animation.direction': 'Určuje smer prehrávania animácie.',
    'animation.easing': 'Určuje easing funkciu použitú pri prehrávaní animácie.',
    'dialog.headline': 'Nastavuje nadpis dialógu použitý v zabudovanej hlavičke aj pri prístupnom pomenovaní.',
    'dialog.placement': 'Určuje variant prechodu dialógu, napríklad `slide-up` alebo `slide-left`.',
    'dialog.async': 'Zapína asynchrónny režim dialógu, v ktorom hooky môžu pripraviť obsah ešte pred zobrazením.',
    'dialog.close-hidden': 'Skryje vstavané tlačidlo na zatvorenie v hlavičke dialógu.',
    'dialog.hidden-header': 'Skryje vstavanú hlavičku dialógu.',
    'dialog.hidden-footer': 'Skryje vstavanú pätu dialógu.',
    'progress-bar.radius': 'Nastavuje polomer používaný pri kruhovom variante progress baru.',
    'progress-bar.stroke': 'Nastavuje hrúbku vykresleného indikátora progresu.',
    'progress-bar.linecap': 'Nastavuje štýl zakončenia čiary indikátora progresu.',
    'rate.value': 'Nastavuje aktuálnu hodnotu hodnotenia.',
    'rate.max': 'Nastavuje maximálny počet krokov hodnotenia vykreslených komponentom.',
    'rate.precision': 'Nastavuje krok, po ktorom sa dá vyberať aj desatinné hodnotenie.',
    'rate.icons': 'Prepíše názvy ikon vykreslených pre jednotlivé kroky hodnotenia.',
    'icon-picker.icon': 'Nastavuje názov vybranej ikony.',
    'file-upload.iterate': 'Určuje, či sa načítavanie súborov automaticky opakuje po dávkach.',
    'file-upload-item.uploaded': 'Určuje, či je položka súboru už nahraná.',
    'reorder.drag-el': 'Ukladá referenciu na prvok, ktorý sa práve ťahá.',
    'reorder.clone-el': 'Ukladá klon prvku použitý ako náhľad pri presúvaní.',
    'reorder.original-index': 'Ukladá pôvodný index položky pred začiatkom presunu.',
    'dropdown.active': 'Určuje, či je rozbaľovacie menu otvorené.',
    'select.active': 'Určuje, či je výberové menu otvorené.',
    'tooltip.active': 'Určuje, či je tooltip zobrazený.',
    'menu.active': 'Určuje, či je menu aktívne.',
    'menu.collapse': 'Určuje, či sa menu vykreslí v zbalenom režime.',
    'slider.bubble': 'Určuje, či sa pri slidri zobrazí bublina s hodnotou.',
    'input.error-inline': 'Určuje, či sa validačná chyba zobrazí priamo pri vstupe.',
    'input.message': 'Nastavuje pomocný alebo validačný text pod vstupom.',
    'textarea.rows': 'Nastavuje počet viditeľných riadkov textu.',
    'progress-bar.progress': 'Nastavuje hodnotu progresu zobrazenú v indikátore.',
  };

  const common = {
    multiple: 'Umožňuje mať aktívnych viac položiek naraz.',
    disabled: 'Vypína používateľskú interakciu s komponentom.',
    expanded: 'Určuje, či je komponent rozbalený.',
    readonly: 'Zabráni používateľovi upravovať hodnotu.',
    value: 'Nastavuje aktuálnu hodnotu komponentu.',
    index: 'Nastavuje index aktívnej položky.',
    size: 'Nastavuje veľkosť komponentu.',
    padding: 'Nastavuje vnútorné odsadenie obsahu.',
    foreground: 'Nastavuje farbu popredia.',
    background: 'Nastavuje farbu pozadia.',
    level: 'Nastavuje úroveň korekcie chýb.',
    max: 'Nastavuje maximálnu povolenú hodnotu.',
    min: 'Nastavuje minimálnu povolenú hodnotu.',
    icon: 'Nastavuje názov ikony použitej v komponente.',
    color: 'Nastavuje farbu komponentu.',
    selected: 'Označí položku ako vybranú.',
    active: 'Určuje, či je komponent aktívny.',
    collapse: 'Určuje, či je komponent zbalený.',
    collapsed: 'Určuje, či je komponent zbalený.',
    required: 'Označí komponent ako povinný pre validáciu formulára.',
    name: 'Nastavuje názov poľa pri odoslaní formulára.',
    type: 'Nastavuje typ vstupu, ktorý riadi spracovanie a validáciu hodnoty.',
    placeholder: 'Nastavuje zástupný text pri prázdnej hodnote.',
    href: 'Nastavuje cieľovú URL, keď komponent funguje ako odkaz.',
    lang: 'Nastavuje jazyk alebo lokalizáciu pre formátovanie a popisy.',
    message: 'Nastavuje pomocný alebo validačný text komponentu.',
    label: 'Nastavuje zobrazený alebo prístupný textový štítok.',
    uploaded: 'Určuje, či je súvisiaca položka už nahratá.',
  };

  if (specific[componentKey]) {
    return specific[componentKey];
  }
  if (common[key]) {
    return common[key];
  }

  const type = String(meta.type || '').toLowerCase();
  const optionName = `\`${meta.attr || meta.name || 'value'}\``;

  if (key.startsWith('aria-') || key.includes('aria')) {
    return 'Nastavuje ARIA metadáta, ktoré zlepšujú prístupnosť pre asistenčné technológie.';
  }

  if (/\b(index|position|order)\b/.test(subject)) {
    return `Nastavuje ${subject}, ktorý používa logika stavu komponentu.`;
  }

  if (/\b(url|href|src|path)\b/.test(subject)) {
    return `Nastavuje odkaz na zdroj pre voľbu ${optionName}.`;
  }

  if (/\b(error|invalid|warning|message|chyb|správ)\b/.test(subject)) {
    return `Riadi validáciu alebo stavové hlášky pre voľbu ${optionName}.`;
  }

  if (/\b(color|background|foreground|border|farb|pozadi|popredi)\b/.test(subject)) {
    return `Riadi farebné štýlovanie súvisiace s voľbou ${optionName}.`;
  }

  if (/\b(width|height|size|rows|cols|šírk|výšk|veľkos)\b/.test(subject)) {
    return `Nastavuje rozmery alebo veľkosť pre voľbu ${optionName}.`;
  }

  if (/\b(label|title|placeholder|text|štítok|nadpis|zástupný)\b/.test(subject)) {
    return `Nastavuje zobrazovaný text pre voľbu ${optionName}.`;
  }

  if (/\b(list|items|options|selected|selection|položk|výber)\b/.test(subject)) {
    return `Riadi správanie výberu položiek pre voľbu ${optionName}.`;
  }

  if (type.includes('boolean')) {
    return `Určuje, či je voľba ${optionName} zapnutá a ovplyvňuje správanie komponentu.`;
  }
  if (type.includes('number')) {
    return `Nastavuje číselnú hodnotu používanú vo voľbe ${optionName}.`;
  }
  if (type.includes('array') || type.includes('[]')) {
    return `Definuje zoznam hodnôt spracovaných vo voľbe ${optionName}.`;
  }
  if (type.includes('string')) {
    return `Nastavuje textovú hodnotu uloženú vo voľbe ${optionName}.`;
  }

  return `Riadi správanie voľby ${optionName} v komponente.`;
}

function describeEventEn(meta = {}) {
  const eventName = String(meta.event || '').trim();
  const exact = {
    'wje-button:click': 'Emitted when the button is clicked.',
    'wje-button:toggle': 'Emitted when a toggle-style button changes its active state.',
    'wje-button:submit': 'Emitted when the button triggers form submission behavior.',
    'wje-button:reset': 'Emitted when the button triggers form reset behavior.',
    'wje-accordion-item:open': 'Emitted when the accordion item expands.',
    'wje-accordion-item:close': 'Emitted when the accordion item collapses.',
  };

  const exactDescription = exact[eventName.toLowerCase()];
  if (exactDescription) {
    return exactDescription;
  }

  const action = eventName.split(':').pop().toLowerCase();
  const actionMap = {
    change: 'Emitted when the component value changes.',
    select: 'Emitted when an item is selected.',
    open: 'Emitted when the component is opened.',
    close: 'Emitted when the component is closed.',
    submit: 'Emitted when the form is submitted.',
    input: 'Emitted when the input value changes.',
    clear: 'Emitted when the input or selection is cleared.',
    focus: 'Emitted when the component receives focus.',
    blur: 'Emitted when the component loses focus.',
    click: 'Emitted when the component is clicked.',
    toggle: 'Emitted when the component toggles between states.',
    reset: 'Emitted when component state is reset.',
    drop: 'Emitted when an item is dropped into the component.',
    drag: 'Emitted while an item is being dragged.',
    error: 'Emitted when the component encounters an error state.',
    load: 'Emitted when async content finishes loading.',
    ready: 'Emitted when the component is initialized and ready.',
  };

  if (actionMap[action]) {
    return actionMap[action];
  }

  if (action.includes('change')) return 'Emitted when component state changes.';
  if (action.includes('select')) return 'Emitted when the selection changes.';
  if (action.includes('open')) return 'Emitted when the component opens.';
  if (action.includes('close')) return 'Emitted when the component closes.';
  if (action.includes('input')) return 'Emitted when user input is processed.';
  if (action.includes('focus')) return 'Emitted when focus enters the component.';
  if (action.includes('blur')) return 'Emitted when focus leaves the component.';
  if (action.includes('drag')) return 'Emitted during drag interactions.';
  if (action.includes('drop')) return 'Emitted when drop interaction is completed.';

  return `Emitted when the \`${eventName}\` event is dispatched.`;
}

function describeEventSk(meta = {}) {
  const eventName = String(meta.event || '').trim();
  const exact = {
    'wje-button:click': 'Vyvolá sa pri kliknutí na tlačidlo.',
    'wje-button:toggle': 'Vyvolá sa pri prepnutí aktívneho stavu prepínacieho tlačidla.',
    'wje-button:submit': 'Vyvolá sa pri spustení odoslania formulára tlačidlom.',
    'wje-button:reset': 'Vyvolá sa pri spustení resetu formulára tlačidlom.',
    'wje-accordion-item:open': 'Vyvolá sa pri rozbalení accordion položky.',
    'wje-accordion-item:close': 'Vyvolá sa pri zbalení accordion položky.',
  };

  const exactDescription = exact[eventName.toLowerCase()];
  if (exactDescription) {
    return exactDescription;
  }

  const action = eventName.split(':').pop().toLowerCase();
  const actionMap = {
    change: 'Vyvolá sa pri zmene hodnoty komponentu.',
    select: 'Vyvolá sa pri výbere položky.',
    open: 'Vyvolá sa pri otvorení komponentu.',
    close: 'Vyvolá sa pri zatvorení komponentu.',
    submit: 'Vyvolá sa pri odoslaní formulára.',
    input: 'Vyvolá sa pri zmene vstupnej hodnoty.',
    clear: 'Vyvolá sa pri vyčistení vstupu alebo výberu.',
    focus: 'Vyvolá sa pri získaní fokusu komponentom.',
    blur: 'Vyvolá sa pri strate fokusu komponentom.',
    click: 'Vyvolá sa pri kliknutí na komponent.',
    toggle: 'Vyvolá sa pri prepnutí stavu komponentu.',
    reset: 'Vyvolá sa pri obnovení stavu komponentu.',
    drop: 'Vyvolá sa pri pustení položky do komponentu.',
    drag: 'Vyvolá sa počas ťahania položky.',
    error: 'Vyvolá sa pri chybovom stave komponentu.',
    load: 'Vyvolá sa po dokončení asynchrónneho načítania obsahu.',
    ready: 'Vyvolá sa po inicializácii komponentu.',
  };

  if (actionMap[action]) {
    return actionMap[action];
  }

  if (action.includes('change')) return 'Vyvolá sa pri zmene stavu komponentu.';
  if (action.includes('select')) return 'Vyvolá sa pri zmene výberu.';
  if (action.includes('open')) return 'Vyvolá sa pri otvorení komponentu.';
  if (action.includes('close')) return 'Vyvolá sa pri zatvorení komponentu.';
  if (action.includes('input')) return 'Vyvolá sa pri spracovaní vstupu používateľa.';
  if (action.includes('focus')) return 'Vyvolá sa pri získaní fokusu komponentom.';
  if (action.includes('blur')) return 'Vyvolá sa pri strate fokusu komponentom.';
  if (action.includes('drag')) return 'Vyvolá sa počas interakcie ťahania.';
  if (action.includes('drop')) return 'Vyvolá sa po dokončení interakcie pustenia.';

  return `Vyvolá sa pri odoslaní udalosti \`${eventName}\`.`;
}

function describeMethodEn(meta = {}) {
  const methodName = String(meta.name || 'method');
  const lower = methodName.toLowerCase();
  const tail =
    humanizeIdentifier(
      methodName.replace(
        /^(get|set|setup|update|toggle|render|create|add|remove|select|clear|open|close|show|hide|fetch|load|is|has|find|register|dispatch|before|after|mark|process|reset|sync|rename|move)(?=[A-Z_]|$)/,
        ''
      )
    ) || humanizeIdentifier(methodName) || 'component state';

  const specific = {
    collapseAll: 'Collapses all accordion items except the optionally provided one.',
    getAccordions: 'Returns the direct `wje-accordion-item` children managed by the accordion.',
    collapse: 'Collapses the current accordion item and updates its ARIA expanded state.',
    expand: 'Expands the current accordion item and updates its ARIA expanded state.',
    getAnimationsArray: 'Returns the list of animation definitions parsed from Animate.css.',
    destroyAnimation: 'Cancels the currently initialized animation before a new one is prepared.',
    play: 'Starts or resumes playback of the current animation.',
    cancel: 'Cancels the current animation and resets its playback state.',
    isImage: 'Checks whether the avatar currently contains a `wje-img` element.',
    formAssociatedCallback:
      'Synchronizes the component with the form-associated custom element lifecycle when form context changes.',
    formDisabledCallback:
      'Updates component disabled state when the owning form switches between enabled and disabled modes.',
    beforeShow: 'Runs before the component is shown so pre-display setup can be applied.',
    afterShow: 'Runs after the component is shown so follow-up UI logic can be executed.',
    markContentReady: 'Marks content as ready so popup positioning and visibility flow can continue.',
    processStep: 'Processes the current step and updates stepper state and navigation.',
    reset: 'Resets component state back to its initial values.',
    setupDragAndDropEvents: 'Initializes drag-and-drop listeners used to move cards across pools.',
    setupSelectAllCardsEvent: 'Initializes the handler that selects or clears all cards in a pool.',
    setupMenuItemClickEvents: 'Initializes click handlers for kanban menu item actions.',
    htmlOption: 'Builds HTML for an option item rendered in the select dropdown.',
    htmlSelectedItem: 'Builds HTML for an item shown in the selected-value area.',
    optionCheckSlot: 'Validates and updates option slot content before rendering.',
  };

  if (specific[methodName]) {
    return specific[methodName];
  }

  if (lower.startsWith('selection')) return 'Processes selection state changes and synchronizes selected items.';
  if (lower === 'selections') return 'Processes currently selected items and updates component selection state.';
  if (lower === 'counter') return 'Recalculates counters used by the current component selection state.';
  if (lower === 'live') return 'Registers delegated live event listeners for dynamic component content.';
  if (lower.startsWith('html')) return `Builds HTML structure for ${tail}.`;
  if (lower.includes('checkslot')) return `Validates slot usage for ${tail}.`;

  if (lower.startsWith('before')) return `Runs before ${tail} to prepare the component state.`;
  if (lower.startsWith('after')) return `Runs after ${tail} to finalize side effects.`;
  if (lower.startsWith('setup')) return `Initializes ${tail} before interactive use.`;
  if (lower.startsWith('get')) return `Returns ${tail} from the current component state.`;
  if (lower.startsWith('set')) return `Sets ${tail} and applies related state updates.`;
  if (lower.startsWith('update')) return `Updates ${tail} using the latest component data.`;
  if (lower.startsWith('toggle')) return `Toggles ${tail} between enabled and disabled states.`;
  if (lower.startsWith('render')) return `Renders ${tail} into the component UI.`;
  if (lower.startsWith('create')) return `Creates ${tail} and attaches it to the component structure.`;
  if (lower.startsWith('add')) return `Adds ${tail} to the managed component collection.`;
  if (lower.startsWith('remove')) return `Removes ${tail} from the current component state.`;
  if (lower.startsWith('select')) return `Selects ${tail} and updates the active state.`;
  if (lower.startsWith('clear')) return `Clears ${tail} and resets related values.`;
  if (lower.startsWith('open')) return 'Opens the component and applies visible state classes.';
  if (lower.startsWith('close')) return 'Closes the component and clears visible state classes.';
  if (lower.startsWith('rename')) return `Renames ${tail} and refreshes dependent references.`;
  if (lower.startsWith('move')) return `Moves ${tail} to a new position in component data.`;
  if (lower.startsWith('show')) return `Shows ${tail} in the component UI.`;
  if (lower.startsWith('hide')) return `Hides ${tail} in the component UI.`;
  if (lower.startsWith('fetch') || lower.startsWith('load')) return `Loads ${tail} from available component sources.`;
  if (lower.startsWith('is')) return `Checks whether ${tail} is currently true.`;
  if (lower.startsWith('has')) return `Checks whether the component contains ${tail}.`;
  if (lower.startsWith('find')) return `Finds ${tail} in component-managed data.`;
  if (lower.startsWith('register')) return `Registers ${tail} for future component interactions.`;
  if (lower.startsWith('dispatch')) return 'Dispatches a custom event from the component context.';
  if (lower.startsWith('mark')) return `Marks ${tail} so later rendering logic can react to this state.`;
  if (lower.startsWith('process')) return `Processes ${tail} and updates derived component state.`;
  if (lower.startsWith('reset')) return `Resets ${tail} to initial values.`;
  if (lower.startsWith('sync')) return `Synchronizes ${tail} with external or internal state sources.`;
  if (lower.endsWith('callback')) return `Handles the \`${methodName}\` callback invoked by host lifecycle events.`;

  return `Runs \`${methodName}\` to execute component-specific logic and update state when needed.`;
}

function describeMethodSk(meta = {}) {
  const methodName = String(meta.name || 'metóda');
  const lower = methodName.toLowerCase();
  const tailRaw =
    humanizeIdentifier(
      methodName.replace(
        /^(get|set|setup|update|toggle|render|create|add|remove|select|clear|open|close|show|hide|fetch|load|is|has|find|register|dispatch|before|after|mark|process|reset|sync|rename|move)(?=[A-Z_]|$)/,
        ''
      )
    ) || humanizeIdentifier(methodName);
  const tail = localizeIdentifierSk(tailRaw || 'stav komponentu');

  const specific = {
    collapseAll: 'Zatvorí všetky accordion položky okrem voliteľne zadanej výnimky.',
    getAccordions: 'Vráti priame deti `wje-accordion-item`, ktoré accordion spravuje.',
    collapse: 'Zbalí aktuálnu accordion položku a aktualizuje jej ARIA expanded stav.',
    expand: 'Rozbalí aktuálnu accordion položku a aktualizuje jej ARIA expanded stav.',
    getAnimationsArray: 'Vráti zoznam animácií naparsovaných z knižnice Animate.css.',
    destroyAnimation: 'Zruší aktuálne inicializovanú animáciu pred prípravou novej.',
    play: 'Spustí alebo obnoví prehrávanie aktuálnej animácie.',
    cancel: 'Zruší aktuálnu animáciu a vráti jej prehrávanie do počiatočného stavu.',
    isImage: 'Overí, či avatar momentálne obsahuje element `wje-img`.',
    formAssociatedCallback:
      'Synchronizuje komponent so životným cyklom formulára pri zmene kontextu formulára.',
    formDisabledCallback: 'Aktualizuje stav deaktivácie komponentu pri zmene stavu nadradeného formulára.',
    beforeShow: 'Spustí sa pred zobrazením komponentu, aby sa pripravilo počiatočné UI nastavenie.',
    afterShow: 'Spustí sa po zobrazení komponentu, aby sa vykonala následná logika používateľského rozhrania.',
    markContentReady: 'Označí obsah ako pripravený, aby mohlo pokračovať pozicionovanie a zobrazenie popupu.',
    processStep: 'Spracuje aktuálny krok a aktualizuje stav steppera aj navigáciu.',
    reset: 'Obnoví stav komponentu na počiatočné hodnoty.',
    setupDragAndDropEvents: 'Inicializuje obsluhu ťahania a púšťania na presúvanie kariet medzi stĺpcami.',
    setupSelectAllCardsEvent: 'Inicializuje obsluhu, ktorá vyberá alebo ruší výber všetkých kariet v stĺpci.',
    setupMenuItemClickEvents: 'Inicializuje obsluhu kliknutí pre akcie položiek kanban menu.',
    htmlOption: 'Vytvorí HTML pre položku možnosti zobrazenú vo výberovom zozname.',
    htmlSelectedItem: 'Vytvorí HTML pre položku zobrazenú vo vybranej hodnote.',
    optionCheckSlot: 'Overí a aktualizuje obsah slotu možnosti pred vykreslením.',
  };

  if (specific[methodName]) {
    return specific[methodName];
  }

  if (lower.startsWith('selection')) return 'Spracuje zmenu výberu a synchronizuje vybrané položky.';
  if (lower === 'selections') return 'Spracuje aktuálne vybrané položky a aktualizuje stav výberu komponentu.';
  if (lower === 'counter') return 'Prepočíta počítadlá používané pri aktuálnom stave výberu.';
  if (lower === 'live') return 'Zaregistruje delegované poslucháče udalostí pre dynamický obsah komponentu.';
  if (lower.startsWith('html')) return `Vytvorí HTML štruktúru pre ${tail}.`;
  if (lower.includes('checkslot')) return `Overí použitie slotu pre ${tail}.`;

  if (lower.startsWith('before')) return `Spustí sa pred ${tail} a pripraví stav komponentu.`;
  if (lower.startsWith('after')) return `Spustí sa po ${tail} a dokončí nadväzujúce operácie.`;
  if (lower.startsWith('setup')) return `Inicializuje ${tail} pred interaktívnym použitím.`;
  if (lower.startsWith('get')) return `Vráti ${tail} z aktuálneho stavu komponentu.`;
  if (lower.startsWith('set')) return `Nastaví ${tail} a aplikuje súvisiace zmeny stavu.`;
  if (lower.startsWith('update')) return `Aktualizuje ${tail} podľa najnovších údajov komponentu.`;
  if (lower.startsWith('toggle')) return `Prepne ${tail} medzi zapnutým a vypnutým stavom.`;
  if (lower.startsWith('render')) return `Vykreslí ${tail} v používateľskom rozhraní komponentu.`;
  if (lower.startsWith('create')) return `Vytvorí ${tail} a pripojí ho do štruktúry komponentu.`;
  if (lower.startsWith('add')) return `Pridá ${tail} do spravovanej kolekcie komponentu.`;
  if (lower.startsWith('remove')) return `Odstráni ${tail} z aktuálneho stavu komponentu.`;
  if (lower.startsWith('select')) return `Vyberie ${tail} a aktualizuje aktívny stav.`;
  if (lower.startsWith('clear')) return `Vyčistí ${tail} a obnoví súvisiace hodnoty.`;
  if (lower.startsWith('open')) return 'Otvorí komponent a nastaví viditeľný stav.';
  if (lower.startsWith('close')) return 'Zatvorí komponent a odstráni stav viditeľnosti.';
  if (lower.startsWith('rename')) return `Premenuje ${tail} a obnoví závislé referencie.`;
  if (lower.startsWith('move')) return `Presunie ${tail} na novú pozíciu v dátach komponentu.`;
  if (lower.startsWith('show')) return `Zobrazí ${tail} v používateľskom rozhraní komponentu.`;
  if (lower.startsWith('hide')) return `Skryje ${tail} v používateľskom rozhraní komponentu.`;
  if (lower.startsWith('fetch') || lower.startsWith('load')) return `Načíta ${tail} z dostupných zdrojov komponentu.`;
  if (lower.startsWith('is')) return `Overí, či je ${tail} aktuálne pravda.`;
  if (lower.startsWith('has')) return `Overí, či komponent obsahuje ${tail}.`;
  if (lower.startsWith('find')) return `Nájde ${tail} v dátach spravovaných komponentom.`;
  if (lower.startsWith('register')) return `Zaregistruje ${tail} pre ďalšie interakcie komponentu.`;
  if (lower.startsWith('dispatch')) return 'Vyvolá vlastnú udalosť z kontextu komponentu.';
  if (lower.startsWith('mark')) return `Označí ${tail}, aby na tento stav vedela reagovať ďalšia logika.`;
  if (lower.startsWith('process')) return `Spracuje ${tail} a aktualizuje odvodený stav komponentu.`;
  if (lower.startsWith('reset')) return `Obnoví ${tail} na počiatočné hodnoty.`;
  if (lower.startsWith('sync')) return `Synchronizuje ${tail} s externým alebo interným zdrojom stavu.`;
  if (lower.endsWith('callback')) return `Spracuje callback \`${methodName}\`, ktorý vyvoláva životný cyklus hostiteľa.`;

  return `Spustí metódu \`${methodName}\` na vykonanie logiky komponentu a aktualizáciu jeho stavu.`;
}

function describePartEn(meta = {}) {
  const part = String(meta.name || 'part');
  if (part === 'native') return 'Styles the component root shadow part.';
  if (part === 'wrapper') return 'Styles the wrapper shadow part.';
  if (part === 'container') return 'Styles the container shadow part.';
  if (part === 'headline') return 'Styles the clickable headline area.';
  if (part === 'description') return 'Styles the supporting description area.';
  if (part === 'toggle') return 'Styles the toggle slot and marker area.';
  if (part === 'content') return 'Styles the expandable content panel.';
  if (part === 'status') return 'Styles the positioned status slot container.';
  if (part === 'secondary') return 'Styles the secondary supporting content container.';
  return `Styles the \`${part}\` shadow part.`;
}

function describePartSk(meta = {}) {
  const part = String(meta.name || 'časť');
  if (part === 'native') return 'Štýluje koreňovú shadow časť komponentu.';
  if (part === 'wrapper') return 'Štýluje obalovú shadow časť.';
  if (part === 'container') return 'Štýluje kontajnerovú shadow časť.';
  if (part === 'headline') return 'Štýluje klikateľnú oblasť hlavičky.';
  if (part === 'description') return 'Štýluje oblasť doplnkového popisu.';
  if (part === 'toggle') return 'Štýluje toggle slot a oblasť markera.';
  if (part === 'content') return 'Štýluje rozbaľovaný obsahový panel.';
  if (part === 'status') return 'Štýluje pozicionovaný kontajner slotu `status`.';
  if (part === 'secondary') return 'Štýluje kontajner sekundárneho doplnkového obsahu.';
  return `Štýluje shadow časť \`${part}\`.`;
}

function describeCssPropertyEn(meta = {}) {
  const variableName = sanitizeCssVariableName(meta.name || '');
  const componentTag = String(meta.componentTag || '');
  const componentKey = `${componentTag}.${variableName}`;
  const short = variableName
    .replace(/^--wje-/, '')
    .replace(new RegExp(`^${componentTag}-`), '');
  const subject = humanizeIdentifier(short || variableName);

  const specific = {
    'accordion-item.--wje-accordion-background': 'CSS custom property that controls the collapsed item background color.',
    'accordion-item.--wje-accordion-border': 'CSS custom property that controls the collapsed item border color.',
    'accordion-item.--wje-accordion-border-radius': 'CSS custom property that controls the accordion item border radius.',
    'accordion-item.--wje-accordion-background-hover': 'CSS custom property that controls the item background color on hover.',
    'accordion-item.--wje-accordion-border-hover': 'CSS custom property that controls the item border color on hover.',
    'accordion-item.--wje-accordion-background-expanded': 'CSS custom property that controls the expanded item background color.',
    'accordion-item.--wje-accordion-border-expanded': 'CSS custom property that controls the expanded item border color.',
    'accordion-item.--wje-accordion-headline-color': 'CSS custom property that controls the headline text color.',
    'accordion-item.--wje-accordion-content-color': 'CSS custom property that controls the expandable content text color.',
    'accordion-item.--wje-accordion-marker-rotate': 'CSS custom property that controls the rotation of the toggle marker icon.',
    'avatar.--wje-avatar-size': 'CSS custom property that controls the overall size of the avatar shell.',
    'avatar.--wje-avatar-font-size': 'CSS custom property that controls initials and text sizing inside the avatar.',
    'avatar.--wje-avatar-font-weight': 'CSS custom property that controls initials and text weight inside the avatar.',
    'avatar.--wje-avatar-color': 'CSS custom property that controls the avatar foreground color.',
    'avatar.--wje-avatar-background-color': 'CSS custom property that controls the avatar background color.',
    'avatar.--wje-avatar-border-radius': 'CSS custom property that controls avatar corner rounding.',
    'avatar.--wje-avatar-border-color': 'CSS custom property that controls the avatar border color.',
    'avatar.--wje-avatar-border-width': 'CSS custom property that controls the avatar border width.',
    'avatar.--wje-avatar-border-style': 'CSS custom property that controls the avatar border style.',
    'aside.--wje-aside-width': 'CSS custom property that controls the width of the aside column.',
    'aside.--wje-aside-top': 'CSS custom property that controls the top offset of a fixed aside.',
    'aside.--wje-aside-border-color': 'CSS custom property that controls the aside border color.',
    'aside.--wje-aside-border-width': 'CSS custom property that controls the aside border width.',
    'aside.--wje-aside-border-style': 'CSS custom property that controls the aside border style.',
  };

  if (specific[componentKey]) {
    return specific[componentKey];
  }

  if (subject.includes('color')) return `CSS custom property that controls ${subject}.`;
  if (subject.includes('padding')) return `CSS custom property that controls ${subject}.`;
  if (subject.includes('margin')) return `CSS custom property that controls ${subject}.`;
  if (subject.includes('radius')) return `CSS custom property that controls border radius.`;
  if (subject.includes('shadow')) return `CSS custom property that controls box shadow.`;
  if (subject.includes('font')) return `CSS custom property that controls typography settings.`;
  if (subject.includes('line height')) return `CSS custom property that controls line height.`;
  if (subject.includes('width') || subject.includes('height')) return `CSS custom property that controls ${subject}.`;
  if (subject.includes('margin')) return `CSS custom property that controls ${subject}.`;
  if (subject.includes('gap')) return `CSS custom property that controls ${subject}.`;
  if (subject.includes('transition')) return `CSS custom property that controls animation timing and transitions.`;
  if (subject.includes('letter spacing')) return `CSS custom property that controls letter spacing.`;
  if (subject.includes('opacity')) return `CSS custom property that controls opacity levels.`;

  return `CSS custom property used to style the component ${subject ? `(${subject})` : ''}.`.replace(/\s+\./g, '.');
}

function describeCssPropertySk(meta = {}) {
  const variableName = sanitizeCssVariableName(meta.name || '');
  const componentTag = String(meta.componentTag || '');
  const componentKey = `${componentTag}.${variableName}`;
  const short = variableName
    .replace(/^--wje-/, '')
    .replace(new RegExp(`^${componentTag}-`), '');
  const subject = humanizeIdentifier(short || variableName);

  const specific = {
    'accordion-item.--wje-accordion-background': 'Vlastná CSS premenná, ktorá riadi farbu pozadia zbalenej accordion položky.',
    'accordion-item.--wje-accordion-border': 'Vlastná CSS premenná, ktorá riadi farbu okraja zbalenej accordion položky.',
    'accordion-item.--wje-accordion-border-radius': 'Vlastná CSS premenná, ktorá riadi zaoblenie rohov accordion položky.',
    'accordion-item.--wje-accordion-background-hover': 'Vlastná CSS premenná, ktorá riadi farbu pozadia položky pri hover stave.',
    'accordion-item.--wje-accordion-border-hover': 'Vlastná CSS premenná, ktorá riadi farbu okraja položky pri hover stave.',
    'accordion-item.--wje-accordion-background-expanded': 'Vlastná CSS premenná, ktorá riadi farbu pozadia rozbalenej accordion položky.',
    'accordion-item.--wje-accordion-border-expanded': 'Vlastná CSS premenná, ktorá riadi farbu okraja rozbalenej accordion položky.',
    'accordion-item.--wje-accordion-headline-color': 'Vlastná CSS premenná, ktorá riadi farbu textu hlavičky.',
    'accordion-item.--wje-accordion-content-color': 'Vlastná CSS premenná, ktorá riadi farbu textu rozbaľovaného obsahu.',
    'accordion-item.--wje-accordion-marker-rotate': 'Vlastná CSS premenná, ktorá riadi rotáciu toggle markera.',
    'avatar.--wje-avatar-size': 'Vlastná CSS premenná, ktorá riadi celkovú veľkosť avatar obalu.',
    'avatar.--wje-avatar-font-size': 'Vlastná CSS premenná, ktorá riadi veľkosť písma iniciál a textu v avatari.',
    'avatar.--wje-avatar-font-weight': 'Vlastná CSS premenná, ktorá riadi hrúbku písma iniciál a textu v avatari.',
    'avatar.--wje-avatar-color': 'Vlastná CSS premenná, ktorá riadi farbu popredia avatara.',
    'avatar.--wje-avatar-background-color': 'Vlastná CSS premenná, ktorá riadi farbu pozadia avatara.',
    'avatar.--wje-avatar-border-radius': 'Vlastná CSS premenná, ktorá riadi zaoblenie rohov avatara.',
    'avatar.--wje-avatar-border-color': 'Vlastná CSS premenná, ktorá riadi farbu okraja avatara.',
    'avatar.--wje-avatar-border-width': 'Vlastná CSS premenná, ktorá riadi šírku okraja avatara.',
    'avatar.--wje-avatar-border-style': 'Vlastná CSS premenná, ktorá riadi štýl okraja avatara.',
    'aside.--wje-aside-width': 'Vlastná CSS premenná, ktorá riadi šírku bočného stĺpca aside.',
    'aside.--wje-aside-top': 'Vlastná CSS premenná, ktorá riadi horný offset fixného aside.',
    'aside.--wje-aside-border-color': 'Vlastná CSS premenná, ktorá riadi farbu okraja aside.',
    'aside.--wje-aside-border-width': 'Vlastná CSS premenná, ktorá riadi šírku okraja aside.',
    'aside.--wje-aside-border-style': 'Vlastná CSS premenná, ktorá riadi štýl okraja aside.',
  };

  if (specific[componentKey]) {
    return specific[componentKey];
  }

  if (subject.includes('color')) return `Vlastná CSS premenná, ktorá riadi ${subject}.`;
  if (subject.includes('padding')) return `Vlastná CSS premenná, ktorá riadi ${subject}.`;
  if (subject.includes('margin')) return `Vlastná CSS premenná, ktorá riadi ${subject}.`;
  if (subject.includes('radius')) return 'Vlastná CSS premenná, ktorá riadi zaoblenie rohov.';
  if (subject.includes('shadow')) return 'Vlastná CSS premenná, ktorá riadi tieň.';
  if (subject.includes('font')) return 'Vlastná CSS premenná, ktorá riadi typografiu.';
  if (subject.includes('line height')) return 'Vlastná CSS premenná, ktorá riadi výšku riadku.';
  if (subject.includes('width') || subject.includes('height')) return `Vlastná CSS premenná, ktorá riadi ${subject}.`;
  if (subject.includes('margin')) return `Vlastná CSS premenná, ktorá riadi ${subject}.`;
  if (subject.includes('gap')) return `Vlastná CSS premenná, ktorá riadi ${subject}.`;
  if (subject.includes('transition')) return 'Vlastná CSS premenná, ktorá riadi časovanie animácie a prechodov.';
  if (subject.includes('letter spacing')) return 'Vlastná CSS premenná, ktorá riadi rozostup písmen.';
  if (subject.includes('opacity')) return 'Vlastná CSS premenná, ktorá riadi úroveň priehľadnosti.';

  return `Vlastná CSS premenná na štýlovanie komponentu${subject ? ` (${subject})` : ''}.`;
}

function describeSlotEn(meta = {}) {
  const key = String(meta.name || 'default').toLowerCase();
  const map = {
    default: 'Default slot for the main component content.',
    headline: 'Slot for the primary clickable headline content.',
    description: 'Slot for supporting descriptive text.',
    content: 'Slot for the main body or expandable content.',
    start: 'Slot for content shown before the main content.',
    end: 'Slot for content shown after the main content.',
    icon: 'Slot for icon content.',
    caret: 'Slot for caret icon content.',
    toggle: 'Slot for toggle control content.',
    trigger: 'Slot for trigger element content.',
    top: 'Slot for content shown above the component.',
    bottom: 'Slot for content shown below the component.',
    header: 'Slot for header content.',
    footer: 'Slot for footer content.',
    title: 'Slot for title content.',
    subtitle: 'Slot for subtitle content.',
    label: 'Slot for label content.',
    before: 'Slot for content rendered before the primary element.',
    after: 'Slot for content rendered after the primary element.',
    separator: 'Slot for custom separator content between items.',
    action: 'Slot for action controls (for example buttons).',
    img: 'Slot for image or media preview content.',
    body: 'Slot for the body content area.',
    nav: 'Slot for custom navigation content.',
    media: 'Slot for media content.',
    anchor: 'Slot for an anchor or reference element.',
    arrow: 'Slot for a custom arrow indicator element.',
    status: 'Slot for status indicator content.',
    secondary: 'Slot for secondary supporting content.',
    divider: 'Slot for divider content.',
    'thumbnail-slot': 'Slot for thumbnail preview content.',
    error: 'Slot for validation or error content.',
  };
  return map[key] || `Slot for custom \`${key}\` content inside the component.`;
}

function describeSlotSk(meta = {}) {
  const key = String(meta.name || 'default').toLowerCase();
  const map = {
    default: 'Predvolený slot pre hlavný obsah komponentu.',
    headline: 'Slot pre hlavný klikateľný obsah hlavičky.',
    description: 'Slot pre doplnkový popisný text.',
    content: 'Slot pre hlavný alebo rozbaľovaný obsah tela komponentu.',
    start: 'Slot pre obsah zobrazený pred hlavným obsahom.',
    end: 'Slot pre obsah zobrazený za hlavným obsahom.',
    icon: 'Slot pre obsah ikony.',
    caret: 'Slot pre obsah caret ikony.',
    toggle: 'Slot pre obsah prepínača.',
    trigger: 'Slot pre obsah spúšťača.',
    top: 'Slot pre obsah zobrazený nad komponentom.',
    bottom: 'Slot pre obsah zobrazený pod komponentom.',
    header: 'Slot pre obsah hlavičky.',
    footer: 'Slot pre obsah pätičky.',
    title: 'Slot pre obsah nadpisu.',
    subtitle: 'Slot pre obsah podnadpisu.',
    label: 'Slot pre obsah labelu.',
    before: 'Slot pre obsah zobrazený pred hlavným prvkom.',
    after: 'Slot pre obsah zobrazený za hlavným prvkom.',
    separator: 'Slot pre vlastný oddeľovač medzi položkami.',
    action: 'Slot pre akčné ovládacie prvky, napríklad tlačidlá.',
    img: 'Slot pre náhľad obrázka alebo iného média.',
    body: 'Slot pre hlavný obsah tela komponentu.',
    nav: 'Slot pre vlastný navigačný obsah.',
    media: 'Slot pre mediálny obsah.',
    anchor: 'Slot pre kotviaci alebo referenčný prvok.',
    arrow: 'Slot pre vlastný prvok šípky.',
    status: 'Slot pre obsah indikátora stavu.',
    secondary: 'Slot pre sekundárny doplnkový obsah.',
    divider: 'Slot pre obsah oddeľovača.',
    'thumbnail-slot': 'Slot pre obsah náhľadu miniatúry.',
    error: 'Slot pre validačný alebo chybový obsah.',
  };
  return map[key] || `Slot pre vlastný obsah \`${key}\` v komponente.`;
}

function isExcludedProperty(componentTag = '', attrName = '') {
  return PROPERTY_EXCLUSIONS_BY_COMPONENT.get(componentTag)?.has(attrName) || false;
}

function chooseBetterType(currentType = '', nextType = '') {
  const current = normalizeType(currentType || '');
  const next = normalizeType(nextType || '');

  if (!current) {
    return next;
  }

  if (!next) {
    return current;
  }

  if (/^any$/i.test(current) && !/^any$/i.test(next)) {
    return next;
  }

  return current;
}

function chooseBetterDefault(currentDefault, nextDefault) {
  const current = currentDefault ?? '-';
  const next = nextDefault ?? '-';

  if ((current === '-' || current === '') && next !== '-' && next !== '') {
    return next;
  }

  return current;
}

function chooseBetterDescription(currentDescription = '', nextDescription = '', meta = {}) {
  const current = sanitizeDescriptionText(currentDescription || '');
  const next = sanitizeDescriptionText(nextDescription || '');

  if (!current) {
    return next;
  }

  if (!next) {
    return current;
  }

  return isWeakApiDescription(current, meta) && !isWeakApiDescription(next, meta) ? next : current;
}

function getPreferredPropertyType(currentType = '', { componentTag = '', attrName = '', propertyName = '' } = {}) {
  const current = normalizeType(currentType || '');
  if (current && current !== 'any') {
    return current;
  }

  const key = `${componentTag}.${String(attrName || propertyName || '').toLowerCase()}`;
  if (PROPERTY_TYPE_OVERRIDES.has(key)) {
    return PROPERTY_TYPE_OVERRIDES.get(key);
  }

  const normalizedAttr = String(attrName || propertyName || '').toLowerCase();
  if (BOOLEAN_ATTRIBUTE_NAMES.has(normalizedAttr)) {
    return 'boolean';
  }

  return current || 'any';
}

function choosePropertyName(currentName = '', nextName = '', attrName = '') {
  const fallback = toCamelCase(attrName);
  const current = currentName || fallback;
  const next = nextName || fallback;

  if (current === fallback) {
    return current;
  }

  if (next === fallback) {
    return next;
  }

  return current;
}

function isMemberPropertyCandidate(member, sourceMeta, manifestAttrName) {
  if (!member || member.kind !== 'field' || member.static) {
    return false;
  }

  if (!member.name || member.name.startsWith('_') || member.name.startsWith('#')) {
    return false;
  }

  if (['className', 'cssStyleSheet', 'dependencies', 'internals'].includes(member.name)) {
    return false;
  }

  return Boolean(sourceMeta || manifestAttrName);
}

function getProperties(declaration, { locale = 'en', componentTag = '', modulePath = '', siteDir = '' } = {}) {
  const attributes = declaration.attributes || [];
  const members = declaration.members || [];
  const sourceMetadata = analyzeComponentSource({ siteDir, modulePath, componentTag });
  const candidates = new Map();

  const mergeCandidate = (attrName, patch = {}) => {
    if (!attrName || isExcludedProperty(componentTag, attrName)) {
      return;
    }

    const existing = candidates.get(attrName) || {
      attr: attrName,
      name: toCamelCase(attrName),
      type: '',
      default: '-',
      source: '',
      deprecation: undefined,
    };

    const next = {
      attr: attrName,
      name: choosePropertyName(existing.name, patch.name, attrName),
      type: chooseBetterType(existing.type, patch.type),
      default: chooseBetterDefault(existing.default, patch.default),
      source: chooseBetterDescription(existing.source, patch.source, {
        kind: 'property',
        componentTag,
        name: patch.name || existing.name,
        attr: attrName,
      }),
      deprecation: existing.deprecation || patch.deprecation,
    };

    candidates.set(attrName, next);
  };

  for (const attribute of attributes) {
    const attrName = attribute.name;
    const attrCamel = toCamelCase(attrName);
    const member = members.find(
      (candidate) =>
        candidate.name === attrName ||
        candidate.name === attrCamel ||
        candidate.name?.toLowerCase() === attrName?.toLowerCase()
    );
    const sourceMeta = sourceMetadata.attributes.get(attrName) || sourceMetadata.accessorsByName.get(member?.name || '');

    mergeCandidate(attrName, {
      name: member?.name || sourceMeta?.name || attrCamel,
      type:
        getTypeText(attribute.type) ||
        sourceMeta?.type ||
        getTypeText(member?.type) ||
        getTypeText(member?.return?.type) ||
        getTypeText(member?.parameters?.[0]?.type) ||
        'any',
      default: member?.default ?? sourceMeta?.default ?? '-',
      source: attribute.description || sourceMeta?.docs || member?.description || member?.summary || '',
    });
  }

  for (const [attrName, sourceMeta] of sourceMetadata.attributes.entries()) {
    mergeCandidate(attrName, {
      name: sourceMeta.name,
      type: sourceMeta.type,
      default: sourceMeta.default,
      source: sourceMeta.docs,
    });
  }

  for (const member of members) {
    const manifestAttrName = attributes.find((attribute) => toCamelCase(attribute.name) === member.name)?.name;
    const sourceMeta = sourceMetadata.accessorsByName.get(member.name);

    if (!isMemberPropertyCandidate(member, sourceMeta, manifestAttrName)) {
      continue;
    }

    const attrName = sourceMeta?.attr || manifestAttrName || toKebabCase(member.name);
    if (member.readonly && !sourceMeta && !manifestAttrName) {
      continue;
    }

    mergeCandidate(attrName, {
      name: member.name,
      type:
        sourceMeta?.type ||
        getTypeText(member.type) ||
        getTypeText(member.return?.type) ||
        getTypeText(member.parameters?.[0]?.type) ||
        'any',
      default: member.default ?? sourceMeta?.default ?? '-',
      source: sourceMeta?.docs || member.description || member.summary || '',
      deprecation: member.deprecation,
    });
  }

  return Array.from(candidates.values())
    .map((candidate) => ({
      name: candidate.name,
      attr: candidate.attr,
      type: getPreferredPropertyType(candidate.type, {
        componentTag,
        attrName: candidate.attr,
        propertyName: candidate.name,
      }),
      default: candidate.default ?? '-',
      deprecation: candidate.deprecation,
      docs: resolveApiDescription({
        kind: 'property',
        locale,
        componentTag,
        name: candidate.name,
        attr: candidate.attr,
        type: getPreferredPropertyType(candidate.type, {
          componentTag,
          attrName: candidate.attr,
          propertyName: candidate.name,
        }),
        source: candidate.source || '',
      }),
    }))
    .sort((a, b) => a.attr.localeCompare(b.attr));
}

function normalizeEventName(value) {
  return String(value || '').trim();
}

function isCustomComponentEventName(value, componentTag = '') {
  const eventName = normalizeEventName(value);
  if (!eventName) {
    return false;
  }

  if (/^(customevent|event|undefined|null)$/i.test(eventName)) {
    return false;
  }

  if (eventName.includes('${')) {
    return false;
  }

  if (!eventName.includes(':')) {
    return false;
  }

  if (componentTag && eventName.startsWith(`wje-${componentTag}:`)) {
    return true;
  }

  return /^wje-[a-z0-9-]+:[a-z0-9-]+$/i.test(eventName);
}

function resolveComponentSourcePath({ siteDir = '', modulePath = '', componentTag = '' } = {}) {
  const sitePath = siteDir ? path.resolve(siteDir) : '';
  const repoRoot = sitePath ? path.resolve(sitePath, '..') : process.cwd();
  const candidates = [];

  if (modulePath) {
    candidates.push(path.resolve(repoRoot, modulePath));
  }

  if (componentTag) {
    const packageDir = path.resolve(repoRoot, 'packages', `wje-${componentTag}`);
    candidates.push(path.resolve(packageDir, `${componentTag}.element.js`));

    if (fs.existsSync(packageDir) && fs.statSync(packageDir).isDirectory()) {
      const dynamicCandidate = (fs.readdirSync(packageDir) || []).find((fileName) => fileName.endsWith('.element.js'));
      if (dynamicCandidate) {
        candidates.push(path.resolve(packageDir, dynamicCandidate));
      }
    }
  }

  for (const candidate of candidates) {
    if (candidate && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  return '';
}

function getStaticNodeName(node) {
  if (!node) {
    return '';
  }

  if (node.type === 'Identifier' || node.type === 'PrivateName') {
    return node.name || node.id?.name || '';
  }

  if (node.type === 'StringLiteral') {
    return node.value || '';
  }

  return '';
}

function walkAst(node, visitor) {
  if (!node || typeof node !== 'object') {
    return;
  }

  visitor(node);

  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      value.forEach((child) => walkAst(child, visitor));
      continue;
    }

    if (value && typeof value === 'object' && typeof value.type === 'string') {
      walkAst(value, visitor);
    }
  }
}

function getJsDocBlock(node) {
  const comments = node?.leadingComments || [];

  for (let index = comments.length - 1; index >= 0; index -= 1) {
    const comment = comments[index];
    if (comment?.type === 'CommentBlock' && /^\*/.test(comment.value || '')) {
      return comment.value || '';
    }
  }

  return '';
}

function extractJsDocDescription(comment = '') {
  if (!comment) {
    return '';
  }

  const lines = String(comment)
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trimRight());

  const descriptionLines = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (descriptionLines.length > 0 && descriptionLines[descriptionLines.length - 1] !== '') {
        descriptionLines.push('');
      }
      continue;
    }

    if (trimmed.startsWith('@')) {
      break;
    }

    descriptionLines.push(trimmed);
  }

  return sanitizeDescriptionText(descriptionLines.join(' ').replace(/\s+/g, ' ').trim());
}

function extractJsDocTagType(comment = '', tagName = '') {
  if (!comment || !tagName) {
    return '';
  }

  const match = String(comment).match(new RegExp(`@${tagName}\\s+\\{([^}]+)\\}`));
  return normalizeType(match?.[1] || '');
}

function extractAttributeTags(comment = '') {
  if (!comment) {
    return [];
  }

  return Array.from(String(comment).matchAll(/@attribute(?:\s+\{([^}]+)\})?\s+([^\s-]+)(?:\s*-\s*([^\n\r*]+))?/g)).map(
    (match) => ({
      attr: sanitizeDescriptionText(match[2] || ''),
      type: normalizeType(match[1] || ''),
      docs: sanitizeDescriptionText(match[3] || ''),
    })
  );
}

function getStringLiteralValue(node) {
  if (!node) {
    return '';
  }

  if (node.type === 'StringLiteral') {
    return node.value || '';
  }

  if (node.type === 'TemplateLiteral' && node.expressions?.length === 0) {
    return node.quasis?.[0]?.value?.cooked || '';
  }

  return '';
}

function isThisAttributeCall(node, methodNames = []) {
  const callee = node?.callee;
  const methodName = callee?.property?.name;

  return (
    node?.type === 'CallExpression' &&
    callee?.type === 'MemberExpression' &&
    callee.object?.type === 'ThisExpression' &&
    methodNames.includes(methodName)
  );
}

function collectHostAttributeUsage(node) {
  const attrs = new Set();
  const methods = new Set();

  walkAst(node, (child) => {
    if (!isThisAttributeCall(child, ['getAttribute', 'hasAttribute', 'setAttribute', 'removeAttribute', 'toggleAttribute'])) {
      return;
    }

    const attrName = getStringLiteralValue(child.arguments?.[0]);
    if (!attrName || NON_API_HOST_ATTRIBUTES.has(attrName) || attrName.startsWith('aria-')) {
      return;
    }

    attrs.add(attrName);
    methods.add(child.callee.property.name);
  });

  return {
    attrs: Array.from(attrs),
    methods,
  };
}

function expressionUsesAttr(node, attrNames = []) {
  let found = false;

  walkAst(node, (child) => {
    if (!isThisAttributeCall(child, ['getAttribute', 'hasAttribute'])) {
      return;
    }

    const attrName = getStringLiteralValue(child.arguments?.[0]);
    if (attrNames.includes(attrName)) {
      found = true;
    }
  });

  return found;
}

function literalNodeToValue(node) {
  if (!node) {
    return undefined;
  }

  switch (node.type) {
    case 'StringLiteral':
      return node.value;
    case 'NumericLiteral':
    case 'BooleanLiteral':
      return String(node.value);
    case 'NullLiteral':
      return 'null';
    case 'TemplateLiteral':
      return node.expressions?.length === 0 ? node.quasis?.[0]?.value?.cooked || '' : undefined;
    case 'UnaryExpression':
      if (node.operator === '-' || node.operator === '+') {
        const inner = literalNodeToValue(node.argument);
        return inner !== undefined ? `${node.operator}${inner}` : undefined;
      }
      return undefined;
    case 'ArrayExpression': {
      const values = node.elements.map((element) => literalNodeToValue(element));
      return values.every((value) => value !== undefined) ? `[${values.join(', ')}]` : undefined;
    }
    default:
      return undefined;
  }
}

function inferDefaultFromExpression(node, attrNames = []) {
  if (!node) {
    return undefined;
  }

  if ((node.type === 'LogicalExpression' || node.type === 'BinaryExpression') && ['||', '??'].includes(node.operator)) {
    if (expressionUsesAttr(node.left, attrNames)) {
      return literalNodeToValue(node.right);
    }
  }

  if (node.type === 'ConditionalExpression') {
    if (expressionUsesAttr(node.consequent, attrNames)) {
      return literalNodeToValue(node.alternate);
    }

    if (expressionUsesAttr(node.alternate, attrNames)) {
      return literalNodeToValue(node.consequent);
    }
  }

  return undefined;
}

function inferAccessorDefault(body, attrNames = [], isBooleanAccessor = false) {
  let inferred;

  walkAst(body, (child) => {
    if (inferred !== undefined || child?.type !== 'ReturnStatement') {
      return;
    }

    inferred = inferDefaultFromExpression(child.argument, attrNames);
  });

  if (inferred !== undefined) {
    return inferred;
  }

  if (isBooleanAccessor) {
    return 'false';
  }

  return undefined;
}

function getObservedAttributesFromMember(member) {
  const returnArg = member?.body?.body?.find((statement) => statement.type === 'ReturnStatement')?.argument;
  if (returnArg?.type !== 'ArrayExpression') {
    return [];
  }

  return returnArg.elements.map((element) => getStringLiteralValue(element)).filter(Boolean);
}

function findComponentClass(ast) {
  for (const node of ast.program?.body || []) {
    if (node.type === 'ExportDefaultDeclaration' && node.declaration?.type === 'ClassDeclaration') {
      return node.declaration;
    }

    if (node.type === 'ExportNamedDeclaration' && node.declaration?.type === 'ClassDeclaration') {
      return node.declaration;
    }

    if (node.type === 'ClassDeclaration') {
      return node;
    }
  }

  return null;
}

function analyzeComponentSource({ siteDir = '', modulePath = '', componentTag = '' } = {}) {
  const sourcePath = resolveComponentSourcePath({ siteDir, modulePath, componentTag });
  if (!sourcePath) {
    return { attributes: new Map(), accessorsByName: new Map() };
  }

  if (SOURCE_ANALYSIS_CACHE.has(sourcePath)) {
    return SOURCE_ANALYSIS_CACHE.get(sourcePath);
  }

  const source = fs.readFileSync(sourcePath, 'utf8');
  const result = {
    attributes: new Map(),
    accessorsByName: new Map(),
  };

  try {
    const ast = parse(source, {
      sourceType: 'module',
      plugins: ['classProperties', 'classPrivateProperties', 'classPrivateMethods'],
    });

    const classNode = findComponentClass(ast);
    if (!classNode) {
      SOURCE_ANALYSIS_CACHE.set(sourcePath, result);
      return result;
    }

    for (const tag of extractAttributeTags(getJsDocBlock(classNode))) {
      if (!tag.attr || NON_API_HOST_ATTRIBUTES.has(tag.attr) || tag.attr.startsWith('aria-')) {
        continue;
      }

      const propName = toCamelCase(tag.attr);
      const meta = {
        name: propName,
        attr: tag.attr,
        type: tag.type || '',
        default: undefined,
        docs: tag.docs || '',
      };

      result.attributes.set(tag.attr, meta);
      result.accessorsByName.set(propName, meta);
    }

    for (const member of classNode.body?.body || []) {
      const memberName = getStaticNodeName(member.key);
      if (!memberName) {
        continue;
      }

      if (member.static && member.kind === 'get' && memberName === 'observedAttributes') {
        for (const attr of getObservedAttributesFromMember(member)) {
          if (!attr || NON_API_HOST_ATTRIBUTES.has(attr) || attr.startsWith('aria-')) {
            continue;
          }

          if (!result.attributes.has(attr)) {
            result.attributes.set(attr, {
              name: toCamelCase(attr),
              attr,
              type: '',
              default: undefined,
              docs: '',
            });
          }
        }
        continue;
      }

      if (member.type !== 'ClassMethod' || !['get', 'set'].includes(member.kind) || member.computed || memberName.startsWith('#')) {
        continue;
      }

      const usage = collectHostAttributeUsage(member.body);
      if (usage.attrs.length === 0) {
        continue;
      }

      const attrName =
        usage.attrs.find((attr) => toCamelCase(attr) === memberName || attr === memberName) || usage.attrs[0] || '';
      if (!attrName) {
        continue;
      }

      const comment = getJsDocBlock(member);
      const sourceMeta = result.accessorsByName.get(memberName) || result.attributes.get(attrName) || {
        name: memberName,
        attr: attrName,
      };

      const type =
        member.kind === 'get' ? extractJsDocTagType(comment, 'returns') || extractJsDocTagType(comment, 'return') : extractJsDocTagType(comment, 'param');
      const docs = extractJsDocDescription(comment);
      const isBooleanAccessor = member.kind === 'get' && usage.methods.has('hasAttribute') && !usage.methods.has('getAttribute');
      const defaultValue = member.kind === 'get' ? inferAccessorDefault(member.body, usage.attrs, isBooleanAccessor) : undefined;

      const mergedMeta = {
        ...sourceMeta,
        name: sourceMeta.name || memberName,
        attr: sourceMeta.attr || attrName,
        type: chooseBetterType(sourceMeta.type, type || (isBooleanAccessor ? 'boolean' : '')),
        default: sourceMeta.default ?? defaultValue,
        docs: chooseBetterDescription(sourceMeta.docs, docs, {
          kind: 'property',
          componentTag,
          name: memberName,
          attr: attrName,
        }),
      };

      result.attributes.set(mergedMeta.attr, mergedMeta);
      result.accessorsByName.set(memberName, mergedMeta);
    }
  } catch (error) {
    // Fall back to manifest-only metadata when source parsing fails.
  }

  SOURCE_ANALYSIS_CACHE.set(sourcePath, result);
  return result;
}

function readEventDocsFromSource({ siteDir = '', modulePath = '', componentTag = '' } = {}) {
  const sourcePath = resolveComponentSourcePath({ siteDir, modulePath, componentTag });
  if (!sourcePath) {
    return [];
  }

  if (EVENT_SOURCE_CACHE.has(sourcePath)) {
    return EVENT_SOURCE_CACHE.get(sourcePath);
  }

  const source = fs.readFileSync(sourcePath, 'utf8');
  const descriptions = new Map();
  const events = [];
  const seen = new Set();

  const add = (name, docs = '') => {
    const eventName = normalizeEventName(name);
    if (!isCustomComponentEventName(eventName, componentTag) || seen.has(eventName)) {
      return;
    }
    seen.add(eventName);
    events.push({ event: eventName, docs: sanitizeDescriptionText(docs || descriptions.get(eventName) || '') });
  };

  const firesPattern = /@fires\s+\[?([a-z0-9-]+:[a-z0-9-]+)\]?(?:\s*-\s*([^\n\r*]+))?/gi;
  for (const match of source.matchAll(firesPattern)) {
    const eventName = normalizeEventName(match[1]);
    if (!isCustomComponentEventName(eventName, componentTag)) {
      continue;
    }
    const docs = sanitizeDescriptionText(match[2] || '');
    if (docs) {
      descriptions.set(eventName, docs);
    }
    add(eventName, docs);
  }

  const addListenerPattern = /event\.addListener\(\s*([^,]+),\s*['"`][^'"`]+['"`]\s*,\s*['"`]([^'"`]+)['"`]/g;
  for (const match of source.matchAll(addListenerPattern)) {
    const listenerContext = String(match[1] || '').trim();
    if (!/^this(\.|$)/.test(listenerContext)) {
      continue;
    }
    add(match[2]);
  }

  const dispatchPattern = /event\.dispatchCustomEvent\(\s*[^,]+,\s*['"`]([^'"`]+)['"`]/g;
  for (const match of source.matchAll(dispatchPattern)) {
    add(match[1]);
  }

  const customEventPattern = /new\s+CustomEvent\(\s*['"`]([^'"`]+)['"`]/g;
  for (const match of source.matchAll(customEventPattern)) {
    add(match[1]);
  }

  const result = events.map((eventItem) => ({
    event: eventItem.event,
    docs: sanitizeDescriptionText(eventItem.docs || descriptions.get(eventItem.event) || ''),
  }));

  EVENT_SOURCE_CACHE.set(sourcePath, result);
  return result;
}

function getEvents(declaration, { locale = 'en', componentTag = '', modulePath = '', siteDir = '' } = {}) {
  const events = declaration.events || [];
  const sourceEvents = readEventDocsFromSource({ siteDir, modulePath, componentTag });
  const sourceByName = new Map(sourceEvents.map((eventItem) => [eventItem.event, eventItem.docs || '']));
  const merged = new Map();

  for (const eventData of events) {
    const eventName = normalizeEventName(eventData.name || eventData.event || getTypeText(eventData.type) || '');
    if (!isCustomComponentEventName(eventName, componentTag)) {
      continue;
    }

    const isOwnEvent = componentTag ? eventName.startsWith(`wje-${componentTag}:`) : true;
    if (!isOwnEvent && !sourceByName.has(eventName)) {
      continue;
    }

    const manifestDescription = sanitizeDescriptionText(eventData.description || '');
    const sourceDescription = sourceByName.get(eventName) || '';
    const source = !isWeakApiDescription(manifestDescription, { kind: 'event', event: eventName })
      ? manifestDescription
      : sourceDescription || manifestDescription;

    merged.set(eventName, {
      event: eventName,
      docs: resolveApiDescription({
        kind: 'event',
        locale,
        componentTag,
        event: eventName,
        source,
      }),
    });
  }

  for (const eventItem of sourceEvents) {
    if (merged.has(eventItem.event)) {
      continue;
    }

    merged.set(eventItem.event, {
      event: eventItem.event,
      docs: resolveApiDescription({
        kind: 'event',
        locale,
        componentTag,
        event: eventItem.event,
        source: eventItem.docs || '',
      }),
    });
  }

  return Array.from(merged.values());
}

function formatMethodSignature(methodData) {
  if (methodData.signature) {
    return normalizeType(methodData.signature);
  }

  const parameters = (methodData.parameters || [])
    .map(
      (parameter) => `${parameter.name || 'arg'}${parameter.optional ? '?' : ''}: ${getTypeText(parameter.type) || 'any'}`
    )
    .join(', ');

  const returnType = getTypeText(methodData.return?.type) || 'void';

  return `(${parameters}) => ${returnType}`;
}

function getMethods(declaration, { locale = 'en', componentTag = '' } = {}) {
  const members = declaration.members || [];

  return members
    .filter((member) => member.kind === 'method')
    .filter((member) => !LIFECYCLE_METHODS.has(member.name))
    .filter((member) => !member.name.startsWith('_'))
    .filter((member) => !member.name.startsWith('#'))
    .filter((member) => !/^handle[A-Z]/.test(member.name))
    .filter((member) => !METHOD_EXCLUSIONS_BY_COMPONENT.get(componentTag)?.has(member.name))
    .map((member) => ({
      name: member.name,
      docs: resolveApiDescription({
        kind: 'method',
        locale,
        componentTag,
        name: member.name,
        signature: formatMethodSignature(member),
        source: member.description || '',
      }),
      signature: formatMethodSignature(member),
    }));
}

function getParts(declaration, { locale = 'en', componentTag = '' } = {}) {
  return (declaration.cssParts || []).map((part) => ({
    name: part.name,
    docs: resolveApiDescription({
      kind: 'part',
      locale,
      componentTag,
      name: part.name,
      source: part.description || '',
    }),
  }));
}

function getCustomProps(declaration, { locale = 'en', componentTag = '' } = {}) {
  return (declaration.cssProperties || []).map((customProperty) => {
    const cssName = sanitizeCssVariableName(customProperty.name);
    return {
      name: cssName,
      docs: resolveApiDescription({
        kind: 'cssProperty',
        locale,
        componentTag,
        name: cssName,
        source: customProperty.description || '',
      }),
    };
  });
}

function getSlots(declaration, { locale = 'en', componentTag = '' } = {}) {
  return (declaration.slots || []).map((slot) => ({
    name: slot.name === '' ? 'default' : slot.name,
    docs: resolveApiDescription({
      kind: 'slot',
      locale,
      componentTag,
      name: slot.name === '' ? 'default' : slot.name,
      source: slot.description || '',
    }),
  }));
}

function formatMultiline(value, locale = 'en') {
  return sanitizeTableValue(localizeDescription(value, locale))
    .split('\n\n')
    .join('<br /><br />')
    .split('\n')
    .join(' ');
}

function formatType(attr, type) {
  let formattedType = normalizeType(type || 'any');
  if (attr === 'color') {
    formattedType = formattedType.replace('string & Record<never, never>', 'string');
  }
  return sanitizeTableValue(formattedType);
}

function renderProperties({ props: properties, locale = 'en' }) {
  const localizedCopy = getLocaleCopy(locale);

  if (!properties || properties.length === 0) {
    return localizedCopy.noProperties;
  }

  return `
${properties
  .map((prop) => {
    const isDeprecated = prop.deprecation !== undefined;
    const docs = isDeprecated
      ? `${localizeDescription(prop.docs, locale)}\n${localizedCopy.deprecatedLabel} ${localizeDescription(prop.deprecation, locale)}`
      : localizeDescription(prop.docs, locale);

    return `
### ${prop.name} ${isDeprecated ? localizedCopy.deprecatedSuffix : ''}

| | |
| --- | --- |
| **${localizedCopy.labelDescription}** | ${formatMultiline(docs, locale)} |
| **${localizedCopy.labelAttribute}** | \`${prop.attr}\` |
| **${localizedCopy.labelType}** | \`${formatType(prop.attr, prop.type)}\` |
| **${localizedCopy.labelDefault}** | \`${prop.default}\` |

`;
  })
  .join('\n')}`;
}

function renderEvents({ events, locale = 'en' }) {
  const localizedCopy = getLocaleCopy(locale);

  if (!events || events.length === 0) {
    return localizedCopy.noEvents;
  }

  return `
| ${localizedCopy.labelName} | ${localizedCopy.labelDescription} |
| --- | --- |
${events.map((eventData) => `| \`${eventData.event}\` | ${formatMultiline(eventData.docs, locale)} |`).join('\n')}

`;
}

function renderMethods({ methods, locale = 'en' }) {
  const localizedCopy = getLocaleCopy(locale);

  if (!methods || methods.length === 0) {
    return localizedCopy.noMethods;
  }

  return `
${methods
  .map(
    (methodData) => `
### ${methodData.name}

| | |
| --- | --- |
| **${localizedCopy.labelDescription}** | ${formatMultiline(methodData.docs, locale)} |
| **${localizedCopy.labelSignature}** | \`${sanitizeInlineCodeValue(methodData.signature || '')}\` |
`
  )
  .join('\n')}

`;
}

function renderParts({ parts, locale = 'en' }) {
  const localizedCopy = getLocaleCopy(locale);

  if (!parts || parts.length === 0) {
    return localizedCopy.noParts;
  }

  return `
| ${localizedCopy.labelName} | ${localizedCopy.labelDescription} |
| --- | --- |
${parts.map((partData) => `| \`${partData.name}\` | ${formatMultiline(partData.docs, locale)} |`).join('\n')}

`;
}

function renderCustomProps({ styles: customProps, locale = 'en' }) {
  const localizedCopy = getLocaleCopy(locale);

  if (!customProps || customProps.length === 0) {
    return localizedCopy.noCustomProps;
  }

  return `
| ${localizedCopy.labelName} | ${localizedCopy.labelDescription} |
| --- | --- |
${customProps.map((propData) => `| \`${propData.name}\` | ${formatMultiline(propData.docs, locale)} |`).join('\n')}

`;
}

function renderSlots({ slots, locale = 'en' }) {
  const localizedCopy = getLocaleCopy(locale);

  if (!slots || slots.length === 0) {
    return localizedCopy.noSlots;
  }

  return `
| ${localizedCopy.labelName} | ${localizedCopy.labelDescription} |
| --- | --- |
${slots
  .map((slotData) => `| \`${slotData.name}\` | ${formatMultiline(getSlotDescription(slotData, locale), locale)} |`)
  .join('\n')}

`;
}

function getLocaleCopy(locale = 'en') {
  return LOCALE_COPY[locale] || LOCALE_COPY.en;
}

function getSlotDescription(slotData, locale = 'en') {
  const source = sanitizeDescriptionText(slotData?.docs || '');
  const localizedCopy = getLocaleCopy(locale);

  if (!source) {
    return localizedCopy.missingDescription;
  }

  return localizeDescription(source, locale);
}

function ensureSentenceCase(value) {
  const text = String(value || '').trim();
  if (!text) {
    return '';
  }

  const normalized = text.charAt(0).toUpperCase() + text.slice(1);
  return /[.!?]$/.test(normalized) ? normalized : `${normalized}.`;
}

function localizeDescription(value, locale = 'en') {
  const text = sanitizeDescriptionText(value);
  const localizedCopy = getLocaleCopy(locale);

  if (!text) {
    return localizedCopy.missingDescription;
  }

  return ensureSentenceCase(text);
}

function sanitizeDescriptionText(value) {
  return String(value || '')
    .replace(/\s*\/\/\s*@\w+.*$/gi, '')
    .replace(/\s*@fires\b.*$/gi, '')
    .replace(/\s*@event\b.*$/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function translateDescriptionToSk(text) {
  const normalized = String(text || '').replace(/\s+/g, ' ').trim();
  if (!normalized) {
    return LOCALE_COPY.sk.missingDescription;
  }

  if (SK_DESCRIPTION_OVERRIDES.has(normalized)) {
    return SK_DESCRIPTION_OVERRIDES.get(normalized);
  }

  let translated = normalized;

  for (const [pattern, replacement] of SK_REPLACEMENTS) {
    translated = translated.replace(pattern, replacement);
  }

  translated = translated.replace(/\bv a položka menu\b/gi, 'v položke menu');
  translated = translated.replace(/\bfor corners\b\.?/gi, '');
  translated = translated.replace(/\s+/g, ' ').replace(/\s+\./g, '.').trim();

  if (isLikelyEnglish(translated) || containsResidualEnglish(translated)) {
    return ensureSentenceCase(fallbackSlovakDescription(normalized));
  }

  return ensureSentenceCase(translated);
}

function containsResidualEnglish(text) {
  const normalized = String(text || '')
    .replace(/`[^`]*`/g, ' ')
    .toLowerCase();

  const words = normalized.match(/[a-záäčďéíĺľňóôŕšťúýž]+/g) || [];
  if (words.length === 0) {
    return false;
  }

  let residualMatches = 0;
  let slovakMatches = 0;
  for (const word of words) {
    if (ENGLISH_RESIDUAL_WORDS.has(word) && !SLOVAK_HINT_WORDS.has(word)) {
      residualMatches += 1;
    }
    if (SLOVAK_HINT_WORDS.has(word)) {
      slovakMatches += 1;
    }
  }

  const hasSlovakDiacritics = /[áäčďéíĺľňóôŕšťúýž]/.test(normalized);
  if (hasSlovakDiacritics || slovakMatches >= 1) {
    return false;
  }

  return residualMatches >= 2;
}

function isLikelyEnglish(text) {
  const normalized = String(text || '').toLowerCase();
  if (!normalized) {
    return false;
  }

  if (/no description available/i.test(normalized)) {
    return true;
  }

  const words = normalized.match(/[a-záäčďéíĺľňóôŕšťúýž]+/g) || [];
  if (words.length === 0) {
    return false;
  }

  let englishMatches = 0;
  let slovakMatches = 0;

  for (const word of words) {
    if (ENGLISH_HINT_WORDS.has(word)) {
      englishMatches += 1;
    }
    if (SLOVAK_HINT_WORDS.has(word)) {
      slovakMatches += 1;
    }
  }

  const hasSlovakDiacritics = /[áäčďéíĺľňóôŕšťúýž]/.test(normalized);

  if (englishMatches >= 2 && englishMatches >= slovakMatches) {
    return true;
  }

  if (!hasSlovakDiacritics && englishMatches >= 1 && words.length >= 3 && slovakMatches <= 1) {
    return true;
  }

  return false;
}

function fallbackSlovakDescription(originalText) {
  const rawText = String(originalText || '').trim();
  const text = rawText.toLowerCase();

  const aliasMatch = rawText.match(/supports aliases?:\s*([^.]*)/i);
  const acceptedValuesMatch = rawText.match(/accepted values?:\s*([^.]*)/i);

  if (/content encoded into the qr code/.test(text)) {
    return 'Obsah zakódovaný do QR kódu.';
  }

  if (/background color/.test(text)) {
    return 'Farba pozadia komponentu.';
  }

  if (/foreground color/.test(text)) {
    return 'Farba popredia komponentu.';
  }

  if (/output qr code size in pixels|size.*pixels/.test(text)) {
    return 'Výstupná veľkosť QR kódu v pixeloch.';
  }

  if (/error correction level/.test(text)) {
    const acceptedValues = acceptedValuesMatch?.[1]?.trim();
    return acceptedValues ? `Úroveň korekcie chýb. Akceptované hodnoty: ${acceptedValues}.` : 'Úroveň korekcie chýb QR kódu.';
  }

  if (/alpha channel/.test(text)) {
    const aliasText = aliasMatch?.[1]?.trim();
    const suffix = aliasText ? ` Podporuje aliasy: ${aliasText}.` : '';
    return `Alfa kanál v rozsahu 0-1.${suffix}`;
  }

  if (/supports aliases/.test(text)) {
    const aliasText = aliasMatch?.[1]?.trim();
    return aliasText ? `Podporuje aliasy: ${aliasText}.` : 'Podporuje aliasy definované pre tento atribút.';
  }

  if (/provided item/.test(text)) {
    return 'Vráti poskytnutú položku.';
  }

  if (/slot for content before the formatted value/.test(text)) {
    return 'Obsah pred formátovanou hodnotou.';
  }

  if (/slot for content after the formatted value/.test(text)) {
    return 'Obsah za formátovanou hodnotou.';
  }

  if (/representing formatted value/.test(text)) {
    return 'Časť pre formátovanú hodnotu.';
  }

  if (/\bcoordinate|submenu|triangle|cursor|navigating|closing\b/.test(text)) {
    return 'Definuje súradnice bezpečnostného trojuholníka pre submenu.';
  }

  if (/\bcolor\b/.test(text)) {
    return 'Farba komponentu.';
  }

  if (/\bpadding\b/.test(text)) {
    return 'Vnútorné odsadenie komponentu.';
  }

  if (/\bline height\b|výšku riadku/.test(text)) {
    return 'Výška riadku textu v komponente.';
  }

  if (/\bfont\b|\bfamily\b/.test(text)) {
    return 'Nastavenie písma komponentu.';
  }

  if (/\bbefore\b.*\bopen(s)?\b/.test(text)) {
    return 'Spustí sa pred otvorením komponentu.';
  }

  if (/\bafter\b.*\bopen(s)?\b/.test(text)) {
    return 'Spustí sa po otvorení komponentu.';
  }

  if (/\bbefore\b.*\bclose(s)?\b/.test(text)) {
    return 'Spustí sa pred zatvorením komponentu.';
  }

  if (/\bafter\b.*\bclose(s)?\b/.test(text)) {
    return 'Spustí sa po zatvorení komponentu.';
  }

  if (/\bclose(s)?\b/.test(text)) {
    return 'Zatvorí komponent.';
  }

  if (/\bopen(s)?\b/.test(text)) {
    return 'Otvorí komponent.';
  }

  if (/\bpart(s)?\b/.test(text)) {
    return 'Opisuje shadow časť komponentu, ktorú je možné štýlovať cez CSS.';
  }

  if (/\bslot(s)?\b|\bmain content\b|\bcontent\b/.test(text)) {
    return 'Určuje miesto, kam môžete vložiť vlastný obsah komponentu.';
  }

  if (/\battribute(s)?\b|\bproperty\b/.test(text)) {
    return 'Určuje nastavenie, ktoré mení správanie alebo vzhľad komponentu.';
  }

  if (/\b(create|render|draw)\b/.test(text)) {
    return 'Vytvorí a vykreslí potrebnú časť používateľského rozhrania komponentu.';
  }

  if (/\b(get|retrieve|return)\b/.test(text)) {
    return 'Vráti aktuálnu hodnotu alebo stav komponentu.';
  }

  if (/\b(set|update)\b/.test(text)) {
    return 'Nastaví alebo aktualizuje hodnotu komponentu.';
  }

  if (/\b(handle|process|dispatch|emit)\b/.test(text)) {
    return 'Spracuje vstup alebo udalosť komponentu.';
  }

  return 'Táto položka ovplyvňuje správanie alebo vzhľad komponentu.';
}

function normalizeType(value) {
  const raw = String(value || '').trim();
  if (!raw) {
    return '';
  }

  const withoutJsdocParams = raw.includes('@param') ? 'object' : raw;

  return withoutJsdocParams.replace(/\s+/g, ' ').trim();
}

function sanitizeTableValue(value) {
  return String(value || '')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\|/g, '\uff5c')
    .trim();
}

function sanitizeInlineCodeValue(value) {
  return String(value || '')
    .replace(/\|/g, '\uff5c')
    .trim();
}
