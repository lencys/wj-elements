import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './styles.module.scss';

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
  steps: string[];
  darkSteps?: string[];
};

const typographyGroups: TokenGroup[] = [
  {
    title: 'Rodiny písma',
    description: 'Základ pre textový tón dokumentácie, komponentov a výraznejšie akcenty.',
    tokens: [
      {
        token: '--wje-font-family',
        value:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
        darkValue:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        description: 'Primárny systémový font pre text a väčšinu komponentov.',
        preview: 'fontFamily',
        sample: 'WebJET Elements',
      },
      {
        token: '--wje-font-family-secondary',
        value:
          "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        description: 'Sekundárna family pre výraznejšie nadpisy alebo marketingové akcenty.',
        preview: 'fontFamily',
        sample: 'Brand heading',
      },
    ],
  },
  {
    title: 'Veľkosti písma',
    description: 'Stupnica od drobných helper textov až po výrazné hero nadpisy.',
    tokens: [
      {
        token: '--wje-font-size-2x-small',
        value: '0.5rem',
        description: 'Najmenšie pomocné mikrotexty.',
        preview: 'fontSize',
        sample: 'Ag',
      },
      {
        token: '--wje-font-size-x-small',
        value: '0.625rem',
        description: 'Drobné metadáta alebo utilitné popisy.',
        preview: 'fontSize',
        sample: 'Ag',
      },
      {
        token: '--wje-font-size-small',
        value: '0.75rem',
        description: 'Kompaktné texty vo formulároch a sekundárnych UI vrstvách.',
        preview: 'fontSize',
        sample: 'Ag',
      },
      {
        token: '--wje-font-size',
        value: '0.875rem',
        description: 'Predvolená veľkosť textu v komponentoch.',
        preview: 'fontSize',
        sample: 'Ag',
      },
      {
        token: '--wje-font-size-medium',
        value: '1rem',
        description: 'Telo textu s pohodlnou čitateľnosťou.',
        preview: 'fontSize',
        sample: 'Ag',
      },
      {
        token: '--wje-font-size-large',
        value: '1.25rem',
        description: 'Menšie nadpisy a silnejšie akcenty v obsahu.',
        preview: 'fontSize',
        sample: 'Ag',
      },
      {
        token: '--wje-font-size-x-large',
        value: '1.5rem',
        description: 'Výrazné sekčné nadpisy.',
        preview: 'fontSize',
        sample: 'Ag',
      },
      {
        token: '--wje-font-size-2x-large',
        value: '2.25rem',
        description: 'Hero alebo page-level heading.',
        preview: 'fontSize',
        sample: 'Ag',
      },
      {
        token: '--wje-font-size-3x-large',
        value: '3rem',
        description: 'Veľké promo alebo landing page titulky.',
        preview: 'fontSize',
        sample: 'Ag',
      },
      {
        token: '--wje-font-size-4x-large',
        value: '4.5rem',
        description: 'Najsilnejší display typography token.',
        preview: 'fontSize',
        sample: 'Ag',
      },
    ],
  },
  {
    title: 'Hrúbka písma',
    description: 'Päť úrovní váhy od jemných doplnkov po dôrazné titulky.',
    tokens: [
      {
        token: '--wje-font-weight-light',
        value: '300',
        description: 'Jemný doplnkový text alebo menej dôležité UI štítky.',
        preview: 'fontWeight',
        sample: 'Light emphasis',
      },
      {
        token: '--wje-font-weight-normal',
        value: '400',
        description: 'Predvolená váha dlhších textov.',
        preview: 'fontWeight',
        sample: 'Normal reading',
      },
      {
        token: '--wje-font-weight-medium',
        value: '500',
        description: 'Jemný dôraz bez prílišnej ťažkosti.',
        preview: 'fontWeight',
        sample: 'Medium label',
      },
      {
        token: '--wje-font-weight-semibold',
        value: '600',
        description: 'Silnejšie CTA a menšie headingy.',
        preview: 'fontWeight',
        sample: 'Semibold action',
      },
      {
        token: '--wje-font-weight-bold',
        value: '700',
        description: 'Maximálny dôraz v rámci systémovej typografie.',
        preview: 'fontWeight',
        sample: 'Bold title',
      },
    ],
  },
  {
    title: 'Line height',
    description: 'Rytmus riadkov pre husté UI, štandardné texty aj voľnejšie layouty.',
    tokens: [
      {
        token: '--wje-line-height-denser',
        value: '1.2',
        description: 'Veľmi kompaktné titulky alebo číselné výstupy.',
        preview: 'lineHeight',
        sample: 'Dense lines\nfit more content',
      },
      {
        token: '--wje-line-height-dense',
        value: '1.4',
        description: 'Hustejšie UI labely a tabuľkové texty.',
        preview: 'lineHeight',
        sample: 'Dense rhythm\nfor compact UI',
      },
      {
        token: '--wje-line-height-normal',
        value: '1.5',
        description: 'Predvolený balans čitateľnosti a hustoty.',
        preview: 'lineHeight',
        sample: 'Default rhythm\nfor components',
      },
      {
        token: '--wje-line-height-loose',
        value: '1.6',
        description: 'Voľnejší text v obsahových blokoch.',
        preview: 'lineHeight',
        sample: 'Looser reading\nfor content blocks',
      },
      {
        token: '--wje-line-height-looser',
        value: '1.8',
        description: 'Najvzdušnejšie layouty a delikátnejšie editorial časti.',
        preview: 'lineHeight',
        sample: 'Editorial rhythm\nwith more air',
      },
    ],
  },
  {
    title: 'Letter spacing',
    description: 'Doladenie hustoty znakov od tesných nadpisov po rozvoľnené štítky.',
    tokens: [
      {
        token: '--wje-letter-spacing-tightest',
        value: '-0.05em',
        description: 'Najtesnejší rozstup pre výrazné display nadpisy.',
        preview: 'letterSpacing',
        sample: 'WEBJET',
      },
      {
        token: '--wje-letter-spacing-tighter',
        value: '-0.025em',
        description: 'Jemne stiahnuté headingy a CTA.',
        preview: 'letterSpacing',
        sample: 'WEBJET',
      },
      {
        token: '--wje-letter-spacing-normal',
        value: '0em',
        description: 'Neutrálna hodnota pre bežný text.',
        preview: 'letterSpacing',
        sample: 'WebJET',
      },
      {
        token: '--wje-letter-spacing-wider',
        value: '0.025em',
        description: 'Vhodné pre tagy, microcopy a doplnkové labely.',
        preview: 'letterSpacing',
        sample: 'WEBJET',
      },
      {
        token: '--wje-letter-spacing-widest',
        value: '0.05em',
        description: 'Najvoľnejší rozostup pre menšie uppercase labely.',
        preview: 'letterSpacing',
        sample: 'WEBJET',
      },
    ],
  },
];

