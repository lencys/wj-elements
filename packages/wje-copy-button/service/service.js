/**
 * Create a node with the text content.
 * @param text
 * @returns {Element}
 */
function createNode(text) {
    const node = document.createElement("pre")
    node.style.width = "1px"
    node.style.height = "1px"
    node.style.position = "fixed"
    node.style.top = "5px"
    node.textContent = text
    return node
}

/**
 * Copy the node to the clipboard.
 * @param node
 * @returns {Promise<never>|Promise<void>}
 */
export function copyNode(node) {
    if ("clipboard" in navigator) {
      return navigator.clipboard.writeText(node.textContent || "")
    }

    const selection = getSelection(); // Firefox return null
    if (selection === null) {
      return Promise.reject(new Error())
    }

    selection.removeAllRanges()

    const range = document.createRange()
    range.selectNodeContents(node)
    selection.addRange(range)

    // document.execCommand("copy")
    selection.removeAllRanges()
    return Promise.resolve()
}

/**
 * Copy the text to the clipboard.
 * @param text
 * @returns {Promise<never>|Promise<void>}
 */
export function copyText(text) {
    if ("clipboard" in navigator) {
      return navigator.clipboard.writeText(text)
    }

    const body = document.body
    if (!body) {
      return Promise.reject(new Error())
    }

    const node = createNode(text);
    body.appendChild(node);
    copyNode(node);
    body.removeChild(node);
    return Promise.resolve();
}
