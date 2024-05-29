import WJElement from "../../dist/wje-element.js";

const template = document.createElement("template");

template.innerHTML = `
    <h1>Reorder Handle</h1>
    <div class="container">
        <h2>Basic (menu usage)</h2>
        <div class="playground">
            <div class="content">

                <wje-menu active>                   
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start" locked><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 1 (locked)</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 2</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start" disabled><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 3 (disabled)</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 4</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 5</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 6</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>
                        Submenu item
<!--                        <wje-menu slot="submenu">-->
<!--                        <wje-menu-item>Menu item</wje-menu-item>-->
<!--                        <wje-menu-item>-->
<!--                            Subsubmenu item-->
<!--                           -->
<!--                        </wje-menu-item>-->
<!--                        <wje-menu-item>Submenu item</wje-menu-item>-->
<!--                        </wje-menu>-->
                    </wje-menu-item>
                </wje-menu>

            </div>
        </div>

        <h2>No defined dropzone (menu usage)</h2>
        <div class="playground">
            <div class="content">
                <wje-menu active>                   
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 1</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 2</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 3 (no dropzone)</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 4 (no dropzone)</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 5 (no dropzone)</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>Item 6</wje-menu-item>
                    <wje-menu-item><wje-reorder-handle dropzone="wje-menu" slot="start"><wje-icon name="arrows-move"></wje-icon></wje-reorder-handle>
                        Submenu item
                        <wje-menu slot="submenu">
                        <wje-menu-item>Menu item</wje-menu-item>
                        <wje-menu-item>
                            Subsubmenu item
                            <wje-menu slot="submenu">
                            <wje-menu-item>Menu item</wje-menu-item>
                            <wje-menu-item>Menu item</wje-menu-item>
                            <wje-menu-item>Menu item</wje-menu-item>
                            </wje-menu>
                        </wje-menu-item>
                        <wje-menu-item>Submenu item</wje-menu-item>
                        </wje-menu>
                    </wje-menu-item>
                </wje-menu>
            </div>
        </div>
    </div>
`;

export default class DemoReorderHandle extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = "true";
export { __esModule };

customElements.get("demo-reorder-handle") ||
  window.customElements.define("demo-reorder-handle", DemoReorderHandle);
