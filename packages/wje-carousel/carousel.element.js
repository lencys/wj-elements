import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

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
        this.setAttribute('active-slide', value);
    }

    /**
     * Active slide attribute.
     * @returns {number|number}
     */
    get activeSlide() {
        return +this.getAttribute('active-slide') || 0;
    }

    /**
     * Pagination attribute.
     * @returns {boolean}
     */
    get pagination() {
        return this.hasAttribute('pagination');
    }

    /**
     * Navigation attribute.
     * @returns {boolean}
     */
    get navigation() {
        return this.hasAttribute('navigation');
    }

    /**
     * Thumbnails attribute.
     * @returns {boolean}
     */
    get thumbnails() {
        return this.hasAttribute('thumbnails');
    }

    /**
     * Loop attribute.
     * @returns {boolean}
     */
    get loop() {
        return this.hasAttribute('loop');
    }

    /**
     * Class name for the Carousel.
     * @type {string}
     */
    className = 'Carousel';

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
        return ['active-slide'];
    }

    /**
     * Sets up the attributes for the Carousel.
     * @param name
     * @param old
     * @param newName
     */
    attributeChangedCallback(name, old, newName) {
        if (name === 'active-slide') {
            if (this.pagination) this.changePagination();

            if (this.thumbnails) this.changeThumbnails();
        }
    }

    /**
     * Sets up the attributes for the Carousel.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
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

        let native = document.createElement('div');
        native.classList.add('native-carousel');

        let wrapper = document.createElement('div');
        wrapper.classList.add('slides-wrapper');

        let slides = document.createElement('div');
        slides.classList.add('carousel-slides');

        let slot = document.createElement('slot');

        let slotPrev = document.createElement('slot');
        slotPrev.setAttribute('name', 'prev');

        let slotNext = document.createElement('slot');
        slotNext.setAttribute('name', 'next');

        slides.append(slot);
        native.append(wrapper);

        if (this.navigation) {
            let existingPrev = this.querySelector('[slot="prev"]');
            let existingNext = this.querySelector('[slot="next"]');

            this.prevButton = existingPrev || this.createPreviousButton();
            this.nextButton = existingNext || this.createNextButton();

            if (this.prevButton && !this.prevButton.dataset.wjeCarouselNavBound) {
                this.prevButton.addEventListener('click', () => this.previousSlide());
                this.prevButton.dataset.wjeCarouselNavBound = 'true';
            }

            if (this.nextButton && !this.nextButton.dataset.wjeCarouselNavBound) {
                this.nextButton.addEventListener('click', () => this.nextSlide());
                this.nextButton.dataset.wjeCarouselNavBound = 'true';
            }

            if (!existingPrev) this.append(this.prevButton);
            if (!existingNext) this.append(this.nextButton);

            wrapper.append(slotPrev);
            wrapper.append(slotNext);
        }

        wrapper.append(slides);

        if (this.pagination) native.append(this.createPagination());

        if (this.thumbnails) native.append(this.createThumbnails());

        fragment.append(native);

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

        this.slidePerPage = this.getAttribute('slide-per-page') || 1;
        let carouselSize = 100 / +this.slidePerPage;
        this.style.setProperty('--wje-carousel-size', carouselSize + '%');

        this.goToSlide(this.activeSlide, 'auto');

        requestAnimationFrame(() => requestAnimationFrame(() => this.syncActiveToCenter()));

        this.slides.addEventListener('scrollend', (e) => {
            this.syncActiveToCenter();
        });
    }

    /**
     * Sync `activeSlide` to the slide whose center is closest to the container center.
     */
    syncActiveToCenter() {
        const slides = this.getSlides();
        const withClones = this.getSlidesWithClones();
        if (!withClones.length) return;

        const containerRect = this.slides.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;

        let best = null;
        let bestDist = Infinity;
        withClones.forEach((el) => {
            const r = el.getBoundingClientRect();
            const center = r.left + r.width / 2;
            const dist = Math.abs(center - containerCenterX);
            if (dist < bestDist) {
                bestDist = dist;
                best = el;
            }
        });

        if (!best) return;

        const vIndex = withClones.indexOf(best);
        if (vIndex === -1) return;

        const logicalIndex = this.getLogicalIndexForVisual(vIndex);
        this.activeSlide = logicalIndex;

        // If we landed on a clone, silently snap to the corresponding real slide
        if (this.loop && (vIndex === 0 || vIndex === withClones.length - 1)) {
            this.goToSlide(logicalIndex, 'auto');
        }
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
                root: this.context.querySelector('.carousel-slides'),
                threshold: 0.5,
            }
        );

        this.entriesMap = new Map();
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
    goToSlide(index, behavior = 'smooth', next = true) {
        const slides = this.getSlides();
        const withClones = this.getSlidesWithClones();

        // remove active class from all slides (including clones)
        withClones.forEach(slide => slide.classList.remove('active'));

        // compute logical index: wrap when loop=true, else clamp
        const maxIndex = Math.max(slides.length - 1, 0);
        let logical;
        if (this.loop && slides.length > 0) {
            logical = ((index % slides.length) + slides.length) % slides.length; // safe modulo
        } else {
            logical = Math.min(Math.max(index, 0), maxIndex);
        }
        this.activeSlide = logical;

        // compute visual target considering clones when loop=true
        const vIndex = this.getVisualIndexForLogical(logical);
        const targetEl = withClones[vIndex];
        if (!targetEl) return;

        targetEl.classList.add('active');

        const targetRect = targetEl.getBoundingClientRect();
        const containerRect = this.slides.getBoundingClientRect();

        this.slides.scrollTo({
            left: targetRect.left - containerRect.left + this.slides.scrollLeft,
            top: targetRect.top - containerRect.top + this.slides.scrollTop,
            behavior: behavior === 'smooth' ? 'smooth' : 'auto',
        });

        if (this.navigation && !this.loop) {
            this.nextButton.removeAttribute('disabled');
            this.prevButton.removeAttribute('disabled');

            if (this.activeSlide === slides.length - 1) this.nextButton.setAttribute('disabled', '');
            if (this.activeSlide === 0) this.prevButton.setAttribute('disabled', '');
        }
    }

    /**
     * Clones the first and last items.
     */
    cloneFirstAndLastItems() {
        const items = this.getSlides();

        if (items.length && this.loop) {
            // Clone first -> append to end
            const firstItemClone = items[0].cloneNode(true);
            firstItemClone.classList.add('clone');
            this.append(firstItemClone);

            // Clone last -> insert before the first original item so it becomes the leading clone
            const lastItemClone = items[items.length - 1].cloneNode(true);
            lastItemClone.classList.add('clone');
            this.insertBefore(lastItemClone, items[0]);
        }
    }

    /**
     * Goes to the next slide.
     */
    removeActiveSlide() {
        this.getSlidesWithClones().forEach((slide, i) => {
            slide.classList.remove('active');
        });

        if (this.pagination) {
            this.context.querySelectorAll('.pagination-item').forEach((item) => {
                item.classList.remove('active');
            });
        }

        if (this.thumbnails) {
            this.context.querySelectorAll('wje-thumbnail').forEach((item) => {
                item.classList.remove('active');
            });
        }
    }

    /**
     * Goes to the next slide.
     */
    changePagination() {
        if (this.pagination) {
            this.removeActiveSlide();
            this.context.querySelectorAll('.pagination-item').forEach((item, i) => {
                if (i === this.activeSlide) {
                    item.classList.add('active');
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
            this.context.querySelectorAll('wje-thumbnail').forEach((item, i) => {
                if (i === this.activeSlide) {
                    item.classList.add('active');
                }
            });
        }
    }

    /**
     * Goes to the next slide.
     * @returns {Element}
     */
    createNextButton() {
        const nextButton = document.createElement('wje-button');
        nextButton.setAttribute('part', 'next-button');
        nextButton.setAttribute('circle', '');
        nextButton.setAttribute('fill', 'link');
        nextButton.setAttribute('slot', 'next');
        nextButton.innerHTML = '<wje-icon name="chevron-right" size="large"></wje-icon>';
        nextButton.classList.add('next');
        nextButton.addEventListener('click', (e) => {
            this.nextSlide();
        });

        return nextButton;
    }

    /**
     * Goes to the next slide.
     * @returns {Element}
     */
    createPreviousButton() {
        const previousButton = document.createElement('wje-button');
        previousButton.setAttribute('part', 'previous-button');
        previousButton.setAttribute('circle', '');
        previousButton.setAttribute('fill', 'link');
        previousButton.setAttribute('slot', 'prev');
        previousButton.innerHTML = '<wje-icon name="chevron-left" size="large"></wje-icon>';
        previousButton.classList.add('prev');
        previousButton.addEventListener('click', (e) => {
            this.previousSlide();
        });

        return previousButton;
    }

    /**
     * Goes to the next slide.
     * @returns {Element}
     */
    createPagination() {
        const pagination = document.createElement('div');
        pagination.setAttribute('part', 'pagination');
        pagination.classList.add('pagination');

        const slides = this.getSlides();
        slides.forEach((slide, i) => {
            const paginationItem = document.createElement('div');
            paginationItem.classList.add('pagination-item');
            paginationItem.addEventListener('click', (e) => {
                this.removeActiveSlide();
                e.target.classList.add('active');
                this.goToSlide(i);
            });
            pagination.append(paginationItem);
        });

        return pagination;
    }

    /**
     * Goes to the next slide.
     * @returns {Element}
     */
    createThumbnails() {
        const thumbnails = document.createElement('div');
        thumbnails.classList.add('thumbnails');

        const slides = this.getSlides();
        slides.forEach((slide, i) => {
            const thumbnail = document.createElement('wje-thumbnail');
            thumbnail.innerHTML = `<img src="${slide.querySelector('wje-img').getAttribute('src')}"></img>`;
            thumbnail.addEventListener('click', (e) => {
                this.removeActiveSlide();
                e.target.closest('wje-thumbnail').classList.add('active');
                this.goToSlide(i);
            });
            thumbnails.append(thumbnail);
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
        return Array.from(this.querySelectorAll('wje-carousel-item:not(.clone)'));
    }

    /**
     * Goes to the slide.
     * @returns {Array}
     */
    getSlidesWithClones() {
        return Array.from(this.querySelectorAll('wje-carousel-item'));
    }

    /** Maps logical index -> visual index (accounts for leading clone when loop=true) */
    getVisualIndexForLogical(index) {
        return this.loop ? index + 1 : index;
    }

    /** Maps visual index -> logical index (handles clones at 0 and last when loop=true) */
    getLogicalIndexForVisual(vIndex) {
        const slides = this.getSlides();
        const withClones = this.getSlidesWithClones();
        if (!this.loop) return vIndex;
        if (vIndex === 0) return slides.length - 1;           // leading clone
        if (vIndex === withClones.length - 1) return 0;       // trailing clone
        return vIndex - 1;
    }

    /**
     * Goes to the slide.
     * @returns {boolean}
     */
    canGoNext() {
        const el = this.context.querySelector('.carousel-slides');
        return el.scrollLeft < (el.scrollWidth - el.clientWidth);
    }

    /**
     * Goes to the slide.
     * @returns {boolean}
     */
    canGoPrevious() {
        const el = this.context.querySelector('.carousel-slides');
        return el.scrollLeft > 0;
    }
}
