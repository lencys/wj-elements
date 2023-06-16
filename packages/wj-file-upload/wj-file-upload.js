import { WjElementUtils } from "/templates/net/assets/js/utils/wj-element-utils.js?v=@@version@@";
import "/templates/net/assets/plugins/dropzone/dropzone.min.js?v=@@version@@";
import "/templates/net/assets/plugins/md5.umd.min.js";
import "/components/hub/disk/js/hub-disk.js?v=@@version@@";

const templateB = document.createElement('template');
templateB.innerHTML = `<style>
    @import "/templates/net/assets/plugins/bootstrap/css/bootstrap.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/fontawesome.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/light.min.css?v=@@version@@";
    /** TODO opraviť  import */
    @import "/templates/net/pages/css/themes/net-basic.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic/var.css?v=@@version@@";
    
    @import "/templates/net/assets/js/components/wj-file-upload/css/styles.css?v=@@version@@";
</style>`;

export default class FileUpload extends HTMLElement {
    constructor() {
        super();
        this._file = "";
        this.uploadDropzone = {};

        this.queueKey = 0;
        this.queue = 0;
        this.fileType  = [
            {
                "type": ["jpg", "jpeg", "png", "gif", "bpm", "tiff", "svg"],
                "name": "photo"
            },
            {
                "type": ["zip", "rar", "cab", "jar", "tar", "gzip", "uue", "bz2", "scorm", "war"],
                "name": "zip"
            },
            {
                "type": ["mov", "mp4", "avi", "flv"],
                "name": "video"
            },
            {
                "type": ["m4a", "mp3", "wav"],
                "name": "audio"
            },
            {
                "type": ["html", "html"],
                "name": "html"
            },
            {
                "type": ["css"],
                "name": "code"
            },
            {
                "type": ["txt"],
                "name": "txt"
            },
            {
                "type": ["exe"],
                "name": "exe",
            },
            {
                "type": ["doc", "docx"],
                "name": "docx"
            },
            {
                "type": ["xls", "xlsx"],
                "name": "xlsx"
            },
            {
                "type": ["pdf"],
                "name": "pdf"
            },
            {
                "type": ["ppt", "pptx", "odp"],
                "name": "pptx"
            }
        ];
        this.chunkSize = 2 * 1024 * 1024;

        this.settings = {
                "url": "/XhrFileUpload",
                "createImageThumbnails": true,
                "maxFiles": 1,
                "parallelUploads": 1,
                "chunking": true,
                "chunkSize": this.chunkSize,
                "timeout": 0,
                "autoProcessQueue": false,
                "maxFileSize": 64000000,
        };

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(templateB.content.cloneNode(true));
        this.uploadFile = true;
        this.user = JSON.parse(intranet.storage().getItem("settings"));
    }

    set acceptedFiles(value) {
        this.setAttribute("accepted-files", value);
    }

    get acceptedFiles() {
        return this.getAttribute("accepted-files") || "";
    }

    set description(value) {
        this.setAttribute("description", value);
    }

    get description() {
        return this.getAttribute("description") || "";
    }

    set file(data) {
        this._file = data;
    }

    get file() {
        return this._file;
    }

    set design(value) {
        this.setAttribute("design", value);
    }

    get design() {
        let design = this.getAttribute("design")
        return design || "classic";
    }

    get value(){
        return this.shadowRoot.querySelector('[data-net-upload="fileKey"]').value
    }

    static get observedAttributes() {
        return ["file", "accepted-files"];
    }

    get customTitle() {

        let customTitle = this.getAttribute("custom-title")
        return customTitle;
    }

