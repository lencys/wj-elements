const fs = require('fs');
const path = require('path');
const readline = require('readline');

let hasService = false;
let hasStyle = false;

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// check if element name is provided
if (!process.argv[2]) {
    console.error('Please provide element name');
    rl.close();
    process.exit(1);
}

// check if element already exists
if (fs.existsSync(path.resolve(__dirname, `../packages/wje-${process.argv[2]}`))) {
    console.error('Element already exists');
    rl.close();
    process.exit(1);
}

// ask if element has service
rl.question('Does element have a service? (yes/no) ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
        hasService = true;
    }

    // Ask the next question inside the callback of the first question
    rl.question('Does element have style? (yes/no) ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            hasStyle = true;
        }
        // Close the readline interface after the last question
        rl.close();

        // Proceed with the rest of your logic here
        // For example, creating the element, service, and style files

        main();
    });

});


const main = async () => {
    let { elementKebeb, elementName } = createElementInPackage();
    addToViteConfig(elementKebeb);
    addPackageToIndex(elementName, elementKebeb)
    createDemoFile(elementName, elementKebeb);

    rl.close();
}


function createDemoFile(elementName, elementKebeb) {
    const demoName = 'Demo' + elementName;
    const demoKebeb = 'demo-' + elementKebeb;

    const demoPath = path.resolve(__dirname, `../demo/components/${demoKebeb}.js`);

    if (fs.existsSync(demoPath)) {
        console.error('Demo file already exists');
        rl.close();
        process.exit(1);
    }

    const demoContent = `
import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = \`...
<div class="html-snippet"></div>\`

export default class ${demoName} extends WJElement {
    constructor() {
        super(template);
    }

    afterDraw(context, store2, params) {
        const codeSnippet = new CodeSnippet();
        codeSnippet.generateSnippet(template, this.context);
    }
}

let __esModule = 'true';
export { __esModule };

customElements.get("${demoKebeb}") || window.customElements.define("${demoKebeb}", ${demoName});
    `;

    fs.writeFileSync(demoPath, demoContent);
    console.log(`Demo file created successfully`);
}

function createElementInPackage() {
    let elementName = process.argv[2];
    let elementKebeb = elementName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    // fist letter to upper case
    elementName = elementName.charAt(0).toUpperCase() + elementName.slice(1);

    if (elementName.includes('-')) {
        elementName = elementName.split('-').map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
    }

    const elementPath = path.resolve(__dirname, `../packages/wje-${elementKebeb}`);
    const elementFile = path.resolve(elementPath, `${elementKebeb}.element.js`);
    const elementRegisterFile = path.resolve(elementPath, `${elementKebeb}.js`);
    const elementStyle = path.resolve(elementPath, `styles/styles.css`);
    const elementService = path.resolve(elementPath, `service/service.js`);

    const elementContent = `import { default as WJElement, event } from "../wje-element/element.js";
    ${hasStyle ? 'import styles from "./styles/styles.css?inline";' : ''}
    ${hasService ? 'import * as service from "./service/service.js";' : ''}
    
    /**
     * @summary ${elementName} is a custom web component that extends WJElement.
     * @documentation https://elements.webjet.sk/components/${elementName}
     * @status stable
     *  
     * @extends WJElement
     * 
     * @csspart - Styles the element.
     *  
     * @tag wje-${elementKebeb}
     * 
     * @example
     * <wje-${elementKebeb}></wje-${elementKebeb}>
     */
    export default class ${elementName} extends WJElement {
        /**
         * Creates an instance of ${elementName}.
         *
         * @constructor
         */
        constructor() {
            super();
        }
        
        className = "${elementName}";
    
        ${hasStyle ? `
            /**
             * Returns the CSS styles for the component.
             *
             * @static
             * @returns {CSSStyleSheet}
             */
            static get cssStyleSheet() {
                return styles;
            }` : ''}
    
        /**
         * Sets up the attributes for the component.
         */
        setupAttributes() {
            this.isShadowRoot = "open";
        }
    
        /**
         * Draws the component.
         *
         * @param {Object} context - The context for drawing.
         * @param {Object} store - The store for drawing.
         * @param {Object} params - The parameters for drawing.
         * @returns {DocumentFragment}
         */
        draw(context, store, params) {
            let fragment = document.createDocumentFragment();
    
            let element = document.createElement("slot");
    
            fragment.appendChild(element);
    
            return fragment;
        }
    }
    
    customElements.define("wje-${elementKebeb}", ${elementName});
    `;

    const styleContent = `:host 
    {
        display: block;
    }
    `;

    const serviceContent = `
    export default function service() {
        // Your service code here
    }
    `;


    const elementRegisterContent = `import ${elementName} from "./${elementKebeb}.element.js";
    
    export default ${elementName};
    
    ${elementName}.define("wje-${elementKebeb}", ${elementName});
    `;



    fs.mkdirSync(elementPath);
    fs.writeFileSync(elementFile, elementContent);
    fs.writeFileSync(elementRegisterFile, elementRegisterContent);

    if (hasStyle) {
        fs.mkdirSync(path.resolve(elementPath, 'styles'));
        fs.writeFileSync(elementStyle, styleContent);
    }
    if (hasService) {
        fs.mkdirSync(path.resolve(elementPath, 'service'));
        fs.writeFileSync(elementService, serviceContent);
    }

    console.log(`Element ${elementName} created successfully`);
    return { elementKebeb, elementName };
}

