var g = Object.defineProperty;
var x = (d, e, t) => (e in d ? g(d, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (d[e] = t));
var l = (d, e, t) => (x(d, typeof e != 'symbol' ? e + '' : e, t), t);
import f, { WjElementUtils as v } from './wje-element.js';
import { event as j } from './wje-element.js';
import { defaultStoreActions as k, store as N } from './wje-store.js';
import { b as z, w as B } from './router-links-FtZbFUto.js';
import { fetchAndParseCSS as F } from './wje-fetchAndParseCSS.js';
import { L as h } from './localize-7fxVJArK.js';
import { default as q } from './wje-accordion.js';
import { default as V } from './wje-accordion-item.js';
import { default as H } from './wje-animation.js';
import { default as K } from './wje-aside.js';
import { default as $ } from './wje-avatar.js';
import { default as Q } from './wje-badge.js';
import { default as X } from './wje-breadcrumb.js';
import { default as ee } from './wje-breadcrumbs.js';
import { default as re } from './wje-button.js';
import { default as ae } from './wje-button-group.js';
import { default as ne } from './wje-card.js';
import { default as ie } from './wje-card-content.js';
import { default as fe } from './wje-card-controls.js';
import { default as pe } from './wje-card-header.js';
import { default as me } from './wje-card-subtitle.js';
import { default as ge } from './wje-card-title.js';
import { default as ve } from './wje-carousel.js';
import { default as we } from './wje-carousel-item.js';
import { default as Ee } from './wje-checkbox.js';
import { default as Le } from './wje-chip.js';
import { default as De } from './wje-col.js';
import { default as Re } from './wje-color-picker.js';
import { default as je } from './wje-container.js';
import { default as ke } from './wje-copy-button.js';
import { default as Oe } from './wje-dialog.js';
import { default as Be } from './wje-divider.js';
import { default as Fe } from './wje-dropdown.js';
import { default as qe } from './wje-file-upload.js';
import { default as Ve } from './wje-file-upload-item.js';
import { default as He } from './wje-footer.js';
import { default as Ke } from './wje-format-digital.js';
import { default as $e } from './wje-grid.js';
import { default as Qe } from './wje-header.js';
import { default as Xe } from './wje-icon.js';
import { default as et } from './wje-icon-picker.js';
import { default as rt } from './wje-img.js';
import { default as at } from './wje-img-comparer.js';
import { default as nt } from './wje-infinite-scroll.js';
import { default as it } from './wje-inline-edit.js';
import { default as ft } from './wje-input.js';
import { default as pt } from './wje-input-file.js';
import { default as mt } from './wje-item.js';
import { default as gt } from './wje-label.js';
import { default as vt } from './wje-list.js';
import { default as wt } from './wje-main.js';
import { default as Et } from './wje-masonry.js';
import { default as Lt } from './wje-menu.js';
import { default as Dt } from './wje-menu-button.js';
import { default as Rt } from './wje-menu-item.js';
import { default as jt } from './wje-menu-label.js';
import { default as kt } from './wje-option.js';
import { default as Ot } from './wje-options.js';
import './wje-popup.js';
import { default as Bt } from './wje-progress-bar.js';
import { default as Ft } from './wje-qr-code.js';
import { default as qt } from './wje-radio.js';
import { default as Vt } from './wje-radio-group.js';
import { default as Ht } from './wje-rate.js';
import { default as Kt } from './wje-relative-time.js';
import { default as $t } from './wje-route.js';
import { default as Qt } from './wje-routerx.js';
import { default as Xt } from './wje-router-link.js';
import { default as er } from './wje-router-outlet.js';
import { default as rr } from './wje-row.js';
import { default as ar } from './wje-select.js';
import { default as nr } from './wje-slider.js';
import { default as ir } from './wje-split-view.js';
import { default as fr } from './wje-tab.js';
import { default as pr } from './wje-tab-group.js';
import { default as mr } from './wje-tab-panel.js';
import { default as gr } from './wje-textarea.js';
import { default as vr } from './wje-thumbnail.js';
import { default as wr } from './wje-toast.js';
import { default as Er } from './wje-toggle.js';
import { default as Lr } from './wje-toolbar.js';
import { default as Dr } from './wje-toolbar-action.js';
import { default as Rr } from './wje-tooltip.js';
import { default as jr } from './wje-visually-hidden.js';
import { P as kr } from './popup.element-BFIsYEbU.js';
const b = {
  code: 'sk',
  name: 'Slovak',
  dir: 'ltr',
  welcome: 'Vitajte',
  'wj.file.upload.button': 'Vybrať súbor',
  'wj.file.upload.uploaded': 'Nahraných: ',
  'wj.file.upload.from': 'z',
};
h.registerTranslation(b);
const w = {
  code: 'en',
  name: 'English',
  dir: 'ltr',
  welcome: 'Welcome',
  'wj.file.upload.button': 'Browse files',
  'wj.file.upload.uploaded': 'Uploaded: ',
  'wj.file.upload.from': 'from',
};
h.registerTranslation(w);
const A =
  '.container{position:relative;display:flex;align-items:center;justify-content:center;flex-direction:var(--flex-direction)}.container-w-dropzones{position:relative;display:flex;align-items:center;justify-content:center;flex-direction:row}.reversed{--flex-direction: column-reverse}.basic{--flex-direction: column}';
class p extends f {
  constructor() {
    super(), (this.className = 'Reorder'), (this.dragEl = null), (this.items = []), (this.originalIndex = null);
  }
  static get cssStyleSheet() {
    return A;
  }
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  draw(e, t, o) {
    const n = document.createDocumentFragment(),
      a = document.createElement('div');
    a.classList.add('container'), a.setAttribute('part', 'native');
    const r = document.createElement('slot');
    return r.classList.add('reorder-items'), a.appendChild(r), n.appendChild(a), (this.container = a), n;
  }
  afterDraw(e, t, o) {
    const n = this.querySelectorAll('wje-reorder-item'),
      a = this.querySelectorAll('wje-reorder-dropzone');
    a &&
      a.forEach((r) => {
        this.container.classList.remove('container'), this.container.classList.add('container-w-dropzones');
      }),
      n &&
        n.forEach((r) => {
          const s = r.querySelectorAll('[slot=handle]');
          (s.length > 0 ? s : [r]).forEach((c) => {
            c.setAttribute('draggable', 'true'), this.attachEventListeners(c);
          });
        }),
      this.hasAttribute('reverse') ? this.container.classList.add('reversed') : this.container.classList.add('basic');
  }
  onDragStart(e) {
    if (this.hasAttribute('disabled')) {
      e.preventDefault();
      return;
    }
    const t = new Image();
    (t.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII='),
      e.dataTransfer.setDragImage(t, 0, 0),
      (this.dragEl = e.currentTarget.closest('wje-reorder-item')),
      (e.dataTransfer.effectAllowed = 'move'),
      e.dataTransfer.setData('text/html', `${this.dragEl.innerHTML}`),
      (this.originalIndex = [...this.dragEl.parentNode.children].indexOf(this.dragEl)),
      (this.originalParent = this.dragEl.parentNode);
  }
  onDragOver(e) {
    e.preventDefault();
    const t = e.currentTarget.closest('wje-reorder-item'),
      o = t.parentNode;
    this.dragEl !== t
      ? (this.updateDropStyles(t, this.isMovingDown(e)), this.updateItemsPosition(o, t, this.isMovingDown(e)))
      : t.shadowRoot.querySelector('div').classList.add('moving');
  }
  onDragEnter(e) {}
  onDragLeave(e) {}
  onDrop(e) {
    e.preventDefault();
    const t = e.currentTarget.closest('wje-reorder-item');
    if ((t.shadowRoot.querySelector('div').classList.remove('moving'), !t.parentNode)) return;
    t.parentNode.insertBefore(this.dragEl, t);
  }
  onDragEnd(e) {
    const t = this.dragEl.parentNode,
      o = Array.from(t.children).indexOf(this.dragEl);
    [t, this.originalParent].forEach((a) => {
      a.childNodes.forEach((r) => {
        if (r.nodeType === 1) {
          const s = r.shadowRoot.querySelector('div');
          s && ['drag--up', 'drag--down', 'moving'].forEach((i) => s.classList.remove(i));
        }
      });
    });
    const n = Array.from(t.children).map((a) => {
      const r = a.cloneNode(!0),
        s = r.querySelector('.handle');
      return s && s.remove(), r.innerText.trim();
    });
    this.dispatchChange(this.originalIndex, o, n);
  }
  attachEventListeners(e) {
    e.addEventListener('dragstart', this.onDragStart.bind(this), !1),
      e.addEventListener('touchstart', this.onDragStart.bind(this), !1),
      e.addEventListener('dragenter', this.onDragEnter.bind(this), !1),
      e.addEventListener('dragover', this.onDragOver.bind(this), !1),
      e.addEventListener('dragleave', this.onDragLeave.bind(this), !1),
      e.addEventListener('drop', this.onDrop.bind(this), !1),
      e.addEventListener('dragend', this.onDragEnd.bind(this), !1),
      e.addEventListener('touchend', this.onDragEnd.bind(this), !1);
  }
  updateDropStyles(e, t) {
    const o = e.shadowRoot.querySelector('div').classList;
    o.toggle('drag--down', t), o.toggle('drag--up', !t);
  }
  updateItemsPosition(e, t, o) {
    e.insertBefore(this.dragEl, o ? t.nextSibling : t);
  }
  isMovingDown(e) {
    const t = e.currentTarget.closest('wje-reorder-item').parentNode,
      o = Array.from(t.children).indexOf(this.dragEl),
      n = Array.from(t.children).indexOf(e.currentTarget.closest('wje-reorder-item'));
    return o < n;
  }
  dispatchChange(e, t, o) {
    console.log('FROM:', e),
      console.log('TO:', t),
      console.log('ORDER:', o),
      this.dispatchEvent(
        new CustomEvent('wje-reorder:change', {
          detail: { from: e, to: t, order: o },
        })
      );
  }
}
p.define('wje-reorder', p);
const E =
  ':host{--reorder-background-color: var(--wje-color-contrast-lowest);--reorder-item-spacing: .5rem}.item{width:134px;height:19px;display:flex;align-items:center;justify-content:center;position:relative;gap:var(--reorder-item-spacing);padding:var(--reorder-item-spacing);border-radius:var(--wje-border-radius-small);background-color:--reorder-background-color;cursor:grab;transition:transform .3s linear}.item-w-handle{cursor:default}.item:hover:not(.item-w-handle){background-color:#f4f4f5}.item:active:not(.item-w-handle):not(.moving){background-color:--reorder-background-color;cursor:grabbing}.moving{background-color:#d3d3d3}.handle{cursor:grab;gap:10px}.handle:active{cursor:grabbing}.name{width:108px;height:19px;text-align:center;font-size:var(--wje-font-size-medium);font-weight:400;line-height:19.36px;gap:10px}.drag--down{--item-transform: translateY(-5px)}.drag--up{--item-transform: translateY(5px)}.item{transform:var(--item-transform)}';
class u extends f {
  constructor() {
    super();
    l(this, 'className', 'ReorderItem');
  }
  static get cssStyleSheet() {
    return E;
  }
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  draw(t, o, n) {
    let a = document.createDocumentFragment(),
      r = document.createElement('div');
    r.classList.add('item'), r.setAttribute('part', 'native-reorder-item');
    let s = document.createElement('slot');
    if ((s.classList.add('name'), v.hasSlot(this, 'handle'))) {
      const i = document.createElement('slot');
      i.classList.add('handle'),
        r.classList.add('item-w-handle'),
        i.setAttribute('name', 'handle'),
        i.setAttribute('part', 'handle-part'),
        r.appendChild(i);
    } else s.setAttribute('draggable', 'true');
    return r.appendChild(s), a.appendChild(r), a;
  }
}
u.define('wje-reorder-item', u);
const S =
  '.dropzone{border:1px dashed lightgrey;border-radius:var(--wje-border-radius-small);margin:.5rem;display:flex;flex-direction:column;align-items:center;overflow:hidden;justify-content:center;min-height:250px}';
class m extends f {
  constructor() {
    super();
    l(this, 'className', 'ReorderDropzone');
  }
  static get cssStyleSheet() {
    return S;
  }
  setupAttributes() {
    this.isShadowRoot = 'open';
  }
  draw(t, o, n) {
    let a = document.createDocumentFragment(),
      r = document.createElement('div');
    r.classList.add('dropzone');
    let s = document.createElement('slot');
    return r.appendChild(s), a.appendChild(r), a;
  }
}
m.define('wje-reorder-dropzone', m);
export {
  q as Accordion,
  V as AccordionItem,
  H as Animation,
  K as Aside,
  $ as Avatar,
  Q as Badge,
  X as Breadcrumb,
  ee as Breadcrumbs,
  re as Button,
  ae as ButtonGroup,
  ne as Card,
  ie as CardContent,
  fe as CardControls,
  pe as CardHeader,
  me as CardSubtitle,
  ge as CardTitle,
  ve as Carousel,
  we as CarouselItem,
  Ee as Checkbox,
  Le as Chip,
  De as Col,
  Re as ColorPicker,
  je as Container,
  ke as CopyButton,
  Oe as Dialog,
  Be as Divider,
  Fe as Dropdown,
  qe as FileUpload,
  Ve as FileUploadItem,
  He as Footer,
  Ke as FormatDigital,
  $e as Grid,
  Qe as Header,
  Xe as Icon,
  et as IconPicker,
  rt as Img,
  at as ImgComparer,
  nt as InfiniteScroll,
  it as InlineEdit,
  ft as Input,
  pt as InputFile,
  mt as Item,
  gt as Label,
  vt as List,
  h as Localizer,
  wt as Main,
  Et as Masonry,
  Lt as Menu,
  Dt as MenuButton,
  Rt as MenuItem,
  jt as MenuLabel,
  kt as Option,
  Ot as Options,
  kr as Popup,
  Bt as ProgressBar,
  Ft as QrCode,
  qt as Radio,
  Vt as RadioGroup,
  Ht as Rate,
  Kt as RelativeTime,
  p as Reorder,
  m as ReorderDropzone,
  u as ReorderItem,
  $t as Route,
  Xt as RouterLink,
  er as RouterOutlet,
  Qt as Routerx,
  rr as Row,
  ar as Select,
  nr as Slider,
  ir as SplitView,
  fr as Tab,
  pr as TabGroup,
  mr as TabPanel,
  gr as Textarea,
  vr as Thumbnail,
  wr as Toast,
  Er as Toggle,
  Lr as Toolbar,
  Dr as ToolbarAction,
  Rr as Tooltip,
  jr as VisuallyHidden,
  f as WJElement,
  z as bindRouterLinks,
  k as defaultStoreActions,
  j as event,
  F as fetchAndParseCSS,
  N as store,
  B as withRouterLinks,
};
