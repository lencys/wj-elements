import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class TimelineItem extends WJElement {
    constructor() {
        super();
    }

    className = "TimelineItem";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    createStatusElement(type) {
        const status = document.createElement('wje-status');
        const icon = document.createElement('wje-icon');
        status.setAttribute('slot', 'icon');
        status.setAttribute('size', 'medium');
        icon.setAttribute('size', 'medium');
        switch (type) {
            case 'active':
                icon.setAttribute('name', 'check');
                status.setAttribute('color', 'success');
                break;
            case 'default':
            default:
                status.setAttribute('color', 'contrast');
                break;
        }

        status.appendChild(icon);

        return status;
    }

    wrapInCard(slot) {
        const card = document.createElement("wje-card");
        const cardHeader = document.createElement("wje-card-header");

        cardHeader.appendChild(slot);
        card.appendChild(cardHeader);

        return card;
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        const native = document.createElement('div');
        native.setAttribute("part", "native");
        native.classList.add("native-timeline-item");

        const statusElement = this.hasAttribute('active')
            ? this.createStatusElement('active')
            : this.createStatusElement('default');

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('content-container');

        const relativeTime = document.createElement('wje-relative-time');
        relativeTime.setAttribute('date', this.getAttribute('datetime') || '');

        const event = document.createElement('h3');
        event.classList.add('event');
        event.textContent = this.getAttribute('event') || '';

        const card = document.createElement("wje-card");

        const slot = document.createElement('slot');

        contentContainer.appendChild(relativeTime);
        contentContainer.appendChild(event);
        if(this.innerHTML) {
            card.appendChild(slot);
            contentContainer.appendChild(card);
        }

        native.appendChild(statusElement);
        native.appendChild(contentContainer);

        fragment.appendChild(native);

        return fragment;
    }
}
