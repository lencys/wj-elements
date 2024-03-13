var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Carousel ]\n*/\n:host {\n  --wj-scroll-hint: 0px;\n  --wj-carousel-width: 100%;\n  --wj-carousel-height: auto;\n}\n.native-carousel {\n  position: relative;\n  width: var(--wj-carousel-width, 100%);\n  height: var(--wj-carousel-height, 300px);\n  scroll-behavior: smooth;\n}\n.carousel-slides {\n  display: flex;\n  transition: transform 0.5s ease;\n  align-items: center;\n  justify-items: center;\n  overflow: auto;\n  overscroll-behavior-x: contain;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  aspect-ratio: var(--wj-aspect-ratio, 4/3);\n  scroll-snap-type: x mandatory;\n  scroll-padding-inline: 0;\n  overflow-y: hidden;\n  padding-inline: var(--wj-spacing-inline, 0);\n  gap: 0.5rem;\n}\n.carousel-slides::-webkit-scrollbar {\n  display: none;\n}\n::slotted(wj-carousel-item) {\n  flex: 0 0 var(--wj-carousel-size, 100%);\n  height: 100%;\n}\nwj-button {\n  position: absolute;\n  top: 50%;\n  border: none;\n  cursor: pointer;\n  z-index: 2;\n}\n.prev {\n  left: -1rem;\n  transform: translate(-100%, -50%);\n}\n.next {\n  right: -0.5rem;\n  transform: translate(100%, -50%);\n}\n.pagination {\n  position: absolute;\n  bottom: -0.5rem;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  display: flex;\n  z-index: 2;\n}\n.pagination-item {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: var(--wj-color-contrast-4);\n  display: inline-block;\n  border-radius: 50%;\n}\n.pagination-item.active {\n  background-color: var(--wj-color);\n}\n.thumbnails {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow-x: auto;\n  gap: 0.5rem;\n  padding: 0 0.5rem;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  box-sizing: border-box;\n  overflow-y: hidden;\n}\n.thumbnails wj-thumbnail {\n  --wj-thumbnail-width: 48px;\n  --wj-thumbnail-height: 48px;\n  --wj-thumbnail-border-radius: 0;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.thumbnails .active {\n  border: 1px solid var(--wj-color-primary-11);\n}";
class Carousel extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Carousel");
    this.slidePerPage = 1;
  }
  set activeSlide(value) {
    this.setAttribute("active-slide", value);
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
    return styles;
  }
  static get observedAttributes() {
    return ["active-slide"];
  }
  attributeChangedCallback(name, old, newName) {
    if (name === "active-slide") {
      if (this.pagination)
        this.changePagination();
      if (this.thumbnails)
        this.changeThumbnails();
    }
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(context, store, params) {
    this.cloneFirstAndLastItems();
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-carousel");
    let slides = document.createElement("div");
    slides.classList.add("carousel-slides");
    let slot = document.createElement("slot");
    slides.appendChild(slot);
    native.appendChild(slides);
    if (this.navigation) {
      native.appendChild(this.createPreviousButton());
      native.appendChild(this.createNextButton());
    }
    if (this.pagination)
      native.appendChild(this.createPagination());
    if (this.thumbnails)
      native.appendChild(this.createThumbnails());
    fragment.appendChild(native);
    this.slides = slides;
    return fragment;
  }
  afterDraw() {
    this.setIntersectionObserver();
    this.getSlidesWithClones().forEach((slide, i) => {
      this.intersectionObserver.observe(slide);
    });
    this.slidePerPage = this.getAttribute("slide-per-page") || 1;
    let carouselSize = 100 / +this.slidePerPage;
    this.style.setProperty("--wj-carousel-size", carouselSize + "%");
    this.goToSlide(this.activeSlide, "auto");
    this.slides.addEventListener("scrollend", (e) => {
      const slides = this.getSlides();
      const entries = [...this.entriesMap.values()];
      const visibleEntries = entries.find((entry) => entry.isIntersecting);
      if (visibleEntries == null ? void 0 : visibleEntries.target.classList.contains("clone")) {
        const cloneIndex = visibleEntries.target.getAttribute("clone-index");
        this.activeSlide = cloneIndex;
        this.goToSlide(+cloneIndex, "auto");
      } else if (visibleEntries) {
        let slideIndex = slides.indexOf(visibleEntries.target);
        this.activeSlide = slideIndex;
      }
    });
  }
  setIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.entriesMap.set(entry.target, entry);
      });
    }, {
      root: this.context.querySelector(".carousel-slides"),
      threshold: 0.5
    });
    this.entriesMap = /* @__PURE__ */ new Map();
    this.records = this.intersectionObserver.takeRecords();
    this.records.forEach((entry) => {
      this.entriesMap.set(entry.target, entry);
    });
  }
  goToSlide(index, behavior = "smooth", next = true) {
    const slides = this.getSlides();
    const slideWithClones = this.getSlidesWithClones();
    slideWithClones.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    let newActiveSlide = this.loop ? (index + slides.length) % slides.length : Math.min(Math.max(index, 0), slides.length - 1);
    this.activeSlide = newActiveSlide;
    const nextSlideIndex = Math.min(Math.max(index + (this.loop ? this.slidePerPage : 0), 0), slideWithClones.length - 1);
    const nextSlideEl = this.getSlidesWithClones()[nextSlideIndex];
    nextSlideEl.classList.add("active");
    let nextSlideRect = nextSlideEl.getBoundingClientRect();
    let slidesContainerRect = this.slides.getBoundingClientRect();
    this.slides.scrollTo({
      left: nextSlideRect.left - slidesContainerRect.left + this.slides.scrollLeft,
      top: nextSlideRect.top - slidesContainerRect.top + this.slides.scrollTop,
      behavior: behavior === "smooth" ? "smooth" : "auto"
    });
  }
  cloneFirstAndLastItems() {
    const items = this.getSlides();
    if (items.length && this.loop) {
      const firstItemClone = items[0].cloneNode(true);
      firstItemClone.classList.add("clone");
      firstItemClone.setAttribute("clone-index", 0);
      this.appendChild(firstItemClone);
      const lastItemClone = items[items.length - 1].cloneNode(true);
      lastItemClone.classList.add("clone");
      lastItemClone.setAttribute("clone-index", items.length - 1);
      this.insertBefore(lastItemClone, this.firstChild);
    }
  }
  removeActiveSlide() {
    this.getSlidesWithClones().forEach((slide, i) => {
      slide.classList.remove("active");
    });
    if (this.pagination) {
      this.context.querySelectorAll(".pagination-item").forEach((item) => {
        item.classList.remove("active");
      });
    }
    if (this.thumbnails) {
      this.context.querySelectorAll("wj-thumbnail").forEach((item) => {
        item.classList.remove("active");
      });
    }
  }
  changePagination() {
    if (this.pagination) {
      this.removeActiveSlide();
      this.context.querySelectorAll(".pagination-item").forEach((item, i) => {
        if (i === this.activeSlide) {
          item.classList.add("active");
        }
      });
    }
  }
  changeThumbnails() {
    if (this.thumbnails) {
      this.removeActiveSlide();
      this.context.querySelectorAll("wj-thumbnail").forEach((item, i) => {
        if (i === this.activeSlide) {
          item.classList.add("active");
        }
      });
    }
  }
  createNextButton() {
    const nextButton = document.createElement("wj-button");
    nextButton.classList.add("next");
    nextButton.innerHTML = '<wj-icon name="chevron-right" size="large"></wj-icon';
    nextButton.setAttribute("circle", "");
    nextButton.setAttribute("fill", "link");
    nextButton.addEventListener("click", (e) => {
      this.nextSlide();
    });
    return nextButton;
  }
  createPreviousButton() {
    const previousButton = document.createElement("wj-button");
    previousButton.classList.add("prev");
    previousButton.innerHTML = '<wj-icon name="chevron-left" size="large"></wj-icon';
    previousButton.setAttribute("circle", "");
    previousButton.setAttribute("fill", "link");
    previousButton.addEventListener("click", (e) => {
      this.previousSlide();
    });
    return previousButton;
  }
  createPagination() {
    const pagination = document.createElement("div");
    pagination.classList.add("pagination");
    const slides = this.getSlides();
    slides.forEach((slide, i) => {
      const paginationItem = document.createElement("div");
      paginationItem.classList.add("pagination-item");
      paginationItem.addEventListener("click", (e) => {
        this.removeActiveSlide();
        e.target.classList.add("active");
        this.goToSlide(i);
      });
      pagination.appendChild(paginationItem);
    });
    return pagination;
  }
  createThumbnails() {
    const thumbnails = document.createElement("div");
    thumbnails.classList.add("thumbnails");
    const slides = this.getSlides();
    slides.forEach((slide, i) => {
      const thumbnail = document.createElement("wj-thumbnail");
      thumbnail.innerHTML = `<img src="${slide.querySelector("wj-img").getAttribute("src")}"></img>`;
      thumbnail.addEventListener("click", (e) => {
        this.removeActiveSlide();
        e.target.closest("wj-thumbnail").classList.add("active");
        this.goToSlide(i);
      });
      thumbnails.appendChild(thumbnail);
    });
    return thumbnails;
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
WJElement.define("wj-carousel", Carousel);
export {
  Carousel as default
};
