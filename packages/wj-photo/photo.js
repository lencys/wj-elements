import { default as WJElement, WjElementUtils } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";
import "/templates/net/assets/js/components/wj-file-upload/wj-file-upload.js?v=@@version@@";
import "/templates/net/assets/js/components/wj-photo-edit/photo-edit.js?v=@@version@@";

const template = document.createElement('template');

template.innerHTML = `<style>
	@import "/templates/net/assets/js/components/wj-photo/css/styles.css?v=@@version@@";
</style>`;

class Photo extends WJElement{
    constructor() {
        super(template);

        this.value = {};
        this.upload = false;
    }

    static get observedAttributes() {
        return ["src"];
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();
        let element;
        let attributes;

        this.elementAttributes = intranet.getAttributes(this);

        if(this.src && this.src !== "") {
            element = document.createElement("wj-photo-edit");
            attributes = {
                "src": this.src,
                "type": "square",
                "height": this.height || 200,
                "width": this.width || 340,
                "crop-height": this.cropHeight || 160,
                "crop-width": this.cropWidth || 160,
                "crop-scale": this.cropScale || 1,
                "angle": this.angle || 0,
                "scale": this.scale || 1,
                "x": this.x || 0,
                "y": this.y || 0,
                "edit": this.upload ? false : true,
            };
        } else {
            element = document.createElement("wj-file-upload");
            attributes = this.elementAttributes;
            attributes = {
                "design": attributes.design || "CLASSIC",
                "custom-title": attributes.customTitle || "",
                "custom-description": attributes.customDescription || "",
                "accepted-files": attributes.acceptedFiles || "",
                "product": attributes.product || "",
                "module": attributes.module || "",
                "module-id": attributes.moduleId || "",
            };

            this.upload = true;
        }

        WjElementUtils.setAttributesToElement(element, attributes);

        fragment.appendChild(element);
        this.photo = element;
        return fragment;
    }

    afterDraw() {
        // save after upload
        this.addEventListener("wj-uploaded-file", (e) => {
            this.value.fileKey = e.detail.fileKey[0];
            this.src = e.detail.file.dataURL;
        });


        document.addEventListener("wj-uploaded-file-exist", (e) => {
            this.value.fileId = e.detail.file.id || 1;
            this.src = e.detail.file.url;
        });

        document.addEventListener("wj-uploaded-file-exist-disk", (e) => {
            this.value.fileId = e.detail.file.id || 1;
            this.src = e.detail.file.url;
        });

        this.addEventListener("wj-photo-crop", (e) => {
            this.value = {...e.detail, ...this.value};
            this.dispatchEvent(
                new CustomEvent("photo-crop-after", {
                    bubbles: true,
                    detail: {
                        value: this.value,
                        element: this
                    }
                })
            );
        });

        this.addEventListener("photoDelete", (e) => {
            this.removeAttribute("angle");
            this.removeAttribute("scale");
            this.removeAttribute("x");
            this.removeAttribute("y");
            this.src = "";
            this.value.delete = true;
        });
    }
}

window.customElements.define("wj-photo", Photo);