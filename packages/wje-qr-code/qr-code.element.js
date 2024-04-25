import WJElement from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";
import QRious from "qrious";

export default class QrCode extends WJElement {
  constructor() {
    super();
  }

  className = "QrCode";

  static get cssStyleSheet() {
    return styles;
  }

  setupAttributes() {
    this.isShadowRoot = "open";
  }

  static get observedAttributes() {
    return [
        "value",
        "background",
        "backgroundAlpha",
        "foreground",
        "foregroundAlpha",
        "level",
        "padding",
        "size",
    ];
  }

  draw(context, store, params) {
    let fragment = document.createDocumentFragment();

    let qrCode = document.createElement("canvas");
    qrCode.classList.add("qr");
    qrCode.setAttribute("part", "native");

    fragment.appendChild(qrCode);

    return fragment;
  }

  afterDraw(context, store, params) {
    const canvas = this.shadowRoot.querySelector("canvas");
    const qrOptions = {};

    const attributes = [
      "value",
      "background",
      "backgroundAlpha",
      "foreground",
      "foregroundAlpha",
      "level",
      "padding",
      "size",
    ];

    attributes.forEach((attribute) => {
      const value = this.getAttribute(attribute);
      if (value !== null) {
        qrOptions[attribute] = value;
      }
    });

    if (!qrOptions.hasOwnProperty("value")) {
      qrOptions.value = "empty value";
    }

    const qr = new QRious({
      element: canvas,
      ...qrOptions,
    });
  }
}
