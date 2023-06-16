import { UniversalService } from "/templates/net/assets/js/service/universal-service.js?v=@@version@@";
import { defaultStoreActions, store } from '/templates/net/assets/js/store/store.js?v=@@version@@';
import '../components/wj-item/item.js?v=@@version@@';

export class Service{
	constructor() {
		this.service = new UniversalService({
			store: store,
		});
	}

	init(player, hasEdit) {
		this.player = player;
		this.hasEdit = this.player.hasAttribute("editor");
		this.params = store.getState().params;
		this.video = store.getState().video;
		this.items = this.video.textJson.items || [];
		this.dropArea = this.player.shadowRoot.querySelector("#items-area");
		this.getPoints();
	}

	getPoints() {
		const result = [];
		this.items.reduce((prev, curr) => {
			// Ak pointTime sa ešte nevyskytol, pridáme ho do result
			if (!prev[curr.pointTime]) {
				prev[curr.pointTime] = { ...curr };
				result.push(prev[curr.pointTime]);
			} else {
				// Ak pointTime už bol pridaný, porovnáme podľa priorít a upravíme hodnoty
				const prevItem = prev[curr.pointTime];
				if (curr.required && !prevItem.required) {
					Object.assign(prevItem, curr);
				} else if (curr.pause && !prevItem.pause) {
					Object.assign(prevItem, curr);
				}
			}
			return prev;
		}, {});

		this.points = result;
	}

	addPoint(point) {
		this.points.push(point);
	}

	addItem(item) {
		this.items.push(item);
		this.updateStore();
		this.getPoints(); // vygenerujeme nove points
	}

	updateItem(item) {
		this.items = this.items.map(i => i.id === item.id ? item : i);
		this.updateStore();
		this.getPoints(); // vygenerujeme nove points
	}

	deleteItem(itemId) {
		this.items = this.items.filter(i => i.id != itemId);
		this.updateStore();
		this.getPoints(); // vygenerujeme nove points
	}

	findByPointTime(pointTime) {
		return this.items.find((p) => p.pointTime == pointTime);
	}

	findItemById(id) {
		return this.items.find((p) => p.id == id);
	}

	updateStore() {
		this.video.textJson.items = this.items;
		store.dispatch(defaultStoreActions.updateAction("video")(this.video));
	}

	// vytvorime jeden bod
	createPoint(point = null) {
		let date = new Date(0);
		let pointTime = point?.pointTime || date.setSeconds(this.player.media.currentTime);
		let duration = +this.player.media.duration;

		let p = document.createElement("span");
		p.setAttribute("point-time", pointTime);
		p.classList.add(point.required ? "require" : point.pause ? "pause" : "blank");
		p.classList.add("point");
		p.style.setProperty("left", `${this.getPercentage(pointTime/1000, duration)}%`);

		if(!point) {
			service.addPoint({
				"pointTime": pointTime,
				"duration": this.player.media.duration,
				"items": []
			});
		}

		this.player.shadowRoot.querySelector(".rewinding").append(p);

		return p;
	}

	drawPoints() {
		this.player.shadowRoot.querySelectorAll(".rewinding span").forEach((el) => {
			el.remove();
		});
		this.points.forEach((p) => {
			this.createPoint(p);
		});
	}

	// vytvorime jeden item
	createItem(item = null, pointTime = 0) {
		let hidden = true;
		let newItem = false;

		if(!item) {

			hidden = false;
			newItem = true;
			let order = this.items.length;
			item = {
				"pointTime": pointTime,
				"pause": true,
				"required": true,
				"title": "",
				"content": {
					"text": "",
					"buttons": [{
						"text": "Start",
						"transition": 0,
						"class": ["btn", "btn-default", "mr-3"]
					}, {
						"text": "30 sekund",
						"transition": 30,
						"class": ["btn", "btn-primary"]
					}]
				},
				"axisX": 50,
				"axisY": 50,
				"width": 250,
				"height": 150,
				"type": "TEXT",
				"delay": 4000,
				"order": ++order,
				"id": 9999,
				"duration": this.player.media.duration
			}
		}

		let i = this.createItemInDOM(item, hidden);

		if(newItem) {
			this.player.drag.bindItem(i)
		}

		this.player.shadowRoot.querySelector("#items-area").append(i);
		return {"dom": i, "object": item};
	}

	createItemInDOM(item, hidden) {
		let i = document.createElement("wj-item");
		i.data = item;
		i.setAttribute("item-id", item.id);
		i.setAttribute("shadow", "open");

		if(hidden) {
			i.setAttribute("hidden", "");
		} else {
			i.removeAttribute("hidden");
		}

		if(this.hasEdit)
			i.setAttribute("edit","");

		return i;
	}

	static addZeroBefore(n) {
		return (n < 10 ? '0' : '') + n;
	}

	getPercentage(time, duration) {
		return (time/(duration/100)).toFixed(3);
	}

	put(item) {
		return  this.service.put(`/private/rest/lms/course/content/${this.params.contentId}/video/item/save/${item.id}`, item, null, false);
	}

	post(item) {
		return  this.service.post(`/private/rest/lms/course/content/${this.params.contentId}/video/item/save`, item, null, false);
	}

	delete(itemId) {
		return  this.service.delete(`/private/rest/lms/course/content/${this.params.contentId}/video/item/delete/${itemId}`, "null", null, false);
	}
}

// const service = new Service();
// export { service }