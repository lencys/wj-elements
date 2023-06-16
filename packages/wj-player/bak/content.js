import { service } from "../service/service.js?v=@@version@@";
import "./text.js?v=@@version@@";

const template = document.createElement("template");
template.innerHTML = `<style>
	@import "/templates/net/assets/js/components/wj-player/css/styles.css?v=@@version@@";

	:host {
	  position: absolute;
	  top: -8px;
	  left: 50px;
	  background: white;
	  padding: 0px;
	  border-radius: 5px;
	  min-width: 200px;
	  font-family: Open Sans;
	  font-size: 14px;
	  box-shadow: 0px 0px 10px gray;
	}

    .box {
        position: relative;
        user-select: none;
        width: calc(100%);
        height: calc(100%);
        box-sizing: border-box;
        margin: 0px;
        z-index: 1;
    } 
    
    .border {
        border: 1px solid var(--color-complete) !important;
        width: calc(100% + -2px);
        height: calc(100% + -2px);
        position: absolute;
        margin: 0px;
        z-index: -1;
    }
    
    .dot {
        height: 12px;
        width: 12px;
        position: absolute;
        user-select: none;
        content: "";
    }
    
    .dot::after {
        height: 12px;
        width: 12px;
        position: absolute;
        content: "";
        left: calc(50% - 6px);
        top: calc(50% - 6px);
        display: block;
        background: #fff;
        border-radius: 6px;
        box-shadow: 0 0 5px 1px rgba(57,76,96,.15),0 0 0 1px rgba(53,71,90,.2);
    }
    
    .dot.left {
        left: -6px;
        top: 6px;
        height: calc( 100% - 12px);
    }

    .dot.left::after {
        cursor: w-resize; 
    }
    
    .dot.right {
        right: -6px;
        top: 6px;
        height: calc( 100% - 12px); 
    }

    .dot.right::after {
        cursor: e-resize; 
    }

    .dot.left::after, .dot.right::after {
        content: ""!important;
        height: 16px!important;
        width: 4px!important;
        left: calc(50% - 2px);
        top: calc(50% - 8px);
    }
    
    .dot.top {
        top: -6px;
        left: 6px;
        width: calc(100% - 12px); 
    }

    .dot.top::after {
        cursor: n-resize; 
    }

    .dot.bottom {
        bottom: -6px;
        left: 6px;
        width: calc(100% - 12px);
    }

    .dot.bottom::after {
        cursor: s-resize; 
    }

    .dot.top::after, .dot.bottom::after {
        content: ""!important;
        height: 4px!important;
        width: 16px!important;
        left: calc(50% - 8px);
        top: calc(50% - 2px);
    }
    
    :host(.right-top) .top, :host(.right-top) .left {
    	display: none !important;
    }

    :host(.left-top) .top, :host(.left-top) .right {
    	display: none !important;
    }

    :host(.right-bottom) .bottom, :host(.right-bottom) .left {
    	display: none !important;
    }

    :host(.left-bottom) .bottom, :host(.left-bottom) .right {
    	display: none !important;
    }

    .icons {
    	position: absolute;
    	display: flex;
    	top: -35px;
    }

    .icons > a {
    	display: flex;
    	align-items: center;
    	width: 14px; 
    	height: 14px;
    	border-radius: 50%;
    	background: white;
    	padding: 6px;
    	box-shadow: 0px 0px 10px gray;
    	text-align: center;
    	z-index: 999;
    }


	slot {
    	padding: 10px;
    	height: 100%;
    	display: flex;
    	flex-direction: column;
    	flex-wrap: nowrap;
    }

    ::slotted(.header) {
		font-weight: bold;
		padding: 0 0 .5rem;
	}

	::slotted(.content) {
		overflow: auto;
	}

	::slotted(.footer) {
		padding: .5rem 0 0;
		bottom: 10px;
		position: absolute;
	}
    
</style>
   
<div class="box" id="box">
    <div class="border"></div>
    <div class="dot top xy"></div>
    <div class="dot bottom xy"></div>
    <div class="dot left xy"></div>
    <div class="dot right xy"></div>
	<div class="icons edit">
		<a><i class="fa-light fa-ellipsis"></i></a>	
		
		<div class="menu-line">
			<div class="btn-app fa-light fa-pen"></div>
			<div class="btn-app">
				<div class="fa fa-map-marker"></div>
			</div>
			<div class="btn-app">
				<div class="fa fa-envelope"></div>
			</div>
		</div>
	</div>
    <slot></slot>
</div>`;