const colorGroups: TokenGroup[] = [
  {
    title: 'Povrchy a text',
    description: 'Základné tokeny pre pozadie, text a linky medzi komponentmi.',
    tokens: [
      {
        token: '--wje-background',
        value: 'var(--wje-color-contrast-0)',
        darkValue: 'var(--wje-color-contrast-2)',
        previewValue: 'hsla(0, 0%, 100%, 1)',
        darkPreviewValue: 'hsla(0, 0%, 0%, 1)',
        description: 'Primárne pozadie aplikácie alebo kontajnera.',
        preview: 'color',
        colorRole: 'fill',
      },
      {
        token: '--wje-color',
        value: 'hsl(0, 0%, 29%)',
        darkValue: 'var(--wje-color-contrast-11)',
        previewValue: 'hsl(0, 0%, 29%)',
        darkPreviewValue: 'hsla(0, 0%, 100%, 1)',
        description: 'Predvolená farba textu a ikon.',
        preview: 'color',
        colorRole: 'text',
      },
      {
        token: '--wje-border-color',
        value: 'var(--wje-color-contrast-3)',
        darkValue: 'var(--wje-color-contrast-4)',
        previewValue: 'hsla(240, 6%, 90%, 1)',
        darkPreviewValue: 'hsla(240, 5%, 41%, 1)',
        description: 'Štandardný okraj pre inputs, cards a separátory.',
        preview: 'color',
        colorRole: 'border',
      },
      {
        token: '--wje-color-menu',
        value: 'hsl(220, 15%, 15%)',
        previewValue: 'hsl(220, 15%, 15%)',
        description: 'Tmavý povrch pre navigáciu a silné kontrastné plochy.',
        preview: 'color',
        colorRole: 'fill',
      },
      {
        token: '--wje-color-contrast',
        value: 'hsl(0, 0%, 95%)',
        darkValue: 'hsl(210, 11%, 15%)',
        previewValue: 'hsl(0, 0%, 95%)',
        darkPreviewValue: 'hsl(210, 11%, 15%)',
        description: 'Doplnkový kontrastný povrch proti základnému textu alebo menu.',
        preview: 'color',
        colorRole: 'fill',
      },
    ],
  },
  {
    title: 'Sémantické farby',
    description: 'Alias tokeny, ktoré používajú komponenty pri atribúte `color`.',
    tokens: [
      {
        token: '--wje-color-primary',
        value: 'var(--wje-color-primary-11)',
        darkValue: 'var(--wje-color-primary-1)',
        previewValue: 'hsla(254, 59%, 35%, 1)',
        darkPreviewValue: 'hsla(254, 50%, 21%, 1)',
        description: 'Hlavná brand farba pre CTA, akcenty a interaktívne stavy.',
        preview: 'color',
        colorRole: 'fill',
      },
      {
        token: '--wje-color-complete',
        value: 'var(--wje-color-complete-11)',
        darkValue: 'var(--wje-color-complete-1)',
        previewValue: 'hsla(211, 100%, 28%, 1)',
        darkPreviewValue: 'hsla(211, 91%, 16%, 1)',
        description: 'Sekundárna výrazná modrá pre doplnkové akcie a vizualizácie.',
        preview: 'color',
        colorRole: 'fill',
      },
      {
        token: '--wje-color-success',
        value: 'var(--wje-color-success-11)',
        darkValue: 'var(--wje-color-success-1)',
        previewValue: 'hsla(158, 93%, 23%, 1)',
        darkPreviewValue: 'hsla(158, 93%, 13%, 1)',
        description: 'Pozitívne stavy, potvrdenia a úspešné výsledky.',
        preview: 'color',
        colorRole: 'fill',
      },
      {
        token: '--wje-color-warning',
        value: 'var(--wje-color-warning-11)',
        darkValue: 'var(--wje-color-warning-1)',
        previewValue: 'hsla(47, 75%, 38%, 1)',
        darkPreviewValue: 'hsla(47, 75%, 19%, 1)',
        description: 'Upozornenia a mäkšie negatívne stavy s vyššou viditeľnosťou.',
        preview: 'color',
        colorRole: 'fill',
      },
      {
        token: '--wje-color-danger',
        value: 'var(--wje-color-danger-11)',
        darkValue: 'var(--wje-color-danger-1)',
        previewValue: 'hsla(3, 81%, 31%, 1)',
        darkPreviewValue: 'hsla(3, 82%, 17%, 1)',
        description: 'Kritické chyby, deštruktívne akcie a rizikové upozornenia.',
        preview: 'color',
        colorRole: 'fill',
      },
      {
        token: '--wje-color-info',
        value: 'var(--wje-color-info-11)',
        darkValue: 'var(--wje-color-info-1)',
        previewValue: 'hsla(207, 36%, 16%, 1)',
        darkPreviewValue: 'hsla(207, 36%, 16%, 1)',
        description: 'Neutrálne informačné bloky a doplnkové kontextové UI.',
        preview: 'color',
        colorRole: 'fill',
      },
    ],
  },
];

