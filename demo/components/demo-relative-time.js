import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
<style>
    pre {
      overflow-x: auto;
      word-wrap: break-word;
      white-space: pre-wrap;
      padding: 10px;
      border: 1px solid hsla(240, 6%, 90%, 1);
      border-radius: 4px;
      background: #f9f9f9;
      max-width: 100%;
      font-size: 1em;
      line-height: 1.7rem;
      position: relative;
    }

    code {
      font-family: monospace;
      padding: 2px 4px;
      background: #f9f9f9;
      border-radius: 4px;
    }
  </style>
<h1>Relative time</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content" style="display: block;">
        <b>No date</b>
        <wje-relative-time></wje-relative-time><br/>
        
        <b>Timestamp</b>
        <wje-relative-time date="1704067200"></wje-relative-time><br/>
        
        <b>ISO Date</b>
        <wje-relative-time date="2024-01-01T00:00:00+00:00"></wje-relative-time><br/>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        getRelativeTimeString(date, lang = navigator.language) {
          let dateObj = new Date(date);
          const timeMs = dateObj.getTime();

          const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

          const cutoffs = [
              60,
              3600,
              86400,
              86400 * 7,
              86400 * 30,
              86400 * 365,
              Infinity
          ];

          const units = ["second", "minute", "hour", "day", "week", "month", "year"];
          const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds));
          const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

          return this.localizer.relativeTime(Math.floor(deltaSeconds / divisor), units[unitIndex],{ numeric: "auto" });
        }

        isISODate(str) {
            let regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\+\d{2}:\d{2}|Z)$/;
            return regex.test(str);
        }
      </code>
    </pre>
  </div>`;

export default class DemoRelativeTime extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, document);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-relative-time") || window.customElements.define("demo-relative-time", DemoRelativeTime);