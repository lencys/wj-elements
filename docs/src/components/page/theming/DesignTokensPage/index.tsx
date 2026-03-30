import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

import DocsCards from '@components/global/DocsCards';
import styles from './styles.module.scss';
import { colorScaleValues, designTokenValues } from './generatedColorTokens';

type PreviewKind =
  | 'fontFamily'
  | 'fontSize'
  | 'fontWeight'
  | 'lineHeight'
  | 'letterSpacing'
  | 'color'
  | 'borderStyle'
  | 'borderWidth'
  | 'spacing'
  | 'radius'
  | 'shadow'
  | 'transition';

type ColorRole = 'fill' | 'text' | 'border';

type TokenDefinition = {
  token: string;
  value: string;
  darkValue?: string;
  description: string;
  preview: PreviewKind;
  previewValue?: string;
  darkPreviewValue?: string;
  sample?: string;
  colorRole?: ColorRole;
};

type TokenGroup = {
  id?: string;
  title: string;
  description: string;
  tokens: TokenDefinition[];
};

type ColorScale = {
  name: string;
  prefix: string;
  description: string;
  steps: ColorScaleStep[];
  darkSteps?: ColorScaleStep[];
};

type ColorScaleStep = {
  token: string;
  value: string;
};

type SectionLink = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type GeneratedTokenName = keyof typeof designTokenValues;
type GeneratedColorScalePrefix = keyof typeof colorScaleValues;

type TokenDefinitionConfig = {
  token: GeneratedTokenName;
  description: string;
  preview: PreviewKind;
  sample?: string;
  colorRole?: ColorRole;
};

function createTokenDefinition(config: TokenDefinitionConfig): TokenDefinition {
  const values = designTokenValues[config.token];

  return {
    ...config,
    token: config.token,
    value: values.light,
    darkValue: values.dark,
    previewValue: values.lightResolved,
    darkPreviewValue: values.darkResolved,
  };
}

function createColorScale(name: string, prefix: GeneratedColorScalePrefix, description: string): ColorScale {
  const values = colorScaleValues[prefix];

  return {
    name,
    prefix,
    description,
    steps: [...values.light],
    darkSteps: [...values.dark],
  };
}