const spacingGroup: TokenGroup = {
  id: 'space-scale',
  title: 'Spacing scale',
  description: 'Jemná modulárna mriežka pre paddingy, gapy a vertikálny rytmus.',
  tokens: [
    {
      token: '--wje-spacing-4x-small',
      value: '0.125rem',
      description: 'Mikro medzery medzi ikonou a textom.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-3x-small',
      value: '0.25rem',
      description: 'Tesné oddelenie inline prvkov.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-2x-small',
      value: '0.375rem',
      description: 'Kompaktné layouty a husté toolbary.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-x-small',
      value: '0.5rem',
      description: 'Malé vnútorné odsadenie a rozostup tagov.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-small',
      value: '0.75rem',
      description: 'Predvolený menší padding vo formulároch a kartách.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-medium',
      value: '1rem',
      description: 'Základná mriežka pre bežné rozloženie UI.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-large',
      value: '1.5rem',
      description: 'Sekčné odsadenie a pohodlný gap medzi blokmi.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-x-large',
      value: '2rem',
      description: 'Vzdušnejšie layouty a obsahové sekcie.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-2x-large',
      value: '2.5rem',
      description: 'Silnejší odstup medzi významnými obsahovými celkami.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-3x-large',
      value: '3rem',
      description: 'Hero sekcie a veľké card layouts.',
      preview: 'spacing',
    },
    {
      token: '--wje-spacing-4x-large',
      value: '4.5rem',
      description: 'Najväčší rytmický odsadený priestor.',
      preview: 'spacing',
    },
  ],
};

