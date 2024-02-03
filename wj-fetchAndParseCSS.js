let o = [];
function f(n) {
  const t = /@keyframes\s+([\w-]+)\s*{([\s\S]+?})\s*}/g;
  let e, s = [];
  for (; (e = t.exec(n)) !== null; ) {
    let r = e[1], a = e[2].trim(), i = l(a);
    s.push({ name: r, keyframes: i });
  }
  return s;
}
function l(n) {
  const t = /([\d%]+)\s*{([\s\S]+?)}/g;
  let e, s = [];
  for (; (e = t.exec(n)) !== null; ) {
    let r = parseFloat(e[1]) / 100, a = c(e[2]), i = {
      offset: r,
      ...a
    };
    s.push(i);
  }
  return s.sort((r, a) => r.offset - a.offset), s;
}
function c(n) {
  const t = {};
  return n.split(";").forEach((e) => {
    const [s, r] = e.split(":").map((a) => a.trim());
    s && r && (s === "animation-timing-function" ? t.easing = r : t[s] = r);
  }), t;
}
async function m(n) {
  try {
    if (o.length > 0)
      return o;
    const e = await (await fetch(n)).text();
    return o = f(e), o;
  } catch (t) {
    console.error("Error:", t);
  }
}
export {
  o as animations,
  m as fetchAndParseCSS
};
