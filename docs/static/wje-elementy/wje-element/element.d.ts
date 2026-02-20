import { UniversalService } from '../utils/universal-service.js';
import { defaultStoreActions } from '../wje-store/store.js';
import { Permissions } from '../utils/permissions.js';
import { WjElementUtils } from '../utils/element-utils.js';
import { event } from '../utils/event.js';
export default class WJElement extends HTMLElement {
    /**
     * Processes and combines two templates into one.
     * @param pTemplate The primary template.
     * @param inputTemplate The secondary template.
     * @returns The combined template.
     */
    static processTemplates: (pTemplate: any, inputTemplate: any) => HTMLTemplateElement;
    /**
     * Defines a custom element if not already defined.
     * @param name The name of the custom element.
     * @param [elementConstructor] The constructor for the custom element.
     * @param [options] Additional options for defining the element.
     */
    static define(name: any, elementConstructor?: typeof WJElement, options?: {}): void;
    internals: ElementInternals;
    service: UniversalService;
    _dependencies: {};
    /**
     * @typedef {object} DrawingStatuses
     * @property {number} CREATED - The component has been created.
     * @property {number} ATTACHED - The component has been attached to the DOM.
     * @property {number} BEGINING - The component is beginning to draw.
     * @property {number} START - The component has started drawing.
     * @property {number} DRAWING - The component is drawing.
     * @property {number} DONE - The component has finished drawing.
     * @property {number} DISCONNECTED - The component has been disconnected from the DOM.
     */
    /**
     * WJElement is a base class for custom web components with managed lifecycle, attribute/property sync,
     * permission-based visibility, and extensibility hooks.
     * @property {boolean} isAttached - True if the component is currently attached to the DOM.
     * @property {DrawingStatuses} drawingStatuses - Enum of possible drawing states.
     * @property {number} drawingStatus - Current drawing status (see drawingStatuses).
     * @property {boolean} _pristine - True if the component has not been updated since last render.
     * @property {boolean} isRendering - True if a render is currently in progress.
     * @property {number|null} rafId - ID of the scheduled animation frame for rendering, or null.
     * @property {string|null} originalVisibility - Stores the original CSS visibility before rendering.
     * @property {object} params - Stores the current attributes/properties for rendering.
     * @property {Promise<void>} updateComplete - Promise resolved when the current update/render is complete.
     * @property {string[]} permission - List of required permissions (from 'permission' attribute).
     * @property {boolean} isPermissionCheck - Whether permission checking is enabled (from 'permission-check' attribute).
     * @property {boolean} noShow - Whether the element should be hidden (from 'no-show' attribute).
     * @property {string|undefined} isShadowRoot - Value of the 'shadow' attribute, if present.
     * @property {boolean} hasShadowRoot - True if the 'shadow' attribute is present.
     * @property {string} shadowType - Type of shadow root ('open' by default).
     * @property {object} store - Reference to the global store instance.
     * @property {object} defaultStoreActions - Default store actions for arrays and objects.
     * @property {string[]|undefined} removeClassAfterConnect - Classes to remove after connect (from 'remove-class-after-connect' attribute).
     * @property {object} dependencies - Registered component dependencies.
     * @property {HTMLElement|ShadowRoot} context - The rendering context (shadow root or element itself).
     */
    drawingStatuses: {
        CREATED: number;
        ATTACHED: number;
        BEGINING: number;
        START: number;
        DRAWING: number;
        DONE: number;
        DISCONNECTED: number;
    };
    rafId: number;
    params: {};
    updateComplete: Promise<any>;
    finisPromise: (value: any) => void;
    rejectPromise: (reason?: any) => void;
    get drawingStatus(): number;
    /**
     * Sets the value of the 'permission' attribute.
     * @param {string[]} value The value to set for the 'permission' attribute.
     */
    set permission(value: string[]);
    /**
     * Gets the value of the 'permission-check' attribute.
     * @returns {string[]} The value of the 'permission' attribute.
     */
    get permission(): string[];
    /**
     * Sets the 'permission-check' attribute.
     * @param {boolean} value The value to set for the 'permission-check' attribute.
     */
    set isPermissionCheck(value: boolean);
    /**
     * Checks if the 'permission-check' attribute is present.
     * @returns {boolean} True if the 'permission-check' attribute is present.
     */
    get isPermissionCheck(): boolean;
    set noShow(value: boolean);
    /**
     * Checks if the 'show' attribute is present.
     * @returns {boolean} True if the 'show' attribute is present.
     */
    get noShow(): boolean;
    /**
     * Sets the 'shadow' attribute.
     * @param {string} value The value to set for the 'shadow' attribute.
     */
    set isShadowRoot(value: string);
    get isShadowRoot(): string;
    /**
     * Checks if the 'shadow' attribute is present.
     * @returns {boolean} True if the 'shadow' attribute is present.
     */
    get hasShadowRoot(): boolean;
    /**
     * Gets the value of the 'shadow' attribute or 'open' if not set.
     * @returns {string} The value of the 'shadow' attribute or 'open'.
     */
    get shadowType(): string;
    /**
     * Gets the rendering context, either the shadow root or the component itself.
     * @returns The rendering context.
     */
    get context(): any;
    /**
     * Gets the store instance.
     * @returns {object} The store instance.
     */
    get store(): object;
    /**
     * Returns ElementInternals when available.
     * @returns {ElementInternals|null}
     */
    getInternals(): ElementInternals | null;
    /**
     * Sets ARIA state via attributes.
     * Accepts camelCase keys without the "aria" prefix, plus "role".
     * Example: setAriaState({ role: 'tab', selected: true, controls: 'panel-1' })
     * @param {object} state
     */
    setAriaState(state?: object): void;
    /**
     * @typedef {object} ArrayActions
     * @property {Function} addAction - Adds an item to the array.
     * @property {Function} deleteAction - Deletes an item from the array.
     * @property {Function} loadAction - Loads an array.
     * @property {Function} updateAction - Updates an item in the array.
     * @property {Function} addManyAction - Adds many items to the array.
     */
    /**
     * @typedef {object} ObjectActions
     * @property {Function} addAction - Replace old object with new object
     * @property {Function} deleteAction - Delete item based on key
     * @property {Function} updateAction - Update item based on key
     */
    /**
     * Gets the default store actions.
     * @returns The default store actions for arrays and objects.
     */
    get defaultStoreActions(): typeof defaultStoreActions;
    /**
     * Gets the classes to be removed after the component is connected.
     * @returns An array of class names to remove.
     */
    get removeClassAfterConnect(): string[];
    /**
     * Sets the component dependencies.
     * @param value The dependencies to set.
     */
    set dependencies(value: {});
    /**
     * Gets the component dependencies.
     * @returns The component dependencies.
     */
    get dependencies(): {};
    /**
     * Defines component dependencies by registering custom elements.
     */
    defineDependencies(): void;
    /**
     * Hook for extending behavior before drawing the component.
     * @param context The rendering context, usually the element's shadow root or main DOM element.
     * @param appStoreObj The global application store for managing state.
     * @param params Additional parameters or attributes for rendering the component.
     */
    beforeDraw(context: any, appStoreObj: any, params: any): void;
    /**
     * Renders the component within the provided context.
     * @param context The rendering context, usually the element's shadow root or main DOM element.
     * @param appStoreObj
     * @param params Additional parameters or attributes for rendering the component.
     * @returns This implementation does not render anything and returns `null`.
     * @description
     * The `draw` method is responsible for rendering the component's content.
     * Override this method in subclasses to define custom rendering logic.
     * @example
     * class MyComponent extends WJElement {
     *   draw(context, appStoreObj, params) {
     *     const div = document.createElement('div');
     *     div.textContent = 'Hello, world!';
     *     context.appendChild(div);
     *   }
     * }
     */
    draw(context: any, appStoreObj: any, params: any): any;
    /**
     * Hook for extending behavior after drawing the component.
     * @param context The rendering context, usually the element's shadow root or main DOM element.
     * @param appStoreObj The global application store for managing state.
     * @param params Additional parameters or attributes for rendering the component.
     */
    afterDraw(context: any, appStoreObj: any, params: any): void;
    /**
     * Optional hook: return skeleton markup used while async draw is in progress.
     * Prefer declarative skeleton via `<div slot="skeleton">...</div>`.
     * Return: string | Node | DocumentFragment | null | Promise of those.
     */
    renderSkeleton(params: any): any;
    /**
     * Sets the delay for the skeleton loading indicator.
     * @param {string|number|null|undefined} value The delay value to be set. Accepts a numerical value,
     * a string that can be converted to a number, null, or undefined.
     * If null or undefined is provided, the skeleton delay will be cleared.
     */
    set skeletonDelay(value: string | number | null | undefined);
    /**
     * Retrieves the delay duration for the skeleton display, determining the value based on a hierarchy of overrides and defaults.
     * The method prioritizes in the following order:
     * 1. A finite number set as the `_wjSkeletonDelayOverride` property.
     * 2. A valid numeric value from the `skeleton-delay` attribute.
     * 3. The `skeletonDelayMs` property, if defined with a finite number.
     * 4. A default value of 150 if none of the above are set.
     * @returns {number} The delay in milliseconds before the skeleton is displayed.
     */
    get skeletonDelay(): number;
    /**
     * Sets the minimum duration for the skeleton state. If the provided value is null, undefined, or an empty string,
     * the override for the minimum duration is removed.
     * @param {string|number|null|undefined} value The minimum duration to be set for the skeleton state. It can be a numeric value, string representation of a number, or null/undefined to reset the value.
     */
    set skeletonMinDuration(value: string | number | null | undefined);
    /**
     * Retrieves the minimum duration for the skeleton animation.
     * The method checks for an internally stored finite value. If unavailable,
     * it retrieves the value from the 'skeleton-min-duration' attribute,
     * converts it to a number if possible, and uses it. If neither is valid,
     * a default duration of 300 is returned.
     * @returns {number} The minimum duration for the skeleton animation in milliseconds.
     */
    get skeletonMinDuration(): number;
    _wjSkeletonMinDurationOverride: number;
    /**
     * Sets or removes the 'skeleton' attribute based on the provided value.
     * @param {boolean} value A boolean value indicating whether to set ('true') or remove ('false') the 'skeleton' attribute.
     */
    set skeleton(value: boolean);
    /**
     * Checks if the 'skeleton' attribute is present on the element.
     * @returns {boolean} True if the 'skeleton' attribute exists, false otherwise.
     */
    get skeleton(): boolean;
    _wjSkeletonDelayOverride: number;
    /**
     * Retrieves the delay value used for skeleton loading.
     * @returns {number} The delay value for the skeleton loader.
     */
    get skeletonDelayValue(): number;
    /**
     * Lifecycle method invoked when the component is connected to the DOM.
     */
    connectedCallback(): void;
    /**
     * Initializes the component, setting up attributes and rendering.
     * @param [force] Whether to force initialization.
     * @returns A promise that resolves when initialization is complete.
     */
    initWjElement: (force?: boolean) => Promise<any>;
    /**
     * Sets up attributes and event listeners for the component.
     * This method retrieves all custom events defined for the component
     * and adds event listeners for each of them. When an event is triggered,
     * it calls the corresponding method on the host element.
     */
    setupAttributes(): void;
    /**
     * Hook for extending behavior before disconnecting the component.
     */
    beforeDisconnect(): void;
    /**
     * Hook for extending behavior after disconnecting the component.
     */
    afterDisconnect(): void;
    /**
     * Hook for extending behavior before redrawing the component.
     */
    beforeRedraw(): void;
    /**
     * Cleans up resources and event listeners for the component.
     */
    componentCleanup(): void;
    /**
     * Lifecycle method invoked when the component is disconnected from the DOM.
     */
    disconnectedCallback(): void;
    /**
     * Lifecycle method invoked when an observed attribute changes.
     * @param name The name of the attribute that changed.
     * @param old The old value of the attribute.
     * @param newName The new value of the attribute.
     */
    attributeChangedCallback(name: any, old: any, newName: any): void;
    /**
     * Triggers a refresh operation by initializing the update lifecycle and setting up promises
     * to track its completion or failure status. Marks the instance as not pristine and queues
     * an update.
     * @returns {void} Does not return a value.
     */
    refresh(): void;
    /**
     * Stops the current render loop if it is running by canceling the requestAnimationFrame.
     * @returns {void} This method does not return a value.
     */
    stopRenderLoop(): void;
    /**
     * Displays the component's content, optionally forcing a re-render.
     * @param [force] Whether to force a re-render.
     * @returns A promise that resolves when the display is complete.
     */
    display(force?: boolean): Promise<void>;
    template: any;
    /**
     * Renders the content into the provided target context.
     * This method handles asynchronous rendering, processes the output from the `draw` method,
     * and appends the resulting content to the specified target context.
     * @returns {Promise<void>} A promise that resolves once the render operation is complete and the content is appended to the target context.
     * @param targetContext
     */
    render(targetContext?: any): Promise<void>;
    /**
     * Sanitizes a given name by converting it from kebab-case to camelCase.
     * @param {string} name The name in kebab-case format (e.g., "example-name").
     * @returns {string} The sanitized name in camelCase format (e.g., "exampleName").
     * @example
     * sanitizeName('example-name');
     * @example
     * sanitizeName('my-custom-component');
     */
    sanitizeName(name: string): string;
    /**
     * Checks if a property on an object has a getter or setter method defined.
     * @param {object} obj The object on which the property is defined.
     * @param {string} property The name of the property to check.
     * @returns {object} An object indicating the presence of getter and setter methods.
     * @property {Function|null} hasGetter The getter function if it exists, otherwise `null`.
     * @property {Function|null} hasSetter The setter function if it exists, otherwise `null`.
     * @example
     * const obj = {
     *   get name() { return 'value'; },
     *   set name(val) { console.log(val); }
     * };
     * checkGetterSetter(obj, 'name');
     * @example
     * const obj = { prop: 42 };
     * checkGetterSetter(obj, 'prop');
     */
    checkGetterSetter(obj: object, property: string): object;
    /**
     * Sets up accessors (getter and setter) for all attributes of the current object.
     * This method retrieves the attribute names, sanitizes them, and dynamically defines
     * property accessors for each attribute using `Object.defineProperty`.
     * @returns {void} This method does not return any value.
     */
    setUpAccessors(): void;
    #private;
}
export let __esModule: string;
export { Permissions, WjElementUtils, event };
