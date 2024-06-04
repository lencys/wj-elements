import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
    <h1>QR Code Generator</h1>
    <div class="container">
        <h2>Basic</h2>
        <div class="playground">
            <div class="content">
                <wje-qr-code 
                    value="https://www.mcdonalds.sk/"
                    size="200"
                    padding="25"
                    foregroung="black"
                    foregroundAlpha="1"
                    background="white"
                    backgroundAlpha="1"
                    level="L"
                >
                    <h3 slot="top">
                        Name on top of QR code
                    </h3>
                    <h3 slot="bottom">
                        Name on bottom of QR code
                    </h3>
                </wje-qr-code>

                <wje-input changeValue label="Change value" type="text" value="https://www.mcdonalds.sk/">
                </wje-input>
                <wje-input changeSize label="Change size" type="text" value="200">
                </wje-input>
                <wje-input changePadding label="Change padding" type="text" value="25">
                </wje-input>
                <div style="display: flex; flex-direction: row;">
                    <wje-color-picker colorSelectForeground style="margin: 10px;">
                    </wje-color-picker>

                    <div style="margin: 10px;">Foreground</div>
                
                    <wje-input changeForegroundAlpha label="Change foreground alpha" type="text" value="1" style="margin-left: 10px;">
                    </wje-input>
                </div>
            
                <div style="display: flex; flex-direction: row;">
                    <wje-color-picker colorSelectBackground style="margin: 10px;">
                    </wje-color-picker>
                        
                    <div style="margin: 10px;">Background</div>

                    <wje-input changeBackgroundAlpha label="Change background alpha" type="text" value="1" style="margin-left: 10px;">
                    </wje-input>
                </div>

                <wje-select levelSelect label="Level" placeholder="select level" max-options="1">
                </wje-select>
            </div>
        </div>

        <div class="html-snippet"></div>
    </div>
`;

export default class DemoQrCode extends WJElement {
    constructor() {
        super(template);
    }

    afterDraw() {
        const codeSnippet = new CodeSnippet();
        codeSnippet.generateSnippet(template, document);

        const qr = document.querySelector('wje-qr-code');
        const colors = ["black", "blue", "red", "green", "orange", "white"];
        const levels = ["L", "M", "Q", "H"];
    
        function populateOptions(selectElement, options) {
            options.forEach(option => {
                const optionElement = Object.assign(document.createElement('wje-option'), {
                    text: option,
                    value: option,
                    label: option
                });
                selectElement.appendChild(optionElement);
            });
        }
    
        function handleInputOrSelectChange(selector, eventType, attribute) {
            const element = document.querySelector(selector);
            element.addEventListener(eventType, (e) => {
                qr.setAttribute(attribute, e.detail.context ? e.detail.context.value : e.detail.hex8 ? e.detail.hex8 : e.detail.value);
            });
        }
    
        const colorSelectF = document.querySelector('[colorSelectForeground]');
        const colorSelectB = document.querySelector('[colorSelectBackground]');
        const levelSelect = document.querySelector('[levelSelect]');
    
        populateOptions(colorSelectF, colors);
        populateOptions(colorSelectB, colors);
        populateOptions(levelSelect, levels);
    
        const elements = [
            { selector: '[changeValue]', eventType: 'wje-input:input', attribute: 'value' },
            { selector: '[changeSize]', eventType: 'wje-input:input', attribute: 'size' },
            { selector: '[changePadding]', eventType: 'wje-input:input', attribute: 'padding' },
            { selector: '[colorSelectForeground]', eventType: 'wje-color-picker:select', attribute: 'foreground' },
            { selector: '[changeForegroundAlpha]', eventType: 'wje-input:input', attribute: 'foregroundAlpha' },
            { selector: '[colorSelectBackground]', eventType: 'wje-color-picker:select', attribute: 'background' },
            { selector: '[changeBackgroundAlpha]', eventType: 'wje-input:input', attribute: 'backgroundAlpha' },
            { selector: '[levelSelect]', eventType: 'wje:option-change', attribute: 'level' }
        ];
    
        elements.forEach(({ selector, eventType, attribute }) => {
            handleInputOrSelectChange(selector, eventType, attribute);
        });
    }
    
    
}

let __esModule = 'true';
export {__esModule};

customElements.get("demo-qr-code") || window.customElements.define("demo-qr-code", DemoQrCode);