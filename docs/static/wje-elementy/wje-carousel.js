var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ Carousel ]\n*/\n\n.native-carousel {\n    position: relative;\n    width: var(--wje-carousel-width, 100%);\n    height: var(--wje-carousel-height, 300px);\n    scroll-behavior: smooth;\n}\n\n.carousel-slides {\n    display: flex;\n    transition: transform 0.5s ease;\n    align-items: center;\n    justify-items: center;\n    overflow: auto;\n    overscroll-behavior-x: contain;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    aspect-ratio: var(--wje-aspect-ratio, 4 / 3);\n    scroll-snap-type: x mandatory;\n    scroll-padding-inline: 0;\n    overflow-y: hidden;\n    padding-inline: var(--wje-spacing-inline, 0);\n    gap: 0.5rem;\n}\n\n.carousel-slides::-webkit-scrollbar {\n    display: none;\n}\n\n::slotted(wje-carousel-item) {\n    flex: 0 0 var(--wje-carousel-size);\n    height: 100%;\n}\n\n/*NAVIGATION*/\n\nwje-button {\n    position: absolute;\n    top: 50%;\n\n    border: none;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.prev {\n    left: -1rem;\n    transform: translate(-100%, -50%);\n}\n\n.next {\n    right: -1rem;\n    transform: translate(100%, -50%);\n}\n\n/*PAGINATION*/\n\n.pagination {\n    position: relative;\n    bottom: -0.5rem;\n    left: 50%;\n    transform: translate(-50%, 100%);\n    display: flex;\n    z-index: 2;\n    justify-content: center;\n}\n.pagination-item {\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: var(--wje-color-contrast-4);\n    display: inline-block;\n    border-radius: 50%;\n}\n.pagination-item.active {\n    background-color: var(--wje-color);\n}\n\n/*THUMBNAILS*/\n\n.thumbnails {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow-x: auto;\n    gap: 0.5rem;\n    padding: 0 0.5rem;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    box-sizing: border-box;\n    overflow-y: hidden;\n    wje-thumbnail {\n        --wje-thumbnail-width: 48px;\n        --wje-thumbnail-height: 48px;\n        --wje-thumbnail-border-radius: 0;\n        cursor: pointer;\n        border: 1px solid transparent;\n    }\n    .active {\n        border: 1px solid var(--wje-color-primary-11);\n    }\n}\n";
class Carousel extends WJElement {
  /**
   * Carousel constructor method.
   */
  constructor() {
    super();
    /**
     * Class name for the Carousel.
     * @type {string}
     */
    __publicField(this, "className", "Carousel");
    this.slidePerPage = 1;
  }
  /**
   * Active slide attribute.
   * @param value
   */
  set activeSlide(value) {
    this.setAttribute("active-slide", value);
  }
  /**
   * Active slide attribute.
   * @returns {number|number}
   */
  get activeSlide() {
    return +this.getAttribute("active-slide") || 0;
  }
  /**
   * Pagination attribute.
   * @returns {boolean}
   */
  get pagination() {
    return this.hasAttribute("pagination");
  }
  /**
   * Navigation attribute.
   * @returns {boolean}
   */
  get navigation() {
    return this.hasAttribute("navigation");
  }
  /**
   * Thumbnails attribute.
   * @returns {boolean}
   */
  get thumbnails() {
    return this.hasAttribute("thumbnails");
  }
  /**
   * Loop attribute.
   * @returns {boolean}
   */
  get loop() {
    return this.hasAttribute("loop");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {*}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   * @returns {string[]}
   */
  static get observedAttributes() {
    return ["active-slide"];
  }
  /**
   * Sets up the attributes for the Carousel.
   * @param name
   * @param old
   * @param newName
   */
  attributeChangedCallback(name, old, newName) {
    if (name === "active-slide") {
      if (this.pagination) this.changePagination();
      if (this.thumbnails) this.changeThumbnails();
    }
  }
  /**
   * Sets up the attributes for the Carousel.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Before draw method for the Carousel.
   */
  beforeDraw() {
    this.cloneFirstAndLastItems();
  }
  /**
   * Draw method for the Carousel.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-carousel");
    let slides = document.createElement("div");
    slides.classList.add("carousel-slides");
    let slot = document.createElement("slot");
    slides.appendChild(slot);
    native.appendChild(slides);
    if (this.navigation) {
      this.prevButton = this.createPreviousButton();
      this.nextButton = this.createNextButton();
      native.appendChild(this.prevButton);
      native.appendChild(this.nextButton);
    }
    if (this.pagination) native.appendChild(this.createPagination());
    if (this.thumbnails) native.appendChild(this.createThumbnails());
    fragment.appendChild(native);
    this.slides = slides;
    return fragment;
  }
  /**
   * After draw method for the Carousel.
   */
  afterDraw() {
    this.setIntersectionObserver();
    this.getSlidesWithClones().forEach((slide, i) => {
      this.intersectionObserver.observe(slide);
    });
    this.slidePerPage = this.getAttribute("slide-per-page") || 1;
    let carouselSize = 100 / +this.slidePerPage;
    this.style.setProperty("--wje-carousel-size", carouselSize + "%");
    this.goToSlide(this.activeSlide, "auto");
    this.slides.addEventListener("scrollend", (e) => {
      const slides = this.getSlides();
      const entries = [...this.entriesMap.values()];
      const visibleEntries = entries.find((entry) => entry.isIntersecting);
      if (visibleEntries == null ? void 0 : visibleEntries.target.classList.contains("clone")) {
        const cloneIndex = +visibleEntries.target.getAttribute("clone-index");
        this.goToSlide(cloneIndex, "auto");
        this.activeSlide = cloneIndex;
      } else if (visibleEntries) {
        let slideIndex = slides.indexOf(visibleEntries.target);
        this.activeSlide = slideIndex;
      }
    });
  }
  /**
   * Sets up the IntersectionObserver for the Carousel.
   */
  setIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.entriesMap.set(entry.target, entry);
        });
      },
      {
        root: this.context.querySelector(".carousel-slides"),
        threshold: 0.5
      }
    );
    this.entriesMap = /* @__PURE__ */ new Map();
    this.records = this.intersectionObserver.takeRecords();
    this.records.forEach((entry) => {
      this.entriesMap.set(entry.target, entry);
    });
  }
  /**
   * Goes to the slide.
   * @param index
   * @param behavior
   * @param next
   */
  goToSlide(index, behavior = "smooth", next = true) {
    const slides = this.getSlides();
    const slideWithClones = this.getSlidesWithClones();
    slideWithClones.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    let newActiveSlide = this.loop ? (index + slides.length) % slides.length : Math.min(Math.max(index, 0), slides.length - 1);
    this.activeSlide = newActiveSlide;
    const nextSlideIndex = Math.min(
      Math.max(index + (this.loop ? this.slidePerPage : 0), 0),
      slideWithClones.length - 1
    );
    const nextSlideEl = this.getSlidesWithClones()[nextSlideIndex];
    nextSlideEl.classList.add("active");
    let nextSlideRect = nextSlideEl.getBoundingClientRect();
    let slidesContainerRect = this.slides.getBoundingClientRect();
    this.slides.scrollTo({
      left: nextSlideRect.left - slidesContainerRect.left + this.slides.scrollLeft,
      top: nextSlideRect.top - slidesContainerRect.top + this.slides.scrollTop,
      behavior: behavior === "smooth" ? "smooth" : "auto"
    });
    if (this.navigation && !this.loop) {
      this.nextButton.removeAttribute("disabled");
      this.prevButton.removeAttribute("disabled");
      if (this.activeSlide === slides.length - 1) this.nextButton.setAttribute("disabled", "");
      if (this.activeSlide === 0) this.prevButton.setAttribute("disabled", "");
    }
  }
  /**
   * Clones the first and last items.
   */
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
  /**
   * Goes to the next slide.
   */
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
      this.context.querySelectorAll("wje-thumbnail").forEach((item) => {
        item.classList.remove("active");
      });
    }
  }
  /**
   * Goes to the next slide.
   */
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
  /**
   * Goes to the next slide.
   */
  changeThumbnails() {
    if (this.thumbnails) {
      this.removeActiveSlide();
      this.context.querySelectorAll("wje-thumbnail").forEach((item, i) => {
        if (i === this.activeSlide) {
          item.classList.add("active");
        }
      });
    }
  }
  /**
   * Goes to the next slide.
   * @returns {Element}
   */
  createNextButton() {
    const nextButton = document.createElement("wje-button");
    nextButton.classList.add("next");
    nextButton.innerHTML = '<wje-icon name="chevron-right" size="large"></wje-icon>';
    nextButton.setAttribute("circle", "");
    nextButton.setAttribute("fill", "link");
    nextButton.addEventListener("click", (e) => {
      this.nextSlide();
    });
    return nextButton;
  }
  /**
   * Goes to the next slide.
   * @returns {Element}
   */
  createPreviousButton() {
    const previousButton = document.createElement("wje-button");
    previousButton.classList.add("prev");
    previousButton.innerHTML = '<wje-icon name="chevron-left" size="large"></wje-icon>';
    previousButton.setAttribute("circle", "");
    previousButton.setAttribute("fill", "link");
    previousButton.addEventListener("click", (e) => {
      this.previousSlide();
    });
    return previousButton;
  }
  /**
   * Goes to the next slide.
   * @returns {Element}
   */
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
  /**
   * Goes to the next slide.
   * @returns {Element}
   */
  createThumbnails() {
    const thumbnails = document.createElement("div");
    thumbnails.classList.add("thumbnails");
    const slides = this.getSlides();
    slides.forEach((slide, i) => {
      const thumbnail = document.createElement("wje-thumbnail");
      thumbnail.innerHTML = `<img src="${slide.querySelector("wje-img").getAttribute("src")}"></img>`;
      thumbnail.addEventListener("click", (e) => {
        this.removeActiveSlide();
        e.target.closest("wje-thumbnail").classList.add("active");
        this.goToSlide(i);
      });
      thumbnails.appendChild(thumbnail);
    });
    return thumbnails;
  }
  /**
   * Goes to the next slide.
   */
  nextSlide() {
    this.goToSlide(this.activeSlide + this.slidePerPage);
  }
  /**
   * Goes to the previous slide.
   */
  previousSlide() {
    this.goToSlide(this.activeSlide - this.slidePerPage);
  }
  /**
   * Goes to the slide.
   * @returns {Array}
   */
  getSlides() {
    return Array.from(this.querySelectorAll("wje-carousel-item:not(.clone)"));
  }
  /**
   * Goes to the slide.
   * @returns {Array}
   */
  getSlidesWithClones() {
    return Array.from(this.querySelectorAll("wje-carousel-item"));
  }
  /**
   * Goes to the slide.
   * @returns {boolean}
   */
  canGoNext() {
    return this.querySelector(".native-carousel").scrollLeft < this.querySelector(".native-carousel").scrollWidth;
  }
  /**
   * Goes to the slide.
   * @returns {boolean}
   */
  canGoPrevious() {
    return this.querySelector(".native-carousel").scrollLeft > 0;
  }
}
WJElement.define("wje-carousel", Carousel);
export {
  Carousel as default
};
