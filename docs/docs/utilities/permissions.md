# Oprávnenia

Webjet Elements poskytuje systém na správu oprávnení, ktorý umožňuje zobrazovať alebo skrývať komponenty na základe definovaných oprávnení používateľa.

## API pre oprávnenia

Trieda `Permissions` poskytuje rozhranie na správu oprávnení v aplikácii.


## Vlastnosti


| Názov                         | Popis                                                       |
| ----------------------------- | ----------------------------------------------------------- |
| `permissionKey`          | Nastavuje alebo získava kľúč používaný pre uloženie oprávnení v localStorage (predvolená hodnota: 'permissions').                    |
| `permissions`         | Nastavuje alebo získava pole oprávnení. Oprávnenia sú uložené v localStorage.                  |

## Metódy


| Názov                                | Parametre             | Návratová hodnota        | Popis                                                                                                  |
|--------------------------------------|--------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------|
| `includesKey(key)`                   | key - reťazec reprezentujúci oprávnenie | boolean | Kontroluje, či je konkrétne oprávnenie zahrnuté v pole oprávnení. |
| `isPermissionFulfilled(permissions)` | permissions - pole reťazcov reprezentujúcich oprávnenia | boolean | Kontroluje, či je splnené aspoň jedno z oprávnení v poskytnutom poli. |

## Použitie

### Nastavenie oprávnení

Oprávnenia môžete nastaviť nasledovne:

```js
import { Permissions } from 'wj-elements';

// Nastaví pole oprávnení
Permissions.permissions = ['admin', 'editor', 'viewer'];

// Zmení kľúč používaný v localStorage (voliteľné)
Permissions.permissionKey = 'mojeOpravnenia';
```

### Kontrola oprávnení

```js
// Kontrola, či má používateľ konkrétne oprávnenie
const maAdminOpravnenie = Permissions.includesKey('admin');

// Kontrola, či má používateľ aspoň jedno z oprávnení
const maOpravnenie = Permissions.isPermissionFulfilled(['admin', 'editor']);
```

### Príklad použitia v komponente

Komponenty môžu využívať atribúty súvisiace s oprávneniami:

```html
<!-- Štandardné tlačidlo bez obmedzení -->
<wje-button>Štandardné tlačidlo</wje-button>

<!-- Tlačidlo, ktoré vyžaduje oprávnenie "test" -->
<wje-button permission="test" permission-check>Vyžaduje oprávnenie</wje-button>

<!-- Tlačidlo, ktoré sa nezobrazí, ak používateľ nemá oprávnenie "test" -->
<wje-button permission="test" permission-check no-show>Skryté bez oprávnenia</wje-button>

<!-- Vždy skryté tlačidlo -->
<wje-button no-show>Skryté tlačidlo</wje-button>
```