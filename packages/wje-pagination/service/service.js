/**
 * Paginates items based on the total number of items, current page, page size, and maximum number of pages to display.
 * @param {number} totalItems The total number of items to paginate.
 * @param {number} [currentPage] The current page number (default is 1).
 * @param {number} [pageSize] The number of items per page (default is 10).
 * @param {number} [maxPages] The maximum number of pages to display in the pagination control (default is 5).
 * @returns {object} An object containing pagination details including total items, current page, page size, total pages, start/end page, start/end index, and the pages array.
 */
export function paginate(totalItems, currentPage = 1, pageSize = 10, maxPages = 5) {
    // Calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    // Ensure current page is within valid range
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage;
    let endPage;

    const pagesNearEnd = maxPages + 1; // Define how close to the end we switch back to 5 pages 4

    if (currentPage <= pagesNearEnd) {
        // If in the first 4 pages, show up to 5 pages
        startPage = 1;
        endPage = Math.min(pagesNearEnd + 1, totalPages); //5
    } else if (currentPage > totalPages - pagesNearEnd + 1) {
        // If within 4 pages from the end, show last 5 pages
        startPage = Math.max(totalPages - pagesNearEnd, 1); //4
        endPage = totalPages;
    } else {
        const halfPages = Math.floor(maxPages / 2);

        // Otherwise, only show 3 pages (current, previous, next)
        startPage = currentPage - halfPages;
        endPage = maxPages % 2 === 1 ? currentPage + halfPages : currentPage + halfPages - 1;
    }

    // Calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // Create an array of pages to display
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    // Return object with all pager properties (preserving original format)
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages,
    };
}
