import { UniversalService } from "/templates/net/assets/js/service/universal-service.js?v=@@version@@";
import { defaultStoreActions, store } from '/templates/net/assets/js/store/store.js?v=@@version@@';
import { Service } from "./service/service.js?v=@@version@@";
import { Draggable } from "./service/draggable.js?v=@@version@@";
import "./components/wj-interactive-editor/interactive-editor.js?v=@@version@@";

export class Interactive{
    constructor(params) {
        this.player = params.player;
        this.hasEdit = this.player.hasAttribute("editor");

        this.playerService = new Service();
        this.playerService.init(this.player, this.hasEdit);

        this.service = new UniversalService({
            store: store,
        });

        this.editor = null;
        this.wasPauseArray = new Set();
    }

    init() {
        this.playerWrapper = this.player.shadowRoot.querySelector(".player-wrapper");
        this.dropArea = document.createElement("div");
        this.dropArea.id = "items-area";
        this.player.shadowRoot.querySelector(".player").prepend(this.dropArea);

        // skontrolujeme ci mame nejaky item a ak je tak ho vykreslime
        if (this.playerService.items?.length > 0) {
            let point;
            let result;

            // vykreslenie Points
            this.playerService.drawPoints(this.player);

            // vykreslenie Items
            this.playerService.items.forEach((i) => {
                result = this.playerService.createItem(i, 0, this.player);
                if(this.hasEdit) {
                    this.eventEditItem(result.dom);
                } else {
                    this.eventShowItem(result.dom);
                }
            });
        }

        this.player.drag = new Draggable({
            "player": this.player,
            "dropArea": this.player.shadowRoot.querySelector("#items-area"),
            "controls": ".controls",
            "service": this.playerService
        });

        if(this.hasEdit) {
            let controls = document.createElement("div");
            controls.classList.add("interactive-controls");
            controls.innerHTML = `<button class="btn-icon-add" title="Text" item-type="text"><i class="fa-light fa-text-size"></i></button>`;
            this.playerWrapper.appendChild(controls);

            this.player.shadowRoot.querySelectorAll(".interactive-controls button").forEach((el) => {
                el.addEventListener("click", (e) => {
                    this.interactiveControlsSingleton(el);
                });
            });

            this.player.drag.init();
        }

        // event reaguje na zmenu casu vo videu
        this.player.addEventListener("playerupdatetime", (e) => {
            this.checkControl(e.detail.time); // kazdu sekudnu skontrolujeme items
        });

        if(!this.editor)
            this.setInteractiveEditor();
    }

    checkControl(time) {
        this.actualItems = this.playerService?.items.filter(p => p.pointTime === time);

        if (!this.wasPauseArray.has(time)) {
            if (this.actualItems.length > 0) {
                this.actualItems.forEach((i) => {
                    // Ak ma item pause true, tak video zastavime
                    if (i.pause) {
                        this.player.pauseMedia();
                        this.wasPauseArray.add(time);
                    }
                    // Ak je item povinny tak ho zobrazime
                    if (i.required && !this.hasEdit) {
                        this.showItemContent(this.actualItems[0].id);
                    }
                });
            }
        }

        this.viewItems(time);
    }

    setInteractiveEditor() {
        let interactiveEditor = document.createElement("wj-player-editor");
        interactiveEditor.setAttribute("shadow", "open");
        interactiveEditor.playerService = this.playerService;
        this.playerWrapper.appendChild(interactiveEditor);

        this.editor = interactiveEditor;
    }

    interactiveControlsSingleton(el) {
        let result;
        switch(el.getAttribute("item-type")) {
            case "text":
                result = this.playerService.createItem(null, this.player.date.getTime(), this.player);

                this.playerService.post(result.object).then((res) => {
                    result.dom.setAttribute("item-id", res.data.id);
                    this.playerService.addItem(res.data);
                    store.dispatch(defaultStoreActions.updateAction("video")(this.playerService.video));
                    this.eventEditItem(result.dom);
                    this.playerService.drawPoints(this.player);

                    if(!this.player.media.paused)
                        this.player.playPauseMedia();
                }).catch((res)=>{
                    console.log(res.responseJSON);
                });
            break;
            case "test":
                if(!this.player.media.paused)
                    this.player.playPauseMedia();

                result = this.playerService.createItem(null, this.player.date.getTime(), this.player);
                this.eventEditItem(result.dom);
                break;
        }
    }

    hideItem(itemId) {
        this.player.shadowRoot.querySelector(`[item-id="${itemId}"]`).setAttribute("hidden", "");
    }

    showItem(itemId) {
        this.player.shadowRoot.querySelector(`[item-id="${itemId}"]`).removeAttribute("hidden");
    }

    // zobrazi alebo skryje items
    viewItems(currentTime) {
        this.playerService?.items.forEach(item => {
            if(this.isInTimeFrame(currentTime, item.pointTime, item.delay, item.id)) {
                this.showItem(item.id);
            } else {
                this.hideItem(item.id);
            }
        });
    }

    hideItemContent(itemId) {
        this.player.play.hidden = false;
        this.player.shadowRoot.querySelector(`[item-id="${itemId}"]`).removeAttribute("open", "")
    }

    showItemContent(itemId) {
        this.player.play.hidden = true;
        this.player.shadowRoot.querySelector(`[item-id="${itemId}"]`).setAttribute("open", "");
    }

    // je v casovom rozmedzi
    isInTimeFrame(currentTime, pointTime, delay, id) {
        let timeDelay = (pointTime) + (delay);

        if(parseInt(currentTime) === pointTime || (currentTime > pointTime && currentTime < timeDelay)) {
            return true;
        }

        return false;
    }

    findNextRequireItem(itemId) {
        return this.actualItems.find(i => i.id != itemId && i.required && !i.opened);
    }
    eventShowItem(item) {
        item.addEventListener("showitem", (e) => {
            this.showItemContent(e.detail.itemId);
            // this.player.shadowRoot.querySelector(`[item-id="${e.detail.itemId}"]`).setAttribute("close", "")
        });

        item.addEventListener("playitem", (e) => {
            let index = this.playerService.items.findIndex(ai => ai.id === e.detail.itemId);
            let item = this.findNextRequireItem(e.detail.itemId);

            this.playerService.items[index].opened = true;
            this.hideItemContent(e.detail.itemId);

            if(item) {
                this.showItemContent(item.id);
            } else {
                this.player.playPauseMedia();
            }
        });
    }

    eventEditItem(item) {
        item.addEventListener("edititem", (e) => {
            this.editor.classList.toggle("fade-in");
            this.editor.setAttribute("item-id", item.getAttribute("item-id"));
        });

        item.addEventListener("removeitem", (e) => {
            this.playerService.delete(item.getAttribute("item-id")).then((res) => {
                if(res.success) {
                    this.playerService.deleteItem(item.getAttribute("item-id"));
                    item.remove();
                    this.playerService.drawPoints();
                }
            });
        });

        item.addEventListener("dropitem", (e) => {
            this.playerService.put(e.detail.item);
        });
    }
}