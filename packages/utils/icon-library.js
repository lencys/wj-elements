import { getBasePath } from "./base-path.js";

let registry = [];

registerIconLibrary("default", {
  resolver: (name, style) => getBasePath(`assets/img/icons/${style}/${name}.svg`)
});

export function getIconLibrary(name) {
  return registry.find(lib => lib.name === name);
}

export function registerIconLibrary(name, options) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver,
  });
}

export function unregisterIconLibrary(name) {
  registry = registry.filter(lib => lib.name !== name);
}