const borderGroups: TokenGroup[] = [
  {
    id: 'borders-style-width',
    title: 'Style a šírka',
    description: 'Globálne border tokeny, ktoré používajú inputs, menu, dialógy aj layout separátory.',
    tokens: [
      {
        token: '--wje-border-style',
        value: 'solid',
        description: 'Predvolený štýl okraja v celom systéme.',
        preview: 'borderStyle',
      },
      {
        token: '--wje-border-width',
        value: '1px',
        description: 'Základná hrúbka okrajov pre komponenty a oddeľovače.',
        preview: 'borderWidth',
      },
    ],
  },
];

const radiusGroup: TokenGroup = {
  id: 'border-radius',
  title: 'Border radius',
  description: 'Od jemne zaoblených rohov až po fully rounded komponenty.',
  tokens: [
    {
      token: '--wje-border-radius-small',
      value: '0.125rem',
      description: 'Subtílne zaoblenie pri kompaktných prvkoch.',
      preview: 'radius',
    },
    {
      token: '--wje-border-radius-medium',
      value: '0.25rem',
      description: 'Bezpečný default pre inputs a menšie karty.',
      preview: 'radius',
    },
    {
      token: '--wje-border-radius-large',
      value: '0.5rem',
      description: 'Viditeľnejšie zaoblenie pri tlačidlách a paneloch.',
      preview: 'radius',
    },
    {
      token: '--wje-border-radius-x-large',
      value: '0.75rem',
      description: 'Vzdušnejšie bloky a moderné surfaces.',
      preview: 'radius',
    },
    {
      token: '--wje-border-radius-2x-large',
      value: '1rem',
      description: 'Hero cards, dialógy a výraznejšie kontejnery.',
      preview: 'radius',
    },
    {
      token: '--wje-border-radius-circle',
      value: '50%',
      description: 'Kruhové avatary, ikony a bullet prvky.',
      preview: 'radius',
    },
    {
      token: '--wje-border-radius-pill',
      value: '50rem',
      description: 'Plne zaoblené chips, toggles a segmented controls.',
      preview: 'radius',
    },
  ],
};

const shadowGroup: TokenGroup = {
  id: 'shadows-scale',
  title: 'Shadow scale',
  description: 'Stupnica tieňov pre jemnú hĺbku, floating menu aj výraznejšie plávajúce surfaces.',
  tokens: [
    {
      token: '--wje-shadow-small',
      value: '0 1px 2px rgba(0, 0, 0, 0.05)',
      description: 'Najjemnejší tieň pre drobné oddelenie od pozadia.',
      preview: 'shadow',
    },
    {
      token: '--wje-shadow-medium',
      value: '2px 2px 11px 0px hsla(0, 0%, 0%, 0.08)',
      description: 'Predvolená elevácia pre menšie plávajúce vrstvy a menu.',
      preview: 'shadow',
    },
    {
      token: '--wje-shadow-large',
      value: '0 4px 8px rgba(0, 0, 0, 0.1)',
      description: 'Výraznejší tieň pre karty a zvýraznené bloky.',
      preview: 'shadow',
    },
    {
      token: '--wje-shadow-x-large',
      value: '0 8px 16px rgba(0, 0, 0, 0.1)',
      description: 'Silnejšia elevácia pre dialógy, pickery a floating panely.',
      preview: 'shadow',
    },
    {
      token: '--wje-shadow-2x-large',
      value: '0 16px 32px rgba(0, 0, 0, 0.1)',
      description: 'Najvýraznejší systémový tieň pre veľké prekryvné vrstvy.',
      preview: 'shadow',
    },
  ],
};

