import '../../dist/wje-element.js';
import { expect } from '@open-wc/testing';
import '../../dist/wje-tab.js';

describe('<wje-tab>', () => {
    it('does not throw in afterDraw when detached from DOM', () => {
        const el = document.createElement('wje-tab');
        expect(() => el.afterDraw()).to.not.throw();
        el.beforeDisconnect();
    });
});
