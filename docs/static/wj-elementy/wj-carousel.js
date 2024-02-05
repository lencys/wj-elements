var g = Object.defineProperty;
var p = (o, a, e) => a in o ? g(o, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[a] = e;
var u = (o, a, e) => (p(o, typeof a != "symbol" ? a + "" : a, e), e);
import v from "./wj-element.js";
import "./wj-store.js";
const b = `/*!
* direction.scss
*/:host{--wj-scroll-hint: 0px;--wj-carousel-width: 100%;--wj-carousel-height: auto}.native-carousel{position:relative;width:var(--wj-carousel-width, 100%);height:var(--wj-carousel-height, 300px);scroll-behavior:smooth}.carousel-slides{display:flex;transition:transform .5s ease;align-items:center;justify-items:center;overflow:auto;overscroll-behavior-x:contain;scrollbar-width:none;-ms-overflow-style:none;aspect-ratio:var(--wj-aspect-ratio, 4/3);scroll-snap-type:x mandatory;scroll-padding-inline:0;overflow-y:hidden;padding-inline:var(--wj-spacing-inline, 0);gap:.5rem}.carousel-slides::-webkit-scrollbar{display:none}::slotted(wj-carousel-item){flex:0 0 var(--wj-carousel-size, 100%);height:100%}wj-button{position:absolute;top:50%;border:none;cursor:pointer;z-index:2}.prev{left:-1rem;transform:translate(-100%,-50%)}.next{right:-.5rem;transform:translate(100%,-50%)}.pagination{position:absolute;bottom:-.5rem;left:50%;transform:translate(-50%,100%);display:flex;z-index:2}.pagination-item{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:var(--wj-color-contrast-4);display:inline-block;border-radius:50%}.pagination-item.active{background-color:var(--wj-color)}.thumbnails{display:flex;justify-content:center;align-items:center;overflow-x:auto;gap:.5rem;padding:0 .5rem;margin-top:.5rem;margin-bottom:.5rem;box-sizing:border-box;overflow-y:hidden}.thumbnails wj-thumbnail{--wj-thumbnail-width: 48px;--wj-thumbnail-height: 48px;--wj-thumbnail-border-radius: 0;cursor:pointer;border:1px solid transparent}.thumbnails .active{border:1px solid var(--wj-color-primary-11)}
`;
class f extends v {
  constructor() {
    super();
    u(this, "className", "Carousel");
    this.activeSlide = 0, this.slidePerPage = 1;
  }
  set activeSlide(e) {
    this.setAttribute("active-slide", e);
  }
  get activeSlide() {
    return +this.getAttribute("active-slide") || 0;
  }
  get pagination() {
    return this.hasAttribute("pagination");
  }
  get navigation() {
    return this.hasAttribute("navigation");
  }
  get thumbnails() {
    return this.hasAttribute("thumbnails");
  }
  get loop() {
    return this.hasAttribute("loop");
  }
  static get cssStyleSheet() {
    return b;
  }
  static get observedAttributes() {
    return ["active-slide"];
  }
  attributeChangedCallback(e, i, n) {
    e === "active-slide" && (this.pagination && this.changePagination(), this.thumbnails && this.changeThumbnails());
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, i, n) {
    let r = document.createDocumentFragment(), t = document.createElement("div");
    t.classList.add("native-carousel");
    let s = document.createElement("div");
    s.classList.add("carousel-slides");
    let l = document.createElement("slot");
    return s.appendChild(l), t.appendChild(s), this.navigation && (t.appendChild(this.createPreviousButton()), t.appendChild(this.createNextButton())), this.pagination && t.appendChild(this.createPagination()), this.thumbnails && t.appendChild(this.createThumbnails()), r.appendChild(t), this.slides = s, this.cloneFirstAndLastItems(), r;
  }
  setIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver((e) => {
      e.forEach((i) => {
        this.entriesMap.set(i.target, i);
      });
    }, {
      root: this.context.querySelector(".carousel-slides"),
      threshold: 0.5
    }), this.entriesMap = /* @__PURE__ */ new Map(), this.records = this.intersectionObserver.takeRecords(), this.records.forEach((e) => {
      this.entriesMap.set(e.target, e);
    });
  }
  afterDraw() {
    this.setIntersectionObserver(), this.getSlidesWithClones().forEach((i, n) => {
      this.intersectionObserver.observe(i);
    }), this.slidePerPage = this.getAttribute("slide-per-page") || 1;
    let e = 100 / +this.slidePerPage;
    this.style.setProperty("--wj-carousel-size", e + "%"), this.goToSlide(this.activeSlide, "auto"), this.slides.addEventListener("scrollend", (i) => {
      const n = this.getSlides(), t = [...this.entriesMap.values()].find((s) => s.isIntersecting);
      if (t != null && t.target.classList.contains("clone")) {
        const s = t.target.getAttribute("clone-index");
        this.activeSlide = s, this.goToSlide(+s, "auto");
      } else if (t) {
        let s = n.indexOf(t.target);
        this.activeSlide = s;
      }
    });
  }
  goToSlide(e, i = "smooth", n = !0) {
    const r = this.getSlides(), t = this.getSlidesWithClones();
    t.forEach((m, S) => {
      m.classList.remove("active");
    });
    let s = this.loop ? (e + r.length) % r.length : Math.min(Math.max(e, 0), r.length - 1);
    this.activeSlide = s;
    const l = Math.min(Math.max(e + (this.loop ? this.slidePerPage : 0), 0), t.length - 1), c = this.getSlidesWithClones()[l];
    c.classList.add("active");
    let d = c.getBoundingClientRect(), h = this.slides.getBoundingClientRect();
    this.slides.scrollTo({
      left: d.left - h.left + this.slides.scrollLeft,
      top: d.top - h.top + this.slides.scrollTop,
      behavior: i === "smooth" ? "smooth" : "auto"
    });
  }
  cloneFirstAndLastItems() {
    const e = this.getSlides();
    if (e.length && this.loop) {
      const i = e[0].cloneNode(!0);
      i.classList.add("clone"), i.setAttribute("clone-index", 0), this.appendChild(i);
      const n = e[e.length - 1].cloneNode(!0);
      n.classList.add("clone"), n.setAttribute("clone-index", e.length - 1), this.insertBefore(n, this.firstChild);
    }
  }
  removeActiveSlide() {
    this.getSlidesWithClones().forEach((e, i) => {
      e.classList.remove("active");
    }), this.pagination && this.context.querySelectorAll(".pagination-item").forEach((e) => {
      e.classList.remove("active");
    }), this.thumbnails && this.context.querySelectorAll("wj-thumbnail").forEach((e) => {
      e.classList.remove("active");
    });
  }
  changePagination() {
    this.pagination && (this.removeActiveSlide(), this.context.querySelectorAll(".pagination-item").forEach((e, i) => {
      i === this.activeSlide && e.classList.add("active");
    }));
  }
  changeThumbnails() {
    this.thumbnails && (this.removeActiveSlide(), this.context.querySelectorAll("wj-thumbnail").forEach((e, i) => {
      i === this.activeSlide && e.classList.add("active");
    }));
  }
  createNextButton() {
    const e = document.createElement("wj-button");
    return e.classList.add("next"), e.innerHTML = '<wj-icon name="chevron-right" size="large"></wj-icon', e.setAttribute("circle", ""), e.setAttribute("fill", "link"), e.addEventListener("click", (i) => {
      this.nextSlide();
    }), e;
  }
  createPreviousButton() {
    const e = document.createElement("wj-button");
    return e.classList.add("prev"), e.innerHTML = '<wj-icon name="chevron-left" size="large"></wj-icon', e.setAttribute("circle", ""), e.setAttribute("fill", "link"), e.addEventListener("click", (i) => {
      this.previousSlide();
    }), e;
  }
  createPagination() {
    const e = document.createElement("div");
    return e.classList.add("pagination"), this.getSlides().forEach((n, r) => {
      const t = document.createElement("div");
      t.classList.add("pagination-item"), t.addEventListener("click", (s) => {
        this.removeActiveSlide(), s.target.classList.add("active"), this.goToSlide(r);
      }), e.appendChild(t);
    }), e;
  }
  createThumbnails() {
    const e = document.createElement("div");
    return e.classList.add("thumbnails"), this.getSlides().forEach((n, r) => {
      const t = document.createElement("wj-thumbnail");
      t.innerHTML = `<img src="${n.querySelector("wj-img").getAttribute("src")}"></img>`, t.addEventListener("click", (s) => {
        this.removeActiveSlide(), s.target.closest("wj-thumbnail").classList.add("active"), this.goToSlide(r);
      }), e.appendChild(t);
    }), e;
  }
  nextSlide() {
    this.goToSlide(this.activeSlide + this.slidePerPage);
  }
  previousSlide() {
    this.goToSlide(this.activeSlide - this.slidePerPage);
  }
  getSlides() {
    return Array.from(this.querySelectorAll("wj-carousel-item:not(.clone)"));
  }
  getSlidesWithClones() {
    return Array.from(this.querySelectorAll("wj-carousel-item"));
  }
  canGoNext() {
    return this.querySelector(".native-carousel").scrollLeft < this.querySelector(".native-carousel").scrollWidth;
  }
  canGoPrevious() {
    return this.querySelector(".native-carousel").scrollLeft > 0;
  }
}
customElements.get("wj-carousel") || window.customElements.define("wj-carousel", f);
export {
  f as Carousel
};
