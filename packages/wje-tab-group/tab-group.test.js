// javascript
import sinon from 'sinon';
import { expect, fixture, html } from '@open-wc/testing';

// 1\) Stub ResizeObserver BEFORE importing the components
let resizeCallback;

class TestResizeObserver {
    constructor(cb) {
        resizeCallback = cb;
    }
    observe() {}
    disconnect() {}
}

window.ResizeObserver = TestResizeObserver;

// 2\) Now import bundles (they will see the stubbed ResizeObserver)
import '../../dist/wje-element.js';
import '../../dist/wje-tab-group.js';

const TabGroup = customElements.get('wje-tab-group');

describe('Tab group', () => {
    // 3\) Keep these stubs for the whole suite
    before(() => {
        sinon.stub(TabGroup.prototype, 'afterDraw').callsFake(() => {});
        sinon.stub(TabGroup.prototype, 'setActiveTab').callsFake(() => {});
        sinon.stub(TabGroup.prototype, 'removeActiveTab').callsFake(() => {});
    });

    // do NOT sinon.restore() in afterEach, or re\-stub in beforeEach instead
    after(() => {
        sinon.restore();
    });

    async function createGroup({ navWidth = 600 } = {}) {
        const el = await fixture(html`
            <wje-tab-group variant="top">
                <wje-tab panel="a" active>Tab A</wje-tab>
                <wje-tab panel="b">Tab B</wje-tab>
                <wje-tab panel="c">Tab C</wje-tab>
                <wje-tab panel="d">Tab D</wje-tab>
            </wje-tab-group>
        `);

        const nav = el.nav;

        sinon.stub(nav, 'getBoundingClientRect').returns({
            width: navWidth,
            right: navWidth,
        });

        el.querySelectorAll('wje-tab').forEach(tab => {
            sinon.stub(tab, 'getBoundingClientRect').returns({
                width: 150,
                right: 0,
            });
        });

        sinon.stub(el.moreDropdown, 'offsetWidth').value(48);

        el.initTabMetrics();

        // explícitne simuluj "resize", ak sa logika naň spolieha
        if (typeof resizeCallback === 'function') {
            resizeCallback();
        }

        await new Promise(resolve => requestAnimationFrame(resolve));

        return el;
    }

    it('does not overflow when nav is wide enough', async () => {
        const el = await createGroup({ navWidth: 700 });

        el.checkOverflow();

        const moreTabs = el.querySelectorAll('wje-tab[slot="more"]');
        expect(moreTabs.length).to.equal(0);
        expect(el.moreDropdown.hidden).to.equal(true);
    });

    it('moves overflowing tabs into more slot', async () => {
        const el = await createGroup({ navWidth: 400 });

        el.checkOverflow();

        const navTabs = el.querySelectorAll('wje-tab[slot="nav"]');
        const moreTabs = el.querySelectorAll('wje-tab[slot="more"]');

        expect(navTabs.length).to.be.greaterThan(0);
        expect(moreTabs.length).to.be.greaterThan(0);
        expect(el.moreDropdown.hidden).to.equal(false);
    });

    it('is stable when checkOverflow is called multiple times', async () => {
        const el = await createGroup({ navWidth: 400 });

        el.checkOverflow();
        const firstState = Array.from(el.querySelectorAll('wje-tab')).map(
          t => t.getAttribute('slot')
        );

        el.checkOverflow();
        el.checkOverflow();

        const secondState = Array.from(el.querySelectorAll('wje-tab')).map(
          t => t.getAttribute('slot')
        );

        expect(secondState).to.deep.equal(firstState);
    });

    it('recalculates overflow when available width changes', async () => {
        const el = await createGroup({ navWidth: 700 });

        el.checkOverflow();
        expect(el.querySelectorAll('wje-tab[slot="more"]').length).to.equal(0);

        el.nav.getBoundingClientRect.returns({ width: 400, right: 400 });
        el._lastNavWidth = 700;

        el.checkOverflow();

        expect(el.querySelectorAll('wje-tab[slot="more"]').length).to.be.greaterThan(0);
        expect(el.moreDropdown.hidden).to.equal(false);
    });

    it('does not overflow when tabs exactly fit available width (edge case)', async () => {
        // 4 tabs × 150 = 600, more = 48 → presne sa zmestia pri 648
        const el = await createGroup({ navWidth: 648 });

        el.checkOverflow();

        expect(el.querySelectorAll('wje-tab[slot="more"]').length).to.equal(0);
        expect(el.moreDropdown.hidden).to.equal(true);
    });

    it('never overflows when there is only one tab', async () => {
        const el = await createGroup({ navWidth: 50 });

        // odstráň ostatné taby
        el.querySelectorAll('wje-tab').forEach((tab, i) => {
            if (i > 0) tab.remove();
        });

        el.initTabMetrics();
        await new Promise(resolve => requestAnimationFrame(resolve));

        el.checkOverflow();

        expect(el.querySelectorAll('wje-tab[slot="more"]').length).to.equal(1);
        expect(el.moreDropdown.hidden).to.equal(false);
    });

    it('moves all tabs to more slot when space is extremely small', async () => {
        const el = await createGroup({ navWidth: 50 });

        el.checkOverflow();

        const navTabs = el.querySelectorAll('wje-tab[slot="nav"]');
        const moreTabs = el.querySelectorAll('wje-tab[slot="more"]');

        expect(navTabs.length).to.equal(0);
        expect(moreTabs.length).to.be.greaterThan(0);
        expect(el.moreDropdown.hidden).to.equal(false);
    });

    it('preserves tab order between nav and more slots', async () => {
        const el = await createGroup({ navWidth: 400 });

        el.checkOverflow();

        const allTabs = Array.from(el.querySelectorAll('wje-tab'));
        const panelsInDomOrder = allTabs.map(t => t.getAttribute('panel'));

        const navTabs = Array.from(el.querySelectorAll('wje-tab[slot="nav"]'));
        const moreTabs = Array.from(el.querySelectorAll('wje-tab[slot="more"]'));

        const panelsAfterSplit = [...navTabs, ...moreTabs].map(
            t => t.getAttribute('panel')
        );

        expect(panelsAfterSplit).to.deep.equal(panelsInDomOrder);
    });

    it('handles repeated initTabMetrics calls safely', async () => {
        const el = await createGroup({ navWidth: 400 });

        const firstMetrics = el._tabMetrics.slice();

        el.initTabMetrics();
        await new Promise(resolve => requestAnimationFrame(resolve));

        expect(el._tabMetrics.length).to.equal(firstMetrics.length);
    });
});
