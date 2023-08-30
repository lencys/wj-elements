var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { WjElementUtils } from "./wj-element.js";
import { store } from "./wj-store.js";
import { Avatar } from "./wj-avatar.js";
import { Badge } from "./wj-badge.js";
import { Button } from "./wj-button.js";
import { Card } from "./wj-card.js";
import { CardContent } from "./wj-card-content.js";
import { CardControls } from "./wj-card-controls.js";
import { CardHeader } from "./wj-card-header.js";
import { CardSubtitle } from "./wj-card-subtitle.js";
import { CardTitle } from "./wj-card-title.js";
import { Col } from "./wj-col.js";
import { Dialog } from "./wj-dialog.js";
import "./wj-form.js";
import { Grid } from "./wj-grid.js";
import { Chip } from "./wj-chip.js";
import { Icon } from "./wj-icon.js";
import { Img } from "./wj-img.js";
import { InfiniteScroll } from "./wj-infinite-scroll.js";
import { Input } from "./wj-input.js";
import { Item } from "./wj-item.js";
import { Label } from "./wj-label.js";
import { List } from "./wj-list.js";
import { ProgressBar } from "./wj-progress-bar.js";
import { Route } from "./wj-route.js";
import { Routerx } from "./wj-routerx.js";
import { RouterLink } from "./wj-router-link.js";
import "./wj-router-outlet.js";
import { Row } from "./wj-row.js";
import { Slider } from "./wj-slider.js";
import { Thumbnail } from "./wj-thumbnail.js";
import { Toast } from "./wj-toast.js";
import { Toggle } from "./wj-toggle.js";
import { d } from "./default-store-actions-65bc7799.js";
const global = "";
const styles = ":host {\n  color: red;\n}";
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles}
</style>`;
class ExampleElement extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "ExampleElement");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
    WjElementUtils.setAttributesToElement(this, {
      "test": "test"
    });
  }
  beforeDraw(context, store2, params) {
  }
  draw(context, store2, params) {
    console.log(context, store2, params);
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.innerHTML = params.text;
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw(context, store2, params) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-example-element") || window.customElements.define("wj-example-element", ExampleElement);
export {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardControls,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Chip,
  Col,
  Dialog,
  ExampleElement,
  Grid,
  Icon,
  Img,
  InfiniteScroll,
  Input,
  Item,
  Label,
  List,
  ProgressBar,
  Route,
  RouterLink,
  Routerx,
  Row,
  Slider,
  Thumbnail,
  Toast,
  Toggle,
  WJElement,
  d as defaultStoreActions,
  store
};
