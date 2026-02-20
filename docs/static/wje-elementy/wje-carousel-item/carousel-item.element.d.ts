import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents CarouselItem element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/carousel-item
 * @status stable
 * @augments WJElement
 * @slot - The carousel item main content.
 * @csspart native - The component's native wrapper.
 * @cssproperty [--wje-carousel-item-background-color=transparent] - Background color of the component;
 * @cssproperty [--wje-carousel-item-border-color=--wje-color-contrast-4] - Border color of the component;
 * @cssproperty [--wje-carousel-item-color=--wje-color-contrast-11] - Color of the component;
 * @cssproperty [--wje-carousel-item-border-radius=--wje-border-radius-medium] - Border radius of the component;
 * @cssproperty [--wje-carousel-item-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-carousel-item-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-carousel-item-border-color=--wje-color-contrast-1] - Border color of the component;
 * @cssproperty [--wje-carousel-item-margin-inline=0] - Margin inline of the component;
 */
export default class CarouselItem extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {*}
     */
    static get cssStyleSheet(): any;
    /**
     * Getter for the observed attributes.
     * @returns {*[]}
     */
    static get observedAttributes(): any[];
    /**
     * Draws the CarouselItem element.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    /**
     * After draw event for the CarouselItem element.
     */
    afterDraw(): void;
}
