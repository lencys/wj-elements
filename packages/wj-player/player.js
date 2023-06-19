import { default as WJElement, WjElementUtils } from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";

const templateTest = document.createElement('template');

templateTest.innerHTML = `<style>
	@import "/templates/net/assets/plugins/bootstrap/css/bootstrap.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/typography.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/buttons.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/checkbox.css?v=@@version@@";
	@import "/templates/net/pages/css/themes/net-basic/form_elements.css?v=@@version@@";
	@import "/templates/net/assets/plugins/font-awesome/css/fontawesome.css?v=@@version@@";
    @import "/templates/net/assets/plugins/font-awesome/css/light.min.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic/var.css?v=@@version@@";
	@import "/templates/net/assets/js/components/wj-player/css/styles.css?v=@@version@@";
</style>`;

class Player extends WJElement{
	constructor() {
		super(templateTest);

		this.seek;
	}

	beforeDraw() {}

	draw(context, store, params) {
		return `<div class="player-wrapper">
			<div class="player">
				<video controls disablePictureInPicture preload="auto"></video>
				<div class="timer">00:00:00</div>
				<div class="controls">
					<div class="playpause">
						<wj-button class="play" data-icon="&#xf04b" aria-label="play pause toggle"></wj-button>
					</div>
					<div>
						<button class="volume" data-icon="&#xf027" aria-label="volume toggle"></button>
						<input type="range" min="0" max="100" step="1" id="volume-slider" />
					</div>
					<div class="fullscreen">
						<button data-icon="&#xf424" aria-label="fullscreen"></button>
					</div>
				</div>
				
				<div class="rewinding">
					<div class="seek-tooltip" id="seek-tooltip">
						<div id="preview"></div>
						<div id="time">00:00:00</div>	
					</div>
				</div>
				
				<div class="d-none" id="hub-video-toolbar">
					<a add="point"><i class="fa-light fa-location-dot"></i></a>
					<a add="text"><i class="fa-light fa-text"></i></a>
				</div>
			</div>
		</div>`;
	}

	afterDraw() {
		this.timer = null;
		this.rewinding = this.hasAttribute("editor") || this.hasAttribute("rewinding") ? true : false;
		this.time = new Date();
		this.date = new Date(0);

		/* SOURCE */
		let source = document.createElement("source");
		source.setAttribute("src", this.getAttribute("src"));

		/* VIDEO */
		this.media = this.shadowRoot.querySelector("video");
		this.media.removeAttribute("controls");
		this.media.appendChild(source);
		this.media.addEventListener("ended", this.stopMedia);
		this.media.addEventListener("timeupdate", this.setTime);
		this.media.addEventListener("loadedmetadata", this.initializeVideo);

		/* PLAY */
		this.play = this.shadowRoot.querySelector(".play");
		this.play.addEventListener('click', this.playPauseMedia);

		/* FULLSCREEN */
		this.fullscreen = this.shadowRoot.querySelector('.fullscreen');
		this.fullscreen.addEventListener("click", () => {this.doFullScreen(this) }, false);

		/* VOLUME */
		this.volume = this.shadowRoot.querySelector("button.volume");
		this.volumeSlider = this.shadowRoot.querySelector("#volume-slider");

		this.volume.addEventListener("click", (e) => {
			if(e.target.hasAttribute("mute"))
				this.setVolume(e.target,false);
			else
				this.setVolume(e.target,true);
		});

		this.volumeSlider.addEventListener("input", (e) => {
			this.setVolume(e.target);
		});

		this.volumeSlider.addEventListener("change", (e) => {
			this.setVolume(e.target);
		});
	}

	beforeDisconnect() {
		this.interactive = null;
	}

	initializeVideo = async (e) => {
		/* IS INTERACTIVE */
		if(this.getAttribute("type") != "undefined" && this.hasAttribute("type") && this.getAttribute("type").toUpperCase() === "INTERACTIVE") {
			await import("./interactive.js?v=@@version@@").then((module) => {
				this.interactive = new module.Interactive({
					player: this
				});
				this.interactive.init();
			});
		}

		if(this.shadowRoot.contains(this.seek))
			return

		/* SOURCE */
		let source = document.createElement("source");
		source.setAttribute("src", this.getAttribute("src"));

		/* PREVIEW */
		this.preview = document.createElement("video");
		this.preview.removeAttribute("controls");
		this.preview.appendChild(source);

		this.preview = this.media.cloneNode(true);
		let preview = this.shadowRoot.querySelector("#preview");
		preview.innerHTML = "";
		preview.appendChild(this.preview);

		if(this.rewinding) {
			this.seek = this.getSeek();
		} else {
			this.seek = this.getBar();
		}

	}

	setVolume = (target, mute) => {
		const min = 0;
		const max = 100;
		let val = 0;

		if(!mute) {
			val = target.tagName == "INPUT" ? target.value : 50;
		}

		this.volumeSlider.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
		this.volumeSlider.value = val;

		this.media.volume = val / 100;

		if(this.media.volume == 0 || mute) {
			this.volume.setAttribute("data-icon","\uf6a9");
			this.volume.setAttribute("mute", "");
		} else {
			this.volume.setAttribute("data-icon","\uf027");
			this.volume.removeAttribute("mute");
		}
	}

