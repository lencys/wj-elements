# Inline edit

Komponent slúži na editovanie textu priamo na mieste zobrazenie textu. Momentalne je k dispozicii len editacia pomocou inputu. V buducnosti bude mozne editovat aj pomocou selectu, checkboxu, atd.

## Pouzitie

```html
<wj-inline-edit endpoint="/enpoint-na-editaciu/" title="Example text"></wj-inline-edit>
```

## Parametre

| Paramter | Popis                              | Povinny | Default |
| ---- |------------------------------------|---------|---------|
| endpoint | Endpoint na ktorý sa pošle editovaný text | nie     | -       |
| title | Text ktorý sa zobrazí v inline edit | ano     | -       |
| edit |                                    | nie | -       |





## Stylovanie

Komponent je mozne stylovat pomocou css premenych.

## Udalosti

| Nazov | Popis                                                       | Navratova hodnota |
| ----- |-------------------------------------------------------------| ----------------- |
| wj-inline-edit-save | Vyvolá sa po editácii textu ak nie je zadaný endpoint | {value: string} |

### Príklad

```javascript
    document.addEventListener("wj-inline-edit-save", (e) => {
		console.log(e.detail.value);
	});
```