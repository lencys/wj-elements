var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import Checkbox from "./wje-checkbox.js";
import WJElement from "./wje-element.js";
import MenuItem from "./wje-menu-item.js";
const styles = "/*\n[ Wj kanban ]\n*/\n\n:host {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n}\n.native {\n    height: 100%;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 300px;\n    overflow-x: auto;\n    gap: 1rem;\n}\n\n.pool {\n    display: inline-block;\n    width: 300px;\n    flex: 0 0 300px;\n    vertical-align: top;\n    overflow: auto;\n    padding: 8px;\n    border-radius: 8px;\n    margin-right: 15px;\n}\n\nh4 {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 0;\n}\n\n.card {\n    border-radius: 5px;\n    background: #fff;\n    border: 1px solid #ddd;\n    margin-bottom: 5px;\n    padding: 8px 10px;\n    color: #000;\n}\n\n.card:hover {\n    opacity: 0.5;\n}\n\n.dragging {\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n    transform: rotate(-2deg);\n    opacity: 0.5;\n    position: relative;\n    z-index: 1000;\n}\n\n.card-placeholder {\n    display: block;\n    height: 34px;\n    border: 1px dashed #ddd;\n    margin: 3px 0;\n    border-radius: 5px;\n}\n\n.pool-header {\n    display: flex;\n    align-items: center;\n    margin-bottom: 0.25rem;\n    gap: 0 0.25rem;\n    wje-checkbox {\n        margin: 0;\n    }\n    wje-badge {\n        margin-inline-start: auto;\n    }\n}\n";
class Kanban extends WJElement {
  /**
   * Creates an instance of Kanban.
   * @class
   */
  constructor() {
    super();
    /**
     * Dependencies of the Option component.
     */
    __publicField(this, "dependencies", {
      "wje-checkbox": Checkbox,
      "wje-menu-item": MenuItem
    });
    /**
     * Sets the URL for fetching data.
     * @type {string}
     */
    __publicField(this, "className", "Kanban");
    /**
     * Iterates over a list of items, generates an HTML card for each, and appends it to the specified pool's content area.
     * @param {HTMLElement} pool The container element where the cards will be appended. It should contain an element with the class `.pool-content`.
     * @param {Array} items An array of items used to generate HTML cards.
     */
    __publicField(this, "customForeach", (pool, items) => {
      for (const item of items) {
        let card = this.htmlCard(item);
        pool.querySelector(".pool-content").appendChild(card);
      }
    });
    /**
     * Handles the menu item click event.
     * @param e
     */
    __publicField(this, "menuItemClickHandler", (e) => {
      const action = e.target.dataset.action;
      const pool = e.target.closest(".pool");
      this.handlePoolAction(action, pool);
    });
    /**
     * Updates the column item count.
     */
    __publicField(this, "updateColumnItemCount", () => {
      const pools = this.shadowRoot.querySelectorAll(".pool");
      pools.forEach((pool) => {
        const itemCount = pool.querySelectorAll(".pool-content .card").length;
        let itemCountDisplay = pool.querySelector(".item-count");
        itemCountDisplay.innerHTML = itemCount;
      });
    });
    /**
     * Gets the pool.
     * @param data {Array}
     * @param poolName {string}
     * @returns {*}
     */
    __publicField(this, "getPool", (data, poolName) => {
      return data.reduce((acc, item) => {
        const statusName = item.status.name;
        if (!acc[statusName]) {
          acc[statusName] = [];
        }
        acc[statusName].push(item);
        return acc;
      }, {});
    });
    /**
     * Returns the HTML for the pool.
     * @param title {string}
     * @param countItems {number}
     * @returns {Element}
     */
    __publicField(this, "htmlPool", (title, countItems) => {
      let poolHtml = document.createElement("div");
      poolHtml.classList.add("pool");
      let header = document.createElement("div");
      header.classList.add("pool-header");
      let checkbox = document.createElement("wje-checkbox");
      checkbox.setAttribute("type", "checkbox");
      checkbox.classList.add("select-all-cards");
      checkbox.title = "Select all cards";
      let h4 = document.createElement("h4");
      h4.textContent = title;
      let badge = document.createElement("wje-badge");
      badge.setAttribute("color", "danger");
      badge.classList.add("item-count");
      badge.textContent = countItems;
      let dropdown = document.createElement("wje-dropdown");
      dropdown.setAttribute("placement", "bottom-start");
      dropdown.setAttribute("offset", "5");
      dropdown.setAttribute("collapsible", "");
      dropdown.innerHTML = `
            <wje-button fill="link" slot="trigger" size="small" round>
                <wje-icon name="dots-vertical"></wje-icon>
            </wje-button>
            <wje-menu active>
                <wje-menu-item data-action="rename-pool">
                    <wj-label>Zmeniť názov</wj-label>
                </wje-menu-item>
                <wje-menu-item data-action="move-left">
                    <wj-label>Posunúť doľava</wj-label>
                </wje-menu-item>
                <wje-menu-item data-action="move-right">
                    <wj-label>Posunúť doprava</wj-label>
                </wje-menu-item>
            </wje-menu>
        `;
      header.appendChild(checkbox);
      header.appendChild(h4);
      header.appendChild(badge);
      header.appendChild(dropdown);
      let content = document.createElement("div");
      content.classList.add("pool-content");
      poolHtml.appendChild(header);
      poolHtml.appendChild(content);
      return poolHtml;
    });
    /**
     * Returns the HTML for the card.
     * @param item {Object}
     * @returns {Element}
     */
    __publicField(this, "htmlCard", (item) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.draggable = true;
      card.setAttribute("data-id", item.id);
      card.innerHTML = `
            <wje-checkbox type="checkbox" class="select-card" title="Select card"></wje-checkbox>
            <div>${item.body}</div>
        `;
      return card;
    });
    this.totalPages = 0;
    this.isLoading = [];
    this._response = {};
    this.isDragging = false;
    this.selectedCards = [];
  }
  /**
   * Sets the URL for fetching data.
   * @param value {string}
   */
  set response(value) {
    this._response = value;
  }
  /**
   * Gets the URL for fetching data.
   * @returns {*|{}|{}}
   */
  get response() {
    return this._response;
  }
  /**
   * Sets the URL for fetching data.
   * @param value {array}
   */
  set selectedItems(value) {
    this._selectedItems = value;
  }
  /**
   * Gets the URL for fetching data.
   * @returns {Array}
   */
  get selectedItems() {
    return this._selectedItems;
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  /**
   * Prepares the component before drawing.
   * @param {object} context The context for drawing.
   * @param {object} store The store for drawing.
   * @param {object} params The parameters for drawing.
   */
  async beforeDraw(context, store, params) {
    this.response = await this.getPages();
  }
  /**
   * Draws the component after it has been prepared.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native");
    native.setAttribute("part", "native-infinite-scroll");
    let pools = this.getPool(this.response, this.poolName);
    for (const statusName in pools) {
      if (pools.hasOwnProperty(statusName)) {
        let pool = this.htmlPool(statusName, pools[statusName].length);
        native.appendChild(pool);
        const items = pools[statusName];
        this.customForeach(pool, items);
      }
    }
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * Sync ARIA attributes on host.
   */
  syncAria() {
    if (!this.hasAttribute("role")) {
      this.setAriaState({ role: "region" });
    }
    const ariaLabel = this.getAttribute("aria-label");
    const label = this.getAttribute("label");
    if (!ariaLabel && label) {
      this.setAriaState({ label });
    }
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.ui = {
      elBoard: this.shadowRoot.getElementById("board"),
      elTotalCardCount: this.shadowRoot.getElementById("totalCards"),
      elCardPlaceholder: null
    };
    this.setupDragAndDropEvents();
    this.setupSelectAllCardsEvent();
    this.setupMenuItemClickEvents();
  }
  /**
   * Sets up the drag and drop events for the component.
   */
  setupDragAndDropEvents() {
    this.live("dragstart", ".pool .card", (e) => {
      this.isDragging = true;
      e.dataTransfer.clearData();
      e.dataTransfer.setData("text/plain", e.target.dataset.id);
      e.dataTransfer.dropEffect = "move";
      e.target.style.opacity = "0.5";
      const rect = e.target.getBoundingClientRect();
      this.draggedElementWidth = rect.width;
      this.draggedElementHeight = rect.height;
    });
    this.live("dragend", ".pool .card", (e) => {
      e.target.style.opacity = "";
      if (this.ui.elCardPlaceholder) {
        this.ui.elCardPlaceholder.remove();
      }
      this.ui.elCardPlaceholder = null;
      this.isDragging = false;
    });
    this.live("dragover", ".pool, .pool .card, .pool .card-placeholder", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      if (e.target.classList.contains("pool")) {
        e.target.appendChild(this.getCardPlaceholder());
      } else if (e.target.classList.contains("card")) {
        e.target.parentNode.insertBefore(this.getCardPlaceholder(), e.target);
      }
    });
    this.live("drop", ".pool, .pool .card-placeholder", (e) => {
      e.preventDefault();
      if (!this.isDragging) return;
      const todo_id = +e.dataTransfer.getData("text");
      const card = this.shadowRoot.querySelector('.card[data-id="' + todo_id + '"]');
      if (e.target.classList.contains("pool")) {
        e.target.querySelector(".pool-content").appendChild(card);
      } else if (e.target.classList.contains("card-placeholder")) {
        e.target.parentNode.replaceChild(card, e.target);
      }
      window.setTimeout(this.updateColumnItemCount, 100);
    });
  }
  /**
   * Sets up the select all cards event for the component.
   */
  setupSelectAllCardsEvent() {
    this.live("wje-toggle:change", ".select-all-cards", (e) => {
      const pool = e.target.closest(".pool");
      this.updateSelectedCards(pool, e.target.checked);
    });
    this.live("wje-toggle:change", ".select-card", (e) => {
      const card = e.target.closest(".card");
      this.setSelectedCards(e.target.checked, card);
      if (this.selectedCards.length === 0) {
        e.target.closest(".pool").querySelector(".select-all-cards").checked = false;
      }
      this.setSelectedItems();
    });
  }
  /**
   * Sets up the menu item click events for the component.
   */
  setupMenuItemClickEvents() {
    this.context.querySelectorAll("wje-menu-item").forEach((menuItem) => {
      menuItem.removeEventListener("wje-menu-item:click", this.menuItemClickHandler);
    });
    this.context.querySelectorAll("wje-menu-item").forEach((menuItem) => {
      menuItem.addEventListener("wje-menu-item:click", this.menuItemClickHandler);
    });
  }
  /**
   * Updates the selected cards in the pool.
   * @param pool {HTMLElement}
   * @param isChecked {boolean}
   */
  updateSelectedCards(pool, isChecked) {
    const cards = pool.querySelectorAll(".pool-content .card");
    cards.forEach((card) => {
      const checkbox = card.querySelector("wje-checkbox");
      if (checkbox) {
        checkbox.checked = isChecked;
      }
      this.setSelectedCards(isChecked, card);
    });
    this.setSelectedItems();
  }
  /**
   * Handles the pool action.
   * @param action {string}
   * @param pool {HTMLElement}
   */
  handlePoolAction(action, pool) {
    switch (action) {
      case "move-left":
        this.movePool(pool, "left");
        break;
      case "move-right":
        this.movePool(pool, "right");
        break;
      case "rename-pool":
        this.renamePool(pool);
        break;
      default:
        console.error(`Neznáma akcia: ${action}`);
    }
  }
  /**
   * Moves the pool in the specified direction.
   * @param pool {HTMLElement}
   * @param direction {string}
   */
  movePool(pool, direction) {
    const parent = pool.parentElement;
    if (direction === "left" && pool.previousElementSibling) {
      parent.insertBefore(pool, pool.previousElementSibling);
    } else if (direction === "right" && pool.nextElementSibling) {
      parent.insertBefore(pool.nextElementSibling, pool);
    }
    this.setupMenuItemClickEvents();
  }
  /**
   * Renames the pool.
   * @param pool {HTMLElement}
   */
  renamePool(pool) {
    const newName = prompt("Zadajte nový názov pre stĺpec:");
    if (newName) {
      const header = pool.querySelector(".pool-header h4");
      header.innerHTML = `${newName} (<span class="item-count">0</span> položiek)`;
      this.updateColumnItemCount();
    }
  }
  /**
   * Gets the card placeholder.
   * @returns {null|*}
   */
  getCardPlaceholder() {
    if (!this.ui.elCardPlaceholder) {
      this.ui.elCardPlaceholder = document.createElement("div");
      this.ui.elCardPlaceholder.className = "card-placeholder";
      this.ui.elCardPlaceholder.style.width = this.draggedElementWidth + "px";
      this.ui.elCardPlaceholder.style.height = this.draggedElementHeight + "px";
    } else {
      this.ui.elCardPlaceholder.style.width = this.draggedElementWidth + "px";
      this.ui.elCardPlaceholder.style.height = this.draggedElementHeight + "px";
    }
    return this.ui.elCardPlaceholder;
  }
  /**
   * Adds a live event listener to the component.
   * @param eventType {string}
   * @param selector {string}
   * @param callback {function}
   */
  live(eventType, selector, callback) {
    const attachListener = (root) => {
      root.addEventListener(
        eventType,
        (e) => {
          if (e.target.matches(selector)) {
            callback.call(e.target, e);
          }
        },
        false
      );
    };
    const traverseAndAttach = (root) => {
      attachListener(root);
      root.querySelectorAll("*").forEach((node) => {
        if (node.shadowRoot) {
          traverseAndAttach(node.shadowRoot);
        }
      });
    };
    traverseAndAttach(this.shadowRoot || this);
  }
  /**
   * Sets the selected cards.
   * @param isChecked {boolean}
   * @param card {HTMLElement}
   */
  setSelectedCards(isChecked, card) {
    if (isChecked) {
      if (!this.selectedCards.includes(card)) {
        this.selectedCards.push(card);
      }
    } else {
      this.selectedCards = this.selectedCards.filter((selectedCard) => selectedCard !== card);
    }
  }
  /**
   * Sets the selected items.
   */
  setSelectedItems() {
    const selectedIds = this.selectedCards.map((card) => card.getAttribute("data-id"));
    this.selectedItems = this.response.filter((item) => selectedIds.includes(item.id));
  }
  /**
   * Fetches the pages.
   * @param page
   * @returns {Promise<any>}
   */
  async getPages(page = 0) {
    let hasParams = this.url.includes("?");
    const response = await fetch(
      `${this.url}${hasParams ? "&" : "?"}page=${page}&size=${this.size}${this == null ? void 0 : this.queryParams}`
    );
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();
  }
  dispatchEvent(event) {
    return false;
  }
}
Kanban.define("wje-kanban", Kanban);
export {
  Kanban as default
};
//# sourceMappingURL=wje-kanban.js.map
