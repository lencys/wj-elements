import { expect, fixture, aTimeout, oneEvent } from '@open-wc/testing';
import '../../dist/wje-tree.js';
import '../../dist/wje-tree-item.js';

describe('Tree Item Component', () => {
  it('should set and get the expanded attribute correctly', async () => {
    const el = await fixture('<wje-tree-item></wje-tree-item>');
    el.expanded = true;
    expect(el.expanded).to.be.true;
    el.expanded = false;
    expect(el.expanded).to.be.false;
  });

  it('should set and get the selected attribute correctly', async () => {
    const el = await fixture('<wje-tree-item></wje-tree-item>');
    el.selected = true;
    expect(el.selected).to.be.true;
    el.selected = false;
    expect(el.selected).to.be.false;
  });

  it('should set and get the indeterminate attribute correctly', async () => {
    const el = await fixture('<wje-tree-item></wje-tree-item>');
    el.indeterminate = true;
    expect(el.indeterminate).to.be.true;
    el.indeterminate = false;
    expect(el.indeterminate).to.be.false;
  });

  it('should toggle children visibility when toggleChildren is called', async () => {
    const el = await fixture('<wje-tree-item></wje-tree-item>');
    el.toggleChildren();
    expect(el.childrenElement.classList.contains('open')).to.be.true;
    el.toggleChildren();
    expect(el.childrenElement.classList.contains('open')).to.be.false;
  });

  it('should propagate state to child items', async () => {
    const parent = await fixture('<wje-tree></wje-tree>');
    const el = await fixture('<wje-tree-item></wje-tree-item>');
    const child = await fixture('<wje-tree-item></wje-tree-item>');
    parent.appendChild(el);
    el.appendChild(child);
    el.selected = true;
    parent.propagateStateDownwards(el);
    expect(child.selected).to.be.true;
  });

  it('should update parent state based on child items', async () => {
    const parent = await fixture('<wje-tree></wje-tree>');
    const el = await fixture('<wje-tree-item></wje-tree-item>');
    const child1 = await fixture('<wje-tree-item></wje-tree-item>');
    const child2 = await fixture('<wje-tree-item></wje-tree-item>');
    parent.appendChild(el);
    el.appendChild(child1);
    el.appendChild(child2);
    child1.selected = true;
    parent.updateParentState(el);
    expect(el.indeterminate).to.be.true;
    child2.selected = true;
    parent.updateParentState(el);
    expect(el.selected).to.be.true;
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
});