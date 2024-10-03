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
      <div class="content" style="width: 200px;">
        <wje-button color="primary" id="toast">Get toast</wje-button>
        <wje-button color="primary" id="toast-countdown">Get toast with countdown</wje-button>
        <wje-button color="primary" id="toast-without-closable">Without closable</wje-button>
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

    this.context.querySelectorAll('.color wje-button').forEach((el) => {
      el.addEventListener('wje-button:click', (e) => {
        this.notify(`Notify body ${this.count++}`, true, true, el.getAttribute('color'));
      });
    });
  }

  notify(message, countdown = false, closable = true, color='primary', src='/assets/img/avatar.svg', duration='10000') {
    const toast = Object.assign(document.createElement('wje-toast'), {
      color: color,
      title: 'Notification',
      closable: closable,
      duration: duration,
      countdown: countdown,
      innerHTML: `
          <wje-avatar slot="avatar">
            <wje-img src="${src}"></wje-img>
          </wje-avatar>
          ${message}
        `
    });

    document.body.append(toast);
    return toast.start();
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-toast") || window.customElements.define("demo-toast", DemoToast);