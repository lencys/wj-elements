import { Localizer } from '../utils/localize.js';
import Button from '../wje-button/button.js';
import { default as WJElement } from '../wje-element/element.js';
import { getFileTypeIcon, isValidFileType, upload } from './service/service.js';
import styles from './styles/styles.css?inline';

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
     * Constructor for FileUpload.
     * Initializes a new instance of the Localizer.
     */
    constructor() {
        super();
        this.localizer = new Localizer(this);
        this._uploadedFiles = [];
        this._queuedFiles = [];
    }

    /**
     * Dependencies for the FileUpload component.
     * @type {object}
     */
    dependencies = {
        'wje-button': Button,
    };

    /**
     * Setter for acceptedTypes attribute.
     * @param {string} value The accepted file types for upload.
     */
    set acceptedTypes(value) {
        this.setAttribute('accepted-types', value);
    }

    /**
     * Getter for acceptedTypes attribute.
     * @returns {string} The accepted file types for upload.
     */
    get acceptedTypes() {
        const accepted = this.getAttribute('accepted-types');
        return this.hasAttribute('accepted-types') ? accepted : '';
    }

    /**
     * Setter for chunkSize attribute.
     * @param {number} value The chunk size for file upload.
     */
    set chunkSize(value) {
        this.setAttribute('chunk-size', value);
    }

    /**
     * Getter for chunkSize attribute.
     * @returns {number} The chunk size for file upload.
     */
    get chunkSize() {
        const chunk = this.getAttribute('chunk-size');
        return this.hasAttribute('chunk-size') ? chunk : 1024 * 1024;
    }

    /**
     * Setter for maxFileSize attribute.
     * @param {number} value The maximum file size for upload.
     */
    set maxFileSize(value) {
        this.setAttribute('max-file-size', value);
    }

    /**
     * Getter for maxFileSize attribute.
     * @returns {number} The maximum file size for upload.
     */
    get maxFileSize() {
        const fileSize = this.getAttribute('max-file-size');
        return this.hasAttribute('max-file-size') ? fileSize * 1024 * 1024 : 1024 * 1024;
    }

    /**
     * Setter for label attribute.
     * @param {string} value The URL to set as the upload URL.
     */
    set uploadUrl(value) {
        this.setAttribute('upload-url', value);
    }

    /**
     * Gets the upload URL for the file upload element.
     * @returns {string} The upload URL for the file upload element.
     */
    get uploadUrl() {
        return this.getAttribute('upload-url') ?? '/upload';
    }

    /**
     * Sets the autoProcessFiles attribute.
     * @param value
     */
    set autoProcessFiles(value) {
        this.setAttribute('auto-process-files', value);
    }

    /**
     * Gets the autoProcessFiles attribute.
     * @returns {any|boolean}
     */
    get autoProcessFiles() {
        return JSON.parse(this.getAttribute('auto-process-files')) ?? true;
    }

    /**
     * Sets the noUploadButton attribute.
     * @param value
     */
    set noUploadButton(value) {
        this.setAttribute('no-upload-button', value);
    }

    /**
     * Gets the noUploadButton attribute.
     * @returns {boolean}
     */
    get noUploadButton() {
        return this.hasAttribute('no-upload-button');
    }

    /**
     * Sets the uploaded files.
     * @param value
     */
    set uploadedFiles(value) {
        this._uploadedFiles = value;
    }

    /**
     * Return the uploaded files.
     * @returns {[]}
     */
    get uploadedFiles() {
        return this._uploadedFiles;
    }

    /**
     * Sets the to-chunk attribute.
     * @param value
     */
    set toChunk(value) {
        this.setAttribute('to-chunk', value);
    }

    /**
     * Gets the to-chunk attribute.
     * @returns {boolean}
     */
    get toChunk() {
        return this.hasAttribute('to-chunk');
    }

    /**
     * Sets the maximum number of files that can be uploaded or managed.
     * Assigns the specified value to the 'max-files' attribute.
     * @param {number} value The maximum allowable number of files.
     */
    set maxFiles(value) {
        this.setAttribute('max-files', value);
    }

    /**
     * Retrieves the maximum number of files allowed from the `max-files` attribute.
     * If the attribute is not set or is invalid, defaults to 0.
     * @returns {number} The maximum number of files allowed.
     */
    get maxFiles() {
        return parseInt(this.getAttribute('max-files')) || 1;
    }

    className = 'FileUpload';

    /**
     * Getter for cssStyleSheet.
     * @returns {string} The CSS styles for the component.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for observedAttributes.
     * @returns {Array} An empty array as no attributes are observed.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Method to setup attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    beforeDraw() {
        this.uploadFunction = upload(this.uploadUrl, this.chunkSize, !this.toChunk);
    }

    /**
     * Method to draw the component on the screen.
     * @returns {DocumentFragment} The fragment containing the component.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-file-upload');
        native.setAttribute('part', 'native');

        let label = document.createElement('div');
        label.setAttribute('part', 'file-label');
        label.classList.add('file-label');

        let fileList = document.createElement('slot');
        fileList.setAttribute('name', 'item');
        fileList.setAttribute('part', 'items');
        fileList.classList.add('file-list');

        let slot = document.createElement('slot');
        label.appendChild(slot);

        let fileInput = document.createElement('input');
        fileInput.setAttribute('type', 'file');
        fileInput.setAttribute('multiple', '');
        fileInput.setAttribute('style', 'display:none;');

        if (!this.noUploadButton) {
            let button = document.createElement('wje-button');
            button.innerText = this.label || this.localizer.translate('wj.file.upload.button');
            button.setAttribute('part', 'upload-button');

            label.appendChild(button);

            this.button = button;
        }

        native.appendChild(fileInput);
        native.appendChild(label);
        native.appendChild(fileList);

        fragment.appendChild(native);

        this.native = native;
        this.fileList = fileList;
        this.fileInput = fileInput;

        return fragment;
    }

    /**
     * Method to perform actions after the component is drawn.
     */
    afterDraw() {
        this.button?.addEventListener('click', () => {
            this.fileInput.click();
        });

        this.fileInput.addEventListener('change', this.handleInputChange);
        this.native.addEventListener('drop', this.handleDrop);

        let dragEventCounter = 0;

        this.native.addEventListener('dragenter', (event) => {
            event.preventDefault();

            if (dragEventCounter === 0) {
                this.native.classList.add('highlight');
            }

            dragEventCounter += 1;
        });

        this.native.addEventListener('dragover', (event) => {
            event.preventDefault();

            if (dragEventCounter === 0) {
                dragEventCounter = 1;
            }
        });

        this.native.addEventListener('dragleave', (event) => {
            event.preventDefault();

            dragEventCounter -= 1;

            if (dragEventCounter <= 0) {
                dragEventCounter = 0;
                this.native.classList.remove('highlight');
            }
        });

        this.native.addEventListener('drop', (event) => {
            event.preventDefault();

            dragEventCounter = 0;
            this.native.classList.remove('highlight');
        });
    }

    /**
     * Method to handle form submission.
     * @param {Event} event The form submission event.
     */
    handleSubmit(event) {
        event.preventDefault();

        // TODO: TU TREBA PRIDAT ZOBRAZENIE SUBORU A JEHO PROCESSU

        this.addFilesToQueue(this.fileInput.files);
    }

    /**
     * Method to handle file drop event.
     * @param {Event} event The file drop event object.
     */
    handleDrop = (event) => {
        const fileList = event.dataTransfer.files;

        this.resetFormState();

        this.addFilesToQueue(fileList);
    };

    /**
     * Method to handle file input change event.
     * @param {Event} event The file input change event object.
     */
    handleInputChange = (event) => {
        this.resetFormState();

        try {
            this.handleSubmit(event);
        } catch (err) {}
    };

    /**
     * Method to add files to the queue.
     * @param files
     */
    addFilesToQueue(files) {
        if (this.maxFiles && files.length > this.maxFiles) {
            this.dispatchEvent(
              new CustomEvent('file-upload:error', {
                  detail: {
                      type: 'max-files-exceeded',
                      max: this.maxFiles,
                      received: files.length,
                  },
                  bubbles: true,
                  composed: true,
              })
            );
            return; // stop processing
        }

        this._queuedFiles = [...files];

        this.dispatchEvent(
            new CustomEvent('file-upload:files-added', { detail: files, bubbles: true, composed: true })
        );
        this.onAddedFiles?.();

        if (this.autoProcessFiles) {
            this.uploadFiles();
        }

        this.fileInput.value = '';
    }

    /**
     * Method to upload files.
     */
    uploadFiles() {
        if (this._queuedFiles.length === 0) {
            return;
        }

        const uploadPromises = this._queuedFiles.map((file) => this.createUploadPromise(file));
        uploadPromises
            .reduce((prev, curr) => {
                return prev.then(() => {
                    return curr;
                });
            }, Promise.resolve())
            .then(() => {
                this.dispatchEvent(
                    new CustomEvent('file-upload:all-files-uploaded', {
                        detail: this.uploadedFiles,
                        bubbles: true,
                        composed: true,
                    })
                );
                this.onAllFilesUploaded?.();
                this._queuedFiles = [];
            });
    }

    /**
     * Method to create an upload promise.
     * @param file
     * @returns {Promise<unknown>}
     */
    createUploadPromise = (file) => {
        return new Promise((resolve, reject) => {
            this.assertFilesValid(file);
            let preview;

            let reader = new FileReader();
            reader.onload = (e) => {
                this.dispatchEvent(
                    new CustomEvent('file-upload:upload-started', { detail: file, bubbles: true, composed: true })
                );
                this.onUploadStarted?.(file);

                preview = this.createPreview(file, reader);
                this.appendChild(preview);

                this.uploadFunction(file, preview).then((res) => {
                    res.item = preview;

                    this.dispatchEvent(
                        new CustomEvent('file-upload:upladed-file-complete', {
                            detail: res,
                            bubbles: true,
                            composed: true,
                        })
                    );
                    this.onUploadedFileComplete?.(res);
                    this.uploadedFiles.push(res.data);

                    resolve(res);
                });
            };

            reader.readAsDataURL(file);
        });
    };

    /**
     * Method to create a preview for the file.
     * @param {File} file The file for which the preview is to be created.
     * @param {FileReader} reader The FileReader instance to read the file.
     * @returns {HTMLElement} The created preview.
     */
    createPreview(file, reader) {
        let preview = document.createElement('wje-file-upload-item');
        preview.setAttribute('slot', 'item');
        preview.setAttribute('name', file.name);
        preview.setAttribute('size', file.size);
        preview.setAttribute('uploaded', '0');
        preview.setAttribute('progress', '0');
        preview.innerHTML = `<wje-icon slot="img" name="${getFileTypeIcon(file.type.split('/')[1])}" size="large"></wje-icon>`;

        return preview;
    }

    /**
     * Method to create a thumbnail for the file.
     * @param {File} file The file for which the thumbnail is to be created.
     * @param {FileReader} reader The FileReader instance to read the file.
     * @returns {HTMLElement} The created thumbnail.
     */
    createThumbnail(file, reader) {
        let img = document.createElement('img');
        img.setAttribute('src', reader.result);

        return img;
    }

    /**
     * Method to validate the files.
     * @param {File} file The file to be validated.
     * TODO: alowed types a size limit by malo byt cez attributy
     */
    assertFilesValid(file) {
        const { name: fileName, size: fileSize } = file;
        if (!isValidFileType(file, this.acceptedTypes)) {
            throw new Error(`❌ FILE: "${fileName}" Valid file types are: "${this.acceptedTypes}"`);
        }

        if (fileSize > this.maxFileSize) {
            throw new Error(
                `❌ File "${fileName}" could not be uploaded. Only images up to ${this.maxFileSize} MB are allowed. Nie je to ${fileSize}`
            );
        }
    }

    /**
     * Method to reset the form state.
     */
    resetFormState() {
        this.fileList.textContent = '';
    }
}
