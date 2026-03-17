import { Localizer } from '../utils/localize.js';
import { default as WJElement, event } from '../wje-element/element.js';
import Button from '../wje-button/button.js';
import { isValidFileType } from '../utils/utils.js';
import { getFileTypeIcon, upload } from './service/service.js';

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
        return this.hasAttribute('accepted-types') ? accepted : 'image/*';
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
     * Sets the label attribute for the upload button.
     * @param {string} value
     */
    set label(value) {
        this.setAttribute('label', value);
    }

    /**
     * Gets the label attribute for the upload button.
     * @returns {string}
     */
    get label() {
        return this.getAttribute('label') || '';
    }

    /**
     * Retrieves the maximum number of files allowed from the `max-files` attribute.
     * If the attribute is not set or is invalid, defaults to 0.
     * @returns {number} The maximum number of files allowed.
     */
    get maxFiles() {
        return parseInt(this.getAttribute('max-files')) || 10;
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
        return ['label'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback?.(name, oldValue, newValue);
        if (name === 'label' && this.button) {
            const nextLabel = this.label || this.localizer.translate('wj.file.upload.button');
            this.button.innerText = nextLabel;
            this.button.setAttribute('aria-label', nextLabel);
        }
    }

    /**
     * Method to setup attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.setAriaState({
            role: 'group',
        });
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
        fileInput.setAttribute('aria-hidden', 'true');

        if (!this.noUploadButton) {
            let button = document.createElement('wje-button');
            button.innerText = this.label || this.localizer.translate('wj.file.upload.button');
            button.setAttribute('part', 'upload-button');
            button.setAttribute('aria-label', button.innerText);

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

        this.native.addEventListener('dragenter', (e) => {handleInputChange
            e.preventDefault();

            if (dragEventCounter === 0) {
                this.native.classList.add('highlight');
            }

            dragEventCounter += 1;
        });

        this.native.addEventListener('dragover', (e) => {
            e.preventDefault();

            if (dragEventCounter === 0) {
                dragEventCounter = 1;
            }
        });

        this.native.addEventListener('dragleave', (e) => {
            e.preventDefault();

            dragEventCounter -= 1;

            if (dragEventCounter <= 0) {
                dragEventCounter = 0;
                this.native.classList.remove('highlight');
            }
        });

        this.native.addEventListener('drop', (e) => {
            event.preventDefault();

            dragEventCounter = 0;
            this.native.classList.remove('highlight');
        });

        this.addEventListener('wje-file-upload-item:remove', (e) => {
            const file = e.detail;

            if (!(file instanceof File)) {
                return;
            }

            let count = this.uploadedFiles.length;

            this.uploadedFiles = this.uploadedFiles.filter((entry) => {
                return entry?.file?.lastModified !== file.lastModified;
            });

            if(count !== this.uploadedFiles.length)
                event.dispatchCustomEvent(this, 'wje-file-upload:file-removed', file);
        });
    }

    /**
     * Method to handle form submission.
     * @param {Event} e The form submission event.
     */
    handleSubmit(e) {
        e.preventDefault();

        this.addFilesToQueue(this.fileInput.files);
    }

    /**
     * Method to handle file drop event.
     * @param {Event} e The file drop event object.
     */
    handleDrop = (e) => {
        const fileList = e.dataTransfer.files;

        this.resetFormState();

        this.addFilesToQueue(fileList);
    };

    /**
     * Method to handle file input change event.
     * @param {Event} e The file input change event object.
     */
    handleInputChange = (e) => {
        const files = Array.from(e.target.files);

        event.dispatchCustomEvent(this, 'wje-file-upload:files-selected', files);

        this.resetFormState();

        try {
            this.handleSubmit(e);
        } catch (err) {
            console.error(err);
        }
    };

    /**
     * Method to add files to the queue.
     * @param files
     */
    addFilesToQueue(files) {
        const currentCount = (Array.isArray(this.uploadedFiles) ? this.uploadedFiles.length : 0) + (Array.isArray(this._queuedFiles) ? this._queuedFiles.length : 0);
        const newTotal = currentCount + files.length;

        if (this.maxFiles && newTotal > this.maxFiles) {
            const detail = {
                code: 'MAX-FILES-EXCEEDED',
                files,
                maxFiles: this.maxFiles,
                currentCount,
                attemptedToAdd: files.length,
                allowedRemaining: Math.max(this.maxFiles - currentCount, 0),
            };

            event.dispatchCustomEvent(this, 'wje-file-upload:error', detail);

            return;
        }

        this._queuedFiles = [...(this._queuedFiles || []), ...files];

        event.dispatchCustomEvent(this, 'wje-file-upload:files-added', files);

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
                event.dispatchCustomEvent(this, 'wje-file-upload:files-uploaded', this.uploadedFiles);

                this.onAllFilesUploaded?.();
                this._queuedFiles = [];
            }).catch((err) => {
                this._queuedFiles = this._queuedFiles.filter((file) => file !== err.file);

                event.dispatchCustomEvent(this,'wje-file-upload:error', err);
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
            reader.onload = () => {
                event.dispatchCustomEvent(this, 'wje-file-upload:started', file);

                this.onUploadStarted?.(file);

                preview = this.createPreview(file, reader);
                this.appendChild(preview);

                this.uploadFunction(file, preview).then((res) => {
                    res.item = preview;

                    event.dispatchCustomEvent(this, 'wje-file-upload:file-uploaded', res);

                    this.onUploadedFileComplete?.(res);

                    this.uploadedFiles.push(res);

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
        let fileType = file.type ? file.type.split('/')[1] : file.name.split('.').pop();
        let icon = getFileTypeIcon(fileType) || 'file';

        preview.setAttribute('slot', 'item');
        preview.setAttribute('name', file.name);
        preview.setAttribute('size', file.size);
        preview.setAttribute('uploaded', '0');
        preview.innerHTML = `<wje-icon slot="img" name="${icon}" size="large"></wje-icon>`;
        preview.data = file;

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
            const err = new Error('');
            err.code = 'INVALID-FILE-TYPE';
            err.file = file;
            err.acceptedTypes = this.acceptedTypes;

            throw err;
        }

        if (fileSize > this.maxFileSize) {
            const err = new Error('');
            err.code = 'FILE-TOO-LARGE';
            err.file = file;
            err.maxFileSize = this.maxFileSize;

            throw err;
        }
    }

    /**
     * Method to reset the form state.
     */
    resetFormState() {
        this.fileList.textContent = '';
    }
}
