import { default as WJElement, WjElementUtils } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";
import "./plugins/cropme/cropme.js?v=@@version@@";

const template = document.createElement('template');

template.innerHTML = `<style>
	@import "/templates/net/assets/js/components/wj-photo-edit/plugins/cropme/cropme.min.css?v=@@version@@";
	@import "/templates/net/assets/js/components/wj-photo-edit/css/styles.css?v=@@version@@";
</style>`;

class PhotoEdit extends WJElement{
    constructor() {
        super(template);
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let div = document.createElement("div");

        fragment.appendChild(div);

        this.photo = div;
        return fragment;
    }

    afterDraw() {
        console.log("scale:", this.scale, "cropScale:", this.cropScale, "getScale:", this.getScale(), "edit:", this.edit);

        setTimeout(() => {
            this.myCropme = new Cropme(this.photo, {
                "url": this.src,
                "container": {
                    "width": +this.width,
                    "height": +this.height,
                },
                "viewport": {
                    "width": +this.cropWidth / this.cropScale,
                    "height": +this.cropHeight / this.cropScale,
                    "type": this.type,
                    "border": {
                        "width": 2,
                        "enable": true,
                        "color": "#fff"
                    }
                },
                "zoom": {
                    "enable": true,
                    "mouseWheel": true,
                    "slider": true
                },
                "rotation": {
                    "slider": true,
                    "enable": true,
                    "position": "left"
                },
                "transformOrigin": "viewport",
            });


            this.myCropme.bind( {
                "url": this.src,
                "position": {
                    "angle": +this.angle,
                    "scale":  this.getScale(),
                    "x": +this.x,
                    "y": +this.y,
                }
            });
        }, 200);

        let controls = document.createElement("div");
        controls.classList.add("d-flex","justify-content-end");

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-light fa-trash"></i>';
        deleteButton.classList.add("btn", "btn-link");
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            this.value = {
                "delete": true,
            }

            this.dispatchEvent(
                new CustomEvent('photoDelete', {
                    bubbles: true,
                    detail: this.value,
                })
            );
        });

        let button = document.createElement("button");
        button.innerHTML = "Crop";
        button.classList.add("btn", "btn-primary", "ml-2");
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();

            this.myCropme.crop({
                type: 'base64',
                width: this.cropWidth,
            }).then((output) => {
                this.value = {
                    "fileKey": this.fileKey,
                    "base64": output,
                    "position": this.myCropme.position(),
                    "delete": false,
                }

                this.dispatchEvent(
                    new CustomEvent("wj-photo-crop", {
                        bubbles: true,
                        detail: this.value,
                    })
                );
            });
        });

        controls.appendChild(deleteButton);
        controls.appendChild(button);

        this.appendChild(controls);
    }

    getScale() {
        if(intranet.stringToBooleanOrString(this.edit)) {
            if(this.cropScale == 1)
                return +this.scale;
        } else {
            if(this.cropScale == 1)
                return "";
            else
                return 1 / +this.cropScale;
        }
        return intranet.stringToBooleanOrString(this.edit) ? this.scale : 1 / +this.cropScale
    }
}

window.customElements.define("wj-photo-edit", PhotoEdit);