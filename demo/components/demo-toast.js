import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Toast</h1>
  <style>
    .wje-toast-stack {
      top: 0;
      inset-inline-end: 0;
      &.top-start {
        top: 0;
        inset-inline-start: 0;
      }
      &.top-center {
        margin: 0 auto;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      &.bottom-start {
        bottom: 0;
        inset-inline-start: 0;
      }
      &.bottom-end {
        bottom: 0;
        inset-inline-end: 0;
      }
      &.bottom-center {
        margin: 0 auto;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }
  </style>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-button id="toast">Get toast</wje-button>
        <wje-button id="toast-countdown">Get toast with countdown</wje-button>
        <wje-button id="toast-without-closable">Without closable</wje-button>
        <wje-button id="toast-without-avatar">Without avatar</wje-button>
        <wje-button id="toast-with-icon">With icon</wje-button>
        <wje-button id="toast-text">Text</wje-button>
      </div>
    </div>
    
    <!-- COLOR -->

    <h2>Color</h2>
    <div class="playground">
      <div class="content color">
        <wje-button color="primary">Primary</wje-button>
        <wje-button color="complete">Complete</wje-button>
        <wje-button color="success"">Success</wje-button>
        <wje-button color="warning"">Warning</wje-button>
        <wje-button color="danger"">Danger</wje-button>
        <wje-button color="info"">Info</wje-button>
        <wje-button color="contrast"">Contrast</wje-button>
      </div>
    </div>
  </div>`;

export default class DemoToast extends WJElement {
  constructor() {
    super(template);

    this.count = 0;
  }

  afterDraw() {
    this.context.querySelector('#toast').addEventListener('wje-button:click', (e) => {
      this.notify(`Notify body ${this.count++}`);
    });

    this.context.querySelector('#toast-countdown').addEventListener('wje-button:click', (e) => {
      this.notify(`Notify body ${this.count++}`, true);
    });

    this.context.querySelector('#toast-without-closable').addEventListener('wje-button:click', (e) => {
      this.notify(`Notify body ${this.count++}`, true, false);
    });

    this.context.querySelector('#toast-without-avatar').addEventListener('wje-button:click', (e) => {
      this.notify(`Notify body ${this.count++}`, true, false, 'primary', '');
    });

    this.context.querySelector('#toast-with-icon').addEventListener('wje-button:click', (e) => {
      this.notify(`Notify body ${this.count++}`, false, false, 'primary', '','bell-z');
    });

    this.context.querySelector('#toast-text').addEventListener('wje-button:click', (e) => {
      this.notify(`Vestibulum accumsan iaculis enim sit amet placerat. In tempor accumsan ex. Integer facilisis varius mauris hendrerit tristique. `, true, true, 'primary', '','bell-z');
    });

    this.context.querySelectorAll('.color wje-button').forEach((el) => {
      el.addEventListener('wje-button:click', (e) => {
        this.notify(`Notify body ${this.count++}`, true, true, el.getAttribute('color'));
      });
    });
  }

  notify(message, countdown = false, closable = true, color='primary', src='/assets/img/avatar.svg', icon = null, duration='3000000', ) {
    let property = {
      color: color,
      headline: 'Notification',
      closable: closable,
      duration: duration,
      countdown: countdown,
      innerHTML: `${src && `
          <wje-avatar slot="media">
            <wje-img src="${src}"></wje-img>
          </wje-avatar>
        `}
          ${message}
        `
    }

    if(icon)
      property.icon = icon;

    const toast = Object.assign(document.createElement('wje-toast'), property);

    return toast.start();
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-toast") || window.customElements.define("demo-toast", DemoToast);