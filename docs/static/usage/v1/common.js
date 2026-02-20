
/**
 * Configure default asset base path for wj-elements demos.
 * This is equivalent to calling `setBasePath(...)` before components initialize.
 */
(() => {
  const DEFAULT_WJE_BASE_PATH = '/wje-elementy/';
  const existing = document.querySelector('script[data-base-path]');

  if (!existing) {
    const basePathScript = document.createElement('script');
    basePathScript.setAttribute('data-base-path', DEFAULT_WJE_BASE_PATH);
    document.head.prepend(basePathScript);
  }

  // Explicit equivalent of `setBasePath("/dist/")` used in demo app.
  import(`${DEFAULT_WJE_BASE_PATH}base-path.js`)
    .then(({ setBasePath }) => setBasePath(DEFAULT_WJE_BASE_PATH))
    .catch(() => {
      // If base-path module fails to load, `data-base-path` fallback is still in place.
    });
})();

/**
 * Wait for the initial HTML document to be
 * loaded and parsed before adding the message
 * listener. Otherwise, it is possible that the message
 * listener will fire before the body is ready.
 */

window.translations = new Map();

window.addEventListener('DOMContentLoaded', () => {
  /**
   * The parent Playground component will
   * dispatch messages whenever the theme on
   * the Ionic Docs website has changed so that
   * the demos loaded in iframes can match the
   * docs website theme.
   */

  window.addEventListener('message', (ev) => {
    const { data } = ev;

    if (data.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });

  /**
   * Monkey-patch the console methods so we can dispatch
   * events when they're called, allowing the data to be
   * captured by the playground's console UI.
   */
  const _log = console.log,
    _warn = console.warn,
    _error = console.error;

  const dispatchConsoleEvent = (type, arguments) => {
    window.dispatchEvent(
      new CustomEvent('console', {
        detail: {
          type,
          message: Object.values(arguments).join(' '),
        },
      })
    );
  };

  console.log = function () {
    dispatchConsoleEvent('log', arguments);
    return _log.apply(console, arguments);
  };

  console.warn = function () {
    dispatchConsoleEvent('warning', arguments);
    return _warn.apply(console, arguments);
  };

  console.error = function () {
    dispatchConsoleEvent('error', arguments);
    return _error.apply(console, arguments);
  };

  /**
   * The Playground needs to wait for the message listener
   * to be created before sending any messages, otherwise
   * they will be lost. Once the listener is done, fire
   * the demoReady event. In the event that the Playground's
   * useEffect hook fires before the message listener is created,
   * the Playground component will wait for the demoReady event
   * before proceeding.
   *
   * We also set window.demoReady in the event that the
   * useEffect hook fires after the message listener is
   * already created so that it does not wait on an event
   * that was already fired.
   */
  const ev = new CustomEvent('demoReady');
  window.dispatchEvent(ev);

  window.demoReady = true;
});
