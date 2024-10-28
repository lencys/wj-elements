import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import '../../dist/wje-button.js';

describe('my-first-test', () => {
  it('works', async () => {
    const el = await fixture(html` <wje-button>Button Label</wje-button> `);
    expect(el).to.exist; // Overenie, že element bol správne vytvorený
  });

  it('renders a button', async () => {
    const el = await fixture(html` <wje-button>Button Label</wje-button> `);
    expect(el).to.be.an.instanceof(HTMLElement);
  });

  it('has correct default label', async () => {
    const el = await fixture(html` <wje-button>Click me</wje-button> `);
    expect(el.textContent.trim()).to.equal('Click me');
  });

  it('should render as a <button>', async () => {
    const el = await fixture(html` <wje-button>Button Label</wje-button> `);
    expect(el.shadowRoot.querySelector('button')).to.exist;
    expect(el.shadowRoot.querySelector('a')).not.to.exist;
  });

  it('should render as an <a>', async () => {
    const el = await fixture(html` <wje-button href="some/path">Button Label</wje-button> `);
    expect(el.shadowRoot.querySelector('a')).to.exist;
    expect(el.shadowRoot.querySelector('button')).not.to.exist;
  });

  // it('should have a caret present', async () => {
  //   const el = await fixture(html` <wje-button caret>Button Label</wje-button> `);
  //   expect(el.shadowRoot.querySelector('[part~="caret"]')).to.exist;
  // });
});