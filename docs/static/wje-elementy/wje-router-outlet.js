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
  const styles = window.getComputedStyle(el);
  const transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
  const transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
  const animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
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
}
WJElement.define("wje-router-outlet", RouterOutlet);
export {
  RouterOutlet as default
};
