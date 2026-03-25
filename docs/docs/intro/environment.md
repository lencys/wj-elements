---
title: Konfigurácia prostredia
---

<head>
  <title>Konfigurácia prostredia | Požiadavky pre prácu s WebJET Elements</title>
  <meta
    name="description"
    content="Ak chcete používať WebJET Elements, pripravte si prostredie s Node.js, npm, editorom kódu a moderným prehliadačom s podporou ES modulov."
  />
</head>

Na prácu s WebJET Elements potrebujete najmä prostredie s nainštalovaným **Node.js** a **npm**. Keďže knižnica používa **Custom Elements**, **Shadow DOM** a **ES moduly**, pri vývoji aj testovaní sa oplatí používať moderný prehliadač.

## Čo budete potrebovať

- **Node.js 18 alebo novší** – na inštaláciu balíka a lokálny build projektu.
- **npm** – súčasť Node.js, používa sa na správu závislostí.
- **Editor kódu** – napríklad [Visual Studio Code](https://code.visualstudio.com/) alebo [WebStorm](https://www.jetbrains.com/webstorm/).
- **Moderný prehliadač** – napríklad Chrome, Edge, Firefox alebo Safari.

## Terminál

Pri práci s WebJET Elements budete používať terminál na inštaláciu balíka, spúšťanie buildu alebo lokálneho vývojového servera. Nemusíte poznať pokročilé shell skriptovanie, ale základná orientácia v príkazovom riadku je veľmi užitočná.

Na Windows môžete použiť **Príkazový riadok**, **PowerShell** alebo **Windows Terminal**. Na macOS a Linuxe postačí vstavaný terminál.

## Node & npm

Odporúčaná minimálna verzia Node.js je **18+**. Aktuálne nainštalované verzie si overíte príkazmi nižšie.

Podrobnosti k inštalácii Node.js nájdete na stránke [nodejs.org](https://nodejs.org).

```shell
$ node --version
$ npm --version
```

Ak používate firemné proxy, interný registry alebo monorepo, odporúčame si vopred overiť aj nastavenie `.npmrc`.

## Odporúčania

- Pri vývoji aplikácie odporúčame používať verzionovací systém [Git](https://git-scm.com/).
- Ak používate Vite, webpack alebo iný bundler, uistite sa, že projekt podporuje načítanie ES modulov.
- Ak plánujete používať assety knižnice (napríklad ikony), pripravte si v projekte aj spôsob servovania statických súborov z balíka `wj-elements`.
