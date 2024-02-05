var d = Object.defineProperty;
var c = (i, t, e) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var p = (i, t, e) => (c(i, typeof t != "symbol" ? t + "" : t, e), e);
import m from "./wj-element.js";
import "./wj-store.js";
const l = (i, t, e) => {
  i.classList.add("pgn-simple"), t.innerHTML = "<div>" + e.message + "</div>", e.showClose && t.appendChild(a());
}, f = (i, t, e) => {
  i.classList.add("pgn-flip"), t.innerHTML = "<span>" + e.message + "</span>", e.showClose && t.appendChild(a());
}, b = (i, t, e) => {
  i.classList.add("pgn-circle");
  let r = "", n = "";
  e.title && (r = `<p><b>${e.title}</b></p>`), e.message && (n = `<p>${e.message}</p>`), t.innerHTML = `<wj-avatar>
      <img alt="Silhouette of a person's head" src="/assets/img/avatar.svg" />
    </wj-avatar>
    <div>
      ${r + n}
  </div>`, e.showClose && t.appendChild(a());
}, g = (i, t, e) => {
  i.classList.add("pgn-bar"), t.classList.add("alert-" + e.type), t.innerHTML = "<div>" + e.message + "</div>", e.showClose && t.appendChild(a());
}, a = () => {
  let i = document.createElement("wj-icon");
  i.setAttribute("name", "x"), i.setAttribute("slot", "icon-only");
  let t = document.createElement("wj-button");
  return t.setAttribute("fill", "link"), t.setAttribute("size", "small"), t.classList.add("close"), t.appendChild(i), t;
}, h = `/*!
* direction.scss
*/:host{position:fixed;z-index:999}:host([data-position$=-left]){left:0}:host([data-position$=-right]){right:0}:host([data-position^=top-]){top:0}:host([data-position^=bottom-]){bottom:0}:host([data-position=top]){top:0;left:0;right:0}:host([data-position=bottom]){bottom:0;left:0;right:0}.pgn{position:relative;margin:10px}.pgn .alert{margin:0 0 4px}.pgn-simple .alert{padding-top:13px;padding-bottom:13px;max-width:500px;animation:fadeIn .3s cubic-bezier(.05,.74,.27,.99) forwards;-webkit-animation:fadeIn .3s cubic-bezier(.05,.74,.27,.99) forwards;max-height:250px;overflow:hidden}.pgn-bar{overflow:hidden;margin:0}.pgn-bar .alert{border-radius:0;padding-top:13px;padding-bottom:13px;max-height:91px}:host([data-position=top]) .pgn-bar .alert{animation:slideInFromTop .5s cubic-bezier(.05,.74,.27,.99) forwards;-webkit-animation:slideInFromTop .5s cubic-bezier(.05,.74,.27,.99) forwards;transform-origin:top left;-webkit-transform-origin:top left}:host([data-position=bottom]) .pgn-bar .alert{animation:slideInFromBottom .5s cubic-bezier(.05,.74,.27,.99) forwards;-webkit-animation:slideInFromBottom .5s cubic-bezier(.05,.74,.27,.99) forwards;transform-origin:bottom left;-webkit-transform-origin:bottom left}.pgn-bar .alert span{opacity:0;animation:fadeIn .3s cubic-bezier(.05,.74,.27,.99) forwards;-webkit-animation:fadeIn .3s cubic-bezier(.05,.74,.27,.99) forwards}@keyframes slideInFromTop{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@-webkit-keyframes slideInFromTop{0%{-webkit-transform:translateY(-100%)}to{-webkit-transform:translateY(0)}}@keyframes slideInFromBottom{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes slideInFromBottom{0%{-webkit-transform:translateY(100%)}to{-webkit-transform:translateY(0)}}.pgn-circle .alert{margin-bottom:10px;border-radius:300px;animation:fadeInCircle .3s ease forwards,resizeCircle .3s .4s cubic-bezier(.25,.25,.4,1.6) forwards;-webkit-animation:fadeInCircle .3s ease forwards,resizeCircle .3s .4s cubic-bezier(.25,.25,.4,1.6) forwards;height:48px;overflow:hidden;padding:6px 55px 6px 6px;-webkit-transform:translateZ(0);position:relative;display:flex}:host[data-position$=-right] .pgn-circle .alert{float:right}:host[data-position$=-left] .pgn-circle .alert{float:left}:host[data-position^=bottom-] .pgn-circle .alert{margin-bottom:20px}wj-avatar:first-child{margin-right:8px}.pgn-circle .alert .close{margin-top:-12px;position:absolute;right:18px;top:50%;opacity:0;animation:fadeIn .3s .5s ease forwards;-webkit-animation:fadeIn .3s .5s ease forwards}.pgn-circle .alert p{margin:0}.pgn-circle .alert>div{display:flex;flex-direction:column;justify-content:center}.pgn-circle .alert>div>div{display:table-cell;vertical-align:middle}@keyframes fadeInCircle{0%{opacity:0;width:60px}to{opacity:1;width:60px}}@-webkit-keyframes fadeInCircle{0%{opacity:0;width:60px}to{opacity:1;width:60px}}@keyframes resizeCircle{0%{width:60px}to{width:300px}}@-webkit-keyframes resizeCircle{0%{width:60px}to{width:300px}}:host[data-position^=bottom-] .pgn-flip .alert{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.pgn-flip .alert{-webkit-transform-origin:50% 0%;transform-origin:50% 0%;-webkit-animation-name:flipInX;animation-name:flipInX;-webkit-animation-duration:.8s;animation-duration:.8s;border-radius:0;padding:25px 35px;max-width:500px;max-height:250px;overflow:hidden}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-90deg);-webkit-transition-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,20deg);-webkit-transition-timing-function:ease-out}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-10deg);-webkit-transition-timing-function:ease-in;opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,5deg);-webkit-transition-timing-function:ease-out}to{-webkit-transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-90deg);transform:perspective(400px) rotateX(-90deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,20deg);transform:perspective(400px) rotateX(20deg);-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-10deg);transform:perspective(400px) rotateX(-10deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,5deg);transform:perspective(400px) rotateX(5deg);-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}:host([data-position=top]){top:60px;left:0}:host([data-position=bottom]){left:0}:host([data-position$=-left]){left:0;right:auto}:host([data-position^=top-]){bottom:auto}:host{z-index:900}@media (max-width: 979px){body .pgn-wrapper[data-position=top],body .pgn-wrapper[data-position=bottom]{left:0!important}}@media (max-width: 767px){body .pgn-wrapper[data-position$=-left],body .pgn-wrapper[data-position$=-right]{left:10px!important;right:10px!important}body .pgn-wrapper[data-position$=-right] .alert,body .pgn-wrapper[data-position$=-left] .alert{max-width:100%;width:100%}}.alert{background-image:none;box-shadow:none;text-shadow:none;padding:9px 19px 9px 15px;border-radius:3px;font-size:13px;border-width:0;-webkit-transition:all .2s linear 0s;transition:all .2s linear 0s;display:flex;align-items:center}.alert.bordered{border-width:1px}.alert .link{color:#ce8f22;font-weight:700}.alert .alert-heading{color:#ce8f22!important;margin-bottom:5px;font-weight:600}.alert .btn-small{position:relative;top:-3.5px}.alert .button-set .btn{position:relative;top:8px}.alert-danger,.alert-error,.alert-danger.btn,.alert-error.btn{background-color:#fde2da!important;color:#900f17!important;border-color:#900f173d!important}.alert-danger .close,.alert-error .close,.alert-danger.btn .close,.alert-error.btn .close{background-position:-95px -10px!important}.alert-warning{background-color:#fffde1;color:#aa7918;border-color:#aa79183d}.alert-info{background-color:#d3eeff;color:#00318e;border-color:#00318e3d}.alert-info .close{background-position:-67px -10px!important}.alert-success,.alert-success.btn{background-color:#d6f7f0!important;color:#04733e!important;border-color:#04733e3d!important}.alert-success .close,.alert-success.btn .close{background-position:-38px -10px!important}.alert-default{background-color:#fff;color:#4b4b4b;border-color:#e0e0e0}.alert-default .close{background-position:-67px -10px!important}
`;
class w extends m {
  constructor() {
    super();
    p(this, "className", "Toast");
  }
  static get cssStyleSheet() {
    return h;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, r, n) {
    let s = document.createDocumentFragment(), o = {
      message: "Záznam bol úspešne uložený.",
      // onClosed: function onClosed(),
      // onShown: function onShown(),
      position: this.position,
      showClose: !0,
      style: this.design || "simple",
      timeout: this.duration || 4e3,
      type: this.type || "success",
      title: this.title || "John Doe"
    };
    return this.container = document.querySelector("body"), this.notification = document.createElement("div"), this.notification.classList.add("pgn", "push-on-sidebar-open"), this.classList.add("pgn-wrapper"), this.setAttribute("data-position", o.position), this.alert = document.createElement("div"), this.alert.classList.add("alert"), this.alert.classList.add("alert-" + o.type), o.style == "bar" ? g(this.notification, this.alert, o) : o.style == "flip" ? f(this.notification, this.alert, o) : o.style == "circle" ? b(this.notification, this.alert, o) : o.style == "simple" ? l(this.notification, this.alert, o) : l(this.notification, this.alert, o), this.notification.appendChild(this.alert), s.appendChild(this.notification), s;
  }
}
customElements.get("wj-toast") || window.customElements.define("wj-toast", w);
export {
  w as Toast
};