class Content extends HTMLElement{
	constructor() {
		super();

		this.attachShadow({ mode: "open"});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	connectedCallback() {
		let parent = this.closest(".item");
		let item = service.findItemById(parent.id);
		let headerHeight = 0;
		let footerHeight = 0;

		// div - Header
		let h = document.createElement("div");
		h.classList.add("header");
		h.innerText = item.title;
		
		headerHeight = h.offsetHeight;

		this.innerHTML = this.singleton(item)
		this.prepend(h);
 
		// div - Footer
		if(item.content.buttons?.length > 0) {
			let f = this.footer(item);
			footerHeight = f.offsetHeight;
		}
		
		this.style.width = item.width + "px";
		this.style.height = item.height + "px";

		this.initResize();

		this.shadowRoot.querySelector(".edit").addEventListener("click", (e) => {

			//this.querySelector(".content").setAttribute("edit", "");
			let menuLine = e.target.closest(".edit").querySelector(".menu-line");

			if(menuLine.classList.contains("open")) {
				menuLine.classList.remove("open");
			} else {
				menuLine.classList.add("open")
			}
		}, false);
	
		this.querySelector(".content").style.setProperty("height", `calc(100% - (${headerHeight + footerHeight}px + 20px))`);
	}

	footer(data) {
		let f = document.createElement("div");
		f.classList.add("footer");

		data.content.buttons.forEach((b, i) => {
			let btn = document.createElement("button");
			btn.classList.add("btn", ...b.class);
			btn.innerText = b.text;
			

			f.append(btn);
			this.append(f);
			btn.addEventListener("click", (e) => {
				btn.dispatchEvent(new CustomEvent("tralala", {
					detail: b,
					cancelable: true,
				}));
			});
		});

		return f;
	}

	singleton(item) {
		switch(item.type){
			case "TEXT":
				return this.text(item);
				break;
			case "TEST":
				return this.test(item);
				break;
		}
	}

	text(item) {
		return `<data-text id="${item.id}" class="content"></div>`;
	}

	test(item) {
		return '<div class="content">SOM TEST</div>';
	}

	initResize() {
        this.box = this.shadowRoot.getElementById("box");

        this.minWidth = 200;
        this.minHeight = 100;
        this.initW = this.box.offsetWidth;
        this.initH = this.box.offsetHeight;
        this.initX = this.offsetLeft;
        this.initY = this.offsetTop;

        let right = this.shadowRoot.querySelector(".right");
        let left = this.shadowRoot.querySelector(".left");
        let top = this.shadowRoot.querySelector(".top");
        let bottom = this.shadowRoot.querySelector(".bottom");

        right.addEventListener('mousedown', e => this.resizeHandler(e, false, false, true, false, "right"), false);
        left.addEventListener('mousedown', e => this.resizeHandler(e, true, false, true, false, "left"), false);
        top.addEventListener('mousedown', e => this.resizeHandler(e, false, true, false, true, "top"), false);
        bottom.addEventListener('mousedown', e => this.resizeHandler(e, false, false, false, true, "bottom"), false);
    }

    resizeHandler = (...arg) => {
        arg[0].preventDefault();
        arg[0].stopPropagation();

        this.arg = arg;
        this.initW = this.box.offsetWidth;
        this.initH = this.box.offsetHeight;
        this.initX = this.offsetLeft;
        this.initY = this.offsetTop;
        this.mousePressX = arg[0].clientX;
        this.mousePressY = arg[0].clientY;

        document.addEventListener("mousemove", this.eventMoveHandler, false);
        document.addEventListener("mouseup", this.eventEndHandler, false);
    }

    eventMoveHandler = (event) => {
        let left = this.arg[1];
        let top = this.arg[2];
        let xResize = this.arg[3];
        let yResize = this.arg[4];
        let wDiff = (event.clientX - this.mousePressX);
        let hDiff = (event.clientY - this.mousePressY);

        this.newW = this.initW, this.newH = this.initH, this.newX = this.initX, this.newY = this.initY;

        // calculate new width and height
        if (xResize) {
            if (left) {
                this.newW = this.initW - wDiff//- rotatedWDiff;
            } else {
                this.newW = this.initW + wDiff//+ rotatedWDiff;
            }
            if (this.newW < this.minWidth) {
                this.newW = this.minWidth;
            }
        }

        if (yResize) {
            if (top) {
                this.newH = this.initH - hDiff//- rotatedHDiff;
            } else {
                this.newH = this.initH + hDiff//+ rotatedHDiff;
            }
            if (this.newH < this.minHeight) {
                this.newH = this.minHeight;
            }
        }

        if (xResize) {
            if (left) {
                this.newX =  - (this.newW + 18);
            }
        }

        if (yResize) {
            if (top) {
                this.newY = - (this.newH - 18);
            }            
        }

        this.resize(this.newW, this.newH);
        this.position(this.newX, this.newY);
    }

    eventEndHandler = () => {
        document.removeEventListener('mousemove', this.eventMoveHandler, false);
        document.removeEventListener('mouseup', this.eventEndHandler);
    }

    position(x, y) {
        this.style.left = x + 'px';
        this.style.top = y + 'px';
    }

    resize(w, h) {
        this.style.width = w + 'px';
        this.style.height = h + 'px';
    }
}

window.customElements.define('interactive-content', Content);