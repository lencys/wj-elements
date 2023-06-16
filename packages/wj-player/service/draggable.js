// import { service } from "./service.js?v=@@version@@";

export class Draggable {
    constructor(options) {
        this.player = options.player;
        this.dropArea = options.dropArea;
        this.controls = options.controls;
        this.service = options.service;
        this.activeItem = null;
        this.items = null;
    }

    init() {
        // neskor to bude interactive-point
        if(this.items) {
            this.items.forEach((item) => {
                this.bindItem(item);
            });
        }
        this.dropArea.querySelectorAll("wj-item").forEach((item) => {
            this.bindItem(item);
        });

        this.dropArea.addEventListener("dragover", this.dragover);
        this.dropArea.addEventListener("drop", this.drop);
    }

    bindItem(item) {
        item.addEventListener("dragstart", this.dragstart);
        item.addEventListener("dragend", this.dragend);
    }

    dragstart = (e) => {
        this.activeItem = e.target;
        this.itemId = +this.activeItem.getAttribute("item-id");
        this.activeItem.querySelector("interactive-content")?.setAttribute("hidden", "");
        this.dropAreaRect = this.dropArea.getBoundingClientRect();
        this.rect = this.activeItem.getBoundingClientRect();

        this.cursorPositionX = e.clientX - this.rect.left;
        this.cursorPositionY = e.clientY - this.rect.top;
    }

    dragend = (e) => {
        e.preventDefault();
    }

    dragover = (e) => {
        e.preventDefault();
    }

    drop = (e) => {
        let shiftX = (e.clientX - this.cursorPositionX) - this.dropAreaRect.left //+ targetHalfWidth;
        let shiftY = (e.clientY - this.cursorPositionY) - this.dropAreaRect.top //+ targetHalfHeight;

        this.setTranslate(shiftX, shiftY, this.activeItem);

        this.activeItem.dispatchEvent(
            new CustomEvent("dropitem", {
                bubbles: true,
                detail: {
                    item: this.item
                },
            })
        );
    }
    setTranslate(xPos, yPos, el) {
        let percentageW = this.dropAreaRect.width/100;
        let percentageH = this.dropAreaRect.height/100;

        xPos = xPos/percentageW;
        yPos = yPos/percentageH;
        this.item = this.service.findItemById(this.itemId);

        this.item.axisX = xPos;
        this.item.axisY = yPos;

        this.service.updateItem(this.item);

        el.style.left = xPos + "%";
        el.style.top = yPos + "%";
    }
}