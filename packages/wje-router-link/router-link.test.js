import '../../dist/wje-element.js';
import { expect } from '@open-wc/testing';
import '../../dist/wje-router-link.js';

describe('<wje-router-link>', () => {
    it('does not throw in afterDraw when detached from DOM', () => {
        const el = document.createElement('wje-router-link');
        expect(() => el.afterDraw()).to.not.throw();
        el.beforeDisconnect();
    });
});
