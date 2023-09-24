var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const simple = (notification, alert, options) => {
  notification.classList.add("pgn-simple");
  alert.innerHTML = "<div>" + options.message + "</div>";
  if (options.showClose) {
    alert.appendChild(close());
  }
};
const flip = (notification, alert, options) => {
  notification.classList.add("pgn-flip");
  alert.innerHTML = "<span>" + options.message + "</span>";
  if (options.showClose) {
    alert.appendChild(close());
  }
};
const circle = (notification, alert, options) => {
  notification.classList.add("pgn-circle");
  let title = "";
  let message = "";
  if (options.title)
    title = `<p><b>${options.title}</b></p>`;
  if (options.message)
    message = `<p>${options.message}</p>`;
  alert.innerHTML = `<wj-avatar>
      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
    </wj-avatar>
    <div>
      ${title + message}
  </div>`;
  if (options.showClose) {
    alert.appendChild(close());
  }
};
const bar = (notification, alert, options) => {
  notification.classList.add("pgn-bar");
  alert.classList.add("alert-" + options.type);
  alert.innerHTML = "<div>" + options.message + "</div>";
  if (options.showClose) {
    alert.appendChild(close());
  }
};
const close = () => {
  let icon = document.createElement("wj-icon");
  icon.setAttribute("name", "xmark");
  icon.setAttribute("slot", "icon-only");
  let close2 = document.createElement("wj-button");
  close2.setAttribute("fill", "link");
  close2.setAttribute("size", "small");
  close2.classList.add("close");
  close2.appendChild(icon);
  return close2;
};
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ TOAST ]\n*/\n:host {\n  position: fixed;\n  z-index: 999;\n}\n:host([data-position$=-left]) {\n  left: 0;\n}\n:host([data-position$=-right]) {\n  right: 0;\n}\n:host([data-position^=top-]) {\n  top: 0;\n}\n:host([data-position^=bottom-]) {\n  bottom: 0;\n}\n:host([data-position=top]) {\n  top: 0;\n  left: 0;\n  right: 0;\n}\n:host([data-position=bottom]) {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.pgn {\n  position: relative;\n  margin: 10px;\n}\n.pgn .alert {\n  margin: 0;\n  margin-bottom: 4px;\n}\n/* Simple\n------------------------------------\n*/\n.pgn-simple .alert {\n  padding-top: 13px;\n  padding-bottom: 13px;\n  max-width: 500px;\n  animation: fadeIn 0.3s cubic-bezier(0.05, 0.74, 0.27, 0.99) forwards;\n  -webkit-animation: fadeIn 0.3s cubic-bezier(0.05, 0.74, 0.27, 0.99) forwards;\n  max-height: 250px;\n  overflow: hidden;\n}\n/* Bar\n------------------------------------\n*/\n.pgn-bar {\n  overflow: hidden;\n  margin: 0;\n}\n.pgn-bar .alert {\n  border-radius: 0;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  max-height: 91px;\n}\n:host([data-position=top]) .pgn-bar .alert {\n  animation: slideInFromTop 0.5s cubic-bezier(0.05, 0.74, 0.27, 0.99) forwards;\n  -webkit-animation: slideInFromTop 0.5s cubic-bezier(0.05, 0.74, 0.27, 0.99) forwards;\n  transform-origin: top left;\n  -webkit-transform-origin: top left;\n}\n:host([data-position=bottom]) .pgn-bar .alert {\n  animation: slideInFromBottom 0.5s cubic-bezier(0.05, 0.74, 0.27, 0.99) forwards;\n  -webkit-animation: slideInFromBottom 0.5s cubic-bezier(0.05, 0.74, 0.27, 0.99) forwards;\n  transform-origin: bottom left;\n  -webkit-transform-origin: bottom left;\n}\n.pgn-bar .alert span {\n  opacity: 0;\n  animation: fadeIn 0.3s cubic-bezier(0.05, 0.74, 0.27, 0.99) forwards;\n  -webkit-animation: fadeIn 0.3s cubic-bezier(0.05, 0.74, 0.27, 0.99) forwards;\n}\n@keyframes slideInFromTop {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes slideInFromTop {\n  0% {\n    -webkit-transform: translateY(-100%);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes slideInFromBottom {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes slideInFromBottom {\n  0% {\n    -webkit-transform: translateY(100%);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/* Circle\n------------------------------------\n*/\n.pgn-circle .alert {\n  margin-bottom: 10px;\n  border-radius: 300px;\n  animation: fadeInCircle 0.3s ease forwards, resizeCircle 0.3s 0.4s cubic-bezier(0.25, 0.25, 0.4, 1.6) forwards;\n  -webkit-animation: fadeInCircle 0.3s ease forwards, resizeCircle 0.3s 0.4s cubic-bezier(0.25, 0.25, 0.4, 1.6) forwards;\n  height: 48px;\n  overflow: hidden;\n  padding: 6px 55px 6px 6px;\n  -webkit-transform: translateZ(0);\n  position: relative;\n  display: flex;\n}\n:host[data-position$=-right] .pgn-circle .alert {\n  float: right;\n}\n:host[data-position$=-left] .pgn-circle .alert {\n  float: left;\n}\n:host[data-position^=bottom-] .pgn-circle .alert {\n  margin-bottom: 20px;\n}\nwj-avatar:first-child {\n  margin-right: 8px;\n}\n.pgn-circle .alert .close {\n  margin-top: -12px;\n  position: absolute;\n  right: 18px;\n  top: 50%;\n  opacity: 0;\n  animation: fadeIn 0.3s 0.5s ease forwards;\n  -webkit-animation: fadeIn 0.3s 0.5s ease forwards;\n}\n.pgn-circle .alert p {\n  margin: 0;\n}\n.pgn-circle .alert > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.pgn-circle .alert > div > div {\n  display: table-cell;\n  vertical-align: middle;\n}\n@keyframes fadeInCircle {\n  0% {\n    opacity: 0;\n    width: 60px;\n  }\n  100% {\n    opacity: 1;\n    width: 60px;\n  }\n}\n@-webkit-keyframes fadeInCircle {\n  0% {\n    opacity: 0;\n    width: 60px;\n  }\n  100% {\n    opacity: 1;\n    width: 60px;\n  }\n}\n@keyframes resizeCircle {\n  0% {\n    width: 60px;\n  }\n  100% {\n    width: 300px;\n  }\n}\n@-webkit-keyframes resizeCircle {\n  0% {\n    width: 60px;\n  }\n  100% {\n    width: 300px;\n  }\n}\n/* Flip\n------------------------------------\n*/\n:host[data-position^=bottom-] .pgn-flip .alert {\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n}\n.pgn-flip .alert {\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n  -webkit-animation-duration: 0.8s;\n  animation-duration: 0.8s;\n  border-radius: 0;\n  padding: 25px 35px;\n  max-width: 500px;\n  max-height: 250px;\n  overflow: hidden;\n}\n@-webkit-keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -90deg);\n    -webkit-transition-timing-function: ease-in;\n  }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 20deg);\n    -webkit-transition-timing-function: ease-out;\n  }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -10deg);\n    -webkit-transition-timing-function: ease-in;\n    opacity: 1;\n  }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 5deg);\n    -webkit-transition-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: perspective(400px);\n  }\n}\n@keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -90deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n  }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 20deg);\n    -webkit-transition-timing-function: ease-out;\n    transition-timing-function: ease-out;\n  }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -10deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n    opacity: 1;\n  }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 5deg);\n    -webkit-transition-timing-function: ease-out;\n    transition-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/* Pages Notification customizations */\n:host([data-position=top]) {\n  top: 60px;\n  left: 0;\n}\n:host([data-position=bottom]) {\n  left: 0;\n}\n:host([data-position$=-left]) {\n  left: 0;\n  right: auto;\n}\n:host([data-position^=top-]) {\n  bottom: auto;\n}\n:host {\n  z-index: 900;\n}\n@media (max-width: 979px) {\n  body .pgn-wrapper[data-position=top] {\n    left: 0 !important;\n  }\n  body .pgn-wrapper[data-position=bottom] {\n    left: 0 !important;\n  }\n}\n@media (max-width: 767px) {\n  body .pgn-wrapper[data-position$=-left],\n  body .pgn-wrapper[data-position$=-right] {\n    left: 10px !important;\n    right: 10px !important;\n  }\n  body .pgn-wrapper[data-position$=-right] .alert,\n  body .pgn-wrapper[data-position$=-left] .alert {\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.alert {\n  background-image: none;\n  box-shadow: none;\n  text-shadow: none;\n  padding: 9px 19px 9px 15px;\n  border-radius: 3px;\n  font-size: 13px;\n  border-width: 0;\n  -webkit-transition: all 0.2s linear 0s;\n  transition: all 0.2s linear 0s;\n  display: flex;\n  align-items: center;\n}\n.alert.bordered {\n  border-width: 1px;\n}\n.alert .link {\n  color: #ce8f22;\n  font-weight: bold;\n}\n.alert .alert-heading {\n  color: #ce8f22 !important;\n  margin-bottom: 5px;\n  font-weight: 600;\n}\n.alert .btn-small {\n  position: relative;\n  top: -3.5px;\n}\n.alert .button-set .btn {\n  position: relative;\n  top: 8px;\n}\n/* Alert : Color Options\n------------------------------------\n*/\n.alert-danger,\n.alert-error,\n.alert-danger.btn,\n.alert-error.btn {\n  background-color: #fde2da !important;\n  color: #900f17 !important;\n  border-color: rgba(144, 15, 23, 0.24) !important;\n}\n.alert-danger .close,\n.alert-error .close,\n.alert-danger.btn .close,\n.alert-error.btn .close {\n  background-position: -95px -10px !important;\n}\n.alert-warning {\n  background-color: #fffde1;\n  color: #aa7918;\n  border-color: rgba(170, 121, 24, 0.24);\n}\n.alert-info {\n  background-color: #d3eeff;\n  color: #00318e;\n  border-color: rgba(0, 49, 142, 0.24);\n}\n.alert-info .close {\n  background-position: -67px -10px !important;\n}\n.alert-success, .alert-success.btn {\n  background-color: #d6f7f0 !important;\n  color: #04733e !important;\n  border-color: rgba(4, 115, 62, 0.24) !important;\n}\n.alert-success .close, .alert-success.btn .close {\n  background-position: -38px -10px !important;\n}\n.alert-default {\n  background-color: #fff;\n  color: #4b4b4b;\n  border-color: #e0e0e0;\n}\n.alert-default .close {\n  background-position: -67px -10px !important;\n}";
class Toast extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Toast");
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let options = {
      message: "Záznam bol úspešne uložený.",
      // onClosed: function onClosed(),
      // onShown: function onShown(),
      position: this.position,
      showClose: true,
      style: this.design || "simple",
      timeout: this.duration || 4e3,
      type: this.type || "success",
      title: this.title || "John Doe"
    };
    this.container = document.querySelector("body");
    this.notification = document.createElement("div");
    this.notification.classList.add("pgn", "push-on-sidebar-open");
    this.classList.add("pgn-wrapper");
    this.setAttribute("data-position", options.position);
    this.alert = document.createElement("div");
    this.alert.classList.add("alert");
    this.alert.classList.add("alert-" + options.type);
    if (options.style == "bar") {
      bar(this.notification, this.alert, options);
    } else if (options.style == "flip") {
      flip(this.notification, this.alert, options);
    } else if (options.style == "circle") {
      circle(this.notification, this.alert, options);
    } else if (options.style == "simple") {
      simple(this.notification, this.alert, options);
    } else {
      simple(this.notification, this.alert, options);
    }
    console.log("alert", this.alert);
    this.notification.appendChild(this.alert);
    fragment.appendChild(this.notification);
    return fragment;
  }
}
customElements.get("wj-toast") || window.customElements.define("wj-toast", Toast);
export {
  Toast
};
