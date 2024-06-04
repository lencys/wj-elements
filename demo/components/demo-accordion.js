import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Accordion</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-accordion index="3">
          <wje-accordion-item color="primary">
            <span slot="headline">Headline</span>
            <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
          </wje-accordion-item>
          <wje-accordion-item color="complete">
            <span slot="headline">Headline</span>
            <div slot="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus. Aenean luctus facilisis nibh. Cras ac leo tellus. Vivamus sagittis a elit ut imperdiet. Donec fringilla elementum odio. Integer vitae aliquam metus. Curabitur ante nisi, rutrum sit amet nunc quis, dapibus iaculis massa.</p>
              <p>Aenean interdum eros enim, ac hendrerit purus egestas eget. Vestibulum nulla sem, consectetur id lacinia id, accumsan non tortor. Aenean eleifend, purus sed malesuada finibus, augue erat congue arcu, ut finibus sapien sapien a lorem. Integer sit amet finibus nunc, sit amet vestibulum nisl. Donec pulvinar luctus nisl, nec placerat justo pulvinar eget. Integer a dignissim orci, id lobortis felis. Curabitur eget urna ex. Donec scelerisque felis non lacus lacinia tincidunt. Aenean ut felis ac felis interdum dapibus. Nam arcu enim, lobortis nec arcu id, venenatis efficitur mauris.</p>
              <p>Maecenas vel venenatis sem, sit amet laoreet lectus. Morbi eu tincidunt lorem, sed tincidunt ante. Praesent pellentesque, odio non mattis pretium, felis lorem dapibus nisi, eu varius lacus nisi quis diam. Fusce tristique diam posuere velit molestie volutpat. Maecenas eget urna et nulla laoreet interdum. Sed dignissim nibh erat, nec lobortis libero tincidunt id. Donec sit amet tortor quis nisl rutrum accumsan vitae et nulla.</p>
            </div>
          </wje-accordion-item>
          <wje-accordion-item color="success">
            <span slot="headline">Headline</span>
            <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
          </wje-accordion-item>
          <wje-accordion-item color="danger">
            <span slot="headline">Headline</span>
            <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
          </wje-accordion-item>
          <wje-accordion-item color="warning">
            <span slot="headline">Headline</span>
            <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
          </wje-accordion-item>
          <wje-accordion-item color="info">
            <span slot="headline">Headline</span>
            <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
          </wje-accordion-item>
        </wje-accordion>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- MULTIPLE -->

    <h3>Multiple</h3>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-accordion multiple index="3">
          <wje-accordion-item  color="info">
            <span slot="headline">Headline</span>
            <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
          </wje-accordion-item>
          <wje-accordion-item color="info">
            <span slot="headline">Headline</span>
            <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
          </wje-accordion-item>
          <wje-accordion-item color="info">
            <span slot="headline">Headline</span>
            <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
          </wje-accordion-item>
        </wje-accordion>
      </div>
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoAccordion extends WJElement {
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

customElements.get("demo-accordion") || window.customElements.define("demo-accordion", DemoAccordion);