const transitionGroup: TokenGroup = {
  id: 'transitions-scale',
  title: 'Transition',
  description: 'Tri základné rýchlosti pre hovorivejšie, ale stále svižné UI.',
  tokens: [
    {
      token: '--wje-transition-fast',
      value: '0.2s ease-in-out',
      description: 'Hover a focus feedback bez zdržania.',
      preview: 'transition',
    },
    {
      token: '--wje-transition-medium',
      value: '0.4s ease-in-out',
      description: 'Vyvážené pre expanzie, dropdowny a panelové zmeny.',
      preview: 'transition',
    },
    {
      token: '--wje-transition-slow',
      value: '0.6s ease-in-out',
      description: 'Najpomalší timing pre väčšie, nápadnejšie presuny.',
      preview: 'transition',
    },
  ],
};

const colorScales: ColorScale[] = [
  {
    name: 'Primary',
    prefix: '--wje-color-primary',
    description: 'Brand a primárne CTA.',
    steps: [
      'hsla(261, 70%, 96%, 1)',
      'hsla(260, 66%, 92%, 1)',
      'hsla(260, 64%, 88%, 1)',
      'hsla(260, 61%, 84%, 1)',
      'hsla(260, 63%, 80%, 1)',
      'hsla(259, 61%, 76%, 1)',
      'hsla(258, 61%, 72%, 1)',
      'hsla(257, 61%, 68%, 1)',
      'hsla(254, 67%, 62%, 1)',
      'hsla(254, 59%, 45%, 1)',
      'hsla(254, 59%, 35%, 1)',
    ],
    darkSteps: [
      'hsla(254, 50%, 21%, 1)',
      'hsla(254, 52%, 24%, 1)',
      'hsla(254, 52%, 35%, 1)',
      'hsla(254, 54%, 39%, 1)',
      'hsla(254, 54%, 47%, 1)',
      'hsla(254, 54%, 53%, 1)',
      'hsla(254, 54%, 57%, 1)',
      'hsla(254, 68%, 66%, 1)',
      'hsla(254, 88%, 78%, 1)',
      'hsla(254, 70%, 81%, 1)',
      'hsla(254, 69%, 88%, 1)',
    ],
  },
  {
    name: 'Complete',
    prefix: '--wje-color-complete',
    description: 'Silná sekundárna modrá.',
    steps: [
      'hsla(233, 90%, 96%, 1)',
      'hsla(229, 89%, 93%, 1)',
      'hsla(229, 86%, 89%, 1)',
      'hsla(229, 86%, 86%, 1)',
      'hsla(228, 85%, 82%, 1)',
      'hsla(226, 82%, 78%, 1)',
      'hsla(225, 83%, 74%, 1)',
      'hsla(223, 83%, 70%, 1)',
      'hsla(211, 100%, 60%, 1)',
      'hsla(211, 100%, 45%, 1)',
      'hsla(211, 100%, 28%, 1)',
    ],
    darkSteps: [
      'hsla(211, 91%, 16%, 1)',
      'hsla(211, 91%, 23%, 1)',
      'hsla(211, 91%, 31%, 1)',
      'hsla(211, 93%, 35%, 1)',
      'hsla(211, 93%, 39%, 1)',
      'hsla(211, 93%, 44%, 1)',
      'hsla(211, 93%, 49%, 1)',
      'hsla(211, 93%, 55%, 1)',
      'hsla(211, 100%, 75%, 1)',
      'hsla(211, 100%, 81%, 1)',
      'hsla(211, 93%, 85%, 1)',
    ],
  },
  {
    name: 'Success',
    prefix: '--wje-color-success',
    description: 'Pozitívne stavy a potvrdenia.',
    steps: [
      'hsla(147, 44%, 95%, 1)',
      'hsla(149, 41%, 90%, 1)',
      'hsla(149, 40%, 85%, 1)',
      'hsla(150, 41%, 80%, 1)',
      'hsla(149, 42%, 75%, 1)',
      'hsla(150, 41%, 70%, 1)',
      'hsla(151, 42%, 65%, 1)',
      'hsla(152, 42%, 59%, 1)',
      'hsla(158, 67%, 45%, 1)',
      'hsla(158, 74%, 30%, 1)',
      'hsla(158, 93%, 23%, 1)',
    ],
    darkSteps: [
      'hsla(158, 93%, 13%, 1)',
      'hsla(158, 94%, 16%, 1)',
      'hsla(158, 95%, 19%, 1)',
      'hsla(158, 96%, 22%, 1)',
      'hsla(158, 96%, 24%, 1)',
      'hsla(158, 95%, 27%, 1)',
      'hsla(158, 96%, 31%, 1)',
      'hsla(158, 96%, 35%, 1)',
      'hsla(158, 86%, 48%, 1)',
      'hsla(158, 78%, 62%, 1)',
      'hsla(158, 80%, 75%, 1)',
    ],
  },
  {
    name: 'Warning',
    prefix: '--wje-color-warning',
    description: 'Upozornenia a mäkké rizikové signály.',
    steps: [
      'hsla(45, 100%, 96%, 1)',
      'hsla(47, 100%, 93%, 1)',
      'hsla(46, 100%, 90%, 1)',
      'hsla(46, 100%, 87%, 1)',
      'hsla(46, 100%, 84%, 1)',
      'hsla(46, 100%, 81%, 1)',
      'hsla(46, 100%, 77%, 1)',
      'hsla(47, 100%, 74%, 1)',
      'hsla(47, 100%, 67%, 1)',
      'hsla(47, 100%, 53%, 1)',
      'hsla(47, 75%, 38%, 1)',
    ],
    darkSteps: [
      'hsla(47, 75%, 19%, 1)',
      'hsla(47, 75%, 23%, 1)',
      'hsla(47, 75%, 27%, 1)',
      'hsla(47, 74%, 31%, 1)',
      'hsla(47, 78%, 37%, 1)',
      'hsla(47, 78%, 41%, 1)',
      'hsla(47, 78%, 45%, 1)',
      'hsla(47, 80%, 52%, 1)',
      'hsla(47, 80%, 67%, 1)',
      'hsla(47, 90%, 74%, 1)',
      'hsla(47, 90%, 80%, 1)',
    ],
  },
  {
    name: 'Danger',
    prefix: '--wje-color-danger',
    description: 'Chyby, mazanie a kritické stavy.',
    steps: [
      'hsla(9, 100%, 96%, 1)',
      'hsla(12, 100%, 91%, 1)',
      'hsla(11, 94%, 87%, 1)',
      'hsla(10, 91%, 83%, 1)',
      'hsla(9, 87%, 79%, 1)',
      'hsla(10, 82%, 74%, 1)',
      'hsla(8, 80%, 70%, 1)',
      'hsla(8, 77%, 65%, 1)',
      'hsla(3, 78%, 59%, 1)',
      'hsla(3, 68%, 41%, 1)',
      'hsla(3, 81%, 31%, 1)',
    ],
    darkSteps: [
      'hsla(3, 82%, 17%, 1)',
      'hsla(3, 82%, 19%, 1)',
      'hsla(3, 83%, 28%, 1)',
      'hsla(3, 83%, 32%, 1)',
      'hsla(3, 83%, 36%, 1)',
      'hsla(3, 83%, 40%, 1)',
      'hsla(3, 82%, 44%, 1)',
      'hsla(3, 72%, 58%, 1)',
      'hsla(3, 80%, 70%, 1)',
      'hsla(3, 80%, 76%, 1)',
      'hsla(4, 80%, 82%, 1)',
    ],
  },
  {
    name: 'Info',
    prefix: '--wje-color-info',
    description: 'Neutrálna informačná škála.',
    steps: [
      'hsla(210, 5%, 92%, 1)',
      'hsla(204, 6%, 85%, 1)',
      'hsla(210, 7%, 78%, 1)',
      'hsla(203, 5%, 71%, 1)',
      'hsla(213, 6%, 65%, 1)',
      'hsla(203, 6%, 58%, 1)',
      'hsla(208, 6%, 52%, 1)',
      'hsla(210, 7%, 45%, 1)',
      'hsla(207, 20%, 35%, 1)',
      'hsla(207, 16%, 27%, 1)',
      'hsla(207, 36%, 16%, 1)',
    ],
    darkSteps: [
      'hsla(207, 36%, 16%, 1)',
      'hsla(207, 16%, 27%, 1)',
      'hsla(207, 20%, 35%, 1)',
      'hsla(210, 7%, 45%, 1)',
      'hsla(208, 6%, 55%, 1)',
      'hsla(203, 6%, 62%, 1)',
      'hsla(213, 6%, 69%, 1)',
      'hsla(203, 5%, 71%, 1)',
      'hsla(210, 7%, 78%, 1)',
      'hsla(204, 6%, 85%, 1)',
      'hsla(210, 5%, 92%, 1)',
    ],
  },
  {
    name: 'Contrast',
    prefix: '--wje-color-contrast',
    description: 'Neutrálna kontrastná škála pre texty a surfaces.',
    steps: [
      'hsla(0, 0%, 100%, 1)',
      'hsla(0, 0%, 98%, 1)',
      'hsla(240, 5%, 96%, 1)',
      'hsla(240, 6%, 90%, 1)',
      'hsla(240, 5%, 84%, 1)',
      'hsla(240, 5%, 65%, 1)',
      'hsla(240, 4%, 46%, 1)',
      'hsla(240, 5%, 34%, 1)',
      'hsla(240, 5%, 26%, 1)',
      'hsla(240, 6%, 10%, 1)',
      'hsla(240, 7%, 8%, 1)',
    ],
    darkSteps: [
      'hsla(240, 3%, 13%, 1)',
      'hsla(240, 6%, 10%, 1)',
      'hsla(0, 0%, 0%, 1)',
      'hsla(240, 5%, 30%, 1)',
      'hsla(240, 5%, 41%, 1)',
      'hsla(240, 4%, 58%, 1)',
      'hsla(240, 5%, 75%, 1)',
      'hsla(240, 5%, 84%, 1)',
      'hsla(240, 6%, 90%, 1)',
      'hsla(240, 5%, 96%, 1)',
      'hsla(0, 0%, 98%, 1)',
    ],
  },
];

