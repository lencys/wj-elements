let basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath(appendedPath = "") {
  if (!basePath) {
    const scripts = [...document.getElementsByTagName("script")];
    const basePathScript = scripts.find((script) => script.hasAttribute("data-base-path"));
    if (basePathScript) {
      setBasePath(basePathScript.dataset.basePath || "");
    } else {
      const path = "";
      setBasePath(path.split("/").slice(0, -1).join("/"));
    }
  }
  const subPath = appendedPath.replace(/^\//, "");
  return basePath.replace(/\/$/, "") + (appendedPath ? "/" + subPath : "");
}
export {
  getBasePath,
  setBasePath
};
//# sourceMappingURL=base-path.js.map
