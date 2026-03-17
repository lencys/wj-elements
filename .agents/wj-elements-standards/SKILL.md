---
name: wj-elements-standards
description: Standards for creating, editing, testing, documenting, and refactoring components in the wj-elements project. Use when changing components, events, attributes, properties, slots, shadow parts, demos, or public API.
---

## When to use this

Use this skill when creating, editing, fixing, testing, documenting, or refactoring components in the `wj-elements` project. Use it also when changing events, attributes, properties, slots, shadow parts, demos, or public API.

# Frontend coding standards pre `wj-elements`

Pri vytváraní, úprave alebo refaktore kódu v projekte `wj-elements` sa riaď týmito pravidlami.

---

## 1. Štýl kódu

- Píš kód vo **vanilla JavaScript**, v rovnakom štýle ako je písaný existujúci projekt.
- Zachovávaj existujúce patterns, naming a štruktúru kódu.
- Nepoužívaj frameworkové patterns, iný štýl zápisu ani zbytočné abstrakcie, ak nie sú už v projekte zavedené.
- Pri úprave kódu sa najprv prispôsob existujúcemu štýlu konkrétneho súboru a komponentu.

Príklad preferovaného štýlu:

```js
let arrow = document.createElement('wje-icon');
arrow.setAttribute('name', 'chevron-down');
arrow.setAttribute('slot', 'arrow');
```

## 2. Funkcie vracajúce DOM elementy
- Ak funkcia skladá viacero elementov a jej výsledkom je návrat DOM štruktúry, preferuj použitie DocumentFragment.
- Pri menších a jednoduchších funkciách je v poriadku vracať priamo konkrétny element.
- Pri appendovaní používaj prehľadný zápis cez .append(...).

Príklad s fragmentom:

```js
let fragment = new DocumentFragment();

// ...

return fragment;
```

```js
let section = document.createElement('wja-setting-section');

// ...

section.append(title, content);

return section;
```

## 2.1 Ukladanie referencií na elementy

- Ak sa element vytvorený v jednej metóde bude používať aj v ďalších metódach, ulož si naň priamu referenciu do inštancie komponentu.
- Preferovaný zápis je uložiť referenciu pred `return`, napríklad `this.arrow = arrow`.
- V ďalších metódach potom používaj priamo uloženú referenciu, napríklad `this.arrow`.
- Nepoužívaj zbytočné dohľadávanie už známeho elementu cez `querySelector`, ak si vieš referenciu uložiť pri vytvorení.

Preferovaný štýl:

```js
let arrow = document.createElement('wje-icon');
arrow.setAttribute('name', 'chevron-down');
arrow.setAttribute('slot', 'arrow');
arrow.classList.add('arrow');

this.arrow = arrow;

return arrow;
```

Použitie v ďalšej metóde:

```js
this.arrow
```

Nevhodný štýl:

```js
this.arrow.querySelector('.arrow')
```

- Toto pravidlo platí najmä vtedy, keď ide o ten istý element, ktorý bol vytvorený v rámci komponentu a je známe, že sa s ním bude ďalej pracovať.
- Preferuj priamu referenciu kvôli čitateľnosti, jednoduchšiemu kódu a menšiemu počtu zbytočných DOM dotazov.


## 3. JSDoc
- Nad každou funkciou musí byť vždy validný JSDoc.
- JSDoc musí zodpovedať reálnemu správaniu funkcie.
- Používaj správne @param, @returns, prípadne @throws, ak sú relevantné.
- Nepíš generické, nepresné alebo prázdne komentáre.
- Ak sa zmení správanie funkcie, musí sa upraviť aj JSDoc.

⸻

## 4. Unit testy
- Každú novú funkcionalitu, opravu alebo refaktor sa snaž pokryť unit testami.
- Over najmä:
- očakávané správanie,
- hraničné prípady,
- regresie,
- eventy,
- atribúty,
- properties,
- rendering,
- interakcie.
- Ak niečo nie je realistické testovať unit testom, explicitne uveď dôvod.

⸻

## 5. Dokumentácia komponentu
- Pri každej úprave komponentu vždy prever, či je dokumentácia kompletná a aktuálna.
- Dokumentácia v adresári /Users/londrejcek/IdeaProjects/wj-elements/docs musí byť aktualizovaná v slovenskom aj anglickom jazyku.
- Skontroluj a doplň najmä:
- popis komponentu,
- všetky funkcionality,
- sloty,
- CSS custom properties,
- properties,
- atribúty,
- shadow parts,
- eventy.

⸻

## 6. Demo ukážky
- Ak pribudne nová funkcionalita, atribút alebo nové správanie komponentu, vytvor alebo aktualizuj ukážku v /Users/londrejcek/IdeaProjects/wj-elements/demo/components.
  - Demo má obsahovať:
  - zrozumiteľný popis,
  - praktickú ukážku,
  - snippet kódu.
- Demo nemá byť len technická ukážka, ale má ukazovať reálne použitie komponentu.

⸻

## 7. Názvy funkcií a premenných
- Názvy funkcií a premenných majú byť krátke, výstižné a čitateľné.
- Vyhýbaj sa zbytočne dlhým viacslovným názvom.
- Preferuj stručné pomenovania, ktoré stále zachovávajú význam.

   Nevhodné:
   
   ```js
   listOfUserNamesStoredInStringArray
   ```
   Vhodné:
   ```js
   listOfUserNamesStoredInStringArray
   ```
