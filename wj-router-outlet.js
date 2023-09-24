import "./wj-element.js";
import "./wj-store.js";
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
var raf = window.requestAnimationFrame;
var TRANSITION = "transition";
var ANIMATION = "animation";
var transitionProp = "transition";
var transitionEndEvent = "transitionend";
var animationProp = "animation";
var animationEndEvent = "animationend";
function nextFrame(fn) {
  raf(function() {
    raf(fn);
  });
}
function whenTransitionEnds(el, cb) {
  var ref = getTransitionInfo(el);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function(e) {
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
  var styles = window.getComputedStyle(el);
  var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
  var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
  var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  timeout = Math.max(transitionTimeout, animationTimeout);
  type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
  propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
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
  return Math.max.apply(null, durations.map(function(d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
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
      if (cb)
        cb();
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
      if (this.appending)
        hook.enter(this, this.appending);
      this.appending = null;
      this.removing = null;
    });
  }
}
customElements.get("wj-router-outlet") || window.customElements.define("wj-router-outlet", AnimatedOutlet);