function addToViteConfig(elementKebeb) {
    const viteConfigPath = path.resolve(__dirname, '../vite.config.js');
    const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
    const lines = viteConfig.split('\n');
    let entryIndex = lines.findIndex(line => line.includes('entry: {'));
    if (entryIndex === -1) {
        console.error('Entry point not found in vite.config.js');
        rl.close();
        process.exit(1);
    }

    // is this element already in vite.config.js
    if (lines.some(line => line.includes(`wje-${elementKebeb}`))) {
        console.error('Element already in vite.config.js');
        rl.close();
        process.exit(1);
    }

    const entryLine = lines[entryIndex];
    const entryEndLineIndex = lines.findIndex((line, index) => index > entryIndex && line.includes('}'));
    const newEntry = `"${elementKebeb}": "packages/wje-${elementKebeb}/${elementKebeb}.js",`;


    console.log(`Adding element to vite.config.js`, entryIndex, entryEndLineIndex);

    //  alphabetically sort for the new entry and insert it to the array lines
    const newEntryIndex = lines.findIndex((line, index) => {
        if (index > entryIndex && index < entryEndLineIndex) {
            if (line < newEntry) {
                return true;
            }
        }

        return false;
    });


    console.log('newEntryIndex', newEntryIndex, newEntry);
    lines.splice(newEntryIndex, 0, newEntry);



    fs.writeFileSync(viteConfigPath, lines.join('\n'));


    console.log(`Element added to vite.config.js`);
}

function addPackageToIndex(elementName, elementKebeb) {

    // add to packages/index.js
    const packagesIndexPath = path.resolve(__dirname, '../packages/index.js');
    const packagesIndex = fs.readFileSync(packagesIndexPath, 'utf8');
    const packagesLines = packagesIndex.split('\n');
    const importIndex = packagesLines.findIndex(line => line.includes('import {'));

    if (packagesLines.some(line => line.includes(`import { default as ${elementName} } from "./wje-${elementKebeb}/${elementKebeb}.js";`))) {
        console.error('Element already in packages/index.js');
        rl.close();
        process.exit(1);
    }

    const newImport = `import { default as ${elementName} } from "./wje-${elementKebeb}/${elementKebeb}.js";`;
    const newExport = `  ${elementName},`;

    packagesLines.splice(importIndex + 1, 0, newImport);

    const exportIndex = packagesLines.findIndex(line => line.includes('export {'));
    const exportEndIndex = packagesLines.findIndex((line, index) => index > exportIndex && line.includes('}'));
    const newExportIndex = packagesLines.findIndex((line, index) => {
        if (index > exportIndex && index < exportEndIndex) {
            if (line.trim() < newExport) {
                return true;
            }
        }

        return false;
    });

    packagesLines.splice(newExportIndex, 0, newExport);

    fs.writeFileSync(packagesIndexPath, packagesLines.join('\n'));

    console.log(`Element added to packages/index.js`);
}



// Run this command in terminal: node create-element.js <element-name>
// Example: node create-element.js button
// This will create a new folder in packages directory with the name wje-button
// Inside this folder will be created button.element.js and styles.css files
