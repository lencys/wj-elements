import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
<style>
    pre {
      overflow-x: auto;
      word-wrap: break-word;
      white-space: pre-wrap;
      padding: 10px;
      border: 1px solid hsla(240, 6%, 90%, 1);
      border-radius: 4px;
      background: #f9f9f9;
      max-width: 100%;
      font-size: 1em;
      line-height: 1.7rem;
      position: relative;
    }

    code {
      font-family: monospace;
      padding: 2px 4px;
      background: #f9f9f9;
      border-radius: 4px;
    }
  </style>
<h1>Rating</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wje-rate max="5"></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- VALUE -->

    <h3>Value</h3>
    <div class="playground">
      <div class="content">
        <wje-rate value="3" icons="['heart', 'heart', 'heart', 'heart', 'heart']"></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- PRECISION -->

    <h3>Precision</h3>
    <div class="playground">
      <div class="content">
        <wje-rate value="3.5" max="5" precision="0.1"></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- READONLY -->

    <h3>Readonly</h3>
    <div class="playground">
      <div class="content">
        <wje-rate max="5" value="4" readonly></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- DISABLED -->

    <h3>Disabled</h3>
    <div class="playground">
      <div class="content">
        <wje-rate max="5" value="2" disabled></wje-rate>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        createIcons(i) {
          let div = document.createElement("div");
          div.classList.add("wje-rate-icon");

          let icon = this.getIcons(i);

          div.appendChild(icon);

          if(this.value > i  && this.value < i + 1) {
              let clone = icon.cloneNode(true);
              div.appendChild(clone);
          }

          return div;
        }
      </code>
    </pre>
    <pre>
      <code>
          /**
        * Event handler for the mouse enter event.
        *
        * @param {Event} e - The event.
        */
        onMouseEnter = (e) => {
            e.preventDefault();

            this.hoverValue = this.getValueFromXPosition(e.clientX);
            this.changeRate();
        }

        /**
        * Event handler for the mouse leave event.
        *
        * @param {Event} e - The event.
        */
        onMouseLeave = (e) => {
            e.preventDefault();

            this.hoverValue = 0;
            this.changeRate();
        }

        /**
        * Event handler for the mouse move event.
        *
        * @param {Event} e - The event.
        */
        onMouseMove = (e) => {
            e.preventDefault();

            let newValue = this.getValueFromXPosition(e.clientX);
            if(newValue != this.hoverValue) {
                this.hoverValue = newValue;
                this.changeRate();
            }
        }

        /**
        * Event handler for the touch start event.
        *
        * @param {Event} e - The event.
        */
        onTouchStart = (e) => {
            e.preventDefault();

            this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX);
            this.changeRate();
        }

        /**
        * Event handler for the touch end event.
        *
        * @param {Event} e - The event.
        */
        onTouchEnd = (e) => {
            e.preventDefault();

            this.hoverValue = 0;
            this.changeRate();
        }

        /**
        * Event handler for the touch move event.
        *
        * @param {Event} e - The event.
        */
        onTouchMove = (e) => {
            e.preventDefault();

            this.hoverValue = this.getValueFromXPosition(e.touches[0].clientX);
            this.changeRate();
        }

        /**
        * Event handler for the click event.
        *
        * @param {Event} e - The event.
        */
        onClick = (e) => {
            e.preventDefault();

            this.value = +this.hoverValue;
        }
      </code>
    </pre>
    <pre>
      <code>
        getIcons(index) {
          let icon = document.createElement("wje-icon");
          icon.setAttribute("name", this.max ? this.icons[0] : this.icons[index]);
          return icon;
        }
      </code>
    </pre>
    <pre>
      <code>
        getValueFromXPosition(coordinate) {
          const { left, right, width } = this.native.getBoundingClientRect();
          const value = this.roundToPrecision(((coordinate - left) / width) * this.max, this.precision);

          return Math.min(Math.max(value, 0), this.max);
        }
      </code>
    </pre>
    <pre>
      <code>
        roundToPrecision(numberToRound, precision = 0.5) {
          const multiplier = 1 / precision;
          return Math.ceil(numberToRound * multiplier) / multiplier;
        }
      </code>
    </pre>
  </div>`;

export default class DemoRate extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, document);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-rating") || window.customElements.define("demo-rating", DemoRate);