/**
 * Get the color based on the text
 * @param text
 * @param s
 * @param l
 * @returns {string}
 */
export function getHsl(text, s = 40, l = 65) {
  let str = text;
  let hash = 0;

  for (let i = 0; i < str?.length; i++) {
    hash = str.charCodeAt(i) + (hash * 31);
  }

  let h = hash % 360;

  return `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * Get the initials from the string
 * @param string
 * @param length
 * @returns {string}
 */
export function getInitials(string, length = 2) {
  let names = string.split(" ");
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1 && length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}