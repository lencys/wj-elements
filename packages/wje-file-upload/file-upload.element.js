import { Localizer } from "../utils/localize.js";
import Button from "../wje-button/button.js";
import { default as WJElement } from "../wje-element/element.js";
import { getFileTypeIcon, isValidFileType, upload } from "./service/service.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary FileUpload is a custom web component for uploading files.
 * It extends from WJElement and provides functionalities for file upload.
 * @documentation https://elements.webjet.sk/components/file-upload
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - This is a default/unnamed slot.
 *
 * @part native - The native file upload part.
 * @part file-list - The file list part.
 * @part button - The upload button part.
 *
 * @event change - Fires when the file input changes.
 * @event drop - Fires when a file is dropped into the component.
 *
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
     * Dependencies
     * @type {Object}
     */
    dependencies = {
        "wje-button": Button,
    }

    /**
     * Setter for acceptedTypes attribute.
     * @param {string} value - The accepted file types.
     */
    set acceptedTypes(value) {
        this.setAttribute("accepted-types", value);
    }

    /**
     * Getter for acceptedTypes attribute.
     * @returns {string} The accepted file types.
     */
    get acceptedTypes() {
        const accepted = this.getAttribute("accepted-types");
        return this.hasAttribute("accepted-types") ? accepted : "";
    }

    /**
     * Setter for chunkSize attribute.
     * @param {number} value - The chunk size for file upload.
     */
    set chunkSize(value) {
        this.setAttribute("chunk-size", value)
    }

    /**
     * Getter for chunkSize attribute.
     * @returns {number} The chunk size for file upload.
     */
    get chunkSize() {
        const chunk = this.getAttribute("chunk-size");
        return this.hasAttribute("chunk-size") ? chunk : 1024 * 1024;
    }

    /**
     * Setter for maxFileSize attribute.
     * @param {number} value - The maximum file size for upload.
     */
    set maxFileSize(value) {
        this.setAttribute("max-file-size", value)
    }

    /**
     * Getter for maxFileSize attribute.
     * @returns {number} The maximum file size for upload.
     */
    get maxFileSize() {
        const fileSize = this.getAttribute("max-file-size");
        return this.hasAttribute("max-file-size") ? fileSize * 1024 * 1024 : 1024 * 1024;
    }

    /**
     * Sets the upload URL for the file upload element.
     *
     * @param {string} value - The URL to set as the upload URL.
     */
    set uploadUrl(value) {
        this.setAttribute("upload-url", value);
    }

    /**
     * Retrieves the upload URL for the file upload element.
     * 
     * @returns {string} The upload URL.
     */
    get uploadUrl() {
        return this.getAttribute("upload-url") ?? "/upload";
    }

    set autoProcessFiles(value) {
        this.setAttribute("auto-process-files", value);
    }

    get autoProcessFiles() {
        return JSON.parse(this.getAttribute("auto-process-files")) ?? true;
    }

    set uploadedFiles(value) {
        this._uploadedFiles = value;
    }

    get uploadedFiles() {
        return this._uploadedFiles;
    }


    className = "FileUpload";

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
        this.isShadowRoot = "open";
    }

    beforeDraw() {
        this.uploadFunction = upload(this.uploadUrl, this.chunkSize, true)
    }

    /**
     * Method to draw the component.
     * @param {Object} context - The context of the component.
     * @param {Object} store - The store of the component.
     * @param {Object} params - The parameters for the component.
     * @returns {DocumentFragment} The fragment containing the component.
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-file-upload");
        native.setAttribute("part", "native");

        let label = document.createElement("div");
        label.classList.add("file-label");

        let button = document.createElement("wje-button");
        button.innerText = this.label || this.localizer.translate("wj.file.upload.button");

        let slot = document.createElement("slot");

        let fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("multiple", "");
        fileInput.setAttribute("style", "display:none;");

        button.appendChild(slot);
        button.appendChild(fileInput);

        this.fileInput = fileInput;

        let fileList = document.createElement("div");
        fileList.classList.add("file-list");

        label.appendChild(slot);
        label.appendChild(button);

        native.appendChild(fileInput);
        native.appendChild(label);
        native.appendChild(fileList);

        fragment.appendChild(native);

        this.native = native;
        this.fileList = fileList;
        this.button = button;

        return fragment;
    }

    /**
     * Method to perform actions after the component is drawn.
     */
    afterDraw() {
        this.button.addEventListener("click", () => {
            this.fileInput.click();
        });

        this.fileInput.addEventListener('change', this.handleInputChange);
        this.native.addEventListener('drop', this.handleDrop);

        let dragEventCounter = 0;

        this.native.addEventListener('dragenter', event => {
            event.preventDefault();

            if (dragEventCounter === 0) {
                this.native.classList.add('highlight');
            }

            dragEventCounter += 1;
        });

        this.native.addEventListener('dragover', event => {
            event.preventDefault();

            if (dragEventCounter === 0) {
                dragEventCounter = 1;
            }
        });

        this.native.addEventListener('dragleave', event => {
            event.preventDefault();

            dragEventCounter -= 1;

            if (dragEventCounter <= 0) {
                dragEventCounter = 0;
                this.native.classList.remove('highlight');
            }
        });

        this.native.addEventListener('drop', event => {
            event.preventDefault();

            dragEventCounter = 0;
            this.native.classList.remove('highlight');
        });
    }

    /**
     * Method to handle form submission.
     * @param {Event} event - The form submission event.
     */
    handleSubmit(event) {
        event.preventDefault();

        // TODO: TU TREBA PRIDAT ZOBRAZENIE SUBORU A JEHO PROCESSU


        this.addFilesToQueue(this.fileInput.files);
    }

    /**
     * Method to handle file drop event.
     * @param {Event} event - The file drop event.
     */
    handleDrop = (event) => {
        const fileList = event.dataTransfer.files;

        this.resetFormState();

        this.addFilesToQueue(fileList);
    }

    /**
     * Method to handle file input change event.
     * @param {Event} event - The file input change event.
     */
    handleInputChange = (event) => {
        this.resetFormState();

        try {
            this.handleSubmit(event);
        } catch (err) {
            return;
        }
    }

    addFilesToQueue(files) {
        this._queuedFiles = [...files];

        this.dispatchEvent(new CustomEvent("file-upload:files-added", { detail: files, bubbles: true, composed: true }));
        this.onAddedFiles?.();

        if (this.autoProcessFiles) {
            this.uploadFiles();
        }
    }

    /**
     * Method to upload files.
     * @param {FileList} files - The files to be uploaded.
     */
    uploadFiles() {
        if (this._queuedFiles.length === 0) {
            return;
        }

        const uploadPromises = this._queuedFiles.map(file => this.createUploadPromise(file))
        uploadPromises.reduce((prev, curr) => {
            return prev.then(() => {

                return curr;
            });
        }, Promise.resolve()).then(() => {
            this.dispatchEvent(new CustomEvent("file-upload:all-files-uploaded", { detail: this.uploadedFiles, bubbles: true, composed: true }));
            this.onAllFilesUploaded?.();
            this._queuedFiles = [];
        });
    }

    createUploadPromise = (file) => {
        return new Promise((resolve, reject) => {
            this.assertFilesValid(file);
            let preview;

            let reader = new FileReader();
            reader.onload = (e) => {
                this.dispatchEvent(new CustomEvent("file-upload:upload-started", { detail: file, bubbles: true, composed: true }));
                this.onUploadStarted?.(file);

                preview = this.createPreview(file, reader)
                this.fileList.appendChild(preview);

                this.uploadFunction(file, preview).then((res) => {
                    this.dispatchEvent(new CustomEvent("file-upload:upladed-file-complete", { detail: res, bubbles: true, composed: true }));
                    this.onUploadedFileComplete?.(res);
                    this.uploadedFiles.push(res.data);

                    resolve(res);
                });
            }

            reader.readAsDataURL(file);
        });
    }

    /**
     * Method to create a preview for the file.
     * @param {File} file - The file for which the preview is to be created.
     * @param {FileReader} reader - The FileReader instance to read the file.
     * @returns {HTMLElement} The created preview.
     */
    createPreview(file, reader) {
        let preview = document.createElement("wje-file-upload-item");
        preview.setAttribute("name", file.name);
        preview.setAttribute("size", file.size);
        preview.setAttribute("uploaded", "0");
        preview.setAttribute("progress", "0");
        preview.innerHTML = `<wje-icon slot="img" name="${getFileTypeIcon(file.type.split("/")[1])}" size="large"></wje-icon>`;

        return preview;
    }

    /**
     * Method to create a thumbnail for the file.
     * @param {File} file - The file for which the thumbnail is to be created.
     * @param {FileReader} reader - The FileReader instance to read the file.
     * @returns {HTMLElement} The created thumbnail.
     */
    createThumbnail(file, reader) {
        let img = document.createElement("img");
        img.setAttribute("src", reader.result);

        return img;
    }

    /**
     * Method to validate the files.
     * @param {File} file - The file to be validated.
     * TODO: alowed types a size limit by malo byt cez attributy
     */
    assertFilesValid(file) {

        const { name: fileName, size: fileSize } = file;
        if (!isValidFileType(file, this.acceptedTypes)) {
            throw new Error(`❌ FILE: "${fileName}" Valid file types are: "${this.acceptedTypes}"`);
        }

        if (fileSize > this.maxFileSize) {
            throw new Error(`❌ File "${fileName}" could not be uploaded. Only images up to ${this.maxFileSize} MB are allowed. Nie je to ${fileSize}`);
        }
    }

    /**
     * Method to update the status message.
     * @param {string} text - The status message.
     */
    updateStatusMessage(text) {
        // this.statusMessage.textContent = text;
    }

    /**
     * Method to reset the form state.
     */
    resetFormState() {
        this.fileList.textContent = '';

        // submitButton.disabled = true;
        this.updateStatusMessage(`🤷‍♂ Nothing's uploaded`)
    }
}