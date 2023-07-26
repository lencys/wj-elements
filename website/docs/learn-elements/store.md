---
sidebar_position: 2
---

# Store

V aplikácii pre jednoduchší prístup k aplikáčným dátam používame triedu Store, ktorá slúži ako **source of
truth** pre dáta a zároveň poskytuje rozosielanie notifikácií o zmenách dát.

### Kedy použiť?

- chcem mať možnosť pristúpiť k dátam pomocou `storu` z ktorejkoľvek časti aplikácie.
- chcem počúvať na zmeny dát, a na základe nich robiť akcie, alebo vykreslovať aktuálne na obrazovke napr. Mám zobrazený
  detail používateľa, v modalnom okne zmením meno používateľa. Túto zmenu rozdistribuujem pomocou storu a pokiaľ počúvam
  na zmenu stavu, dokážem aktualizovať view na základe nových dát.
- chcem si uchovávať naštívené dáta, a pri opätovnom navštívení tej istej stránky nemusím vykonať request na dotiahnutie
  dát.

#### Premenné triedy Store:

| Názov premennej |            Prístupnosť             | Popis                                                                         |
|:---------------------------------------------:|:----------------------------------:|-------------------------------------------------------------------------------------------------------|
|                   `_state`                    |             `Privátna`             | Premenná, ktorá udržuje aktuálnu hodnotu stavu (`state`).                                             |
|                  `_reducer`                   |             `Privátna`             | Funkcia, ktorá hovorí o tom, akým spôsobom je stav (`state`) aktualizovaný.                           |
|                   `events`                    |             `Privátna`             | Premenná udržuje referenciu na všetkých subscriberov, ktorý majú byť pri zmene stavu (`state`) notifikovaní. |
|                   `status`                    |             `Privátna`             | Premenná, ktorá hovorí o aktuálnom stave Storu (`'resting', 'action',  'mutation' `)                  |

#### Metódy triedy Store:

|     Názov metódy      | Prístupnosť |    Parametre     | Popis                                                                                                |
|:---------------------:|:-----------:|:----------------:|:-----------------------------------------------------------------------------------------------------|
|      `dispatch`       |  `Verejná`  |     `action`     | Rozošle všetkých subscriberom notifikácie o zmene stavu.                                             |
|      `getState`       |  `Verejná`  |                  | Poskytuje *'read'* prístup ku permennej  `_state`                                                    |             `subscribe`              |                `Verejná`                 |         `eventName, callbackFn`         | Registrácia sa na počúvanie zmien stavu s názvom `eventName`. Vždy keď sa zmení stav s názvom `eventName` sa vykoná funkcia `callbackFn`.|           `mergeReducers`            |                `Privátna`                |      `stateValueName, newReducer`       | Funkcia, ktorá je využívaná pri metóde `define`, kedy je potrebné pre nový state s názvom `stateValueName` vytvoriť v reducery aktualizačnú funkciu.|               `define`               |                `Verejná`                 | `stateValueName, defaultValue, reducer` | Funkcia vytvorí v `_state` nový pomenovaný stav  s názvom `stateValueName`. Parameter `defaultValue` hovorí o tom aký typ premennej bude pod daným pomenovaným stavom. Sú dve možnosti, buď typu `Array` alebo `Object` (predvolená možnosť). Aktualizačnú funkciu (`reducer`) nie je nutné zadávať pokiaľ nám vyhovujú základné aktualizačné funkcie pre dané typy (`Array, Object`). Pre vlastnú funkcionalitu je možnosť si vytvoriť vlastnú aktualizačnú fuknciu pre nový pomenovaný stav (`stateValueName`). |
|    `refreshProxy`     | `Privátna`  |     `state`      | Funkcia je využívaná pri metóde `define`, a slúži na zadanie nového stavu (`state`) v Proxy objekte. |
| `createObjectReducer` | `Privátna`  | `stateValueName` | Funkcia vytvorí základný reducer pre stav typu objekt (`Object`).                                    |
| `createArrayReducer`  | `Privátna`  | `stateValueName` | Funkcia vytvorí základný reducer pre stav typu pole  (`Array`).                                      |


### Dôležité informácie

- Stav by sa nemal meniť na priamo napr cez príkaz `store._state = novy_state`. Vždy by sa mal meniť stav pomocou
  funkcie `dispatch` napr `store.dispatch(akcia)` - o parametry `akcia` je popísane nižšie.
- Aktualizovanie stavu je určené pomocou funkcie `reducer`. Táto funkcia má na vstupe dva parametre a to `state` (
  aktuálny stav, ktorý bude daný reducer aktualizovať) a `action` (Akcia, ktorá urči aktualizáciu stavu). `Reducer` musí
  vždy vracať novo vytvorený objekt, nikdy nie pozmenený pôvodný objekt.
