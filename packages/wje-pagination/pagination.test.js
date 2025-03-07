import { expect, fixture, aTimeout, oneEvent } from '@open-wc/testing';
import '../../dist/wje-pagination.js';
import { paginate } from './service/service.js';

describe('Pagination Component', () => {
  it('should set and get the page attribute correctly', async () => {
    const el = await fixture('<wje-pagination total-items="100" page="2"></wje-pagination>');

    expect(el.page).to.equal(2);
  });

  it('should set and get the maxPages attribute correctly', async () => {
    const el = await fixture('<wje-pagination total-items="100" max-pages="5"></wje-pagination>');

    expect(el.maxPages).to.equal(5);
  });

  it('should set and get the pageSize attribute correctly', async () => {
    const el = await fixture('<wje-pagination total-items="100" page-size="10"></wje-pagination>');

    expect(el.pageSize).to.equal(10);
  });

  it('should set and get the totalItems attribute correctly', async () => {
    const el = await fixture('<wje-pagination total-items="100"></wje-pagination>');

    expect(el.totalItems).to.equal(100);
  });

  it('should render the first button when showFirstButton is true', async () => {
    const el = await fixture('<wje-pagination total-items="100" show-first-button></wje-pagination>');

    const firstButton = el.shadowRoot.querySelector('wje-button[title="wj.pagination.first"]');
    expect(firstButton).to.not.be.null;
  });

  it('should not render the first button when showFirstButton is false', async () => {
    const el = await fixture('<wje-pagination total-items="100"></wje-pagination>');

    const firstButton = el.shadowRoot.querySelector('wje-button[title="wj.pagination.first"]');
    expect(firstButton).to.be.null;
  });

  it('should render the first button when showLastButton is true', async () => {
    const el = await fixture('<wje-pagination total-items="100" show-last-button></wje-pagination>');

    const button = el.shadowRoot.querySelector('wje-button[title="wj.pagination.last"]');
    expect(button).to.not.be.null;
  });

  it('should not render the first button when showLastButton is false', async () => {
    const el = await fixture('<wje-pagination total-items="100"></wje-pagination>');

    const button = el.shadowRoot.querySelector('wje-button[title="wj.pagination.last"]');
    expect(button).to.be.null;
  });

  it('should set and get the showInfo attribute correctly', async () => {
    const el = await fixture('<wje-pagination total-items="100" show-info></wje-pagination>');
    expect(el.showInfo).to.be.true;
  });

  it('should update pagination object when attributes change', async () => {
    const el = await fixture('<wje-pagination total-items="100" page="2" page-size="10" max-pages="5"></wje-pagination>');

    expect(el.paginateObj).to.deep.equal(paginate(100, 3, 10, 5));
  });

  it('should update paginateObj when totalItems changes', async () => {
    const el = await fixture('<wje-pagination total-items="100"></wje-pagination>');

    expect(el.paginateObj.totalItems).to.equal(100); // Skontrolujte správne hodnoty
  });


  it('should render shadowRoot and include pagination button Prev', async function() {
    const el = await fixture('<wje-pagination total-items="100"></wje-pagination>');
    expect(el.shadowRoot).to.not.be.undefined;

    const button = el.shadowRoot.querySelector('wje-button[title="wj.pagination.prev"]');
    expect(button).to.not.be.null;

    // Overte napríklad jeho disabled stav
    expect(button.hasAttribute('disabled')).to.be.true;
  });

  it('should render shadowRoot and include pagination button Next', async function() {
    const el = await fixture('<wje-pagination total-items="100"></wje-pagination>');
    expect(el.shadowRoot).to.not.be.undefined;

    const button = el.shadowRoot.querySelector('wje-button[title="wj.pagination.next"]');
    expect(button).to.not.be.null;

    expect(button.hasAttribute('disabled')).to.be.false;
  });


  it('should dispatch page-change event when page is changed', async function() {
    const el = await fixture('<wje-pagination page="1" total-items="100"></wje-pagination>');

    const listener = oneEvent(el, 'wje-pagination:page-change');
    const nextButton = el.shadowRoot.querySelector('wje-button[title="wj.pagination.next"]');

    if (nextButton) {
      nextButton.click();
    } else {
      throw new Error('Next button not found');
    }

    const event = await listener;

    expect(event.detail.currentPage).to.equal(2);
  });

});