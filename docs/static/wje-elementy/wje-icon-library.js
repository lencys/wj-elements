import { getBasePath } from "./base-path.js";
let registry = [];
registerIconLibrary("default", {
  resolver: (name, style) => getBasePath(`assets/img/icons/${style}/${name}.svg`)
});
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}
function registerIconLibrary(name, options) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver
  });
}
function unregisterIconLibrary(name) {
  registry = registry.filter((lib) => lib.name !== name);
}
export {
  getIconLibrary,
  registerIconLibrary,
  unregisterIconLibrary
};
//# sourceMappingURL=wje-icon-library.js.map