	playPauseMedia = () => {
		if(this.media.paused) {
		    this.play.setAttribute("data-icon","\uf04c");
			this.timer = window.setInterval(() => {
				this.totalViewingTime += 1;
			}, 1000);

		    this.media.play();
		} else {
		  this.pauseMedia();
		}
	}

	stopMedia = (e) => {
		this.media.pause();
		this.media.currentTime = 0;
		this.play.setAttribute("data-icon", "\uf04b");
	}

	pauseMedia = () => {
		if (this.timer)
			clearInterval(this.timer);

		this.play.setAttribute("data-icon","\uf04b");
		this.media.pause();
	}

	setTime = (e) => {
		if(!this.shadowRoot.contains(this.media))
			return;

		this.seekUpdate(this.seek, Math.floor(this.media.currentTime));

		let timeObject = this.toHoursAndMinutes(Math.floor(this.media.currentTime), true);
		let mediaTime = timeObject.h + ":" + timeObject.m + ":" + timeObject.s;

		this.shadowRoot.querySelector(".timer").textContent = mediaTime;

		this.date = new Date(0);
		this.date.setSeconds(this.media.currentTime);

		if(this.hasAttribute("type") && this.getAttribute("type").toUpperCase() === "INTERACTIVE") {
			this.dispatchEvent(
				new CustomEvent("playerupdatetime", {
					bubbles: true,
					detail: {
						time: this.date.getTime(),
						player: this
					}
				})
			);
		}
	}

	getSeek() {
		if(this.shadowRoot.querySelector(".seek"))
			return;

		let seek = document.createElement("input");
		seek.classList.add("seek");
		seek.setAttribute("type", "range");
		seek.setAttribute("id", "seek");
		seek.setAttribute("value", "0");
		seek.setAttribute("step", "1");
		seek.setAttribute("min", "0");
		seek.setAttribute("max", parseInt(this.media.duration));
		seek.addEventListener("mousemove", this.updateSeekTooltip);
		seek.addEventListener("input", this.skipAhead);

		this.shadowRoot.querySelector(".rewinding").prepend(seek);

		return seek;
	}

	getBar() {
		let bar = document.createElement("div");
		bar.classList.add("bar");

		this.shadowRoot.querySelector(".rewinding").prepend(bar);
		return bar;
	}

	updateSeekTooltip = (e) => {
		let seekTooltip = this.shadowRoot.getElementById('seek-tooltip');
		let skipTo = Math.round((e.offsetX / e.target.clientWidth) * parseInt(e.target.getAttribute('max'), 10));

		this.preview.currentTime = skipTo;// videu v preview nastavime currentTime ako skipTo

		let t = this.toHoursAndMinutes(skipTo, true);
		let rect = this.media.getBoundingClientRect();
		let previewRect = seekTooltip.querySelector("#preview").getBoundingClientRect();

		seekTooltip.querySelector("#time").innerText = `${t.h}:${t.m}:${t.s}`;
		seekTooltip.style.left = `${e.pageX - rect.left - previewRect.width/2}px`;
	}

	skipAhead = (e) => {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();

		let target = e.target;

		if (e.target.type !== 'range') {
			target = this.seek;
		}

		const skipTo = target.value;
		this.media.currentTime = skipTo;

		this.seekUpdate(target, skipTo);
	}

	seekUpdate(target, skipTo) {
		if(this.rewinding) {
			target.value = skipTo;
			target.style.backgroundSize = (skipTo - target.min) * 100 / (target.max - target.min) + '% 100%';
		} else {
			target.style.width = (this.media.currentTime/(this.media.duration/100)).toFixed(3) + "%";
		}
	}

	toHoursAndMinutes(totalSeconds, zero = false) {
		const totalMinutes = Math.floor(totalSeconds / 60);

		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		const seconds = totalSeconds % 60;

		if(zero) {
			return {h: this.addZeroBefore(hours), m: this.addZeroBefore(minutes), s: this.addZeroBefore(seconds)};
		} else {
			return {h: hours, m: minutes, s: seconds};
		}
	}

	isFullScreen() { 
	  return Boolean(
	    document.fullscreenElement ||
	      document.webkitFullscreenElement ||
	      document.mozFullScreenElement ||
	      document.msFullscreenElement
	  );
	}

	doFullScreen(el) { 
	  if (this.isFullScreen()) return false;
	  if (el === undefined) el = document.documentElement; 
	  if (document.fullscreenEnabled) { 
	    el.requestFullscreen();
	  } else if (document.webkitFullscreenEnabled) {
	    el.webkitRequestFullscreen();
	  } else if (document.mozFullScreenEnabled) {
	    el.mozRequestFullScreen();
	  } else if (document.msFullscreenEnabled) {
	    el.msRequestFullscreen();
	  }
	}

	addZeroBefore(n) {
		return (n < 10 ? '0' : '') + n;
	}
}

window.customElements.define("wj-player", Player);