// import { defaultStoreActions, store } from '/templates/net/assets/js/store/store.js?v=@@version@@';

import { UniversalService } from "./universalService";
import { WjElementUtils } from "./WjElementUtils";
import { WjPermissionsApi } from "./WjPermissionsApi";

const template = document.createElement("template");
template.innerHTML = ``;

export default class WJElement extends HTMLElement {
  setupAttributes() {
    throw new Error("Method not implemented.");
  }
  static processTemplates = (pTemplate : HTMLTemplateElement, template: HTMLTemplateElement) : HTMLTemplateElement => {
    const newTemplate = document.createElement("template");
    newTemplate.innerHTML = [
      template.innerHTML,
      pTemplate?.innerHTML || "",
    ].join("");
    return newTemplate;
  };

  template: any;
  _attributes: any;
  isAttached: any;
  service: UniversalService;
  rendering: boolean;
  runtimeTimeout: number | null;
  generatedTooltips: never[];

  constructor(componentTemplate: HTMLTemplateElement) {
    super();

    this.template = componentTemplate || template;

    // TODO RHR- zatial nevyužívané
    this._attributes = {};
    this.isAttached = false;
    this.service = new UniversalService({
      store: store,
    });

    this.rendering = false;

    this.runtimeTimeout = null;
    this.generatedTooltips = [];
  }

  get permission() {
    return this.getAttribute("permission-check");
  }

  get isPermissionCheck() {
    return this.hasAttribute("permission-check");
  }

  set isPermissionCheck(shadow) {
    this.setAttribute("permission-check", "permission-check");
  }

  get isShow() {
    return this.hasAttribute("show");
  }

  get isShadowRoot() {
    return this.hasAttribute("shadow");
  }

  set isShadowRoot(shadow : boolean) {
    this.setAttribute("shadow", String(shadow));
  }

  get shadowType() : ShadowRootMode | null {
    return this.getAttribute("shadow");
  }  

  get context(): ShadowRoot | HTMLElement  {
    if (this.isShadowRoot) {
      return this.shadowRoot? this.shadowRoot : this;
    } else {
      return this;
    }
  }

  get store() {
    return store;
  }

  get defaultStoreActions() {
    return defaultStoreActions;
  }

  get removeClassAfterConnect() {
    return this.getAttribute("remove-class-after-connect")?.split(" ");
  }

  beforeDraw() {}

  afterDraw() {}

  makeRuntimeTimeout(callback = () => {}) {
    return setTimeout(() => {
      callback();
    }, 0);
  }

  connectedCallback() {
    if (!this.runtimeTimeout) {
      this.runtimeTimeout = this.makeRuntimeTimeout(this.init);
    } else {
      clearTimeout(this.runtimeTimeout);
      this.runtimeTimeout = this.makeRuntimeTimeout(this.init);
    }

    // TODO experiment�lne posielanie funkcii cez custom attributy
    // Object.defineProperty(this._attributes, sanitizedName, {
    //     set: (value) => this.setAttribute(name, value),
    //     get: _ => {
    //         return this.getAttribute(name)
    //     }
    // })
  }

  init = (force = false) => {
    this.setupAttributes?.();
    if (this.isShadowRoot) {

      !this.shadowRoot && this.attachShadow({ mode: this.shadowType || "open"});
    }

    this.setUpAccessors();
    this.display(force);
    for (let i = 0; i < this.childNodes.length; i++) {
      let child = this.childNodes[i];
      this.append(child);
    }
  };

  disconnectedCallback() {
    if (this.isAttached) this.context.innerHTML = "";

    this.isAttached = false;

    // Odmazanie pôvodných tooltipov, dobré v prípade prekreslovania
    while (this.generatedTooltips.length) {
      let a = this.generatedTooltips.pop();
      a?.hide();
      a?.remove();
    }

    this.afterDisconnect?.();
  }
  afterDisconnect() {
    throw new Error("Method not implemented.");
  }

