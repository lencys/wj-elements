window.isFirefox = false;
window.isChrome = true;

window.WjImport = async function (link) {
  if (navigator.userAgent.indexOf('Chrome')) {
    const cssModule = await import(link, {
      assert: {
        type: 'css',
      },
    });

    if (this.document) {
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, cssModule.default];
    } else {
      // eslint-disable-next-line no-unused-expressions
      this.shadowRoot &&
        (this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, cssModule.default]);
    }
  } else {
    const cssModule = await import(link);

    if (this.document) {
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, cssModule];
    } else {
      // eslint-disable-next-line no-unused-expressions
      this.shadowRoot && (this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, cssModule]);
    }
  }
};
