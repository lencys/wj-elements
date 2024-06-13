import WJElement from "../../dist/wje-element.js";

const template = document.createElement("template");

template.innerHTML = `
<h3>Timeline</h3>

<div class="container">
    <div class="playground">
        <div class="content">
            <wje-timeline>
                <wje-timeline-item datetime="13. 06. 2024, 12:00" event="Event 1"></wje-timeline-item>
                <wje-timeline-item datetime="14. 06. 2024, 14:00" event="Event 2" active></wje-timeline-item>
                <wje-timeline-item datetime="15. 06. 2024, 16:00" event="Event 3">
                    Additional content for timeline item.
                </wje-timeline-item>
                <wje-timeline-item datetime="22. 07. 2025, 8:00" event="Schodza"></wje-timeline-item>
            </wje-timeline>
        </div>
    </div>
</div>
`;

export default class DemoTimeline extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-timeline") || window.customElements.define("demo-timeline", DemoTimeline);
