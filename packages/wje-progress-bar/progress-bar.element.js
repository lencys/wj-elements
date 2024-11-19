import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `ProgressBar` is a custom web component that represents a progress bar.
 * @summary This element represents a progress bar.
 * @documentation https://elements.webjet.sk/components/progress-bar
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the progress bar.
 * @slot start - The start slot of the progress bar.
 * @slot end - The end slot of the progress bar.
 * @cssproperty [--wje-progress-bar-color=var(--wje-color-contrast-6)] - Sets the color of the progress bar. This property controls the fill color of the progress indicator. Accepts any valid CSS color value, such as named colors (`red`), hex values (`#ff0000`), or CSS variables.
 * @cssproperty [--wje-progress-bar-text-size=.75rem] - Defines the font size of the text displayed within the progress bar. Accepts any valid CSS length unit (e.g., `rem`, `px`, `em`) to control text size relative to the bar's design.
 * @cssproperty [--wje-progress-bar-text-color=var(--wje-color)] - Specifies the color of the text displayed within the progress bar. Accepts any valid CSS color value to ensure contrast and readability against the progress bar's background.
 * @tag wje-progress-bar
 */
export default class ProgressBar extends WJElement {
  /**
   * Creates an instance of ProgressBar.
   * @class
   */
  constructor() {
    super();
  }

  /**
   * Sets the radius of the progress bar.
   * @param {number} value The value to set.
   */
  set radius(value) {
    this.setAttribute('radius', value);
  }

  /**
   * Gets the radius of the progress bar.
   * @returns {number} The value of the radius.
   */
  get radius() {
    return +this.getAttribute('radius') || 70;
  }

  /**
   * Gets the diameter of the progress bar.
   * @returns {number} The value of the diameter.
   */
  get diameter() {
    return this.radius * 2;
  }

  /**
   * Gets the diameter of the progress bar.
   * @returns {number} The value of the diameter.
   */
  get containerSize() {
    return this.diameter + 2 * this.stroke;
  }

  /**
   * Sets the stroke of the progress bar.
   * @param {number} value The value to set.
   */
  set stroke(value) {
    this.setAttribute('stroke', value);
  }

  /**
   * Gets the stroke of the progress bar.
   * @returns {number} The value of the stroke.
   */
  get stroke() {
    return +this.getAttribute('stroke') || 6;
  }

  /**
   * Gets the linecap of the progress bar.
   * @returns {string} The value of the linecap.
   */
  get linecap() {
    return this.getAttribute('linecap') || 'square';
  }

  className = 'ProgressBar';

  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ['progress'];
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = 'open';
  }

  /**
   * Draws the component.
   * @param {object} context The context for drawing.
   * @param {object} store The store for drawing.
   * @param {object} params The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(context, store, params) {
    let xy = this.radius + this.stroke / 2;

    let fragment = document.createDocumentFragment();

    if (params.color) this.classList.add('wje-color');

    let element = document.createElement('div');
    element.classList.add('progress');

    let slot = document.createElement('slot');

    let slotWrapper = document.createElement('div');
    slotWrapper.classList.add('slot-wrapper');

    let slotStart = document.createElement('slot');
    slotStart.setAttribute('name', 'start');

    let slotEnd = document.createElement('slot');
    slotEnd.setAttribute('name', 'end');

    const svgNamespace = 'http://www.w3.org/2000/svg';

    let svg = document.createElementNS(svgNamespace, 'svg');

    let background;
    let bar;

    if (this?.type === 'circle') {
      // console.log("CIRCLE", "RADIUS:", this.radius, "DIAMETER:", this.diameter, "CONTAINER SIZE:", this.containerSize, "STROKE:", this.stroke);
      svg.setAttribute('width', this.containerSize);
      svg.setAttribute('height', this.containerSize);
      svg.setAttribute('viewBox', `0 0 ${this.containerSize} ${this.containerSize}`);
      svg.setAttribute('style', 'transform: rotate(-90deg)');

      background = document.createElementNS(svgNamespace, 'circle');
      background.setAttribute('stroke', 'var(--wje-progress-bar-background-color)');
      background.setAttribute('stroke-width', this.stroke);
      background.setAttribute('fill', 'transparent');
      background.setAttribute('r', this.radius);
      background.setAttribute('cx', this.containerSize / 2);
      background.setAttribute('cy', this.containerSize / 2);

      bar = document.createElementNS(svgNamespace, 'circle');
      bar.setAttribute('stroke', 'var(--wje-progress-bar-color)');
      bar.setAttribute('stroke-width', this.stroke);
      bar.setAttribute('fill', 'transparent');
      bar.setAttribute('r', this.radius);
      bar.setAttribute('cx', this.containerSize / 2);
      bar.setAttribute('cy', this.containerSize / 2);
      bar.setAttribute('stroke-linecap', this.linecap);

      let text = document.createElementNS(svgNamespace, 'text');
      text.setAttribute('x', '50%');
      text.setAttribute('y', '50%');
      text.innerHTML = this.progress + '%';

      svg.appendChild(text);
    } else {
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', this.stroke);
      svg.setAttribute('preserveAspectRatio', 'none');

      background = document.createElementNS(svgNamespace, 'rect');
      background.setAttribute('x', 0);
      background.setAttribute('y', 0);
      background.setAttribute('width', '100%');
      background.setAttribute('height', this.stroke);
      if (this.linecap === 'round') {
        background.setAttribute('rx', this.stroke / 2);
        background.setAttribute('ry', this.stroke / 2);
      }

      bar = document.createElementNS(svgNamespace, 'rect');
      bar.setAttribute('x', 0);
      bar.setAttribute('y', 0);
      bar.setAttribute('width', this.progress + '%');
      bar.setAttribute('height', this.stroke);
      bar.setAttribute('id', 'bar');

      if (this.linecap === 'round') {
        bar.setAttribute('rx', this.stroke / 2);
        bar.setAttribute('ry', this.stroke / 2);
      }
    }

    svg.appendChild(background);
    svg.appendChild(bar);

    slotWrapper.appendChild(slot);

    element.appendChild(slotStart);
    element.appendChild(slotWrapper);
    element.appendChild(svg);
    element.appendChild(slotEnd);

    fragment.appendChild(element);

    this.background = background;
    this.bar = bar;

    return fragment;
  }

  /**
   * Adds event listeners after the component is drawn.
   */
  afterDraw() {
    if (this.type === 'circle') {
      this.setCircleProgress(this.progress);
    }
  }

  /**
   * Returns the dasharray for a circle with the given radius.
   * @param {number} radius The radius of the circle in pixels.
   * @returns {number} The dasharray value.
   */
  getCircleDasharray(radius = 70) {
    return 2 * Math.PI * radius;
  }

  /**
   * Returns the dashoffset for a circle with the given progress and radius.
   * @param {number} progress The progress of the circle in percentage.
   * @param {number} radius The radius of the circle in pixels.
   * @returns {number} The dashoffset value.
   */
  getCircleDashoffset(progress = 0, radius = 70) {
    return this.getCircleDasharray(radius) * ((100 - progress) / 100);
  }

  /**
   * Sets the progress of the circle.
   * @param percent
   */
  setCircleProgress(percent) {
    const progress = this.bar;
    const radius = progress.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = `${circumference}`;
    const offset = circumference - (percent / 100) * circumference;
    progress.style.strokeDashoffset = offset;
  }
}