  /**
   * Lifecycle method, called whenever an observed property changes
   */
  attributeChangedCallback(name, old, newName) {
    this.refresh();
  }

  refresh() {
    if (!this.runtimeTimeout) {
      this.runtimeTimeout = this.makeRuntimeTimeout(this.init);
    } else {
      this.afterDisconnect?.();
      clearTimeout(this.runtimeTimeout);
      this.runtimeTimeout = this.makeRuntimeTimeout(() => {
        // this.innerHTML = ''
        // this.context.innerHTML = ''
        this.init(true);
      });
    }
  }

  /**
   * To be implemented by the child class
   */
  draw(context, store, params) {
    return null;
  }

  display(force = false) {
    if (force) {
      [...this.context.children].forEach(
        this.context.removeChild.bind(this.context)
      );
      this.isAttached = false;
    }
    if (this.isAttached) {
      console.log("Already rendered...");
      return;
    }

    this.context.append(this.template.content.cloneNode(true));

    if (this.isPermissionCheck || this.isShow) {
      if (WjPermissionsApi.isPermissionFulfilled.bind(this)(this.permission)) {
        this._resolveRender();
      } else {
        this.remove();
      }
    } else {
      this._resolveRender();
    }

    // TODO experiment�lne posielanie funkcii cez custom attributy
    // this.context.querySelectorAll(`[event-click]`).forEach(el=>{
    //     el.addEventListener('click', this[el.getAttribute('event-click')])
    // })
  }

  render() {
    let rend = this.draw(this.context, this.store, null) || "";
    let element;

    if (rend instanceof HTMLElement || rend instanceof DocumentFragment) {
      element = rend;
    } else {
      let template = document.createElement("template");
      template.innerHTML = rend;
      element = template.content.cloneNode(true);
    }

    let rendered = element;
    // this.isAttached = true;
    this.context.appendChild(rendered);
  }

  /**
   * Turns a string split with "-" into camel case notation
   */
  sanitizeName(name) {
    let parts = name.split("-");
    return [
      parts.shift(),
      ...parts.map((n) => n[0].toUpperCase() + n.slice(1)),
    ].join("");
  }

  /**
   * Creates one property on this class for every
   * HTML property defined on the element
   */
  setUpAccessors() {
    let attrs = this.getAttributeNames();
    attrs.forEach((name) => {
      const sanitizedName = this.sanitizeName(name);
      if (this[sanitizedName] == undefined) {
        Object.defineProperty(this, sanitizedName, {
          set: (value) => this.setAttribute(name, value),
          get: (_) => {
            return this.getAttribute(name);
          },
        });
      }
    });
  }

  _resolveRender() {
    Promise.resolve(this.beforeDraw()).then((a, b, c) => {
      this.render();
      Promise.resolve(this.afterDraw?.(this.context)).then((a, b, c) => {
        this.tooltip();
        this.isAttached = true;
        this.rendering = false;

        this.removeClassAfterConnect &&
          this.classList.remove(...this.removeClassAfterConnect);

        // this.observer?.disconnect()
        // const config = {
        //     attributes: true,
        //     childList: false,
        //     subtree: false,
        //     characterData: false,
        //     characterDataOldValue: false,
        // };
        //
        // this.observer = new MutationObserver(()=>{this.refresh()});
        // this.observer.observe(this, config);
      });
    });
  }

  tooltip() {
    // Odmazanie pôvodných tooltipov, dobré v prípade prekreslovania
    while (this.generatedTooltips.length) {
      let a = this.generatedTooltips.pop();
      a?.hide();
      a?.remove();
    }

    this.context.querySelectorAll("[wj-tooltip]").forEach((el) => {
      intranet.initTooltip(el).then((ret) => {
        this.generatedTooltips.push(ret);
      });
    });
  }
}

let __esModule = "true";
export { __esModule, WjPermissionsApi, WjElementUtils };

customElements.get("wj-element") ||
  customElements.define("wj-element", WJElement);
