// Import the necessary modules

class CodeSnippet extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // Method to generate and append code snippets
    generateSnippet(elementTemplate, elementDemoDocument) {
        const contentParts = elementTemplate.content.querySelectorAll(".content");
        const targetParts = elementDemoDocument.querySelectorAll(".html-snippet");

        contentParts.forEach((contentPart, index) => {
            const htmlString = contentPart.innerHTML.trim();
            console.log(contentPart.innerHTML);
            const escapedHTML = this.escapeHTML(contentPart.innerHTML);
            const highlightedHTML = this.highlightHTML(escapedHTML);

            const preElement = document.createElement('pre');
            preElement.classList.add("snippet");
            const codeElement = document.createElement('code');

            this.applyStyles(preElement, this.preStyles());
            this.applyStyles(codeElement, this.codeStyles());

            codeElement.innerHTML = highlightedHTML;
            preElement.appendChild(codeElement);

            // Create copy button
            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copy';
            copyButton.classList.add('copy-button');
            copyButton.addEventListener('click', () => {
                this.copyToClipboard(highlightedHTML);
            });

            // Append copy button to pre element
            preElement.appendChild(copyButton);

            targetParts[index].appendChild(preElement);
        });
    }

    // Method to escape HTML characters
    escapeHTML(htmlString) {
        return htmlString
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    

    // Method to add syntax highlighting to HTML tags, symbols, and text content
    highlightHTML(htmlString) {
        return htmlString
            .replace(/(&lt;\/?[\w-]+|&gt;|[^&<>]+)/g, match => {
                if (match.startsWith('&lt;') || match === '&gt;') {
                    if (match === '&gt;') {
                        return `<span class="symbol">${match}</span>`;
                    } else {
                        return `<span class="symbol">&lt;</span><span class="tag">${match.slice(4)}</span>`;
                    }
                } else {
                    return `<span class="text">${match}</span>`;
                }
            });
    }

    // Method to apply styles to an element
    applyStyles(element, styles) {
        Object.assign(element.style, styles);
    }

    // Styles for the pre element
    preStyles() {
        return {
            overflowX: "auto",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "4px",
            background: "#f9f9f9",
            maxWidth: "100%",
            fontSize: "1em",
            lineHeight: "1.7rem",
            position: "relative" // Ensure proper positioning for the copy button
        };
    }

    // Styles for the code element
    codeStyles() {
        return {
            fontFamily: "monospace",
            padding: "2px 4px",
            background: "#f9f9f9",
            borderRadius: "4px"
        };
    }

    // Method to copy the HTML code string to clipboard
// Method to copy the HTML code string to clipboard
copyToClipboard(htmlString) {
    // Convert the highlighted HTML back to its original form
    const formattedHTML = htmlString
        .replace(/<span class="symbol">&lt;<\/span>/g, "<")
        .replace(/<span class="symbol">&gt;<\/span>/g, ">")
        .replace(/<span class="symbol">/g, "&lt;")
        .replace(/<span class="tag">/g, "&lt;")
        .replace(/<span class="text">/g, "")
        .replace(/<\/span>/g, "");

    const tempElement = document.createElement('textarea');
    tempElement.value = formattedHTML;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    alert('Code copied to clipboard!');
}


}

// Define and apply styles for the syntax highlighting and copy button
const style = document.createElement('style');
style.textContent = `
    .snippet {
        position: relative;
        overflow: hidden; /* Ensures the copy button is fully visible on hover */
    }

    .copy-button {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px 10px;
        background-color: #bb11d9;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        opacity: 0; /* Initial opacity */
        transition: opacity 0.3s ease-in-out; /* Smooth transition effect */
    }

    .snippet:hover .copy-button {
        opacity: .3; /* Fully visible on hover */
    }

    .snippet:hover .copy-button:hover {
        opacity: 0.8; /* Slightly reduce opacity when hovering over the copy button */
    }

    .snippet .symbol {
        color: #bb11d9; 
    }
    .snippet .tag {
        color: #bb11d9;
    }
    .snippet .text {
        color: #000000; 
    }
    .snippet .content-text {
        color: #0000ff; 
    }
`;
document.head.appendChild(style);


customElements.define('code-snippet', CodeSnippet);
export default CodeSnippet;
