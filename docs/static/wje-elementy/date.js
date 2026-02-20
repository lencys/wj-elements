function formatDate(input, format) {
  let date;
  if (typeof input === "string") {
    date = new Date(input);
  } else if (typeof input === "number") {
    date = new Date(input);
  } else if (input instanceof Date) {
    date = input;
  } else {
    throw new Error("Invalid date input");
  }
  const map = {
    yyyy: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    // Mesiace sú indexované od 0
    dd: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
    MMMM: date.toLocaleString("en-US", { month: "long" }),
    // Full month name
    MMM: date.toLocaleString("en-US", { month: "short" })
    // Short month name
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss|MMMM|MMM/g, (matched) => map[matched]);
}
function toSafeDate(iso) {
  const timeOnlyRegex = /^\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(Z)?$/;
  if (timeOnlyRegex.test(iso)) {
    let cleanTime = iso.replace(/Z$/, "");
    let [h, m, s = "00.000"] = cleanTime.split(":");
    if (!s.includes(".")) {
      s = `${s}.000`;
    }
    return `1970-01-01T${h}:${m}:${s}Z`;
  }
  return iso;
}
export {
  formatDate,
  toSafeDate
};
//# sourceMappingURL=date.js.map