- Akcia je objekt ktorý obsahuje premennú `type` (slúži ako stringový identifikátor), a `payload` (informácia s ktorou
  je aktualizovaný stav `state` )

#### Čo sa stane keď sa vykoná `store.dispatch(action)`?

1. Vykoná sa funkcia `_reducer` a parametre sú aktuálny stav a akcia.
2. Akcia môže vyzerať nasledovne:
```js
let action = {
    type: 'users/ADD',
    payload: {
        id: 1,
        name: 'Jožko'
        }
}
```
3. Aktuálny stav môže vyzerať nasledovne:
```js
let state = {
    users : [
        {
            id: 3,
            name: 'Ferko'
        }
    ]
}
```
4. Reducer môže vyzerať nasledovne:
```js
userReducer(state, action) {
    switch (action.type) {
        case `users/ADD`:
            return [
                ...state,
                action.payload
            ]
        case `users/UPDATE`:
            return [
                ...state.map(obj => {
                    if(obj.id == action.payload.id){
                        return action.payload
                    }
                    return obj
                })
            ]
        case `users/DELETE`:
            return [
                ...state.filter(obj => obj.id != action.payload.id)
            ]

        case `users/LOAD`:
            return [
                ...action.payload
            ]
        default:
            return state
    }
}

/** HLAVNÝ REDUCER **/
let storeReducer(state, action){
    return {
        users : userReducer(state.users, action),
        ...dalsie_stavy: ...dalsie_reducery
    }
}
```

Ked vykonáme `store.dispatch(action)`, prejdú sa všetky reducery a hladá sa taký, ktorý má zadefinovaný typ akcie, ktorú zadávame ako parameter. V tomto prípade vojdeme do `userReducera` a vykonáme case 'users/ADD`. Výsledný state vyzerá nasledovne:
```js
state = {
    users : [
        {
            id: 3,
            name: 'Ferko'
        },
        {
            id: 1,
            name: 'Jožko'
        }
    ]
}
```

### Preddefinované akcie

```js
const addAction = (stateValueName) => {
    return (payload2) => {
        return {
            type: `${stateValueName}/ADD`,
            payload: payload2
        }
    }
}

const updateAction = (stateValueName) => {
    return (payload2) => {
        return {
            type: `${stateValueName}/UPDATE`,
            payload: payload2
        }
    }
}

const deleteAction = (stateValueName) => {
    return (payload2) => {
        return {
            type: `${stateValueName}/DELETE`,
            payload: payload2
        }
    }
}

const loadAction = (stateValueName) => {
    return (payload2) => {
        return {
            type: `${stateValueName}/LOAD`,
            payload: payload2
        }
    }
}

const defaultStoreActions = {
    addAction,
    deleteAction,
    loadAction,
    updateAction
};

export {defaultStoreActions}

```

### Preddefinované reducery

Obsahujú základné typy akcií pre daný typ (`Object, Array`) aj s preddefinovaným správaním zmeny stavu (`state`).

##### Reducer pre objekty:

```js
let objectReducer = (state = {}, action) => {
    switch (action.type) {
        case `${stateValueName}/ADD`:
            return {
                ...action.payload
            }
        case `${stateValueName}/UPDATE`:
            return {
                ...action.payload
            }
        case `${stateValueName}/DELETE`:
            return {}
        default:
            return state
    }
}
```

##### Reducer pre polia

```js
let arrayReducer = (state = [], action) => {
    switch (action.type) {
        case `${stateValueName}/ADD`:
            return [
                ...state,
                action.payload
            ]
        case `${stateValueName}/UPDATE`:
            return [
                ...state.map(obj => {
                    if (obj.id == action.payload.id) {
                        return action.payload
                    }
                    return obj
                })
            ]
        case `${stateValueName}/DELETE`:
            return [
                ...state.filter(obj => obj.id != action.payload.id)
            ]

        case `${stateValueName}/LOAD`:
            return [
                ...action.payload
            ]
        default:
            return state
    }
}
```

### Príklady použitia

Zadefinovanie nového pomenovaného stavu:

