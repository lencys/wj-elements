import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `
    <h1>QR Code Generator</h1>
    <div class="container">
        <h2>Default</h2>
        <div class="playground">
            <div class="content">
                <wje-qr-code value="https://www.interway.sk/">
                </wje-qr-code>
            </div>
        </div>

        <h2>Colors</h2>
        <div class="playground">
            <div class="content">
                <wje-qr-code 
                    value="https://www.interway.sk/"
                    background="blue"
                    backgroundAlpha=".5"
                    foreground="white">
                </wje-qr-code>
            </div>
        </div>

        <h2>Levels</h2>
        <div class="playground">
            <div class="content">
                <wje-qr-code 
                    value="https://www.interway.sk/"
                    level="L">
                </wje-qr-code>
            </div>
            <div class="content">
                <wje-qr-code 
                    value="https://www.interway.sk/"
                    level="M">
                </wje-qr-code>
            </div>
            <div class="content">
                <wje-qr-code 
                    value="https://www.interway.sk/"
                    level="Q">
                </wje-qr-code>
            </div>
            <div class="content">
                <wje-qr-code 
                    value="https://www.interway.sk/"
                    level="H">
                </wje-qr-code>
            </div>
        </div>

        <h2>Padding</h2>
        <div class="playground">
            <div class="content">
                <wje-qr-code 
                    value="https://www.interway.sk/"
                    padding="25">
                </wje-qr-code>
            </div>
            <div class="content">
                <wje-qr-code 
                    value="https://www.interway.sk/"
                    padding="50">
                </wje-qr-code>
            </div>
        </div>
    </div>
`;

export default class DemoQrCode extends WJElement {
    constructor() {
        super(template);
    }
}

let __esModule = 'true';
export {__esModule};

customElements.get("demo-qr-code") || window.customElements.define("demo-qr-code", DemoQrCode);