var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
class AnimationHook {
  constructor(options = {}) {
    this.options = options;
  }
  getOption(outlet, name) {
    return outlet.hasAttribute(name) ? outlet.getAttribute(name) : this.options[name];
  }
  hasOption(outlet, name) {
    return outlet.hasAttribute(name) || this.options[name];
  }
  runParallel(outlet) {
    return this.hasOption(outlet, "parallel");
  }
  beforeEnter(outlet, el) {
  }
  enter(outlet, el) {
  }
  leave(outlet, el, done) {
    done();
  }
}
const raf = window.requestAnimationFrame;
const TRANSITION = "transition";
const ANIMATION = "animation";
const transitionProp = "transition";
const transitionEndEvent = "transitionend";
const animationProp = "animation";
const animationEndEvent = "animationend";
function nextFrame(fn) {
  raf(function() {
    raf(fn);
  });
}
function whenTransitionEnds(el, cb) {
  const ref = getTransitionInfo(el);
  const type = ref.type;
  const timeout = ref.timeout;
  const propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  const event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  let ended = 0;
  const end = function() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  const onEnd = function(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function() {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}
function getTransitionInfo(el) {
  const styles2 = window.getComputedStyle(el);
  const transitionDelays = (styles2[transitionProp + "Delay"] || "").split(", ");
  const transitionDurations = (styles2[transitionProp + "Duration"] || "").split(", ");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = (styles2[animationProp + "Delay"] || "").split(", ");
  const animationDurations = (styles2[animationProp + "Duration"] || "").split(", ");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  const timeout = Math.max(transitionTimeout, animationTimeout);
  const type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
  const propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  return {
    type,
    timeout,
    propCount
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max.apply(
    null,
    durations.map(function(d, i) {
      return toMs(d) + toMs(delays[i]);
    })
  );
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function runTransition(el, name, type, cb) {
  el.classList.add(`${name}-${type}-active`);
  nextFrame(function() {
    el.classList.remove(`${name}-${type}`);
    el.classList.add(`${name}-${type}-to`);
    whenTransitionEnds(el, function() {
      el.classList.remove(`${name}-${type}-active`, `${name}-${type}-to`);
      if (cb) cb();
    });
  });
}
class GenericCSS extends AnimationHook {
  beforeEnter(outlet, el) {
    const name = outlet.getAttribute("animation") || "outlet";
    el.classList.add(`${name}-enter`);
  }
  enter(outlet, el) {
    const name = outlet.getAttribute("animation") || "outlet";
    runTransition(el, name, "enter");
  }
  leave(outlet, el, done) {
    const name = outlet.getAttribute("animation") || "outlet";
    el.classList.add(`${name}-leave`);
    runTransition(el, name, "leave", done);
  }
}
const animationRegistry = {};
let defaultHook;
function setDefaultAnimation(AnimationHookClass, options = {}) {
  defaultHook = new AnimationHookClass(options);
}
function getAnimationHook(name) {
  return animationRegistry[name] || defaultHook || (defaultHook = new GenericCSS());
}
class AnimatedOutlet extends HTMLElement {
  appendChild(el) {
    if (!this.hasAttribute("animation")) {
      super.appendChild(el);
      return;
    }
    const hook = getAnimationHook(this.getAttribute("animation"));
    const runParallel = hook.runParallel(this);
    hook.beforeEnter(this, el);
    super.appendChild(el);
    if (!runParallel && this.removing) {
      this.appending = el;
    } else {
      hook.enter(this, el);
    }
  }
  removeChild(el) {
    if (!this.hasAttribute("animation")) {
      super.removeChild(el);
      return;
    }
    const hook = getAnimationHook(this.getAttribute("animation"));
    if (this.removing && this.removing.parentNode === this) {
      super.removeChild(this.removing);
    }
    if (el === this.appending) {
      if (el.parentNode === this) {
        super.removeChild(el);
      }
      this.removing = null;
      return;
    }
    this.removing = el;
    hook.leave(this, el, () => {
      if (this.removing && this.removing.parentNode === this) {
        super.removeChild(this.removing);
      }
      if (this.appending) hook.enter(this, this.appending);
      this.appending = null;
      this.removing = null;
    });
  }
}
const styles = "/*\n[ WJ Router Outlet ]\n*/\n\n.fade-enter-active,\n.fade-leave-active {\n    transition: opacity 0.5s;\n}\n.fade-enter {\n    height: 0;\n    overflow: hidden;\n}\n\n.fade-enter,\n.fade-leave-to {\n    opacity: 0;\n}\n\n.slide-fade-enter-active {\n    transition: all 0.3s ease;\n}\n\n.slide-fade-leave-active {\n    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);\n}\n\n.slide-fade-enter,\n.slide-fade-leave-to {\n    transform: translateX(100px);\n    opacity: 0;\n}\n\n.bounce-enter {\n    opacity: 0;\n}\n\n.bounce-enter-active {\n    animation: bounce-in 0.5s;\n}\n\n.bounce-leave-active {\n    animation: bounce-in 0.5s reverse;\n}\n\n@keyframes bounce-in {\n    0% {\n        transform: scale(0);\n    }\n    50% {\n        transform: scale(1.5);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n\n";
setDefaultAnimation(GenericCSS);
class RouterOutlet extends AnimatedOutlet {
  /**
   * Creates an instance of Route.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "RouterOutlet");
  }
  connectedCallback() {
    const styleEl = document.createElement("style");
    styleEl.textContent = styles;
    this.parentNode.insertBefore(styleEl, this);
  }
}
WJElement.define("wje-router-outlet", RouterOutlet);
export {
  RouterOutlet as default
};
//# sourceMappingURL=wje-router-outlet.js.map
