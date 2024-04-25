import WJElement from "../../dist/wje-element.js";

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
                    background="white"
                ></wje-qr-code>
                <wje-input changeValue label="Change value" type="text" value="https://www.mcdonalds.sk/"></wje-input>
                <wje-input changeSize label="Change size" type="text" value="200"></wje-input>
                <wje-input changePadding label="Change padding" type="text" value="25"></wje-input>
                <wje-select colorSelectForeground label="Foreground color" placeholder="select color" max-options="1" max-height="200px"></wje-select>
                <wje-select colorSelectBackground label="Background color" placeholder="select color" max-options="1" max-height="200px"></wje-select>
            </div>
        </div>
    </div>
`;

export default class DemoQrCode extends WJElement {
    constructor() {
        super(template);
    }

    afterDraw() {
        const qr = document.querySelector('wje-qr-code');
        const colors = ["black", "blue", "red", "green", "orange", "white"];
    
        function populateColorOptions(selectElement) {
            colors.forEach(color => {
                const option = Object.assign(document.createElement('wje-option'), {
                    text: color,
                    value: color,
                    label: color
                });
                selectElement.appendChild(option);
            });
        }
    
        function handleInputOrSelectChange(selector, eventType, attribute) {
            const element = document.querySelector(selector);
            element.addEventListener(eventType, (e) => {
                qr.setAttribute(attribute, e.detail.context ? e.detail.context.value : e.detail.value);
            });
        }
    
        const colorSelectF = document.querySelector('[colorSelectForeground]');
        const colorSelectB = document.querySelector('[colorSelectBackground]');
        populateColorOptions(colorSelectF);
        populateColorOptions(colorSelectB);
    
        handleInputOrSelectChange('[changeValue]', 'wje-input:input', 'value');
        handleInputOrSelectChange('[changeSize]', 'wje-input:input', 'size');
        handleInputOrSelectChange('[changePadding]', 'wje-input:input', 'padding');
        handleInputOrSelectChange('[colorSelectForeground]', 'wje:option-change', 'foreground');
        handleInputOrSelectChange('[colorSelectBackground]', 'wje:option-change', 'background');
    }
    
}

let __esModule = 'true';
export {__esModule};

customElements.get("demo-qr-code") || window.customElements.define("demo-qr-code", DemoQrCode);