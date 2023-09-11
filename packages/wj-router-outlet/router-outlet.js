import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import { AnimatedOutlet } from '../wj-router/plugins/slick-router/components/animated-outlet.js';

customElements.get("wj-router-outlet") || window.customElements.define("wj-router-outlet", AnimatedOutlet);
// export class RouterOutlet extends WJElement {
//     constructor() {
//         super(template);
//     }
//
//     className = "RouterOutlet";
//
//     setupAttributes() {
//         this.isShadowRoot = "open";
//     }
// }
//
// customElements.get("wj-router-outlet") || window.customElements.define("wj-router-outlet", AnimatedOutlet);