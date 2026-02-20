import { default as WJElement } from '../wje-element/element.js';
import { Localizer } from '../utils/localize.js';
/**
 * @summary FileUpload is a custom web component for uploading files.
 * It extends from WJElement and provides functionalities for file upload.
 * @documentation https://elements.webjet.sk/components/file-upload
 * @status stable
 * @augments WJElement
 * @slot - This is a default/unnamed slot.
 * @csspart native - The native file upload part.
 * @csspart file-list - The file list part.
 * @csspart upload-button - The label part.
 * @event change - Fires when the file input changes.
 * @event drop - Fires when a file is dropped into the component.
 * @attribute {string} accepted-types - The accepted file types for upload.
 * @attribute {number} chunk-size - The chunk size for file upload.
 * @attribute {number} max-file-size - The maximum file size for upload.
 * @attribute {string} upload-url - The URL to set as the upload URL.
 * @attribute {boolean} auto-process-files - The auto process files attribute.
 * @attribute {boolean} no-upload-button - The no upload button attribute.
 * @tag wje-file-upload
 */
export default class FileUpload extends WJElement {
    /**
     * Getter for cssStyleSheet.
     * @returns {string} The CSS styles for the component.
     */
    static get cssStyleSheet(): string;
    /**
     * Getter for observedAttributes.
     * @returns {Array} An empty array as no attributes are observed.
     */
    static get observedAttributes(): any[];
    localizer: Localizer;
    _uploadedFiles: any[];
    _queuedFiles: any[];
    /**
     * Dependencies for the FileUpload component.
     * @type {object}
     */
    dependencies: object;
    /**
     * Setter for acceptedTypes attribute.
     * @param {string} value The accepted file types for upload.
     */
    set acceptedTypes(value: string);
    /**
     * Getter for acceptedTypes attribute.
     * @returns {string} The accepted file types for upload.
     */
    get acceptedTypes(): string;
    /**
     * Setter for chunkSize attribute.
     * @param {number} value The chunk size for file upload.
     */
    set chunkSize(value: number);
    /**
     * Getter for chunkSize attribute.
     * @returns {number} The chunk size for file upload.
     */
    get chunkSize(): number;
    /**
     * Setter for maxFileSize attribute.
     * @param {number} value The maximum file size for upload.
     */
    set maxFileSize(value: number);
    /**
     * Getter for maxFileSize attribute.
     * @returns {number} The maximum file size for upload.
     */
    get maxFileSize(): number;
    /**
     * Setter for label attribute.
     * @param {string} value The URL to set as the upload URL.
     */
    set uploadUrl(value: string);
    /**
     * Gets the upload URL for the file upload element.
     * @returns {string} The upload URL for the file upload element.
     */
    get uploadUrl(): string;
    /**
     * Sets the autoProcessFiles attribute.
     * @param value
     */
    set autoProcessFiles(value: any | boolean);
    /**
     * Gets the autoProcessFiles attribute.
     * @returns {any|boolean}
     */
    get autoProcessFiles(): any | boolean;
    /**
     * Sets the noUploadButton attribute.
     * @param value
     */
    set noUploadButton(value: boolean);
    /**
     * Gets the noUploadButton attribute.
     * @returns {boolean}
     */
    get noUploadButton(): boolean;
    /**
     * Sets the uploaded files.
     * @param value
     */
    set uploadedFiles(value: []);
    /**
     * Return the uploaded files.
     * @returns {[]}
     */
    get uploadedFiles(): [];
    /**
     * Sets the to-chunk attribute.
     * @param value
     */
    set toChunk(value: boolean);
    /**
     * Gets the to-chunk attribute.
     * @returns {boolean}
     */
    get toChunk(): boolean;
    /**
     * Sets the maximum number of files that can be uploaded or managed.
     * Assigns the specified value to the 'max-files' attribute.
     * @param {number} value The maximum allowable number of files.
     */
    set maxFiles(value: number);
    /**
     * Retrieves the maximum number of files allowed from the `max-files` attribute.
     * If the attribute is not set or is invalid, defaults to 0.
     * @returns {number} The maximum number of files allowed.
     */
    get maxFiles(): number;
    /**
     * Sets the label attribute for the upload button.
     * @param {string} value
     */
    set label(value: string);
    /**
     * Gets the label attribute for the upload button.
     * @returns {string}
     */
    get label(): string;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    beforeDraw(): void;
    uploadFunction: Function;
    /**
     * Method to draw the component on the screen.
     * @returns {DocumentFragment} The fragment containing the component.
     */
    draw(): DocumentFragment;
    button: HTMLElement;
    native: HTMLDivElement;
    fileList: HTMLSlotElement;
    fileInput: HTMLInputElement;
    /**
     * Method to perform actions after the component is drawn.
     */
    afterDraw(): void;
    /**
     * Method to handle form submission.
     * @param {Event} e The form submission event.
     */
    handleSubmit(e: Event): void;
    /**
     * Method to handle file drop event.
     * @param {Event} e The file drop event object.
     */
    handleDrop: (e: Event) => void;
    /**
     * Method to handle file input change event.
     * @param {Event} e The file input change event object.
     */
    handleInputChange: (e: Event) => void;
    /**
     * Method to add files to the queue.
     * @param files
     */
    addFilesToQueue(files: any): void;
    /**
     * Method to upload files.
     */
    uploadFiles(): void;
    /**
     * Method to create an upload promise.
     * @param file
     * @returns {Promise<unknown>}
     */
    createUploadPromise: (file: any) => Promise<unknown>;
    /**
     * Method to create a preview for the file.
     * @param {File} file The file for which the preview is to be created.
     * @param {FileReader} reader The FileReader instance to read the file.
     * @returns {HTMLElement} The created preview.
     */
    createPreview(file: File, reader: FileReader): HTMLElement;
    /**
     * Method to create a thumbnail for the file.
     * @param {File} file The file for which the thumbnail is to be created.
     * @param {FileReader} reader The FileReader instance to read the file.
     * @returns {HTMLElement} The created thumbnail.
     */
    createThumbnail(file: File, reader: FileReader): HTMLElement;
    /**
     * Method to validate the files.
     * @param {File} file The file to be validated.
     * TODO: alowed types a size limit by malo byt cez attributy
     */
    assertFilesValid(file: File): void;
    /**
     * Method to reset the form state.
     */
    resetFormState(): void;
}
