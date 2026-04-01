import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary Carousel class that extends WJElement.
 * @documentation https://elements.webjet.sk/components/carousel
 * @status stable
 * @augments WJElement
 * @slot - The carousel main content.
 * @cssproperty [--wje-carousel-size=100%] - Effective size of one carousel item.
 * @cssproperty [--wje-carousel-gap=0.5rem] - Gap between carousel items.
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
     * Continuous loop attribute.
     * @returns {boolean}
     */
    get continuousLoop() {
        return this.hasAttribute('continuous-loop');
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
        return ['active-slide', 'slide-per-page', 'continuous-loop'];
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

        if (['slide-per-page', 'continuous-loop'].includes(name) && old !== newName && this.slides) {
            this.syncSlideMetrics();

            if (this.loop) {
                this.refresh();
                return;
            }

            this.goToSlide(this.activeSlide, 'auto');
        }
    }

    /**
     * Sets up the attributes for the Carousel.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.syncAria();
    }

    /**
     * Before draw method for the Carousel.
     */
    beforeDraw() {
        this.syncSlideMetrics();
        this.removeLoopClones();
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

        this.syncSlideMetrics();

        this.goToSlide(this.activeSlide, 'auto');

        requestAnimationFrame(() => requestAnimationFrame(() => this.syncActiveToSnapStart()));

        this.slides.addEventListener('scrollend', (e) => {
            this.syncActiveToSnapStart();
        });

        this.syncAria();
    }

    /**
     * Sync `activeSlide` to the slide whose leading edge is closest to the snap start.
     */
    syncActiveToSnapStart() {
        const slides = this.getSlides();
        const withClones = this.getSlidesWithClones();
        if (!withClones.length) return;

        const containerRect = this.slides.getBoundingClientRect();
        const snapStartX = containerRect.left + this.getScrollPaddingInlineStart();

        let best = null;
        let bestDist = Infinity;
        withClones.forEach((el) => {
            const r = el.getBoundingClientRect();
            const dist = Math.abs(r.left - snapStartX);
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
        this.setActiveVisualSlide(vIndex);

        const canonicalVisualIndex = this.getVisualIndexForLogical(logicalIndex);
        if (canonicalVisualIndex !== vIndex) {
            this.goToSlide(logicalIndex, 'auto');
        }
    }

    /**
     * Syncs computed CSS variables derived from `slide-per-page`.
     */
    syncSlideMetrics() {
        this.slidePerPage = Math.max(parseInt(this.getAttribute('slide-per-page'), 10) || 1, 1);
        const visibleGapCount = Math.max(this.slidePerPage - 1, 0);
        const computedItemSize = `calc((100% - (${visibleGapCount} * var(--wje-carousel-gap, 0.5rem))) / ${this.slidePerPage})`;

        this.style.setProperty('--wje-carousel-slides-per-page', `${this.slidePerPage}`);
        this.style.setProperty('--wje-carousel-visible-gap-count', `${visibleGapCount}`);
        this.style.setProperty('--wje-carousel-size', computedItemSize);
        this.style.setProperty('--wje-carousel-item-basis', 'var(--wje-carousel-size)');
    }

    /**
     * Returns the inline scroll padding used by the snap area.
     * @returns {number}
     */
    getScrollPaddingInlineStart() {
        if (!this.slides) return 0;

        const styles = getComputedStyle(this.slides);
        return parseFloat(styles.scrollPaddingInlineStart || styles.scrollPaddingLeft || '0') || 0;
    }

    /**
     * Returns the interaction scroll behavior for UI controls.
     * Continuous multi-slide loops use instant snapping to avoid blank edge states
     * while the browser is still animating a previous smooth scroll.
     * @returns {ScrollBehavior|string}
     */
    getControlBehavior() {
        return this.continuousLoop && this.slidePerPage > 1 ? 'auto' : 'smooth';
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

        // compute logical index: wrap when loop=true, else clamp
        const maxIndex = this.getMaxVisibleStartIndex(slides.length);
        let logical;
        if (this.loop && slides.length > 0) {
            logical = this.normalizeLoopIndex(index, slides.length);
        } else {
            logical = Math.min(Math.max(index, 0), maxIndex);
        }
        this.activeSlide = logical;

        // compute visual target considering clones when loop=true
        const vIndex = this.getVisualIndexForLogical(logical);
        const targetEl = withClones[vIndex];
        if (!targetEl) return;

        this.setActiveVisualSlide(vIndex);
        this.scrollToVisualIndex(vIndex, behavior);

        if (this.navigation && !this.loop) {
            this.nextButton.removeAttribute('disabled');
            this.prevButton.removeAttribute('disabled');

            if (this.activeSlide === maxIndex) this.nextButton.setAttribute('disabled', '');
            if (this.activeSlide === 0) this.prevButton.setAttribute('disabled', '');
        }

        this.syncAria();
    }

    /**
     * Sets the active class on the currently targeted visual slide and removes it elsewhere.
     * @param {number} vIndex
     */
    setActiveVisualSlide(vIndex) {
        this.getSlidesWithClones().forEach((slide, index) => {
            slide.classList.toggle('active', index === vIndex);
        });
    }

    /**
     * Syncs ARIA attributes on the carousel and slides.
     */
    syncAria() {
        this.setAriaState({
            role: 'region',
            roledescription: 'carousel',
        });

        const slides = this.getSlides();
        const total = slides.length;
        slides.forEach((slide, index) => {
            slide.setAttribute('role', 'group');
            slide.setAttribute('aria-roledescription', 'slide');
            slide.setAttribute('aria-label', `Slide ${index + 1} of ${total}`);
            slide.setAttribute('aria-hidden', slide.classList.contains('active') ? 'false' : 'true');
        });

        const clones = this.querySelectorAll('.clone');
        clones.forEach((slide) => {
            slide.setAttribute('aria-hidden', 'true');
        });
    }

    /**
     * Clones the first and last items.
     */
    cloneFirstAndLastItems() {
        const items = this.getSlides();

        if (items.length && this.loop) {
            const cloneCount = this.getLoopCloneCount(items.length);
            const firstOriginal = items[0];

            items.slice(items.length - cloneCount).forEach((item) => {
                const clone = this.createLoopClone(item);
                this.insertBefore(clone, firstOriginal);
            });

            items.slice(0, cloneCount).forEach((item) => {
                const clone = this.createLoopClone(item);
                this.append(clone);
            });
        }
    }

    /**
     * Creates a sanitized loop clone that does not inherit transient render state
     * such as inline `visibility: hidden` from the source slide.
     * @param {HTMLElement} item
     * @returns {HTMLElement}
     */
    createLoopClone(item) {
        const clone = item.cloneNode(true);
        clone.classList.add('clone');
        clone.classList.remove('active');
        clone.style.removeProperty('visibility');

        if (!clone.getAttribute('style')?.trim()) {
            clone.removeAttribute('style');
        }

        return clone;
    }

    /**
     * Removes loop clones so they can be rebuilt for the current configuration.
     */
    removeLoopClones() {
        this.querySelectorAll('wje-carousel-item.clone').forEach((clone) => clone.remove());
    }

    /**
     * Returns how many slides should be cloned on each side when loop is enabled.
     * @param {number} totalSlides
     * @returns {number}
     */
    getLoopCloneCount(totalSlides = this.getSlides().length) {
        if (!this.loop || !totalSlides) return 0;

        return this.continuousLoop ? Math.min(this.slidePerPage, totalSlides) : 1;
    }

    /**
     * Scrolls the carousel to a visual slide index.
     * @param {number} vIndex
     * @param {ScrollBehavior|string} behavior
     */
    scrollToVisualIndex(vIndex, behavior = 'smooth') {
        const withClones = this.getSlidesWithClones();
        const firstEl = withClones[0];
        const targetEl = withClones[vIndex];

        if (!firstEl || !targetEl || !this.slides) return;

        const firstRect = firstEl.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        const contentOffsetLeft = targetRect.left - firstRect.left;
        const nextLeft = contentOffsetLeft - this.getScrollPaddingInlineStart();
        const targetLeft = Math.max(nextLeft, 0);

        if (behavior === 'smooth') {
            this.slides.scrollTo({
                left: targetLeft,
                top: this.slides.scrollTop,
                behavior: 'smooth',
            });
            return;
        }

        if (this.snapRestoreFrame) {
            cancelAnimationFrame(this.snapRestoreFrame);
        }

        const inlineSnapType = this.slides.style.scrollSnapType;
        this.slides.style.scrollSnapType = 'none';
        this.slides.scrollTo({
            left: targetLeft,
            top: this.slides.scrollTop,
            behavior: 'auto',
        });
        this.snapRestoreFrame = requestAnimationFrame(() => {
            this.slides.style.scrollSnapType = inlineSnapType;
            this.snapRestoreFrame = null;
        });
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
            this.context.querySelectorAll('.pagination-item').forEach((item, i) => {
                item.classList.toggle('active', i === this.activeSlide);
            });
        }
    }

    /**
     * Goes to the next slide.
     */
    changeThumbnails() {
        if (this.thumbnails) {
            this.context.querySelectorAll('wje-thumbnail').forEach((item, i) => {
                item.classList.toggle('active', i === this.activeSlide);
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

        this.getPaginationIndexes().forEach((i) => {
            const paginationItem = document.createElement('div');
            paginationItem.classList.add('pagination-item');
            paginationItem.addEventListener('click', (e) => {
                this.removeActiveSlide();
                e.target.classList.add('active');
                this.goToSlide(i, this.getControlBehavior());
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
                this.goToSlide(i, this.getControlBehavior());
            });
            thumbnails.append(thumbnail);
        });

        return thumbnails;
    }

    /**
     * Goes to the next slide.
     */
    nextSlide() {
        this.goToSlide(this.activeSlide + 1, this.getControlBehavior());
    }

    /**
     * Goes to the previous slide.
     */
    previousSlide() {
        this.goToSlide(this.activeSlide - 1, this.getControlBehavior());
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
        return this.loop ? index + this.getLoopCloneCount() : index;
    }

    /** Maps visual index -> logical index (handles clones at 0 and last when loop=true) */
    getLogicalIndexForVisual(vIndex) {
        const slides = this.getSlides();
        const maxIndex = this.getMaxVisibleStartIndex(slides.length);
        const cloneCount = this.getLoopCloneCount(slides.length);
        if (!this.loop) return Math.min(Math.max(vIndex, 0), maxIndex);
        if (this.continuousLoop) {
            if (vIndex < cloneCount) return slides.length - cloneCount + vIndex;
            if (vIndex >= cloneCount + slides.length) return vIndex - (cloneCount + slides.length);
            return vIndex - cloneCount;
        }

        if (vIndex < cloneCount) return maxIndex;
        if (vIndex >= cloneCount + slides.length) return 0;
        return Math.min(Math.max(vIndex - cloneCount, 0), maxIndex);
    }

    /**
     * Returns the maximum logical slide index that can still render a full viewport.
     * @param {number} totalSlides
     * @returns {number}
     */
    getMaxVisibleStartIndex(totalSlides = this.getSlides().length) {
        const visibleSlides = Math.min(this.slidePerPage, totalSlides);
        return Math.max(totalSlides - visibleSlides, 0);
    }

    /**
     * Normalizes a logical index for the active loop mode.
     * @param {number} index
     * @param {number} totalSlides
     * @returns {number}
     */
    normalizeLoopIndex(index, totalSlides = this.getSlides().length) {
        const logicalCount = this.getLoopLogicalCount(totalSlides);
        if (!logicalCount) return 0;

        return ((index % logicalCount) + logicalCount) % logicalCount;
    }

    /**
     * Returns how many logical positions are reachable for the current loop mode.
     * @param {number} totalSlides
     * @returns {number}
     */
    getLoopLogicalCount(totalSlides = this.getSlides().length) {
        if (!totalSlides) return 0;

        return this.continuousLoop ? totalSlides : this.getMaxVisibleStartIndex(totalSlides) + 1;
    }

    /**
     * Returns the pagination indexes for the current carousel mode.
     * @returns {number[]}
     */
    getPaginationIndexes() {
        return Array.from({ length: this.getLoopLogicalCount() }, (_, index) => index);
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
