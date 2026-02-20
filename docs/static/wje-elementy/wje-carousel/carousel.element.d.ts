import { default as WJElement } from '../wje-element/element.js';
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
     * Getter for the CSS stylesheet.
     * @returns {*}
     */
    static get cssStyleSheet(): any;
    /**
     * Getter for the observed attributes.
     * @returns {string[]}
     */
    static get observedAttributes(): string[];
    slidePerPage: number;
    /**
     * Active slide attribute.
     * @param value
     */
    set activeSlide(value: number | number);
    /**
     * Active slide attribute.
     * @returns {number|number}
     */
    get activeSlide(): number | number;
    /**
     * Pagination attribute.
     * @returns {boolean}
     */
    get pagination(): boolean;
    /**
     * Navigation attribute.
     * @returns {boolean}
     */
    get navigation(): boolean;
    /**
     * Thumbnails attribute.
     * @returns {boolean}
     */
    get thumbnails(): boolean;
    /**
     * Loop attribute.
     * @returns {boolean}
     */
    get loop(): boolean;
    /**
     * Before draw method for the Carousel.
     */
    beforeDraw(): void;
    /**
     * Draw method for the Carousel.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    prevButton: Element;
    nextButton: Element;
    slides: HTMLDivElement;
    /**
     * After draw method for the Carousel.
     */
    afterDraw(): void;
    /**
     * Sync `activeSlide` to the slide whose center is closest to the container center.
     */
    syncActiveToCenter(): void;
    /**
     * Sets up the IntersectionObserver for the Carousel.
     */
    setIntersectionObserver(): void;
    intersectionObserver: IntersectionObserver;
    entriesMap: Map<any, any>;
    records: IntersectionObserverEntry[];
    /**
     * Goes to the slide.
     * @param index
     * @param behavior
     * @param next
     */
    goToSlide(index: any, behavior?: string, next?: boolean): void;
    /**
     * Syncs ARIA attributes on the carousel and slides.
     */
    syncAria(): void;
    /**
     * Clones the first and last items.
     */
    cloneFirstAndLastItems(): void;
    /**
     * Goes to the next slide.
     */
    removeActiveSlide(): void;
    /**
     * Goes to the next slide.
     */
    changePagination(): void;
    /**
     * Goes to the next slide.
     */
    changeThumbnails(): void;
    /**
     * Goes to the next slide.
     * @returns {Element}
     */
    createNextButton(): Element;
    /**
     * Goes to the next slide.
     * @returns {Element}
     */
    createPreviousButton(): Element;
    /**
     * Goes to the next slide.
     * @returns {Element}
     */
    createPagination(): Element;
    /**
     * Goes to the next slide.
     * @returns {Element}
     */
    createThumbnails(): Element;
    /**
     * Goes to the next slide.
     */
    nextSlide(): void;
    /**
     * Goes to the previous slide.
     */
    previousSlide(): void;
    /**
     * Goes to the slide.
     * @returns {Array}
     */
    getSlides(): any[];
    /**
     * Goes to the slide.
     * @returns {Array}
     */
    getSlidesWithClones(): any[];
    /** Maps logical index -> visual index (accounts for leading clone when loop=true) */
    getVisualIndexForLogical(index: any): any;
    /** Maps visual index -> logical index (handles clones at 0 and last when loop=true) */
    getLogicalIndexForVisual(vIndex: any): any;
    /**
     * Goes to the slide.
     * @returns {boolean}
     */
    canGoNext(): boolean;
    /**
     * Goes to the slide.
     * @returns {boolean}
     */
    canGoPrevious(): boolean;
}
