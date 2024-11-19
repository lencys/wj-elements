import WJElement from '../../dist/wje-element.js';

class Application extends WJElement {
  constructor() {
    super();
  }

  draw() {
    let fragment = document.createDocumentFragment();

    let element = document.createElement('slot');

    fragment.appendChild(element);

    return fragment;
  }
}

customElements.define('wje-application', Application);
