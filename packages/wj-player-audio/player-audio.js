import { default as WJElement, WjElementUtils } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";
import "/templates/net/assets/js/components/wj-player-audio/service/service.js?v=@@version@@";
import "/templates/net/assets/js/components/wj-photo/photo.js?v=@@version@@";
import "/components/lms/modules/certificates/js/wj-editable-text.js?v=@@version@@";
import "/templates/net/assets/js/components/wj-inline-edit/inline-edit.js?v=@@version@@";

const template = document.createElement("template");

template.innerHTML = `<style>
    @import "/templates/net/assets/plugins/bootstrap/css/bootstrap.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic/buttons.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic/typography.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/fontawesome.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/light.min.css?v=@@version@@";
	@import "/templates/net/assets/js/components/wj-player-audio/css/styles.css?v=@@version@@";
</style>`;

export default class AudioPlayer extends WJElement {
    constructor() {
        super(template);

        this.config = {
            items: [],
            min_distance: 7,
            max_distance: 22,
            number_of_lines: 128,
            line_height: 60,
            line_spacing: 4,
            line_width: 2,
            line_color: '#000000'
        }

        this.playState = "play";
        this.muteState = "unmute";
        this.started = false;
        this.timer = null;
        this.move = false;
    }

    get src(){
        return this.getAttribute("src");
    }

    set src(value){
        return this.setAttribute("src", value);
    }

    get edit(){
        return this.hasAttribute("edit");
    }

    set edit(value){
        return this.setAttribute("edit", "");
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        return this.main();
    }

    afterDraw() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

