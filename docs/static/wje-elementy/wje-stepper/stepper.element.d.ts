import { default as WJElement } from '../wje-element/element.js';
import { Localizer } from '../utils/localize.js';
/**
 * `Stepper` is a custom web component that represents a stepper.
 * @summary This element represents a stepper.
 * @documentation https://elements.webjet.sk/components/stepper
 * @status stable
 * @augments WJElement
 * @attribute {string} active - The active color for the stepper.
 * @attribute {string} done - The done color for the stepper.
 * @slot - The default slot for the stepper.
 * @csspart native - The native part of the stepper.
 * @csspart header - The header part of the stepper.
 * @csspart content - The content part of the stepper.
 * @tag wje-stepper
 */
export default class Stepper extends WJElement {
    static get cssStyleSheet(): any;
    currentStep: number;
    localizer: Localizer;
    steps: any[];
    headerSteps: any[];
    _stepperId: number;
    /**
     * Sets the start index for an operation or a process. This method assigns
     * the provided value to the attribute 'start-index'.
     * @param {number|string} value The value to set for the 'start-index' attribute.
     */
    set startIndex(value: number | string);
    /**
     * Retrieves the starting index value stored as an attribute.
     * If the attribute 'start-index' exists and is not null, it parses the value as an integer and returns it.
     * If the attribute does not exist, it returns the default value of 0.
     * @returns {number} The starting index as an integer, or 0 if the attribute is not present.
     */
    get startIndex(): number;
    get active(): string;
    get done(): string;
    /**
     * Draws the component for the stepper.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    header: HTMLDivElement;
    prev: HTMLSlotElement;
    next: HTMLSlotElement;
    finish: HTMLSlotElement;
    processStep(index: any, step: any, header: any, steps: any): HTMLDivElement;
    /**
     * Sets up the attributes for the component.
     */
    afterDraw(): void;
    /**
     * Navigates to a different step in a multi-step process based on the provided direction.
     * @param {number} direction The navigation direction.
     * Use a positive value to move forward or a negative value to move backward.
     */
    navigate(direction: number): void;
    /**
     * Navigates to a specific step in a workflow or process.
     * Executes a set of operations before and after the step transition.
     * @param {number} stepIndex The index of the step to navigate to.
     * @returns {void} This method does not return a value.
     */
    goToStep(stepIndex: number): void;
    _executeGoToStep(stepIndex?: number): void;
    /**
     * Resets a step to its default state by clearing its active and done attributes.
     * Updates the step's badge to show its index and removes any color styling.
     * @param {HTMLElement} nav The navigation element representing the step.
     * @param {HTMLElement|null} [badge] The badge element within the step. If not provided, it will be selected from the `nav` element.
     * @param {number} [stepIndex] The index of the step, used to set the badge content.
     */
    setStepDefault(nav: HTMLElement, badge?: HTMLElement | null, stepIndex?: number): void;
    /**
     * Sets a step as active by adding the `active` attribute and updating the step's badge.
     * @param {HTMLElement} nav The navigation element representing the step to activate.
     * @param {HTMLElement|null} [badge] The badge element within the step. If not provided, it will be selected from the `nav` element.
     * @param {number|null} [stepIndex] The index of the step, used to set the badge content. Defaults to `null` if not provided.
     */
    setStepActive(nav: HTMLElement, badge?: HTMLElement | null, stepIndex?: number | null): void;
    /**
     * Activates the content of a specific step by displaying it and hiding all others.
     * @param {number} stepIndex The index of the step whose content should be displayed.
     */
    setContentActive(stepIndex: number): void;
    /**
     * Returns the DOM element of a step by index.
     * @param {number} stepIndex
     * @returns {HTMLElement}
     */
    getStepElement(stepIndex: number): HTMLElement;
    /**
     * Appends or replaces content inside the step container.
     * @param {number} stepIndex
     * @param {Node|string|Node[]} content DOM node(s) or HTML string to insert.
     * @param {{ replace?: boolean }} [options]
     */
    renderStepContent(stepIndex: number, content: Node | string | Node[], options?: {
        replace?: boolean;
    }): void;
    /**
     * Marks a step as completed by setting the `done` attribute and updating its badge with a check icon.
     * @param {HTMLElement} nav The navigation element representing the completed step.
     * @param {HTMLElement|null} [badge] The badge element within the step. If not provided, it will be selected from the `nav` element.
     */
    setStepDone(nav: HTMLElement, badge?: HTMLElement | null): void;
    setStepLocked(nav: any, badge?: any): void;
    /**
     * A callback function that is executed before opening a step in a process.
     * This allows for custom behavior or logic to be applied before the step is displayed.
     * @callback beforeOpen
     * @param {number} stepIndex The index of the step that is about to be opened.
     * @param {object} currentStep The current step data or configuration object before opening the new step.
     */
    beforeOpen: (stepIndex: any, currentStep: any) => void;
    /**
     * Callback function executed after a step is opened.
     * This function can be overridden to implement custom behavior
     * that should take place immediately after a step is opened.
     * @function afterOpen
     * @param {number} stepIndex The index of the step that has been opened.
     * @param {object} currentStep The object representing the current step that has been opened.
     */
    afterOpen: (stepIndex: number, currentStep: object) => void;
}
