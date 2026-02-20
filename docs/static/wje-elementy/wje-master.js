var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { b } from "./router-links-CJnOdbas.js";
import { Localizer } from "./localize.js";
import { Permissions } from "./permissions.js";
import { UniversalService } from "./universal-service.js";
import { fetchAndParseCSS } from "./animations.js";
import { getBasePath, setBasePath } from "./base-path.js";
import { formatDate } from "./date.js";
import { toSafeDate } from "./date.js";
import { I, r, u } from "./icon-DVyMc4Wv.js";
import { event } from "./event.js";
import { default as default2 } from "./wje-accordion.js";
import { default as default3 } from "./wje-accordion-item.js";
import { default as default4 } from "./wje-animation.js";
import { default as default5 } from "./wje-aside.js";
import { default as default6 } from "./wje-avatar.js";
import { default as default7 } from "./wje-badge.js";
import { default as default8 } from "./wje-breadcrumb.js";
import { default as default9 } from "./wje-breadcrumbs.js";
import { default as default10 } from "./wje-button.js";
import { default as default11 } from "./wje-button-group.js";
import { default as default12 } from "./wje-card.js";
import { default as default13 } from "./wje-card-content.js";
import { default as default14 } from "./wje-card-controls.js";
import { default as default15 } from "./wje-card-header.js";
import { default as default16 } from "./wje-card-subtitle.js";
import { default as default17 } from "./wje-card-title.js";
import { default as default18 } from "./wje-carousel.js";
import { default as default19 } from "./wje-carousel-item.js";
import { default as default20 } from "./wje-checkbox.js";
import { default as default21 } from "./wje-chip.js";
import { default as default22 } from "./wje-col.js";
import { default as default23 } from "./wje-color-picker.js";
import { default as default24 } from "./wje-container.js";
import { default as default25 } from "./wje-copy-button.js";
import { default as default26 } from "./wje-dialog.js";
import { default as default27 } from "./wje-divider.js";
import { default as default28 } from "./wje-dropdown.js";
import WJElement from "./wje-element.js";
import { default as default29 } from "./wje-file-upload.js";
import { default as default30 } from "./wje-file-upload-item.js";
import { default as default31 } from "./wje-footer.js";
import { default as default32 } from "./wje-format-digital.js";
import { default as default33 } from "./wje-grid.js";
import { default as default34 } from "./wje-header.js";
import { default as default35 } from "./wje-icon-picker.js";
import { default as default36 } from "./wje-img.js";
import { default as default37 } from "./wje-img-comparer.js";
import { default as default38 } from "./wje-infinite-scroll.js";
import { default as default39 } from "./wje-input.js";
import { default as default40 } from "./wje-input-file.js";
import { default as default41 } from "./wje-item.js";
import { default as default42 } from "./wje-kanban.js";
import { default as default43 } from "./wje-label.js";
import { default as default44 } from "./wje-level-indicator.js";
import { default as default45 } from "./wje-list.js";
import { default as default46 } from "./wje-main.js";
import { default as default47 } from "./wje-masonry.js";
import { default as default48 } from "./wje-menu.js";
import { default as default49 } from "./wje-menu-button.js";
import { default as default50 } from "./wje-menu-item.js";
import { default as default51 } from "./wje-menu-label.js";
import { default as default52 } from "./wje-option.js";
import { default as default53 } from "./wje-options.js";
import { default as default54 } from "./wje-orgchart.js";
import { default as default55 } from "./wje-orgchart-group.js";
import { default as default56 } from "./wje-orgchart-item.js";
import { default as default57 } from "./wje-pagination.js";
import "./wje-popup.js";
import { default as default58 } from "./wje-progress-bar.js";
import { default as default59 } from "./wje-qr-code.js";
import { default as default60 } from "./wje-radio.js";
import { default as default61 } from "./wje-radio-group.js";
import { default as default62 } from "./wje-rate.js";
import { default as default63 } from "./wje-relative-time.js";
import { default as default64 } from "./wje-reorder.js";
import { default as default65 } from "./wje-reorder-dropzone.js";
import { default as default66 } from "./wje-reorder-handle.js";
import { default as default67 } from "./wje-reorder-item.js";
import { default as default68 } from "./wje-route.js";
import { default as default69 } from "./wje-routerx.js";
import { default as default70 } from "./wje-router-link.js";
import { default as default71 } from "./wje-router-outlet.js";
import { default as default72 } from "./wje-row.js";
import { default as default73 } from "./wje-select.js";
import { default as default74 } from "./wje-slider.js";
import { default as default75 } from "./wje-sliding-container.js";
import { default as default76 } from "./wje-split-view.js";
import { default as default77 } from "./wje-status.js";
import { default as default78 } from "./wje-step.js";
import { default as default79 } from "./wje-stepper.js";
import { defaultStoreActions, store } from "./wje-store.js";
import { default as default80 } from "./wje-tab.js";
import { default as default81 } from "./wje-tab-group.js";
import { default as default82 } from "./wje-tab-panel.js";
import { default as default83 } from "./wje-textarea.js";
import { default as default84 } from "./wje-thumbnail.js";
import { default as default85 } from "./wje-toast.js";
import { default as default86 } from "./wje-toggle.js";
import { default as default87 } from "./wje-toolbar.js";
import { default as default88 } from "./wje-toolbar-action.js";
import { default as default89 } from "./wje-tooltip.js";
import { default as default90 } from "./wje-tree.js";
import { default as default91 } from "./wje-tree-item.js";
import { default as default92 } from "./wje-visually-hidden.js";
import { P } from "./popup.element-Cl6QeG8M.js";
const skSk = {
  code: "sk-sk",
  name: "Slovak",
  dir: "ltr",
  welcome: "Vitajte",
  "wj.file.upload.button": "Vybrať súbor",
  "wj.file.upload.uploaded": "Nahraných: ",
  "wj.file.upload.from": "z",
  "wj.stepper.button.next": "Ďalej",
  "wj.stepper.button.finish": "Dokončiť",
  "wj.stepper.button.previous": "Späť",
  "wj.stepper.step": "Krok"
};
Localizer.registerTranslation(skSk);
const enGb = {
  code: "en-gb",
  name: "English",
  dir: "ltr",
  welcome: "Welcome",
  "wj.file.upload.button": "Browse files",
  "wj.file.upload.uploaded": "Uploaded: ",
  "wj.file.upload.from": "from",
  "wj.stepper.button.next": "Next",
  "wj.stepper.button.finish": "Finish",
  "wj.stepper.button.previous": "Previous",
  "wj.stepper.step": "Step",
  "wj.pagination.of": "of",
  "wj.pagination.first": "First page",
  "wj.pagination.prev": "Previous",
  "wj.pagination.next": "Next",
  "wj.pagination.last": "Last page"
};
Localizer.registerTranslation(enGb);
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
    this.syncAria();
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
  /**
   * Sync ARIA attributes on host.
   */
  syncAria() {
    if (!this.hasAttribute("role")) {
      this.setAriaState({ role: "list" });
    }
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
  default2 as Accordion,
  default3 as AccordionItem,
  default4 as Animation,
  default5 as Aside,
  default6 as Avatar,
  default7 as Badge,
  default8 as Breadcrumb,
  default9 as Breadcrumbs,
  default10 as Button,
  default11 as ButtonGroup,
  default12 as Card,
  default13 as CardContent,
  default14 as CardControls,
  default15 as CardHeader,
  default16 as CardSubtitle,
  default17 as CardTitle,
  default18 as Carousel,
  default19 as CarouselItem,
  default20 as Checkbox,
  default21 as Chip,
  default22 as Col,
  default23 as ColorPicker,
  default24 as Container,
  default25 as CopyButton,
  default26 as Dialog,
  default27 as Divider,
  default28 as Dropdown,
  default29 as FileUpload,
  default30 as FileUploadItem,
  default31 as Footer,
  default32 as FormatDigital,
  default33 as Grid,
  default34 as Header,
  I as Icon,
  default35 as IconPicker,
  default36 as Img,
  default37 as ImgComparer,
  default38 as InfiniteScroll,
  default39 as Input,
  default40 as InputFile,
  default41 as Item,
  default42 as Kanban,
  default43 as Label,
  default44 as LevelIndicator,
  default45 as List,
  Localizer,
  default46 as Main,
  default47 as Masonry,
  default48 as Menu,
  default49 as MenuButton,
  default50 as MenuItem,
  default51 as MenuLabel,
  default52 as Option,
  default53 as Options,
  default54 as Orgchart,
  default55 as OrgchartGroup,
  default56 as OrgchartItem,
  default57 as Pagination,
  Permissions,
  P as Popup,
  default58 as ProgressBar,
  default59 as QrCode,
  default60 as Radio,
  default61 as RadioGroup,
  default62 as Rate,
  default63 as RelativeTime,
  default64 as Reorder,
  default65 as ReorderDropzone,
  default66 as ReorderHandle,
  default67 as ReorderItem,
  default68 as Route,
  default70 as RouterLink,
  default71 as RouterOutlet,
  default69 as Routerx,
  default72 as Row,
  default73 as Select,
  default74 as Slider,
  default75 as SlidingContainer,
  default76 as SplitView,
  default77 as Status,
  default78 as Step,
  default79 as Stepper,
  default80 as Tab,
  default81 as TabGroup,
  default82 as TabPanel,
  default83 as Textarea,
  default84 as Thumbnail,
  Timeline,
  TimelineItem,
  default85 as Toast,
  default86 as Toggle,
  default87 as Toolbar,
  default88 as ToolbarAction,
  default89 as Tooltip,
  default90 as Tree,
  default91 as TreeItem,
  UniversalService,
  default92 as VisuallyHidden,
  WJElement,
  b as bindRouterLinks,
  defaultStoreActions,
  enGb,
  event,
  fetchAndParseCSS,
  formatDate,
  getBasePath,
  r as registerIconLibrary,
  setBasePath,
  skSk,
  store,
  toSafeDate,
  u as unregisterIconLibrary
};
//# sourceMappingURL=wje-master.js.map
