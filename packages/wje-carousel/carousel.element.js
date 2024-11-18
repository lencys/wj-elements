import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary Carousel class that extends WJElement.
 * @documentation https://elements.webjet.sk/components/carousel
 * @status stable
 * @augments WJElement
 * @slot - The carousel main content.
 * @cssproperty [--wje-carousel-size=100%] - Size of the carousel component;
 */
export default class Carousel extends WJElement {

    /**
     * Carousel constructor method.
     */
    constructor() {
        super();

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
     * Class name for the Carousel.
     * @type {string}
     */
    className = "Carousel";

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
            if(this.pagination)
                this.changePagination();

            if(this.thumbnails)
                this.changeThumbnails();
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

        if(this.navigation) {
            this.prevButton = this.createPreviousButton();
            this.nextButton = this.createNextButton();

            native.appendChild(this.prevButton);
            native.appendChild(this.nextButton);
        }

        if(this.pagination)
            native.appendChild(this.createPagination());

        if(this.thumbnails)
            native.appendChild(this.createThumbnails());

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
            const visibleEntries = entries.find(entry => entry.isIntersecting);

            if (visibleEntries?.target.classList.contains("clone")) {
                const cloneIndex = +visibleEntries.target.getAttribute("clone-index");
                this.goToSlide(cloneIndex, "auto");
                this.activeSlide = cloneIndex;
            }
            else if (visibleEntries) {
                let slideIndex = slides.indexOf(visibleEntries.target);
                this.activeSlide = slideIndex;
            }
        });
    }

    /**
     * Sets up the IntersectionObserver for the Carousel.
     */
    setIntersectionObserver() {
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.entriesMap.set(entry.target, entry);
            });
        }, {
            root: this.context.querySelector('.carousel-slides'),
            threshold: 0.5
        });

        this.entriesMap = new Map();
        this.records = this.intersectionObserver.takeRecords();
        this.records.forEach(entry => {
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

        // remove active class from all slides
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

        if(this.navigation && !this.loop) {
            this.nextButton.removeAttribute("disabled");
            this.prevButton.removeAttribute("disabled");

            if(this.activeSlide === slides.length - 1)
                this.nextButton.setAttribute("disabled", "");

            if(this.activeSlide === 0)
                this.prevButton.setAttribute("disabled", "");
        }
    }

    /**
     * Clones the first and last items.
     */
    cloneFirstAndLastItems() {
        const items = this.getSlides();

        if (items.length && this.loop) {
            // Klonovánie prveho položky a pridanie na koniec
            const firstItemClone = items[0].cloneNode(true);
            firstItemClone.classList.add("clone");
            firstItemClone.setAttribute("clone-index", 0);

            this.appendChild(firstItemClone);

            // Klonovanie poslednej položky a pridanie na zaciatok
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

        if(this.pagination) {
            this.context.querySelectorAll(".pagination-item").forEach((item) => {
                item.classList.remove("active");
            });
        }

        if(this.thumbnails) {
            this.context.querySelectorAll("wje-thumbnail").forEach((item) => {
                item.classList.remove("active");
            });
        }
    }

    /**
     * Goes to the next slide.
     */
    changePagination() {
        if(this.pagination) {
            this.removeActiveSlide();
            this.context.querySelectorAll(".pagination-item").forEach((item, i) => {
                if(i === this.activeSlide) {
                    item.classList.add("active");
                }
            });
        }
    }

    /**
     * Goes to the next slide.
     */
    changeThumbnails() {
        if(this.thumbnails) {
            this.removeActiveSlide();
            this.context.querySelectorAll("wje-thumbnail").forEach((item, i) => {
                if(i === this.activeSlide) {
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