var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { b } from "./router-links-CJnOdbas.js";
import { default as default2 } from "./wje-sliding-container.js";
import { fetchAndParseCSS } from "./wje-fetchAndParseCSS.js";
import WJElement from "./wje-element.js";
import { WjePermissionsApi, event } from "./wje-element.js";
import { Localizer } from "./localize.js";
import { default as default3 } from "./wje-accordion.js";
import { default as default4 } from "./wje-accordion-item.js";
import { default as default5 } from "./wje-animation.js";
import { default as default6 } from "./wje-aside.js";
import { default as default7 } from "./wje-avatar.js";
import { default as default8 } from "./wje-badge.js";
import { default as default9 } from "./wje-breadcrumb.js";
import { default as default10 } from "./wje-breadcrumbs.js";
import { default as default11 } from "./wje-button.js";
import { default as default12 } from "./wje-button-group.js";
import { default as default13 } from "./wje-card.js";
import { default as default14 } from "./wje-card-content.js";
import { default as default15 } from "./wje-card-controls.js";
import { default as default16 } from "./wje-card-header.js";
import { default as default17 } from "./wje-card-subtitle.js";
import { default as default18 } from "./wje-card-title.js";
import { default as default19 } from "./wje-carousel.js";
import { default as default20 } from "./wje-carousel-item.js";
import { default as default21 } from "./wje-checkbox.js";
import { default as default22 } from "./wje-chip.js";
import { default as default23 } from "./wje-col.js";
import { default as default24 } from "./wje-color-picker.js";
import { default as default25 } from "./wje-container.js";
import { default as default26 } from "./wje-copy-button.js";
import { default as default27 } from "./wje-dialog.js";
import { default as default28 } from "./wje-divider.js";
import { default as default29 } from "./wje-dropdown.js";
import { default as default30 } from "./wje-file-upload.js";
import { default as default31 } from "./wje-file-upload-item.js";
import { default as default32 } from "./wje-footer.js";
import { default as default33 } from "./wje-format-digital.js";
import { default as default34 } from "./wje-grid.js";
import { default as default35 } from "./wje-header.js";
import { default as default36 } from "./wje-icon.js";
import { default as default37 } from "./wje-icon-picker.js";
import { default as default38 } from "./wje-img.js";
import { default as default39 } from "./wje-img-comparer.js";
import "./wje-infinite-scroll.js";
import { default as default40 } from "./wje-input.js";
import { default as default41 } from "./wje-input-file.js";
import { default as default42 } from "./wje-item.js";
import { default as default43 } from "./wje-kanban.js";
import { default as default44 } from "./wje-label.js";
import "./wje-list.js";
import { default as default45 } from "./wje-main.js";
import { default as default46 } from "./wje-masonry.js";
import { default as default47 } from "./wje-menu.js";
import { default as default48 } from "./wje-menu-button.js";
import { default as default49 } from "./wje-menu-item.js";
import { default as default50 } from "./wje-menu-label.js";
import { default as default51 } from "./wje-option.js";
import { default as default52 } from "./wje-options.js";
import { default as default53 } from "./wje-orgchart.js";
import { default as default54 } from "./wje-orgchart-group.js";
import { default as default55 } from "./wje-orgchart-item.js";
import "./wje-popup.js";
import { default as default56 } from "./wje-progress-bar.js";
import { default as default57 } from "./wje-qr-code.js";
import { default as default58 } from "./wje-radio.js";
import { default as default59 } from "./wje-radio-group.js";
import { default as default60 } from "./wje-rate.js";
import { default as default61 } from "./wje-relative-time.js";
import { default as default62 } from "./wje-reorder.js";
import { default as default63 } from "./wje-reorder-dropzone.js";
import { default as default64 } from "./wje-reorder-handle.js";
import { default as default65 } from "./wje-reorder-item.js";
import { default as default66 } from "./wje-route.js";
import { default as default67 } from "./wje-routerx.js";
import { default as default68 } from "./wje-router-link.js";
import { default as default69 } from "./wje-router-outlet.js";
import { default as default70 } from "./wje-row.js";
import { default as default71 } from "./wje-select.js";
import { default as default72 } from "./wje-slider.js";
import { default as default73 } from "./wje-split-view.js";
import { default as default74 } from "./wje-status.js";
import { default as default75 } from "./wje-step.js";
import { default as default76 } from "./wje-stepper.js";
import { defaultStoreActions, store } from "./wje-store.js";
import { default as default77 } from "./wje-tab.js";
import { default as default78 } from "./wje-tab-group.js";
import { default as default79 } from "./wje-tab-panel.js";
import { default as default80 } from "./wje-textarea.js";
import { default as default81 } from "./wje-thumbnail.js";
import { default as default82 } from "./wje-toast.js";
import { default as default83 } from "./wje-toggle.js";
import { default as default84 } from "./wje-toolbar.js";
import { default as default85 } from "./wje-toolbar-action.js";
import { default as default86 } from "./wje-tooltip.js";
import { default as default87 } from "./wje-visually-hidden.js";
import { L } from "./list.element-Ce1vIm1O.js";
import { I } from "./infinite-scroll.element-XVJukzjy.js";
import { P } from "./popup.element-4DNn6DjX.js";
function formatDate(input, format) {
  let date;
  if (typeof input === "string") {
    date = new Date(input);
  } else if (typeof input === "number") {
    date = new Date(input);
  } else if (input instanceof Date) {
    date = input;
  } else {
    throw new Error("Invalid date input");
  }
  const map = {
    yyyy: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    // Mesiace sú indexované od 0
    dd: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
    MMMM: date.toLocaleString("en-US", { month: "long" }),
    // Full month name
    MMM: date.toLocaleString("en-US", { month: "short" })
    // Short month name
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss|MMMM|MMM/g, (matched) => map[matched]);
}
const styles$1 = ".native-timeline {\n    position: relative;\n}\n\n.vertical-line {\n    position: absolute;\n    margin-left: calc(var(--wje-spacing-x-large) + 1px);\n    top: 0;\n    bottom: 0;\n    width: 1px;\n    background-color: var(--wje-color-info-3);\n}\n";
class Timeline extends WJElement {
  /**
   * Creates an instance of Timeline.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     */
    __publicField(this, "className", "Timeline");
  }
  /**
   * Returns the CSS stylesheet for the component.
   * @static
   * @returns {CSSStyleSheet} The CSS stylesheet
   */
  static get cssStyleSheet() {
    return styles$1;
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the component for the timeline.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    const native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-timeline");
    const verticalLine = document.createElement("div");
    verticalLine.setAttribute("part", "vertical-line");
    verticalLine.classList.add("vertical-line");
    const slot = document.createElement("slot");
    native.appendChild(verticalLine);
    native.appendChild(slot);
    fragment.appendChild(native);
    return fragment;
  }
}
Timeline.define("wje-timeline", Timeline);
const styles = ":host {\n    --wje-card-content-padding: var(--wje-spacing-medium);\n    margin-bottom: 0.5rem;\n    display: block;\n}\n\n.native-timeline-item > wje-icon {\n    color: var(--wje-color-contrast-5) !important;\n}\n\n.timeline-items {\n    display: flex;\n    flex-direction: column;\n}\n\n.native-timeline-item {\n    display: flex;\n    position: relative;\n    padding: var(--wje-spacing-medium) var(--wje-spacing-medium) var(--wje-spacing-medium) var(--wje-spacing-large);\n    gap: var(--wje-spacing-medium);\n    border-width: 1px;\n    border-style: solid;\n    border-color: transparent;\n    border-radius: var(--wje-border-radius-large);\n}\n\n:host .native-timeline-item:hover {\n    background-color: var(--wje-color-contrast-1);\n    border-color: var(--wje-color-contrast-3);\n}\n\n:host([active]) .native-timeline-item {\n    background-color: var(--wje-color-primary-1);\n    border-color: var(--wje-color-primary-3);\n}\n\n:host([active]) .native-timeline-item:hover {\n    background-color: var(--wje-color-primary-2);\n}\n\n.icon-container {\n    position: absolute;\n    display: flex;\n    width: var(--wje-size-small);\n    height: var(--wje-size-small);\n    padding: var(--wje-spacing-2x-small);\n    border-radius: var(--wje-border-radius-circle);\n    opacity: 0;\n}\n\n.content-container {\n    height: fit-content;\n    gap: var(--wje-spacing-small);\n}\n\n.event {\n    margin: 0;\n    font-size: var(--wje-font-size-large);\n    font-weight: var(--wje-font-weight-bold);\n    line-height: var(--wje-line-height-dense);\n    letter-spacing: var(--wje-spacing-4x-small);\n}\n\n.additional-content {\n    font-size: var(--wje-font-size-medium);\n    margin-top: 1rem;\n}\n\nwje-status {\n    position: relative;\n    z-index: 1;\n}\n\nwje-relative-time {\n    display: block;\n    margin-bottom: var(--wje-spacing-2x-small);\n}\n";
class TimelineItem extends WJElement {
  constructor() {
    super();
    /**
     * Returns the class name of the tab.
     * @returns {string} The class name of the tab.
     */
    __publicField(this, "className", "TimelineItem");
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.setAttribute("relative-time", "");
  }
  /**
   * Draws the component for the timeline item.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-timeline-item");
    let contentContainer = document.createElement("div");
    contentContainer.setAttribute("part", "content-container");
    contentContainer.classList.add("content-container");
    let tooltip = document.createElement("wje-tooltip");
    tooltip.setAttribute("text", this.getAttribute("tooltip") || "");
    tooltip.setAttribute("position", "top");
    tooltip.setAttribute("content", formatDate(this.datetime, "dd.MM.yyyy HH:mm"));
    let relativeTime = document.createElement("wje-relative-time");
    relativeTime.setAttribute("date", this.datetime || "");
    relativeTime.setAttribute("format", this.getAttribute("format") || "");
    tooltip.appendChild(relativeTime);
    let event2 = document.createElement("h3");
    event2.classList.add("event");
    event2.textContent = this.getAttribute("event") || "";
    let slot = document.createElement("slot");
    let slotStatus = document.createElement("wje-icon");
    slotStatus.setAttribute("name", "circle-dot");
    slotStatus.setAttribute("filled", "");
    slotStatus.setAttribute("part", "default-icon");
    if (this.querySelector('[slot="status"]')) {
      slotStatus = document.createElement("slot");
      slotStatus.setAttribute("name", "status");
    }
    contentContainer.appendChild(tooltip);
    contentContainer.appendChild(event2);
    contentContainer.appendChild(slot);
    native.appendChild(slotStatus);
    native.appendChild(contentContainer);
    fragment.appendChild(native);
    return fragment;
  }
}
TimelineItem.define("wje-timeline-item", TimelineItem);
export {
  default3 as Accordion,
  default4 as AccordionItem,
  default5 as Animation,
  default6 as Aside,
  default7 as Avatar,
  default8 as Badge,
  default9 as Breadcrumb,
  default10 as Breadcrumbs,
  default11 as Button,
  default12 as ButtonGroup,
  default13 as Card,
  default14 as CardContent,
  default15 as CardControls,
  default16 as CardHeader,
  default17 as CardSubtitle,
  default18 as CardTitle,
  default19 as Carousel,
  default20 as CarouselItem,
  default21 as Checkbox,
  default22 as Chip,
  default23 as Col,
  default24 as ColorPicker,
  default25 as Container,
  default26 as CopyButton,
  default27 as Dialog,
  default28 as Divider,
  default29 as Dropdown,
  default30 as FileUpload,
  default31 as FileUploadItem,
  default32 as Footer,
  default33 as FormatDigital,
  default34 as Grid,
  default35 as Header,
  default36 as Icon,
  default37 as IconPicker,
  default38 as Img,
  default39 as ImgComparer,
  I as InfiniteScroll,
  default40 as Input,
  default41 as InputFile,
  default42 as Item,
  default43 as Kanban,
  default44 as Label,
  L as List,
  Localizer,
  default45 as Main,
  default46 as Masonry,
  default47 as Menu,
  default48 as MenuButton,
  default49 as MenuItem,
  default50 as MenuLabel,
  default51 as Option,
  default52 as Options,
  default53 as Orgchart,
  default54 as OrgchartGroup,
  default55 as OrgchartItem,
  P as Popup,
  default56 as ProgressBar,
  default57 as QrCode,
  default58 as Radio,
  default59 as RadioGroup,
  default60 as Rate,
  default61 as RelativeTime,
  default62 as Reorder,
  default63 as ReorderDropzone,
  default64 as ReorderHandle,
  default65 as ReorderItem,
  default66 as Route,
  default68 as RouterLink,
  default69 as RouterOutlet,
  default67 as Routerx,
  default70 as Row,
  default71 as Select,
  default72 as Slider,
  default2 as SlidingContainer,
  default73 as SplitView,
  default74 as Status,
  default75 as Step,
  default76 as Stepper,
  default77 as Tab,
  default78 as TabGroup,
  default79 as TabPanel,
  default80 as Textarea,
  default81 as Thumbnail,
  Timeline,
  TimelineItem,
  default82 as Toast,
  default83 as Toggle,
  default84 as Toolbar,
  default85 as ToolbarAction,
  default86 as Tooltip,
  default87 as VisuallyHidden,
  WJElement,
  WjePermissionsApi,
  b as bindRouterLinks,
  defaultStoreActions,
  event,
  fetchAndParseCSS,
  formatDate,
  store
};