const sectionLinks = [
  {
    id: 'borders',
    eyebrow: 'Borders',
    title: 'Okraje',
    description: 'Style, width a radius tokeny.',
  },
  {
    id: 'color',
    eyebrow: 'Color',
    title: 'Farby',
    description: 'Povrchy, sémantické aliasy a tónové škály.',
  },
  {
    id: 'shadows',
    eyebrow: 'Shadows',
    title: 'Tiene',
    description: 'Elevácia od jemných po výrazné plávajúce vrstvy.',
  },
  {
    id: 'space',
    eyebrow: 'Space',
    title: 'Rozostupy',
    description: 'Modulárna mierka pre gapy, paddingy a rytmus.',
  },
  {
    id: 'transition',
    eyebrow: 'Transitions',
    title: 'Prechody',
    description: 'Tri základné timing tokeny pre plynulé interakcie.',
  },
  {
    id: 'typography',
    eyebrow: 'Typography',
    title: 'Typografia',
    description: 'Font family, scale, weight, line height a letter spacing.',
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
                  <td>{renderPreview(token, previewValue)}</td>
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
        {steps.map((value, index) => (
          <div key={`${scale.prefix}-${index + 1}`} className={styles.scaleStep}>
            <div className={styles.scaleSwatch} style={{ backgroundColor: value }} />
            <div className={styles.scaleTokenLabel}>
              <code>{`${scale.prefix}-${index + 1}`}</code>
              <span>{formatValue(value)}</span>
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
        {sectionLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className={styles.sectionNavLink}>
            <span>{link.eyebrow}</span>
            <strong>{link.title}</strong>
            <small>{link.description}</small>
          </a>
        ))}
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
              Každá sémantická farba má 11 krokov. Svetlejšie tóny slúžia pre fill surfaces a hover states, tmavšie
              pre text, outline a výrazné akcenty.
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
            Shadow tokeny dávajú komponentom hĺbku bez toho, aby každá časť UI používala vlastný box-shadow. Vhodné
            sú pre menu, tooltips, karty aj väčšie overlay vrstvy.
          </p>
        </div>

        <TokenTable {...shadowGroup} />
      </section>

      <section id="space" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Space</span>
          <h2>Rozostupy</h2>
          <p>
            Modulárna spacing škála drží komponenty aj layout v jednom rytme. Začni `medium` ako základom a smerom
            hore alebo dole škáluj podľa hustoty rozhrania.
          </p>
        </div>

        <TokenTable {...spacingGroup} />
      </section>

      <section id="transition" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Transitions</span>
          <h2>Prechody</h2>
          <p>
            Krátke transition tokeny držia interakcie svižné a konzistentné. Hover na ukážku v tabuľke ti ukáže, ako
            sa mení tempo pohybu medzi jednotlivými presetmi.
          </p>
        </div>

        <TokenTable {...transitionGroup} />
      </section>

      <section id="typography" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Typography</span>
          <h2>Typografia</h2>
          <p>
            Typografické tokeny definujú, ako čitateľne a konzistentne pôsobí celé UI. Zahŕňajú font family,
            veľkostnú škálu, hmotnosti, line height aj letter spacing.
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
