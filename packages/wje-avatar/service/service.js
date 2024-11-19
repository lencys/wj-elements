/**
 * Generates an HSL color value based on the input text.
 * @param {string} text The input text to generate the HSL color.
 * @param {number} [s] The saturation value (in percentage) for the HSL color.
 * @param {number} [l] The lightness value (in percentage) for the HSL color.
 * @returns {string} - The HSL color string in the format `hsl(h, s%, l%)`.
 * @description
 * This function computes a hash from the input text and uses it to generate
 * a hue value. The hue is combined with the provided saturation and lightness
 * values to create an HSL color. This can be useful for consistently assigning
 * colors based on text input, such as for avatars or tags.
 * @example
 * // Returns 'hsl(180, 40%, 65%)'
 * getHsl('example');
 * @example
 * // Returns 'hsl(300, 50%, 70%)'
 * getHsl('test', 50, 70);
 */
export function getHsl(text, s = 40, l = 65) {
  let str = text;
  let hash = 0;

  for (let i = 0; i < str?.length; i++) {
    hash = str.charCodeAt(i) + hash * 31;
  }

  let h = hash % 360;

  return `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * Generates initials from a given string.
 * @param {string} string The input string, typically a full name.
 * @param {number} [length] The desired number of initials (default is 2).
 * @returns {string} - The generated initials in uppercase.
 * @description
 * This function takes a string, splits it by spaces, and generates initials.
 * It always includes the first character of the first word. If the input string
 * contains more than one word and the `length` parameter is greater than 1, it
 * also includes the first character of the last word.
 * @example
 * // Returns 'JD'
 * getInitials('John Doe');
 * @example
 * // Returns 'J'
 * getInitials('John');
 * @example
 * // Returns 'JM'
 * getInitials('John Michael Doe', 2);
 */
export function getInitials(string, length = 2) {
  let names = string.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1 && length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}