        this.svgDOM();
        this.initAudio(this.src);
    }

    pauseOrResume = () => {
        if (this.playState === "play") {
            if(this.audio.currentTime >= this.audio.duration) {
                this.svgMask.style.width = "0%";
            }
            this.audio.play();
            this.playButton.setAttribute("data-icon", "\uf04c");
            this.playState = "pause";
            this.currentTime.classList.add("active");
        } else {
            this.audio.pause();
            this.playButton.setAttribute("data-icon", "\uf04b");
            this.playState = "play";
        }
    }

    muteOrUnmute = () => {
        if (this.muteState === 'unmute') {
            this.mute.setAttribute("data-icon", "\uf6a9");
            this.audio.muted = true;
            this.muteState = "mute";
        } else {
            this.mute.setAttribute("data-icon", "\uf027");
            this.audio.muted = false;
            this.muteState = "unmute";
        }
    }

    timeupdate = () => {
        if(this.audio.currentTime >= this.audio.duration) {
            this.playButton.setAttribute("data-icon", "\uf04b");
            this.playState = "play";
        }
        if(!this.move) {
            this.seekSlider.value = Math.floor(this.audio.currentTime);
        }

        this.displayCurrentTime(this.audio.currentTime);
        this.updateVisualization();
    }

    initAudio(url) {
        fetch(url)
            .then((r) => r.arrayBuffer()) // request as ArrayBuffer
            .then((audioBuffer) => {
                this.audio.src = URL.createObjectURL(new Blob([audioBuffer]));
                return this.audioContext.decodeAudioData(audioBuffer)
            })
            .then((audioBuffer) => {
                this.config.number_of_lines = Math.floor(this.svg.getBoundingClientRect().width / this.config.line_spacing);

                this.drawSVG(this.normalizeData(this.filterData(audioBuffer)));

                this.playButton.addEventListener("click", this.pauseOrResume);
                this.mute.addEventListener("click", this.muteOrUnmute);

                this.audio.addEventListener("timeupdate", this.timeupdate);

                this.setSliderMax();

                // presun v hudbnej skladbe
                this.seekSlider.addEventListener("wj-slider-move", (e) => {
                    this.move = true;
                });
                this.seekSlider.addEventListener("wj-slider-change", () => {
                    this.move = false;
                    this.audio.currentTime = this.seekSlider.value;
                });

                // nastavenie hlasitosti
                this.volumeSlider.addEventListener("wj-slider-move", () => {
                    this.audio.volume = this.volumeSlider.value/100;
                });

                this.displayCurrentTime(this.audio.currentTime);
                this.displayDuration(this.audio.duration);

                this.mediaSession();
            });
    }

    updateVisualization = () => {
        let percentage = (this.audio.currentTime / this.audio.duration) * 100;
        this.svgMask.style.width = `${percentage}%`;
    }

    displayDuration = (time) => {
        let timeObject = this.toHoursAndMinutes(time, true);
        this.duration.textContent = timeObject.string;
    }

    displayCurrentTime = (time) => {
        let timeObject = this.toHoursAndMinutes(time, true);
        this.currentTime.textContent = timeObject.string;
    }

    toHoursAndMinutes(sec, zero = false) {
        const totalMinutes = Math.floor(sec / 60);

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const seconds = Math.floor(sec % 60);

        let obj = {};
        if(zero) {
            obj = {
                "h": this.addZeroBefore(hours),
                "m": this.addZeroBefore(minutes),
                "s": this.addZeroBefore(seconds),
            };
        } else {
            obj = {
                "h": hours,
                "m": minutes,
                "s": seconds
            };
        }

        return {
            ...obj,
            "string": obj.h + ":" + obj.m + ":" + obj.s
        }
    }

    addZeroBefore(n) {
        return (n < 10 ? '0' : '') + n;
    }

    setSliderMax = () => {
        this.seekSlider.max = Math.floor(this.audio.duration);
    }

    drawSVG = (normalizedData) => {
        for (let i = 0; i < normalizedData.length; i++) {
            let height = normalizedData[i] * this.config.line_height;

            if (height < 1)
                height = 1;

            this.drawLineSegmentSVG(i, height);
        }
    }

    normalizeData = (filteredData) => {
        const multiplier = Math.pow(Math.max(...filteredData), -1);

        return filteredData.map(n => n * multiplier);
    }

    filterData = (audioBuffer) => {
        let rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
        let blockSize = Math.floor(rawData.length / this.config.number_of_lines); // the number of samples in each subdivision
        let filteredData = [];
        for (let i = 0; i < this.config.number_of_lines; i++) {
            let blockStart = blockSize * i; // the location of the first sample in the block
            let sum = 0;
            for (let j = 0; j < blockSize; j++) {
                sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
            }
            filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
        }
        return filteredData;
    }

    drawLineSegmentSVG = (i, height) => {
        let margin = (this.config.line_height - height);
        let x = i/this.config.number_of_lines*100
        let width = 100/this.config.number_of_lines/2;
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        rect.setAttributeNS(null, "x", `${x + width /2}%`);
        rect.setAttributeNS(null, "y", margin);
        rect.setAttributeNS(null, "width", `${width}%`);
        rect.setAttributeNS(null, "height", height);

        this.clipPath.appendChild(rect);
    }

    main() {
        let fragment = document.createElement("div");
        fragment.classList.add("fragment");

        this.photoContainer = document.createElement("div");
        this.photoContainer.classList.add("photo-container");

        this.coverPhoto(this.photoContainer);

        this.svgContainer = document.createElement("div");
        this.svgContainer.id = "svg-container";

        this.category = document.createElement("p");
        this.category.classList.add("category");
        this.category.innerHTML = this.data.title;

        this.div = document.createElement("div");
        this.div.classList.add("mx-3", "my-0", "position-relative");

        this.headline = document.createElement("wj-inline-edit");
        this.headline.title = this.data.textJson.headline;

        if(!this.edit) {
            this.headline.setAttribute("not-editable", "");
        }

        this.container = document.createElement("div");
        this.container.id = "audio-player-container";

        this.audio = document.createElement("audio");
        this.audio.preload = "metadata";

        this.playButton = document.createElement("button");
        this.playButton.id = "play-icon";
        this.playButton.setAttribute("data-icon", "\uf04b");

        this.volumeSlider = document.createElement("wj-slider");
        this.volumeSlider.type = "range";
        this.volumeSlider.id = "volume-slider";
        this.volumeSlider.value = "50";
        this.volumeSlider.setAttribute("min", 0);
        this.volumeSlider.setAttribute("max", 100);
        this.volumeSlider.setAttribute("color", "contrast");

        this.mute = document.createElement("button");
        this.mute.id = "mute-icon";
        this.mute.setAttribute("data-icon", "\uf027");

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("wrapper");

        this.container.appendChild(this.audio);
        this.container.appendChild(this.playButton);
        this.container.appendChild(this.volumeSlider);
        this.container.appendChild(this.mute);

        this.wrapper.appendChild(this.category);
        this.div.appendChild(this.headline);
        this.wrapper.appendChild(this.div);
        this.wrapper.appendChild(this.svgContainer);
        this.wrapper.appendChild(this.container);

        fragment.appendChild(this.photoContainer);
        fragment.appendChild(this.wrapper);

        return fragment;
    }

    svgDOM = () => {
        this.currentTime = document.createElement("span");
        this.currentTime.id = "current-time";

        this.duration = document.createElement("span");
        this.duration.id = "duration";

        this.seekSlider = document.createElement("wj-slider");
        this.seekSlider.type = "range";
        this.seekSlider.id = "seek-slider";
        this.seekSlider.value = "0";
        this.seekSlider.setAttribute("min", 0);
        this.seekSlider.setAttribute("max", 0);
        this.seekSlider.setAttribute("color", "danger");

        this.svgMask = document.createElement("div");
        this.svgMask.id = "svg-mask";

        this.divBg = document.createElement("div");
        this.divBg.id = "svg-mask-bg";

        this.moveBg = document.createElement("div");
        this.moveBg.id = "svg-mask-bg-move";

        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svg.setAttribute("width", "100%");

        this.clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        this.clipPath.id = "myClip";

        this.svg.appendChild(this.clipPath);

        this.svgContainer.appendChild(this.divBg);
        this.svgContainer.appendChild(this.svgMask);
        this.svgContainer.appendChild(this.moveBg);
        this.svgContainer.appendChild(this.svg);
        this.svgContainer.appendChild(this.seekSlider);
        this.svgContainer.appendChild(this.currentTime);
        this.svgContainer.appendChild(this.duration);
        this.svgContainer.addEventListener("mousemove", (e) => {
            this.moveBg.style.width = `${e.layerX}px`;
        });

        this.svgContainer.addEventListener("mouseout", (e) => {
            this.moveBg.style.width = 0;
        });
    }

    mediaSession() {
        let mediaSession = this.getMediaSession(this.data);

        if ("mediaSession" in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata(mediaSession);
            navigator.mediaSession.setActionHandler("play", () => {
                this.pauseOrResume();
            });
            navigator.mediaSession.setActionHandler('pause', () => {
                this.pauseOrResume();
            });
            navigator.mediaSession.setActionHandler('seekbackward', (details) => {
                this.audio.currentTime = this.audio.currentTime - (details.seekOffset || 10);
            });
            navigator.mediaSession.setActionHandler('seekforward', (details) => {
                this.audio.currentTime = this.audio.currentTime + (details.seekOffset || 10);
            });
            navigator.mediaSession.setActionHandler('seekto', (details) => {
                if (details.fastSeek && 'fastSeek' in this.audio) {
                    this.audio.fastSeek(details.seekTime);
                    return;
                }
                this.audio.currentTime = details.seekTime;
            });
            navigator.mediaSession.setActionHandler('stop', () => {
                this.audio.currentTime = 0;
                this.seekSlider.value = 0;
                this.container.style.setProperty('--seek-before-width', '0%');
                currentTimeContainer.textContent = '0:00';
                if (this.playState === 'pause') {
                    cancelAnimationFrame(raf);
                    this.playState = 'play';
                }
            });
        }
    }

    getMediaSession(data) {
        return {
            "title": data.textJson.headline,
            "artist": data.title,
            "album": '',
            "artwork": [
                {
                    src: this.getCover(),
                    sizes: '185x185',
                    type: 'image/jpg'
                }
            ]
        };
    }

    coverPhoto = (parent) => {
        this.photo = document.createElement("img");
        this.photo.src = this.getCover();

        // append to parent photo
        parent.appendChild(this.photo);

        if(this.edit) {
            this.coverPhotoUpload = document.createElement("hub-modal-open");
            this.coverPhotoUpload.classList.add("btn", "btn-default");
            this.coverPhotoUpload.id = "cover-photo";
            this.coverPhotoUpload.setAttribute("display", "fill-in");
            this.coverPhotoUpload.title = "Nahrať a upraviť obrázok";
            this.coverPhotoUpload.innerHTML = `Nahrať obrázok
            <button slot="actions" class="btn btn-default btn-close" data-dismiss="modal" type="button">Zatvoriť</button>
            <button slot="actions" class="btn btn-primary" disabled data-event="saveCoverPhoto">Uložiť</button>`;
            this.coverPhotoUpload.setAttribute("text", AudioPlayer.getWjPhotoHtml(this.data.textJson?.photo, this.data.courseId));

            document.addEventListener("photo-crop-after", this.photoCropAfter);


            parent.appendChild(this.coverPhotoUpload);
        }
    }

    photoCropAfter = (e) => {
        if(e.target.id == "wj-cover-photo") {
            let btnSave = document.querySelector(this.coverPhotoUpload.modal.target).querySelector('[data-event="saveCoverPhoto"]');
            btnSave.data = {
                "image": this.photo,
                "button": this.coverPhotoUpload
            };
            btnSave.removeAttribute("disabled");
        }
    }

    getCover() {
        return this.data.textJson.photo?.src ? `/thumb${this.data.textJson.photo.src}?w=185&h=185&ip=5` : "/thumb/templates/net/assets/js/components/wj-player-audio/img/cover.png?w=185&h=185&ip=5"
    }

    afterDisconnect() {
        document.removeEventListener("photo-crop-after", this.photoCropAfter);
    }

    static getWjPhotoHtml(data, courseId) {
        let originalPhoto = "";
        let scale = 1;
        let x = 0;
        let y = 0;

        if(data.hasOwnProperty("src")) {

            originalPhoto = data?.originalImage;
            scale = data?.cropImageData?.position?.scale;
            x = data?.cropImageData?.position?.x;
            y = data?.cropImageData?.position?.y;
        }

        return `<wj-photo src="${originalPhoto}" id="wj-cover-photo" crop-width="185" crop-height="185" width="420" height="220" angle="0" scale="${scale}" x="${x}" y="${y}" design="graphic" class="mb-4" custom-title="Nahrať obrázok" custom-description=".PNG, .JPG, .BMP, .WEBP" accepted-files=".jpg,.jpeg,.png,.bmp,.webp" product="LMS" module="course" module-id="${courseId}"></wj-photo>`;
    }
}

customElements.define("wj-player-audio", AudioPlayer);
