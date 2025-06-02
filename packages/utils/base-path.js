let basePath = '';

/**
 * Sets the base path for the application.
 * @param {string} path The base path to be set.
 * @returns {void} This function does not return anything.
 */
export function setBasePath(path) {
  basePath = path;
}

/**
 * Returns the base path of the application, optionally appending a specified relative path.
 * If the base path has not been set, it determines the base path from the first script element
 * with a `base-path` attribute or generates it based on the current script location.
 * @param {string} [appendedPath] The relative path to append to the base path. Defaults to an empty string.
 * @returns {string} The complete base path, with the appended relative path if specified.
 */
export function getBasePath(appendedPath = '') {
  if (!basePath) {
    const scripts = [...document.getElementsByTagName('script')];
    const basePathScript = scripts.find(script => script.hasAttribute('data-base-path'));

    if (basePathScript) {
      setBasePath(basePathScript.dataset.basePath  || '');
    } else {
      const path = '';

      setBasePath(path.split('/').slice(0, -1).join('/'));
    }
  }

  const subPath = appendedPath.replace(/^\//, '');

  return basePath.replace(/\/$/, '') + (appendedPath ? '/' + subPath : '');
}