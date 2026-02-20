import { expect, fixture, aTimeout, oneEvent } from '@open-wc/testing';
import '../../dist/wje-tree.js';
import '../../dist/wje-tree-item.js';

describe('Tree Component', () => {
    it('should set and get the selection attribute correctly', async () => {
        const el = await fixture('<wje-tree selection="multiple"></wje-tree>');
        expect(el.selection).to.equal('multiple');
        el.selection = 'single';
        expect(el.selection).to.equal('single');
    });

    it('should default to single selection mode if no selection attribute is set', async () => {
        const el = await fixture('<wje-tree></wje-tree>');
        expect(el.selection).to.equal('single');
    });

    it('should set ARIA role and multiselectable on host', async () => {
        const el = await fixture('<wje-tree selection="multiple"></wje-tree>');
        await el.updateComplete;

        expect(el.getAttribute('role')).to.equal('tree');
        expect(el.getAttribute('aria-multiselectable')).to.equal('true');
    });

    it('should call beforeDraw method and update tree items selection state', async () => {
        const el = await fixture('<wje-tree selection="multiple"></wje-tree>');
        const item = document.createElement('wje-tree-item');
        el.appendChild(item);
        el.beforeDraw();
        expect(item.selection).to.equal('multiple');
    });

    it('should handle click event and select the clicked item in single selection mode', async () => {
        const el = await fixture('<wje-tree selection="single"></wje-tree>');
        const item1 = document.createElement('wje-tree-item');
        const item2 = document.createElement('wje-tree-item');
        el.appendChild(item1);
        el.appendChild(item2);
        el.handleClick({ target: item1, composedPath: () => [] });
        expect(item1.selected).to.be.true;
        expect(item2.selected).to.be.false;
    });

    it('should handle click event and toggle the clicked item in multiple selection mode', async () => {
        const el = await fixture('<wje-tree selection="multiple"></wje-tree>');
        const item1 = await fixture('<wje-tree-item></wje-tree-item>');
        const item2 = await fixture('<wje-tree-item></wje-tree-item>');
        el.appendChild(item1);
        el.appendChild(item2);
        el.handleClick({ target: item1, composedPath: () => [] });
        expect(item1.selected).to.be.true;
        el.handleClick({ target: item1, composedPath: () => [] });
        expect(item1.selected).to.be.false;
    });

    it('should propagate state downwards to child items', async () => {
        const el = await fixture('<wje-tree selection="multiple"></wje-tree>');
        const parentItem = document.createElement('wje-tree-item');
        const childItem = document.createElement('wje-tree-item');
        parentItem.appendChild(childItem);
        el.appendChild(parentItem);
        parentItem.selected = true;
        el.propagateStateDownwards(parentItem);
        expect(childItem.selected).to.be.true;
    });

    it('should update parent state based on child items', async () => {
        const el = await fixture('<wje-tree selection="multiple"></wje-tree>');
        const parentItem = document.createElement('wje-tree-item');
        const childItem1 = document.createElement('wje-tree-item');
        const childItem2 = document.createElement('wje-tree-item');
        parentItem.appendChild(childItem1);
        parentItem.appendChild(childItem2);
        el.appendChild(parentItem);
        childItem1.selected = true;
        el.updateParentState(parentItem);
        expect(parentItem.indeterminate).to.be.true;
        childItem2.selected = true;
        el.updateParentState(parentItem);
        expect(parentItem.selected).to.be.true;
    });
});
