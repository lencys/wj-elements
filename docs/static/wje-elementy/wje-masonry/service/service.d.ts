/**
 * Returns a number attribute from an element.
 * @param $elem
 * @param name
 * @param defaultValue
 * @returns {string|number}
 */
export function getNumberAttribute($elem: any, name: any, defaultValue: any): string | number;
/**
 * Returns the amount of cols that the masonry grid should have.
 * @param totalWidth
 * @param cols
 * @param maxColWidth
 */
export function getColCount(totalWidth: any, cols: any, maxColWidth: any): any;
/**
 * Debounces a function.
 * @param cb
 * @param ms
 * @param id
 */
export function debounce(cb: any, ms: any, id: any): void;
/**
 * Returns the index of the column with the smallest height.
 * @param colHeights
 */
export function findSmallestColIndex(colHeights: any): number;
export const DEFAULT_MAX_COL_WIDTH: 500;
export const DEFAULT_DEBOUNCE_MS: 300;
export const COL_COUNT_CSS_VAR_NAME: "--wje-masonry-layout-col-count";
export const GAP_CSS_VAR_NAME: "--wje-masonry-layout-gap";
export const ELEMENT_NODE_TYPE: 1;
