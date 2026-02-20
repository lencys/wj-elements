const bool = (v) => {
  return v === "false" || v === "null" || v === "NaN" || v === "undefined" || v === "0" ? false : !!v;
};
function isValidFileType(file, acceptedFileTypes) {
  const mime = file.type.toLowerCase();
  const base = mime.split("/")[0];
  const ext = file.name.split(".").pop().toLowerCase();
  let accepted = Array.isArray(acceptedFileTypes) ? acceptedFileTypes : acceptedFileTypes.split(",").map((t) => t.trim().toLowerCase());
  if (accepted.length === 0) {
    throw new Error("acceptedFileTypes is empty");
  }
  for (let type of accepted) {
    type = type.toLowerCase();
    if (type === base + "/*") return true;
    if (type === mime) return true;
    if (type === ext) return true;
  }
  return false;
}
export {
  bool,
  isValidFileType
};
//# sourceMappingURL=utils.js.map