```js
// vytvorenie state "inventories" typu Array s preddefinovaným Reducerom
store.define("inventories", []);

// vytvorenie state "loggedUser" typu Object s preddefinovaným Reducerom
store.define("loggedUser", {});

// vytvorenie state "customTask" typu Object s vlastným Reducerom, ktorý obsahuje tieź vlastné typy akcií
store.define("customTask", {}, (state, action) => {
    switch (action.type) {
        case `customTask/SET`:
            return {
                ...action.payload
            }
        case `customTask/CHANGE_NAME`:
            return {
                ...state
                name: action.payload
            }
        case `customTask/CHANGE_ESTIMATED_TIME`:
            return {
                ...state
                estimatedTime: action.payload
            }
        default:
            return state
    }
});
```

#### Pristúpenie k premennej stavu

```js 
// Prvý spôsob
store.getState().inventories;

// Druhý spôsob"
store.getState()['inventories'];
```

#### Možnosti vytvorenia rovnakej akcie rôznymi sposobmi

```js
// prvý spôsob 
let akcia = defaultStoreActions.addAction("inventories")(data);

// druhý spôsob 
let akcia2 = {
    type: 'inventories/ADD',
    payload: data
}
```

#### Zmena stavu

```js
store.dispatch(action);
```

Prihlásenie sa na počúvanie zmien pomenovaného stavu :

```js
let subscription = store.subscribe('inventories', () => {
    this.callBackFn()
});
```

Odhlásenie sa z počúvania zmien:

```js
subscription.unsubscribe();
```

### Obsluha storu pomocou `UniversalService`

Pripravili sme službu ktorá poskytuje predpripravené metódy pre správu storu. Služba si drží referenciu na vytvorený
store a prípadné zmeny rozdistribuje do aplikácie pomocou storu.

|             Názov metódy             |             Prístupnosť             | Parametre | Popis                                                               |
|:------------------------------------:|:-----------------------------------:|:---------------------------------------:|---------------------------------------------------------------------------------------------|
|             `findByKey`              |              `Verejná`              |        `attrName, key, keyValue`        | Najdenie údaju v pomenovanom stave `attrName`, na základe kľúča `key` a hodnoty kľúča `keyValue`. |
|              `findById`              |              `Verejná`              |             `attrName, id`              | Najdenie údaju v pomenovanom stave `attrName`, na základe id a hodnoty `id`.                |
|         `findAttributeValue`         |              `Verejná`              |               `attrName`                | Vrátenie celého pomenovaného stavu `attrName`.                                              |
|               `update`               |              `Verejná`              |             `data, action`              | Vykoná priradenu akciu `action` s dátami `data`.                                            |
|                `add`                 |              `Verejná`              |             `data, action`              | Vykoná priradenu akciu `action` s dátami `data`.                                            |
|                `save`                |              `Verejná`              |           `url, data, action`           | Vykoná sa rest na základe `url`, spolu s dátami `data` a následne sa vykoná zadaná akcia `action` |
|            `loadPromise`             |              `Verejná`              |              `url, action`              | Vykoná sa rest na základe `url`, následne sa vykoná zadaná akcia `action` .                 |
|           `loadOnePromise`           |              `Verejná`              |              `url, action`              | Vykoná sa rest na základe `url`, následne sa vykoná zadaná akcia `action` .                 |

### Príklady použitia

Pri používaní si treba dať pozor na to akú akciu používame pri akom type storu.
Základný reducer pre typ `Object` má zadefinované 3 základné akcie a to:

- `defaultStoreActions.addAction`
- `defaultStoreActions.updateAction`
- `defaultStoreActions.deleteAction`

Základný reducer pre typ `Array` má zadefinované 4 základné akcie a to:

- `defaultStoreActions.addAction`
- `defaultStoreActions.loadAction`
- `defaultStoreActions.updateAction`
- `defaultStoreActions.deleteAction`

```js
/**  Načítanie majetku s id = ${id} a následne sa vykoná add akcia pre pomenovaný stav "inventories"*/
this._inventoryService.loadPromise(`/private/rest/inventory/${id}`, defaultStoreActions.addAction("inventories"));

/** Namiesto let find = this._store.getState()['inventories'].find((item) => item.id == id); možeme použiť */
let detail = this._inventoryService.findById('inventories', this._actualId);

/**  Načítanie priradení majetku s id = ${id} a následne sa vykoná load akcia pre pomenovaný stav "assignments" a nahradí stav novonačítanými hodnotami*/
this.service.loadPromise(`/private/rest/inventory/${this.id}/assignments`, defaultStoreActions.loadAction('assignments'));

/**  Načítanie majetku s id = ${id} a následne sa vykoná update akcia pre pomenovaný stav "inventories" a po načítaní sa vykoná zadefinovaný callback*/
this._inventoryService.loadPromise(`/private/rest/inventory/${id}`, defaultStoreActions.updateAction('inventories'))
    .then((inventory) => {
        this.init(inventory);
    });
```