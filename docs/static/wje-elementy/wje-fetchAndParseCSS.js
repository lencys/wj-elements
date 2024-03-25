let o = [];
function i(n) {
  const t = /@keyframes\s+([\w-]+)\s*{([\s\S]+?})\s*}/g;
  let r, e = [];
  for (; (r = t.exec(n)) !== null; ) {
    let s = r[1], a = r[2].trim(), f = l(a);
    e.push({ name: s, keyframes: f });
  }
  return e;
}
function l(n) {
  const t = /([\d%]+)\s*{([\s\S]+?)}/g;
  let r, e = [];
  for (; (r = t.exec(n)) !== null; ) {
    let s = parseFloat(r[1]) / 100, a = c(r[2]), f = {
      offset: s,
      ...a
    };
    e.push(f);
  }
  return e.sort((s, a) => s.offset - a.offset), e;
}
function c(n) {
  const t = {};
  return n.split(";").forEach((r) => {
    const [e, s] = r.split(":").map((a) => a.trim());
    e && s && (e === "animation-timing-function" ? t.easing = s : t[e] = s);
  }), t;
}
async function m(n) {
  try {
    return o.length > 0 || (o = i(n)), o;
  } catch (t) {
    console.error("Error:", t);
  }
}
export {
  o as animations,
  m as fetchAndParseCSS
};