- Nepoužívaj komplikované alebo zbytočne popisné názvy, ak sa dajú nahradiť kratším a jasným pomenovaním.
- Názov má byť vecný a konzistentný so zvyškom projektu.

⸻

## 8. Konzistencia a minimálnosť zmien
- Pri refaktore nemen štýl celého súboru bez dôvodu.
- Rob len také zmeny, ktoré sú potrebné pre danú úlohu.
- Zachovaj konzistentný naming, odsadenie a štruktúru podľa existujúceho kódu.
- Nepridávaj zbytočné helpery, utility ani abstrakcie, ak neprinášajú jasnú hodnotu.
- Nepremenúvaj existujúce funkcie, premenné, atribúty ani súbory, ak to nie je nevyhnutné.

⸻

## 9. Eventy

### 9.1 Názvy eventov
- Eventy musia mať vždy názov v tvare:

   ```text
   nazov-komponentu:akcia
   ```

Najprv ide vždy celý názov komponentu, potom dvojbodka :, a následne názov akcie.
- Nepoužívaj tvary ako:
- button-click
- toggleButton
- userLoggedIn
- Správne príklady:
- wje-button:click
- wje-accordion:toggle
- wje-input:input
- wje-input:change

### 9.2 Dispatch eventov
- Eventy sa musia vytvárať a dispatchovať cez projektovú event metódu.
- Nepoužívaj natívne priame vypisovanie new CustomEvent(...) a dispatchEvent(...) priamo v implementácii, ak na to existuje interný pattern alebo helper metóda.
- Vždy sa drž existujúceho spôsobu emitovania eventov v projekte.
  Nevhodný štýl:
```js
const userLoggedInEvent = new CustomEvent('userLoggedIn', {
   detail: {
      userId: 123,
      userName: 'John'
   },
   bubbles: true
});

loginButton.dispatchEvent(userLoggedInEvent);
```

Namiesto toho použi internú event metódu alebo existujúci projektový pattern pre dispatch eventov.
- Každý nový event musí byť:
- pomenovaný podľa pravidla komponent:akcia,
- zdokumentovaný,
- otestovaný.

### 9.3 Dokumentácia eventov

Pri každom evente musí byť v dokumentácii uvedené:
- presný názov eventu,
- kedy sa dispatchuje,
- čo obsahuje detail,
- či bubbles,
- či je composed,
- príklad použitia.

⸻

## 10. API zmeny
- Ak zmena ovplyvňuje verejné API komponentu, treba najprv posúdiť spätnú kompatibilitu.
- Ak sa mení API, je potrebné sa najprv opýtať developera, či takúto zmenu chce.
- Až po potvrdení je možné takúto zmenu zrealizovať.
- To platí najmä pre zmeny v:
- názvoch eventov,
- atribútoch,
- properties,
- slotoch,
- verejných metódach,
- shadow parts,
- správaní komponentu z pohľadu používateľa.

⸻

## 11. Atribúty, properties a public API
- Pri každej novej funkcionalite over:
- či má byť riešená cez atribút,
- property,
- alebo oboje.
- Ak komponent podporuje atribút aj property, musia byť obe vrstvy:
- korektne implementované,
- otestované,
- zdokumentované.
- Pri návrhu sa riaď existujúcou architektúrou projektu a konzistenciou s podobnými komponentmi.

⸻

## 12. DOM a performance
- Pri práci s DOM minimalizuj zbytočné vytváranie elementov a opakované manipulácie.
- Ak sa skladá viac elementov naraz, preferuj postup, ktorý je prehľadný a efektívny.
- Neoptimalizuj predčasne, ale zároveň nepridávaj zbytočné operácie bez dôvodu.
- Uprednostni čitateľný a konzistentný kód pred komplikovanými mikrooptimalizáciami.

⸻

## 13. Výstup pri implementácii

Pri každej zmene myslí na všetky súvisiace časti:
- implementácia,
- unit testy,
- dokumentácia SK,
- dokumentácia EN,
- demo ukážka.

Ak niektorá z týchto častí nie je potrebná, explicitne uveď prečo.

⸻

## 14. Checklist pri každej zmene

Pred odovzdaním zmeny si over:
- kód je napísaný vo vanilla JS a rešpektuje existujúci štýl projektu,
- funkcie vracajúce DOM používajú vhodný pattern (DocumentFragment alebo priamy element),
- - zdieľané elementy používané vo viacerých metódach sú uložené ako priame referencie na `this`, bez zbytočného dohľadávania cez `querySelector`,
- každá funkcia má validný JSDoc,
- funkcionalita je pokrytá unit testami, ak je to vhodné,
- dokumentácia je aktualizovaná v SK aj EN,
- sú doplnené všetky funkcionality, sloty, CSS vars, properties, atribúty, shadow parts a eventy,
- demo je doplnené, ak pribudla nová funkcionalita alebo atribút,
- názvy funkcií a premenných sú krátke a výstižné,
- eventy majú správny naming komponent:akcia,
- eventy sú emitované cez projektovú event metódu,
- pri API zmene bol najprv kontaktovaný developer.

⸻

## 15. Hlavný cieľ

Cieľom je, aby každý nový alebo upravený kód:
- zapadol do existujúceho projektu,
- bol čitateľný,
- bol konzistentný,
- mal testy,
- mal správnu dokumentáciu,
- mal ukážku v deme,
- nemenil public API bez potvrdenia developera.