const typographyGroups: TokenGroup[] = [
  {
    title: 'Rodiny písma',
    description: 'Základ pre textový tón dokumentácie, komponentov a výraznejšie akcenty.',
    tokens: [
      createTokenDefinition({
        token: '--wje-font-family',
        description: 'Primárny systémový font pre text a väčšinu komponentov.',
        preview: 'fontFamily',
        sample: 'WebJET Elements',
      }),
      createTokenDefinition({
        token: '--wje-font-family-secondary',
        description: 'Sekundárna family pre výraznejšie nadpisy alebo marketingové akcenty.',
        preview: 'fontFamily',
        sample: 'Brand heading',
      }),
    ],
  },
  {
    title: 'Veľkosti písma',
    description: 'Stupnica od drobných helper textov až po výrazné hero nadpisy.',
    tokens: [
      createTokenDefinition({
        token: '--wje-font-size-2x-small',
        description: 'Najmenšie pomocné mikrotexty.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
      createTokenDefinition({
        token: '--wje-font-size-x-small',
        description: 'Drobné metadáta alebo utilitné popisy.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
      createTokenDefinition({
        token: '--wje-font-size-small',
        description: 'Kompaktné texty vo formulároch a sekundárnych UI vrstvách.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
      createTokenDefinition({
        token: '--wje-font-size',
        description: 'Predvolená veľkosť textu v komponentoch.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
      createTokenDefinition({
        token: '--wje-font-size-medium',
        description: 'Telo textu s pohodlnou čitateľnosťou.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
      createTokenDefinition({
        token: '--wje-font-size-large',
        description: 'Menšie nadpisy a silnejšie akcenty v obsahu.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
      createTokenDefinition({
        token: '--wje-font-size-x-large',
        description: 'Výrazné sekčné nadpisy.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
      createTokenDefinition({
        token: '--wje-font-size-2x-large',
        description: 'Hero alebo page-level heading.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
      createTokenDefinition({
        token: '--wje-font-size-3x-large',
        description: 'Veľké promo alebo landing page titulky.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
      createTokenDefinition({
        token: '--wje-font-size-4x-large',
        description: 'Najsilnejší display typography token.',
        preview: 'fontSize',
        sample: 'Ag',
      }),
    ],
  },
  {
    title: 'Hrúbka písma',
    description: 'Päť úrovní váhy od jemných doplnkov po dôrazné titulky.',
    tokens: [
      createTokenDefinition({
        token: '--wje-font-weight-light',
        description: 'Jemný doplnkový text alebo menej dôležité UI štítky.',
        preview: 'fontWeight',
        sample: 'Light emphasis',
      }),
      createTokenDefinition({
        token: '--wje-font-weight-normal',
        description: 'Predvolená váha dlhších textov.',
        preview: 'fontWeight',
        sample: 'Normal reading',
      }),
      createTokenDefinition({
        token: '--wje-font-weight-medium',
        description: 'Jemný dôraz bez prílišnej ťažkosti.',
        preview: 'fontWeight',
        sample: 'Medium label',
      }),
      createTokenDefinition({
        token: '--wje-font-weight-semibold',
        description: 'Silnejšie CTA a menšie headingy.',
        preview: 'fontWeight',
        sample: 'Semibold action',
      }),
      createTokenDefinition({
        token: '--wje-font-weight-bold',
        description: 'Maximálny dôraz v rámci systémovej typografie.',
        preview: 'fontWeight',
        sample: 'Bold title',
      }),
    ],
  },
  {
    title: 'Line height',
    description: 'Rytmus riadkov pre husté UI, štandardné texty aj voľnejšie layouty.',
    tokens: [
      createTokenDefinition({
        token: '--wje-line-height-denser',
        description: 'Veľmi kompaktné titulky alebo číselné výstupy.',
        preview: 'lineHeight',
        sample: 'Dense lines\nfit more content',
      }),
      createTokenDefinition({
        token: '--wje-line-height-dense',
        description: 'Hustejšie UI labely a tabuľkové texty.',
        preview: 'lineHeight',
        sample: 'Dense rhythm\nfor compact UI',
      }),
      createTokenDefinition({
        token: '--wje-line-height-normal',
        description: 'Predvolený balans čitateľnosti a hustoty.',
        preview: 'lineHeight',
        sample: 'Default rhythm\nfor components',
      }),
      createTokenDefinition({
        token: '--wje-line-height-loose',
        description: 'Voľnejší text v obsahových blokoch.',
        preview: 'lineHeight',
        sample: 'Looser reading\nfor content blocks',
      }),
      createTokenDefinition({
        token: '--wje-line-height-looser',
        description: 'Najvzdušnejšie layouty a delikátnejšie editorial časti.',
        preview: 'lineHeight',
        sample: 'Editorial rhythm\nwith more air',
      }),
    ],
  },
  {
    title: 'Letter spacing',
    description: 'Doladenie hustoty znakov od tesných nadpisov po rozvoľnené štítky.',
    tokens: [
      createTokenDefinition({
        token: '--wje-letter-spacing-tightest',
        description: 'Najtesnejší rozstup pre výrazné display nadpisy.',
        preview: 'letterSpacing',
        sample: 'WEBJET',
      }),
      createTokenDefinition({
        token: '--wje-letter-spacing-tighter',
        description: 'Jemne stiahnuté headingy a CTA.',
        preview: 'letterSpacing',
        sample: 'WEBJET',
      }),
      createTokenDefinition({
        token: '--wje-letter-spacing-normal',
        description: 'Neutrálna hodnota pre bežný text.',
        preview: 'letterSpacing',
        sample: 'WebJET',
      }),
      createTokenDefinition({
        token: '--wje-letter-spacing-wider',
        description: 'Vhodné pre tagy, microcopy a doplnkové labely.',
        preview: 'letterSpacing',
        sample: 'WEBJET',
      }),
      createTokenDefinition({
        token: '--wje-letter-spacing-widest',
        description: 'Najvoľnejší rozostup pre menšie uppercase labely.',
        preview: 'letterSpacing',
        sample: 'WEBJET',
      }),
    ],
  },
];

const colorGroups: TokenGroup[] = [
  {
    title: 'Povrchy a text',
    description: 'Základné tokeny pre pozadie, text a linky medzi komponentmi.',
    tokens: [
      createTokenDefinition({
        token: '--wje-background',
        description: 'Primárne pozadie aplikácie alebo kontajnera.',
        preview: 'color',
        colorRole: 'fill',
      }),
      createTokenDefinition({
        token: '--wje-color',
        description: 'Predvolená farba textu a ikon.',
        preview: 'color',
        colorRole: 'text',
      }),
      createTokenDefinition({
        token: '--wje-border-color',
        description: 'Štandardný okraj pre inputs, cards a separátory.',
        preview: 'color',
        colorRole: 'border',
      }),
      createTokenDefinition({
        token: '--wje-color-menu',
        description: 'Tmavý povrch pre navigáciu a silné kontrastné plochy.',
        preview: 'color',
        colorRole: 'fill',
      }),
      createTokenDefinition({
        token: '--wje-color-contrast',
        description: 'Doplnkový kontrastný povrch proti základnému textu alebo menu.',
        preview: 'color',
        colorRole: 'fill',
      }),
    ],
  },
  {
    title: 'Sémantické farby',
    description: 'Alias tokeny, ktoré používajú komponenty pri atribúte `color`.',
    tokens: [
      createTokenDefinition({
        token: '--wje-color-primary',
        description: 'Hlavná brand farba pre CTA, akcenty a interaktívne stavy.',
        preview: 'color',
        colorRole: 'fill',
      }),
      createTokenDefinition({
        token: '--wje-color-complete',
        description: 'Sekundárna výrazná modrá pre doplnkové akcie a vizualizácie.',
        preview: 'color',
        colorRole: 'fill',
      }),
      createTokenDefinition({
        token: '--wje-color-success',
        description: 'Pozitívne stavy, potvrdenia a úspešné výsledky.',
        preview: 'color',
        colorRole: 'fill',
      }),
      createTokenDefinition({
        token: '--wje-color-warning',
        description: 'Upozornenia a mäkšie negatívne stavy s vyššou viditeľnosťou.',
        preview: 'color',
        colorRole: 'fill',
      }),
      createTokenDefinition({
        token: '--wje-color-danger',
        description: 'Kritické chyby, deštruktívne akcie a rizikové upozornenia.',
        preview: 'color',
        colorRole: 'fill',
      }),
      createTokenDefinition({
        token: '--wje-color-info',
        description: 'Neutrálne informačné bloky a doplnkové kontextové UI.',
        preview: 'color',
        colorRole: 'fill',
      }),
    ],
  },
];

const spacingGroup: TokenGroup = {
  id: 'space-scale',
  title: 'Spacing scale',
  description: 'Jemná modulárna mriežka pre paddingy, gapy a vertikálny rytmus.',
  tokens: [
    createTokenDefinition({
      token: '--wje-spacing-4x-small',
      description: 'Mikro medzery medzi ikonou a textom.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-3x-small',
      description: 'Tesné oddelenie inline prvkov.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-2x-small',
      description: 'Kompaktné layouty a husté toolbary.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-x-small',
      description: 'Malé vnútorné odsadenie a rozostup tagov.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-small',
      description: 'Predvolený menší padding vo formulároch a kartách.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-medium',
      description: 'Základná mriežka pre bežné rozloženie UI.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-large',
      description: 'Sekčné odsadenie a pohodlný gap medzi blokmi.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-x-large',
      description: 'Vzdušnejšie layouty a obsahové sekcie.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-2x-large',
      description: 'Silnejší odstup medzi významnými obsahovými celkami.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-3x-large',
      description: 'Hero sekcie a veľké card layouts.',
      preview: 'spacing',
    }),
    createTokenDefinition({
      token: '--wje-spacing-4x-large',
      description: 'Najväčší rytmický odsadený priestor.',
      preview: 'spacing',
    }),
  ],
};

const borderGroups: TokenGroup[] = [
  {
    id: 'borders-style-width',
    title: 'Style a šírka',
    description: 'Globálne border tokeny, ktoré používajú inputs, menu, dialógy aj layout separátory.',
    tokens: [
      createTokenDefinition({
        token: '--wje-border-style',
        description: 'Predvolený štýl okraja v celom systéme.',
        preview: 'borderStyle',
      }),
      createTokenDefinition({
        token: '--wje-border-width',
        description: 'Základná hrúbka okrajov pre komponenty a oddeľovače.',
        preview: 'borderWidth',
      }),
    ],
  },
];

const radiusGroup: TokenGroup = {
  id: 'border-radius',
  title: 'Border radius',
  description: 'Od jemne zaoblených rohov až po fully rounded komponenty.',
  tokens: [
    createTokenDefinition({
      token: '--wje-border-radius-small',
      description: 'Subtílne zaoblenie pri kompaktných prvkoch.',
      preview: 'radius',
    }),
    createTokenDefinition({
      token: '--wje-border-radius-medium',
      description: 'Bezpečný default pre inputs a menšie karty.',
      preview: 'radius',
    }),
    createTokenDefinition({
      token: '--wje-border-radius-large',
      description: 'Viditeľnejšie zaoblenie pri tlačidlách a paneloch.',
      preview: 'radius',
    }),
    createTokenDefinition({
      token: '--wje-border-radius-x-large',
      description: 'Vzdušnejšie bloky a moderné surfaces.',
      preview: 'radius',
    }),
    createTokenDefinition({
      token: '--wje-border-radius-2x-large',
      description: 'Hero cards, dialógy a výraznejšie kontejnery.',
      preview: 'radius',
    }),
    createTokenDefinition({
      token: '--wje-border-radius-circle',
      description: 'Kruhové avatary, ikony a bullet prvky.',
      preview: 'radius',
    }),
    createTokenDefinition({
      token: '--wje-border-radius-pill',
      description: 'Plne zaoblené chips, toggles a segmented controls.',
      preview: 'radius',
    }),
  ],
};

const shadowGroup: TokenGroup = {
  id: 'shadows-scale',
  title: 'Shadow scale',
  description: 'Stupnica tieňov pre jemnú hĺbku, floating menu aj výraznejšie plávajúce surfaces.',
  tokens: [
    createTokenDefinition({
      token: '--wje-shadow-small',
      description: 'Najjemnejší tieň pre drobné oddelenie od pozadia.',
      preview: 'shadow',
    }),
    createTokenDefinition({
      token: '--wje-shadow-medium',
      description: 'Predvolená elevácia pre menšie plávajúce vrstvy a menu.',
      preview: 'shadow',
    }),
    createTokenDefinition({
      token: '--wje-shadow-large',
      description: 'Výraznejší tieň pre karty a zvýraznené bloky.',
      preview: 'shadow',
    }),
    createTokenDefinition({
      token: '--wje-shadow-x-large',
      description: 'Silnejšia elevácia pre dialógy, pickery a floating panely.',
      preview: 'shadow',
    }),
    createTokenDefinition({
      token: '--wje-shadow-2x-large',
      description: 'Najvýraznejší systémový tieň pre veľké prekryvné vrstvy.',
      preview: 'shadow',
    }),
  ],
};

const transitionGroup: TokenGroup = {
  id: 'transitions-scale',
  title: 'Transition',
  description: 'Tri základné rýchlosti pre hovorivejšie, ale stále svižné UI.',
  tokens: [
    createTokenDefinition({
      token: '--wje-transition-fast',
      description: 'Hover a focus feedback bez zdržania.',
      preview: 'transition',
    }),
    createTokenDefinition({
      token: '--wje-transition-medium',
      description: 'Vyvážené pre expanzie, dropdowny a panelové zmeny.',
      preview: 'transition',
    }),
    createTokenDefinition({
      token: '--wje-transition-slow',
      description: 'Najpomalší timing pre väčšie, nápadnejšie presuny.',
      preview: 'transition',
    }),
  ],
};

const colorScales: ColorScale[] = [
  createColorScale('Primary', '--wje-color-primary', 'Brand a primárne CTA.'),
  createColorScale('Complete', '--wje-color-complete', 'Silná sekundárna modrá.'),
  createColorScale('Success', '--wje-color-success', 'Pozitívne stavy a potvrdenia.'),
  createColorScale('Warning', '--wje-color-warning', 'Upozornenia a mäkké rizikové signály.'),
  createColorScale('Danger', '--wje-color-danger', 'Chyby, mazanie a kritické stavy.'),
  createColorScale('Info', '--wje-color-info', 'Neutrálna informačná škála.'),
  createColorScale('Contrast', '--wje-color-contrast', 'Neutrálna kontrastná škála pre texty a surfaces.'),
];

const sectionLinks: SectionLink[] = [
  {
    id: 'borders',
    title: 'Okraje',
    description: 'Style, width a radius tokeny.',
    icon: 'box-align-top',
  },
  {
    id: 'color',
    title: 'Farby',
    description: 'Povrchy, sémantické aliasy a tónové škály.',
    icon: 'brush',
  },
  {
    id: 'shadows',
    title: 'Tiene',
    description: 'Elevácia od jemných po výrazné plávajúce vrstvy.',
    icon: 'layout-dashboard',
  },
  {
    id: 'space',
    title: 'Rozostupy',
    description: 'Modulárna mierka pre gapy, paddingy a rytmus.',
    icon: 'adjustments-horizontal',
  },
  {
    id: 'transition',
    title: 'Prechody',
    description: 'Tri základné timing tokeny pre plynulé interakcie.',
    icon: 'bounce-right',
  },
  {
    id: 'typography',
    title: 'Typografia',
    description: 'Font family, scale, weight, line height a letter spacing.',
    icon: 'circle-letter-a',
  },
];

function formatValue(value: string): string {
  const remMatch = value.match(/^(-?\d*\.?\d+)rem$/);

  if (remMatch) {
    const px = Number(remMatch[1]) * 16;
    const pxString = Number.isInteger(px) ? String(px) : px.toFixed(1);
    return `${value} (${pxString}px)`;
  }

  return value;
}

function getTokenValue(token: TokenDefinition, colorMode: string) {
  return colorMode === 'dark' && token.darkValue ? token.darkValue : token.value;
}

function getPreviewValue(token: TokenDefinition, colorMode: string) {
  if (colorMode === 'dark') {
    return token.darkPreviewValue ?? token.darkValue ?? token.previewValue ?? token.value;
  }

  return token.previewValue ?? token.value;
}

function getScaleSteps(scale: ColorScale, colorMode: string) {
  return colorMode === 'dark' && scale.darkSteps ? scale.darkSteps : scale.steps;
}

function TokenTable({ id, title, description, tokens }: TokenGroup) {
  const { colorMode } = useColorMode();

  return (
    <section id={id} className={styles.tableBlock}>
      <div className={styles.tableMeta}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={styles.tableResponsive}>
        <table className={styles.tokenTable}>
          <colgroup>
            <col className={styles.tokenColumn} />
            <col className={styles.valueColumn} />
            <col className={styles.previewColumn} />
            <col className={styles.descriptionColumn} />
          </colgroup>
          <thead>
            <tr>
              <th>Token</th>
              <th>Hodnota</th>
              <th>Ukážka</th>
              <th>Popis</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => {
              const tokenValue = getTokenValue(token, colorMode);
              const previewValue = getPreviewValue(token, colorMode);

              return (
                <tr key={token.token}>
                  <td>
                    <code>{token.token}</code>
                  </td>
                  <td>
                    <code>{formatValue(tokenValue)}</code>
                  </td>
                  <td>
                    <div className={styles.previewSlot}>{renderPreview(token, previewValue)}</div>
                  </td>
                  <td>{token.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function renderPreview(token: TokenDefinition, previewValue: string) {
  switch (token.preview) {
    case 'fontFamily':
      return (
        <div className={styles.previewText} style={{ fontFamily: previewValue }}>
          {token.sample ?? 'WebJET Elements'}
        </div>
      );

    case 'fontSize':
      return (
        <div className={styles.previewText} style={{ fontSize: previewValue, lineHeight: 1.1 }}>
          {token.sample ?? 'Aa'}
        </div>
      );

    case 'fontWeight':
      return (
        <div className={styles.previewText} style={{ fontWeight: previewValue }}>
          {token.sample ?? 'WebJET'}
        </div>
      );

    case 'lineHeight':
      return (
        <div className={styles.previewParagraph} style={{ lineHeight: previewValue }}>
          {(token.sample ?? 'Default rhythm\nfor readable UI').split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      );

    case 'letterSpacing':
      return (
        <div className={styles.previewCaps} style={{ letterSpacing: previewValue }}>
          {token.sample ?? 'WEBJET'}
        </div>
      );

    case 'spacing':
      return (
        <div className={styles.spacingPreview}>
          <div className={styles.spacingTrack}>
            <div className={styles.spacingFill} style={{ width: previewValue }} />
          </div>
        </div>
      );

    case 'borderStyle':
      return (
        <div className={styles.borderPreview}>
          <span className={styles.borderStroke} style={{ borderTopStyle: previewValue, borderTopWidth: '4px' }} />
        </div>
      );

    case 'borderWidth':
      return (
        <div className={styles.borderPreview}>
          <span className={styles.borderStroke} style={{ borderTopWidth: previewValue }} />
        </div>
      );

    case 'radius':
      return <div className={styles.radiusPreview} style={{ borderRadius: previewValue }} />;

    case 'shadow':
      return <div className={styles.shadowPreview} style={{ boxShadow: previewValue }} />;

    case 'transition':
      return (
        <div className={styles.transitionPreview} style={{ ['--token-transition' as string]: previewValue }}>
          <div className={styles.transitionHandle} />
        </div>
      );

    case 'color':
      return renderColorPreview(token.colorRole ?? 'fill', previewValue);

    default:
      return null;
  }
}

function renderColorPreview(role: ColorRole, previewValue: string) {
  if (role === 'text') {
    return (
      <div className={styles.colorPreviewShell}>
        <span className={styles.colorPreviewText} style={{ color: previewValue }}>
          Aa
        </span>
      </div>
    );
  }

  if (role === 'border') {
    return (
      <div className={styles.colorPreviewShell}>
        <span className={styles.colorPreviewBorder} style={{ borderColor: previewValue }} />
      </div>
    );
  }

  return (
    <div className={styles.colorPreviewShell}>
      <span className={styles.colorPreviewFill} style={{ backgroundColor: previewValue }} />
    </div>
  );
}

function ColorScaleRow({ scale }: { scale: ColorScale }) {
  const { colorMode } = useColorMode();
  const steps = getScaleSteps(scale, colorMode);

  return (
    <div className={styles.scaleRow}>
      <div className={styles.scaleMeta}>
        <h3>{scale.name}</h3>
        <p>{scale.description}</p>
      </div>

      <div className={styles.scaleGrid}>
        {steps.map((step) => (
          <div key={step.token} className={styles.scaleStep}>
            <div className={styles.scaleSwatch} style={{ backgroundColor: step.value }} />
            <div className={styles.scaleTokenLabel}>
              <code>{step.token}</code>
              <span>{formatValue(step.value)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DesignTokensPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <nav className={styles.sectionNav} aria-label="Sekcie dizajnových tokenov">
        <DocsCards>
          {sectionLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={styles.sectionNavLink}>
              <wje-card className="Card-without-image">
                <wje-card-header>
                  <wje-icon name={link.icon} size="large"></wje-icon>
                  <wje-card-title>{link.title}</wje-card-title>
                </wje-card-header>
                <wje-card-content>
                  <p>{link.description}</p>
                </wje-card-content>
              </wje-card>
            </a>
          ))}
        </DocsCards>
      </nav>

      <section id="borders" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Borders</span>
          <h2>Okraje</h2>
          <p>
            Border tokeny definujú základný tvar okraja v systéme. Zahŕňajú štýl, hrúbku aj radius, z ktorého potom
            dedia inputs, karty, menu a ďalšie komponenty.
          </p>
        </div>

        <div className={styles.stack}>
          {borderGroups.map((group) => (
            <TokenTable key={group.title} {...group} />
          ))}
          <TokenTable {...radiusGroup} />
        </div>
      </section>

      <section id="color" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Color</span>
          <h2>Farby</h2>
          <p>
            Farebný systém kombinuje základné povrchy, textové aliasy a plné tónové škály pre sémantické použitie v
            komponentoch. Alias tokeny používajú komponenty priamo, škály dávajú priestor na jemné ladenie.
          </p>
        </div>

        <div className={styles.stack}>
          {colorGroups.map((group) => (
            <TokenTable key={group.title} {...group} />
          ))}
        </div>

        <div className={styles.scaleSection}>
          <div className={styles.tableMeta}>
            <h3>Tónové škály</h3>
            <p>
              Sémantické palety majú 11 krokov a kontrastná škála zobrazuje všetky reálne tokeny vrátane kroku `0`.
              Svetlejšie tóny slúžia pre fill surfaces a hover states, tmavšie pre text, outline a výrazné akcenty.
            </p>
          </div>

          <div className={styles.scaleStack}>
            {colorScales.map((scale) => (
              <ColorScaleRow key={scale.prefix} scale={scale} />
            ))}
          </div>
        </div>
      </section>

      <section id="shadows" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Shadows</span>
          <h2>Tiene</h2>
          <p>
            Shadow tokeny dávajú komponentom hĺbku bez toho, aby každá časť UI používala vlastný box-shadow. Vhodné sú
            pre menu, tooltips, karty aj väčšie overlay vrstvy.
          </p>
        </div>

        <TokenTable {...shadowGroup} />
      </section>

      <section id="space" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Space</span>
          <h2>Rozostupy</h2>
          <p>
            Modulárna spacing škála drží komponenty aj layout v jednom rytme. Začni `medium` ako základom a smerom hore
            alebo dole škáluj podľa hustoty rozhrania.
          </p>
        </div>

        <TokenTable {...spacingGroup} />
      </section>

      <section id="transition" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Transitions</span>
          <h2>Prechody</h2>
          <p>
            Krátke transition tokeny držia interakcie svižné a konzistentné. Hover na ukážku v tabuľke ti ukáže, ako sa
            mení tempo pohybu medzi jednotlivými presetmi.
          </p>
        </div>

        <TokenTable {...transitionGroup} />
      </section>

      <section id="typography" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Typography</span>
          <h2>Typografia</h2>
          <p>
            Typografické tokeny definujú, ako čitateľne a konzistentne pôsobí celé UI. Zahŕňajú font family, veľkostnú
            škálu, hmotnosti, line height aj letter spacing.
          </p>
        </div>

        <div className={styles.stack}>
          {typographyGroups.map((group) => (
            <TokenTable key={group.title} {...group} />
          ))}
        </div>
      </section>
    </div>
  );
}
