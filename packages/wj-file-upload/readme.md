# File upload

File upload allows users to transfer files from their device to a server. This component can be used in two variants. The first variant is for uploading files via drag and drop. The second variant allows users to select a file using the file explorer before pressing a button to initiate the transfer.

## Pouzitie

```html
<wj-file-upload accepted-files=".m4a,.mp3,.wav" custom-title="Nahrať audio" description="Podporované formáty" design="graphic" product="LMS" module="course" module-id="${this.params.courseId}"></wj-file-upload>
```

## Parametre

| Paramter | Popis                                     | Povinny | Default |
| -------- |-------------------------------------------|---------|---------|
| accepted-files | Zoznam povolených typov suborov | nie     | -       |
| custom-title | Vlastný text pre upload suborov | nie     | -       |
| description | Popis pre upload suborov | nie     | -       |
| design | Dizajn komponentu | ano     | classic |
| product | Produkt pre ktorý sa uploaduje subor | nie     | -       |
| module | Modul pre ktorý sa uploaduje subor | nie     | -       |
| module-id | ID modulu pre ktorý sa uploaduje subor | nie     | -       |

## Stylovanie

Komponent je mozne stylovat pomocou css premenych.

## Udalosti

| Názov                  | Popis                                                 | Návratová hodnota |
|------------------------|-------------------------------------------------------|-------------------|
| wj-file-upload-upload  | Vyvolá sa po uploadnutí suboru                        | {file: File}      |
| wj-uploaded-file-exist | Vyvolá sa po nahrati suboru ktory v disku uz existuje | {file: File}      |
| wj-uploaded-file-exist-disk |                   | {file: File}      |
| wj-removed-file | Vyvolá sa po zmazaní suboru                           | {file: File}      |





### Príklad

```javascript
    document.addEventListener("wj-file-upload-upload", (e) => {
        console.log(e.detail.file);
    });
```

## Dizajny

Komponent je mozne pouzit v troch dizajnoch. Prvy dizajn je `graphic`, druhy dizajn je `classic` a treti `slot`. Dizajn je mozne nastavit pomocou parametra `design`.

### Graphic

![Graphic design](./img/upload-graphic.png)

### Classic

![Classic design](./classic.png)