    get customDescription() {
        return this.description + " " + this.acceptedFiles;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue) {
            this[name] = this.hasAttribute(name);
        }
    }

    connectedCallback() {
        this.timestamp = new Date().getTime();
        this.eventName = `add-file-with-disk-${this.timestamp}`;

        this.diskAttributes = intranet.getAttributes(this);
        this.shadowRoot.appendChild(this.drawDropzone());

        this.initDropzone();

        if (this.design == "classic") {
            this.shadowRoot.querySelector(".btn-fileinput").addEventListener("click", () => {
                this.uploadDropzone.hiddenFileInput.click();
            });

            this.shadowRoot.querySelector(".btn-fileinput-result").addEventListener("click", (e) => {
                e.preventDefault();

                let element = e.target.closest('.remove')
                if (element) {
                    this.uploadDropzone.removeAllFiles();
                    this.shadowRoot.querySelector('[data-net-upload="fileKey"]').value = "";
                    this.shadowRoot.querySelector('[data-net-upload="input"]').value = "";
                } else {
                    this.uploadDropzone.hiddenFileInput.click();
                }
            });
        } else if (this.design == "slot") {
            this.shadowRoot.addEventListener("click", () => {
                this.uploadDropzone.hiddenFileInput.click();
            });
        } else if (this.design == "graphic") {
            document.querySelector("#modal-secondary .modal-footer").addEventListener(this.eventName, this.selectedFileWithDisk);
        }
    }

    disconnectedCallback() {
        document.querySelector(".modal-footer").removeEventListener(this.eventName, this.selectedFileWithDisk);
    }

    initDropzone() {
        Dropzone.autoDiscover = true;
        Dropzone.options.uploadDropzone = this.settings;
        Dropzone.options.paramName = "file";

        if(this.acceptedFiles != ""){
            Dropzone.options.acceptedFiles = this.acceptedFiles;
        }

        let that = this;
        this.uploadDropzone = new Dropzone(this.shadowRoot.querySelector('#uploadDropzone'), {
            "dictDefaultMessage": "",
            "init": function () {
                if(that.design == "slot") {
                    // this.element.style.display = 'none';
                    return;
                };

                if(that.design == "graphic") {
                    this.element.querySelector(".dz-message").appendChild(that.graphic());

                } else {
                    this.element.querySelector(".dz-message").appendChild(that.classic());
                }

                this.element.querySelectorAll('[wj-tooltip]').forEach((el) => {
                    intranet.initTooltip(el).then((ret) => {});
                });
            },
            "previewTemplate": this.getTemplateForDesign(this.design),
            "clickable": true,
            "acceptedFiles": this.acceptedFiles,
        });

        this.uploadDropzone.on("addedfiles", async (files) => {
            if(!this.uploadFile)
                return;

            if (files.length > this.settings.maxFiles) {
                $('body').pgNotification({
                    message: `Presiahnutý maximálny počet súborov (max. ${this.dropzoneSettings.maxFiles})`,
                    timeout: 4000,
                    type: 'danger'
                }).show();

                return;
            }

            let filesArray = Array.from(files);
            let fileSize = filesArray.reduce((a, b) => {
                return { size : a.size + b.size}
            }).size;

            this.queueKey = Date.now();

            this.fileReader = new FileReader();

            await this.getStorageReserve(this.queueKey, fileSize).then(async (res) => {
                this.queue += files.length;
                if(res.success) {
                    for (let i = 0; i < files.length; i++) {
                        let f = files[i];
                        if (f.size >= this.uploadDropzone.options.maxFileSize) {
                            this.uploadDropzone.cancelUpload(f);
                            this.removeAndDrawRow({...this.file(f), ...{message: `Maximálne podporované veľkosti súborov sú ${filesize(this.uploadDropzone.options.maxFileSize)}`}}, "ERROR");
                        }
                        if(f.status.toUpperCase() != "ERROR") {
                            if (this.getAttribute("type") == "version") {
                                this.removeAndDrawRow(this.file(f), "ADDEDFILES");
                                this.uploadDropzone.processQueue();
                            } else {
                                await this.readFile(f).then(md5 => {
                                    fetch(`/private/rest/hub/file/uploadable/${this.diskAttributes.product}/${this.diskAttributes.module}/${this.diskAttributes.moduleId}/${md5}`, {
                                        "method": "GET",
                                        "headers": {
                                            'Content-Type': 'application/json',
                                        }
                                    })
                                        .then((response, e) => {
                                            if (response.ok) {
                                                return response.json();
                                            }
                                        })
                                        .then((res) => {
                                            if (res.success) {
                                                this.uploadDropzone.processQueue();
                                            } else {

                                                let errorMessage= this.shadowRoot.querySelector("[data-dz-errormessage]");
                                                let p = document.createElement("p");
                                                p.innerHTML = res.message + " Chcete použiť tento súbor?";

                                                let div = document.createElement("div");

                                                let btnClose = document.createElement("button");
                                                btnClose.classList.add("btn", "btn-outline-primary", "btn-primary", "mr-2", "ml-auto", "btn-close");
                                                btnClose.setAttribute("data-dz-remove", "");
                                                btnClose.innerHTML = "Zrušiť";
                                                btnClose.addEventListener("click", () => {
                                                    this.uploadDropzone.removeFile(f);
                                                });

                                                let btnSave = document.createElement("button");
                                                btnSave.classList.add("btn", "btn-primary", "save");
                                                btnSave.innerHTML = "Použiť";
                                                btnSave.addEventListener("click", () => {
                                                    this.dispatchEvent(
                                                        new CustomEvent("wj-uploaded-file-exist", {
                                                            bubbles: true,
                                                            detail: {
                                                                file: res.data,
                                                            },
                                                        })
                                                    );

                                                    this.uploadDropzone.cancelUpload(f);
                                                    this.uploadDropzone.removeFile(f);
                                                    this.removeAndDrawRow({...this.file(f), ...{message: res.message}}, "ERROR");
                                                });

                                                div.appendChild(btnClose);
                                                div.appendChild(btnSave);

                                                this.shadowRoot.querySelector(".dz-details").setAttribute("hidden", "");
                                                errorMessage.appendChild(p);
                                                errorMessage.appendChild(div);
                                            }
                                        });
                                });
                            }
                        }
                    }
                }
            });
        });

        this.uploadDropzone.on("maxfilesexceeded", (file) => {
            this.maxfilesexceeded(file);
        });

        // upload event so zobrazenim progres baru
        this.uploadDropzone.on("uploadprogress", (file, progress, bytesSent) => {
            $(this.shadowRoot.querySelector(`#upload-${file.upload.uuid} input.progress-circle`)).circularProgress({value: Math.round(progress)});
        });

        this.uploadDropzone.on("error", (file, errormessage, xhr) => {
            --this.queue;
            if(this.queue <= 0){
                this.removeQueue();
            }
        });

        this.uploadDropzone.on("error", (file, errormessage, xhr) => {
            this.error(file, errormessage);
        });

        this.uploadDropzone.on("processing", (file, errormessage, xhr) => {
            this.removeAndDrawRow(this.file(file), "ADDEDFILES");
        });

        this.uploadDropzone.on("success", (file, errormessage, xhr) => {
            this.uploadDropzone.createThumbnail(file, this.uploadDropzone.options.thumbnailWidth, this.uploadDropzone.options.thumbnailHeight, this.uploadDropzone.options.thumbnailMethod, true, (dataUrl) => {
                this.dispatchEvent(
                    new CustomEvent("wj-uploaded-file", {
                        bubbles: true,
                        detail: {
                            fileKey: this.getKey(file),
                            fileName: file.name,
                            file: file,
                        },
                    })
                );
                this.success(file);
            });
        });

        this.uploadDropzone.on("removedfile", (file, errormessage, xhr) => {
            this.dispatchEvent(
                new CustomEvent("wj-removed-file", {
                    bubbles: true,
                    detail: {
                        file: file,
                    },
                })
            );
        });

        // event po ktorom sa otvori okno expoloreru v OS
        this.shadowRoot.querySelector('[data-dropzone-add="file"]').addEventListener("click", () => {
            this.uploadDropzone.hiddenFileInput.click();
        });


    }

    file(f) {
        let filenameArray = f.upload.filename.split(".");
        return {
            "id": f.id,
            "DT_RowId": "upload-" + f.upload.uuid,
            "upload": f.upload,
            "name": f.name,
            "type": {
                "name": "FILE",
                "text": filenameArray[filenameArray.length - 1],
            },
            "uploaded": f.lastModified ? f.lastModified : f.uploaded ,
            "size": f.size,
            "uploader": {
                "userId": this.user.userId,
                "firstName": this.user.firstName,
                "lastName": this.user.lastName,
                "fullName": this.user.firstName + " " + this.user.lastName,
                "photo": this.user.photoSmall,
                "email": this.user.email
            },
            "url": f.url

        };
    }

    getStorageReserve(queueKey, fileSize) {
        return fetch(`/private/rest/hub/storage/reserve`, {
            "method": 'PUT',
            "body": JSON.stringify({
                "key": queueKey,
                "size": fileSize,
                "product": "LMS",//this.getAttribute("product")
            }),
            "headers": {
                'Content-Type': 'application/json',
            }
        }).then((response, e) => {
            if(response.ok){
                return response.json()
            }
        });
    }

    async readFile(file) {
        if (this.hasher) {
            this.hasher.init();
        } else {
            this.hasher = await hashwasm.createMD5();
        }

        let chunkNumber = Math.floor(file.size / this.chunkSize);

        for (let i = 0; i <= chunkNumber; i++) {
            const chunk = file.slice(
                this.chunkSize * i,
                Math.min(this.chunkSize * (i + 1), file.size)
            );
            await this.hashFile(chunk);
        }

        let hash = this.hasher.digest();
        return Promise.resolve(hash);
    }

    hashFile(file) {
        return new Promise((resolve, reject) => {
            this.fileReader.onload = async(e) => {
                const view = new Uint8Array(e.target.result);
                this.hasher.update(view);
                resolve();
            };

            this.fileReader.readAsArrayBuffer(file);
        });
    }

    removeAndDrawRow(data, status) {
    }

    removeQueue() {
        this.uploadDropzone.removeAllFiles();
        fetch(`/private/rest/hub/storage/release/${this.diskAttributes.product}/${this.queueKey}`, {
            "method": 'PUT',
            "headers": {
                'Content-Type': 'application/json',
            }
        })
            .then((response, e) => {
                if(response.ok){
                    return response.json()
                }
            })
            .then((data) => {
                if(!!document.querySelector("hub-disk-header"))
                    document.querySelector("hub-disk-header").setAttribute("refresh", "true");
            });
    }

    getTemplateForDesign(design){
        switch (design) {
            case "classic":
                return "<div></div>";
                break;
            case "graphic":
            case "photo-edit":
                return `<div class="dz-preview dz-file-preview">
                    <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                    <div class="dz-details">
                        <h5 class="dz-size" data-dz-size></h5>
                        <div class="dz-filename"><span data-dz-name></span></div>
                    </div>
                    <div class="dz-success-mark"><span>✔</span></div>
                    <div class="dz-error-mark"><span>✘</span></div>
                    <div class="dz-error-message"><span data-dz-errormessage></span></div>
                    <input type="hidden" name="image" data-net-upload="input">
                    <input type="hidden" name="uploadedFileKey" value="" data-net-upload="fileKey">
                </div>`;
                break;
            case 'slot':
                let toReturn = '<div></div>'
                return toReturn;
                break;
        }
    }

    getKey(file) {
        return file.xhr && JSON.parse(file.xhr.response).key;
    }

    /** @function error
     * @description ...
     */

    error(file, errormessage) {
        this.uploadDropzone.removeFile(file);
        $(".alert-danger").text(errormessage).show();
        setTimeout(() => {
            $(".alert-danger").text("").fadeOut();
        }, 4000);
    }

    success(file) {
        this.shadowRoot.querySelector('[data-net-upload="fileKey"]') && (this.shadowRoot.querySelector('[data-net-upload="fileKey"]').value = this.getKey(file));
        this.shadowRoot.querySelector('[data-net-upload="input"]') && (this.shadowRoot.querySelector('[data-net-upload="input"]').value = file.name);
    }

    /** @function maxfilesexceeded
     * @description ak je viac ako maxFile, file zmaze a nahra zvoleny subor
     */

    maxfilesexceeded() {
        this.uploadDropzone.removeAllFiles();
    }

    selectedFileWithDisk(e) {
        let modal =  e.detail.modal;

        this.dispatchEvent(
            new CustomEvent("wj-uploaded-file-exist-disk", {
                bubbles: true,
                detail: {
                    file: modal.modal[0].querySelector("hub-disk").getSelectedItems()[0],
                },
            })
        );

        $(modal.modal[0]).modal("hide");
    }

    drawDropzone() {
        let wrapper = document.createElement("div");
        wrapper.classList.add("dropzone-wrapper");

        let dropzone = document.createElement("div");
        dropzone.id = "uploadDropzone";
        dropzone.classList.add(this.design == "photo-edit" ? "graphic" : this.design, "dropzone");

        dropzone.insertAdjacentHTML("beforeend", `<slot></slot><input type="hidden" name="uploadedFileKey" value="" data-net-upload="fileKey" class="mb-0">`)
        wrapper.appendChild(dropzone);

        return wrapper;
    }

    graphic() {
        console.log("graphic", this.diskAttributes.moduleId);
        let div = document.createElement("div");
        div.classList.add("d-flex", "flex-column", "justify-content-center");
        div.innerHTML = `<div class="text-center">
            <h5>${this.customTitle ? this.customTitle : 'Nahrať video'}</h5>
            <p class="small hint-text">${this.customDescription}</p>
            <hub-modal-open target="#modal-secondary" type="button" size="x-large" display="fill-in" title="Súbory" class="btn btn-default btn-lg" stop-propagation>
                <i class="fa-light fa-file mr-1"></i>Vybrať z úložiska
                <button slot="actions" class="btn btn-primary" data-event="${this.eventName}">Pridať</button>
                <template slot="htmlContent">
                    <hub-disk file-types="${this.acceptedFiles.replaceAll(".", "")}" product="${this.diskAttributes.product}" module="${this.diskAttributes.module}" module-id="${this.diskAttributes.moduleId}" get="/private/rest/hub/file/${this.diskAttributes.product}/${this.diskAttributes.module}/${this.diskAttributes.moduleId}" scrollable-height="430px" search use-select detail="false" create-folder="false"></hub-disk>
                </template>
            </hub-modal-open>
            <button class="btn btn-default btn-lg" id="upload" data-dropzone-add="file"><i class="fa-light fa-upload mr-1"></i>Nahrať nový súbor</button>
        </div>`;

        return div;
    }

    classic() {
        let filename = this.getAttribute("file")?.split('/');

        let div = document.createElement("div");
        div.classList.add("d-flex", "w-100");
        div.innerHTML = `<button type="button" class="btn btn-link btn-fileinput mr-2">
            <span><i class="fal fa-cloud-upload-alt"></i></span>
        </button>
        <div class="btn-fileinput-result d-flex align-items-center full-width" wj-tooltip="Nahrajte súbor">
            <input type="text" class="form-control text-truncate" style="width: calc(100% - (28px + .5rem));cursor: pointer" value="${filename?.[filename.length - 1] || ''}" data-net-upload="input" name="image" readonly >
            <button class="btn btn-link remove ml-auto"><i class="fal fa-times fs-14"></i></button>
        </div>
        <input type="hidden" name="uploadedFileKey" value="" data-net-upload="fileKey">`;

        return div;
    }
}

customElements.get("wj-file-upload") || customElements.define("wj-file-upload", FileUpload);