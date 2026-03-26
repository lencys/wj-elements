import { expect } from '@open-wc/testing';
import { getBasePath, setBasePath } from '../../dist/base-path.js';

describe('base-path', () => {
  afterEach(() => {
    setBasePath('');
    document.querySelectorAll('script[data-base-path]').forEach((script) => script.remove());
  });

  it('uses the configured data-base-path when present', () => {
    const script = document.createElement('script');
    script.dataset.basePath = '/wje-elementy/';
    document.head.appendChild(script);

    expect(getBasePath('assets/img/icons/outline/check.svg')).to.equal(
      '/wje-elementy/assets/img/icons/outline/check.svg'
    );
  });

  it('falls back to the current module directory when data-base-path is missing', () => {
    const resolvedPath = getBasePath('assets/img/icons/outline/check.svg');

    expect(resolvedPath).to.match(/\/dist\/assets\/img\/icons\/outline\/check\.svg$/);
  });
});
