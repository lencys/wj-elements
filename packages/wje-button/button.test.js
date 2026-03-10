import '../../dist/wje-element.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../../dist/wje-button.js';

describe('my-first-test', () => {
    // Testy pre overenie, že element bol správne vytvorený
    it('works', async () => {
        const el = await fixture(html`
      <wje-button>Button Label</wje-button> `);
        expect(el).to.exist;
    });

    // Test pre overenie, že element je typu HTMLElement
    it('renders a button', async () => {
        const el = await fixture(html`
      <wje-button>Button Label</wje-button> `);
        expect(el).to.be.an.instanceof(HTMLElement);
    });

    // Test pre overenie, že element má správny defaultný label
    it('has correct default label', async () => {
        const el = await fixture(html`
      <wje-button>Click me</wje-button> `);
        expect(el.textContent.trim()).to.equal('Click me');
    });

    // Test pre overenie, že element vykreslí v shadowRoot <button>
    it('should render as a <button>', async () => {
        const el = await fixture(html`
      <wje-button>Button Label</wje-button> `);
        expect(el.shadowRoot.querySelector('button')).to.exist;
        expect(el.shadowRoot.querySelector('a')).not.to.exist;
    });

    // Test pre overenie, že element vykreslí v shadowRoot <a>
    it('should render as an <a>', async () => {
        const el = await fixture(html`
      <wje-button href="some/path">Button Label</wje-button> `);
        expect(el.shadowRoot.querySelector('a')).to.exist;
        expect(el.shadowRoot.querySelector('button')).not.to.exist;
    });

    // Test pre overenie, že element vykresli v light DOM caret
    it('should have a caret present', async () => {
        const el = await fixture(html`
      <wje-button caret>Button Label</wje-button> `);
        expect(el.querySelector('[slot="caret"]')).to.exist;
    });

    // Test pridá triedu wje-color-default, ak nie je špecifikovaná farba
    it('should add wje-color-default class if no color is specified', async () => {
        const el = await fixture(html`
      <wje-button>Button Label</wje-button> `);
        expect(el.shadowRoot.querySelector('.wje-color-default')).to.exist;
    });

    // Test pridá triedu wje-color-primary s určenou farbou
    it('should add wje-color class with specified color', async () => {
        const el = await fixture(html`
      <wje-button color="primary">Button Label</wje-button> `);
        expect(el.shadowRoot.querySelector('.wje-color-primary')).to.exist;
    });

    // Test na kontrolu či prida tooltip, ak je prítomný atribút tooltip
    it('should add tooltip if tooltip attribute is present', async () => {
        const el = await fixture(html`
      <wje-button tooltip="Tooltip text">Button Label</wje-button> `);
        expect(el.shadowRoot.querySelector('wje-tooltip')).to.exist;
        expect(el.shadowRoot.querySelector('wje-tooltip').getAttribute('content')).to.equal('Tooltip text');
    });

    // Mal by po kliknutí prepínať stavy, ak má hasToggle hodnotu true
    it('should toggle states when clicked if hasToggle is true', async () => {
        const el = await fixture(html`
      <wje-button><span slot="toggle">Toggle 1</span><span slot="toggle">Toggle 2</span></wje-button> `);
        el.hasToggle = true;
        await el.updateComplete;
        el.click();
        expect(el.getAttribute('value')).to.equal('off');
        el.click();
        expect(el.getAttribute('value')).to.equal('on');
    });

    it('keeps exactly one visible toggle node across rerenders', async () => {
        const el = await fixture(html`
      <wje-button toggle="off">
        <span slot="toggle">On</span>
        <span slot="toggle">Off</span>
      </wje-button>`);
        await el.updateComplete;

        const [onNode, offNode] = el.querySelectorAll('[slot="toggle"]');
        expect(onNode.classList.contains('show')).to.equal(false);
        expect(offNode.classList.contains('show')).to.equal(true);
        expect(el.getAttribute('value')).to.equal('off');

        el.click();
        await el.updateComplete;
        expect(onNode.classList.contains('show')).to.equal(true);
        expect(offNode.classList.contains('show')).to.equal(false);
        expect(el.getAttribute('value')).to.equal('on');

        el.click();
        await el.updateComplete;
        expect(onNode.classList.contains('show')).to.equal(false);
        expect(offNode.classList.contains('show')).to.equal(true);
        expect(el.getAttribute('value')).to.equal('off');
    });

    it('should set all default properties correctly', async () => {
        const el = await fixture(html` <wje-button>Button Label</wje-button> `);

        expect(el.color).to.equal('default');
        expect(el.caret).to.be.false;
        expect(el.active).to.be.false;
        expect(el.tooltip).to.be.false;
        expect(el.hasToggle).to.be.false;
        expect(el.dialog).to.be.null;
    });

    it('sets ARIA role and disabled state on host', async () => {
        const el = await fixture(html`<wje-button disabled>Button Label</wje-button>`);
        await el.updateComplete;

        expect(el.getAttribute('role')).to.equal('button');
        expect(el.getAttribute('aria-disabled')).to.equal('true');
    });

    it('sets ARIA pressed when toggle slots are used', async () => {
        const el = await fixture(html`
      <wje-button>
        <span slot="toggle">On</span>
        <span slot="toggle">Off</span>
      </wje-button>
    `);
        await el.updateComplete;

        expect(el.getAttribute('role')).to.equal('button');
        expect(el.getAttribute('aria-pressed')).to.equal('true');

        el.click();
        expect(el.getAttribute('aria-pressed')).to.equal('false');
    });
});

describe('Button events', () => {
    // Po kliknutí by sa mala odoslať vlastná udalosť dialog-open
    it('should dispatch custom event when dialog attribute is present and clicked', async () => {
        const el = await fixture(html` <wje-button dialog="dialog-open">Button Label</wje-button> `);
        const spy = sinon.spy();
        el.addEventListener('dialog-open', spy);
        el.click();
        expect(spy).to.have.been.calledOnce;
    });

    // Po kliknutí by sa mala odoslať vlastná udalosť wje-button:click
    it('should dispatch custom event when clicked', async () => {
        const el = await fixture(html` <wje-button>Button Label</wje-button> `);
        const spy = sinon.spy();
        el.addEventListener('wje-button:click', spy);
        el.click();
        expect(spy).to.have.been.calledOnce;
    });
});
