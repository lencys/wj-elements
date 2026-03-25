# Oprávnenia

WebJET Elements obsahuje jednoduchý systém oprávnení, ktorý môžete použiť na podmienené zobrazenie alebo odstránenie komponentov z DOM-u podľa aktuálnych práv používateľa.

## Ako to funguje

Trieda `Permissions` ukladá zoznam oprávnení do `localStorage`. Základný element `WJElement` potom pri renderi vyhodnocuje atribúty `permission`, `permission-check` a `no-show`.

To znamená, že kontrola prebieha priamo v komponente a nepotrebujete kvôli nej dopisovať vlastnú podmienku v každom view.

## API pre oprávnenia

| Názov | Typ | Popis |
| --- | --- | --- |
| `permissionKey` | `string` | Kľúč použitý pre ukladanie oprávnení do `localStorage`. Predvolená hodnota je `'permissions'`. |
| `permissions` | `string[]` | Pole aktuálnych oprávnení používateľa. Pri zápise sa uloží do `localStorage`. |

## Metódy

| Názov | Parametre | Návratová hodnota | Popis |
| --- | --- | --- | --- |
| `includesKey(key)` | `key: string` | `boolean` | Overí, či používateľ má konkrétne oprávnenie. |
| `isPermissionFulfilled(permissions)` | `permissions: string[]` | `boolean` | Vráti `true`, ak je splnené aspoň jedno oprávnenie z odovzdaného poľa. |

## Nastavenie oprávnení

```js
import { Permissions } from 'wj-elements';

// Nastaví pole oprávnení aktuálneho používateľa
Permissions.permissions = ['admin', 'editor', 'viewer'];

// Voliteľne zmení kľúč v localStorage
Permissions.permissionKey = 'mojeOpravnenia';
```

Ak potrebujete oprávnenia zmazať, jednoducho nastavte prázdne pole:

```js
Permissions.permissions = [];
```

## Kontrola oprávnení v JavaScripte

```js
const maAdminOpravnenie = Permissions.includesKey('admin');
const maAspoňJednoOpravnenie = Permissions.isPermissionFulfilled(['admin', 'editor']);
```

## Kontrola oprávnení v komponente

Komponenty môžu používať tri súvisiace atribúty:

- `permission` – zoznam požadovaných oprávnení oddelený čiarkou,
- `permission-check` – zapne kontrolu oprávnení pri renderi,
- `no-show` – komponent sa pri renderi odstráni z DOM-u bez ohľadu na oprávnenia.

```html
<!-- Štandardné tlačidlo bez obmedzení -->
<wje-button>Štandardné tlačidlo</wje-button>

<!-- Bez permission-check sa atribút permission sám o sebe nevyhodnocuje -->
<wje-button permission="admin">Len s atribútom permission</wje-button>

<!-- Zobrazí sa, ak má používateľ oprávnenie admin alebo editor -->
<wje-button permission="admin,editor" permission-check>
  Vyžaduje oprávnenie
</wje-button>

<!-- Ak oprávnenie chýba, prvok sa vôbec nevykreslí -->
<wje-button permission="admin" permission-check no-show>
  Skryté bez oprávnenia
</wje-button>
```

## Dôležité poznámky

- Hodnota atribútu `permission` sa v komponente rozdelí podľa čiarky, preto používajte formát napríklad `permission="admin,editor"`.
- Metóda `isPermissionFulfilled()` používa logiku „aspoň jedno oprávnenie“.
- Ak chcete meniť správanie globálne, upravte `Permissions.permissionKey` ešte pred prvým čítaním oprávnení.
