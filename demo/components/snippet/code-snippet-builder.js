class CodeSnippet extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    generateSnippet(elementTemplate, elementDemoDocument, externalJsContent = '') {
        const contentParts = elementTemplate.content.querySelectorAll(".content");
        const targetParts = elementDemoDocument.querySelectorAll(".html-snippet");

        contentParts.forEach((contentPart, index) => {
            const content = contentPart.innerHTML.trim();
            let highlightedContent;
            const formattedHTML = this.formatHTML(content);
            highlightedContent = this.highlightHTML(this.escapeHTML(formattedHTML));

            const preElement = document.createElement('pre');
            preElement.classList.add("snippet");
            const codeElement = document.createElement('code');

            this.applyStyles(preElement, this.preStyles());
            this.applyStyles(codeElement, this.codeStyles());

            codeElement.innerHTML = highlightedContent;
            preElement.appendChild(codeElement);

            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copy';
            copyButton.classList.add('copy-button');
            copyButton.addEventListener('click', () => {
                this.copyToClipboard(highlightedContent);
            });

            preElement.appendChild(copyButton);

            targetParts[index]?.appendChild?.(preElement);
        });
    }

    detectContentType(contentPart) {
        const jsKeywords = ["function", "const", "let", "var", "if", "else", "for", "while"];
        const contentText = contentPart.textContent.trim();
        return jsKeywords.some(keyword => contentText.includes(keyword));
    }

    detectCSS(contentPart) {
        const cssKeywords = ["font", "color", "background", "margin", "padding", "border", "width", "height", "display", "flex", "position", "top", "right", "bottom", "left"];
        const contentText = contentPart.textContent.trim();
        return cssKeywords.some(keyword => contentText.includes(keyword));
    }

    formatHTML(htmlString) {
        const formattedHTML = htmlString
            .replace(/>\s*</g, '>\n<')
            .replace(/\s*[\r\n]+\s*/g, '\n')
            .replace(/^\s+|\s+$/g, '')
            .split('\n')
            .map((line, index, arr) => {
                let indentSize = 0;
                if (line.match(/^<\/[^>]+>/)) {
                    indentSize--;
                }
                indentSize += arr.slice(0, index).reduce((acc, line) => {
                    if (line.match(/<[^/!][^>]*[^/]>$/)) acc++;
                    if (line.match(/^<\/[^>]+>/)) acc--;
                    return acc;
                }, 0);
                return ' '.repeat(indentSize * 2) + line;
            })
            .join('\n');
        return formattedHTML;
    }

    escapeHTML(htmlString) {
        return htmlString
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    highlightHTML(htmlString) {
        return htmlString
            .replace(/(&lt;\/?[\w-]+|&gt;|&lt;!--|--&gt;|[\w-]+="[^"]*"|[^&<>]+)/g, match => {
                if (match.startsWith('&lt;!--') || match === '--&gt;') {
                    return `<span class="comment">${match}</span>`;
                } else if (match.startsWith('&lt;') || match === '&gt;') {
                    if (match === '&gt;') {
                        return `<span class="symbol">${match}</span>`;
                    } else {
                        return `<span class="symbol">&lt;</span><span class="tag">${match.slice(4)}</span>`;
                    }
                } else if (/[\w-]+="[^"]*"/.test(match)) {
                    return match.replace(/([\w-]+)="([^"]*)"/g, '<span class="attribute">$1</span>="<span class="value">$2</span>"');
                } else {
                    return `<span class="text">${match}</span>`;
                }
            });
    }

    applyStyles(element, styles) {
        Object.assign(element.style, styles);
    }

    preStyles() {
        return {
            overflowX: "auto",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            padding: "10px",
            border: "1px solid hsla(240, 6%, 90%, 1);",
            borderRadius: "4px",
            background: "#f9f9f9",
            maxWidth: "100%",
            fontSize: "1em",
            lineHeight: "1.7rem",
            position: "relative"
        };
    }

    codeStyles() {
        return {
            fontFamily: "monospace",
            padding: "2px 4px",
            background: "#f9f9f9",
            borderRadius: "4px"
        };
    }

    copyToClipboard(content) {
        const formattedContent = content
            .replace(/<span class="symbol">&lt;<\/span>/g, "<")
            .replace(/<span class="symbol">&gt;<\/span>/g, ">")
            .replace(/<span class="symbol">/g, "&lt;")
            .replace(/<span class="tag">/g, "&lt;")
            .replace(/<span class="text">/g, "")
            .replace(/<\/span>/g, "")
            .replace(/&lt;/g, "")
            .replace(/<span class="attribute">/g, "")
            .replace(/<span class="value">/g, "");

        const tempElement = document.createElement('textarea');
        tempElement.value = formattedContent;
        document.body.appendChild(tempElement);
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
    }
}

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
    .snippet .attribute {
        color: #d981bb; 
    }
    .snippet .value {
        color: #11bbd9;
    }
    .snippet .text {
        color: #000000; 
    }
    .snippet .comment {
        color: #999999; 
    }
`;
document.head.appendChild(style);

customElements.define('code-snippet', CodeSnippet);
export default CodeSnippet;
