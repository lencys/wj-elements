class CodeSnippet {
    constructor() {
    }

    generateSnippet(elementTemplate, elementDemoDocument, externalJsContent = '') {
        const playgrounds = elementDemoDocument.querySelectorAll(".playground");

        playgrounds.forEach((pg, index) => {
            const contentPart = pg.querySelector('.content');

            // Skontrolujte, či element .content existuje
            if (!contentPart) {
                console.warn(`No .content found in .playground at index ${index}`);
                return; // Prejsť na ďalší .playground
            }

            const content = contentPart.innerHTML.trim();
            let highlightedContent;

            // Uistite sa, že formátovanie a zvýraznenie funguje správne
            const formattedHTML = this.formatHTML(content);
            highlightedContent = this.highlightHTML(this.escapeHTML(formattedHTML));

            // Vytvorte <pre> a <code> elementy pre snippet
            const preElement = document.createElement('pre');
            preElement.classList.add("snippet");
            const codeElement = document.createElement('code');

            // Použitie preddefinovaných štýlov
            this.applyStyles(preElement, this.preStyles());
            this.applyStyles(codeElement, this.codeStyles());

            codeElement.innerHTML = highlightedContent;
            preElement.appendChild(codeElement);

            // Vytvorenie tlačidla kopírovania
            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copy';
            copyButton.classList.add('copy-button');
            copyButton.addEventListener('click', () => {
                this.copyToClipboard(highlightedContent);
            });

            preElement.appendChild(copyButton);

            // Vytvorenie a pripojenie elementu .html-snippet
            const htmlSnippet = document.createElement('div');
            htmlSnippet.classList.add('html-snippet');
            htmlSnippet.appendChild(preElement); // Použite appendChild bez ?. operátora

            // Vložte element .html-snippet za .playground
            pg.parentNode.insertBefore(htmlSnippet, pg.nextSibling);
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
        // Definujte pole tried, ktoré chcete odstrániť
        const classesToRemove = ['lazy-loaded-image', 'lazy', 'wje-placement', 'wje-bottom-start', 'wje-bottom-end', 'wje-top-start', 'wje-top-end', 'wje-left-start', 'wje-left-end', 'wje-right-start', 'wje-right-end', 'wje-menu-variant-context', 'fade', 'slide-up', 'undefined', 'parent-group', 'wje-col-3', 'wje-col-4', 'wje-col-8', 'wje-col-auto'];

        // Definujte pole atribútov, ktoré chcete odstrániť
        const attributesToRemove = ['active-class', 'tabindex', 'relative-time', 'style'];

        // Odstráňte všetky špecifikované triedy a prázdne tagy
        let cleanedHTML = htmlString;
        classesToRemove.forEach(className => {
            const regex = new RegExp(`class="([^"]*?)\\b${className}\\b([^"]*?)"`, 'g');
            cleanedHTML = cleanedHTML.replace(regex, (match, before, after) => {
                // Odstráňte konkrétnu triedu z atribútu class
                const updatedClasses = `${before} ${after}`.trim().replace(/\s+/g, ' '); // Spojí zvyšné triedy, ak nejaké sú
                // Ak po odstránení tried nezostali žiadne iné, odstráňte celý atribút class
                return updatedClasses ? `class="${updatedClasses}"` : '';
            });
        });

        // Odstráňte špecifikované atribúty s rôznymi hodnotami
        attributesToRemove.forEach(attribute => {
            const regex = new RegExp(`\\s*${attribute}="[^"]*"`, 'g');
            cleanedHTML = cleanedHTML.replace(regex, '');
        });

        // Odstráňte prázdne tagy (otvárací a uzatvárací tag na tom istom riadku bez obsahu)
        cleanedHTML = cleanedHTML.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '');

        // Odstráňte atribúty s prázdnymi hodnotami ako collapsible=""
        cleanedHTML = cleanedHTML.replace(/\s(\w+)=""/g, ' $1');

        // Odstráňte medzery pred uzatváracím znakom '>' v otváracích tagoch
        cleanedHTML = cleanedHTML.replace(/<(\w+)([^>]*)\s+>/g, '<$1$2>');

        // Rozdeľte tagy do riadkov
        const lines = cleanedHTML
          .replace(/ shadow="open"/g, '')  // Odstráňte shadow="open" atribút
          .replace(/>\s*</g, '>\n<')  // Pridajte novú čiaru medzi tagmi
          .replace(/\s*[\r\n]+\s*/g, '\n')  // Odstráňte prebytočné prázdne miesta
          .split('\n');

        // Upravte riadky tak, aby spojili prázdne tagy na jeden riadok
        const formattedLines = [];

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();

            // Spojíme otvárací a uzatvárací tag na jednom riadku, ak je to prázdny element
            if (line.match(/^<[^/!][^>]*>$/) && lines[i + 1] && lines[i + 1].trim().match(/^<\/[^>]+>$/)) {
                // Spojíme otvárací a uzatvárací tag do jedného riadku
                formattedLines.push(`${line}${lines[i + 1].trim()}`);
                i++; // Preskočte ďalší riadok, pretože sme ho už spracovali
            } else {
                formattedLines.push(line);
            }
        }

        // Pridajte zarážky k riadkom
        const indentedHTML = formattedLines
          .map((line, index, arr) => {
              let indentSize = 0;

              // Určte veľkosť zarážky na základe otvorených a zatvorených tagov
              if (line.match(/^<\/[^>]+>/)) {
                  indentSize--;
              }
              indentSize += arr.slice(0, index).reduce((acc, line) => {
                  if (line.match(/<[^/!][^>]*[^/]>$/)) acc++;
                  if (line.match(/^<\/[^>]+>/)) acc--;
                  return acc;
              }, 0);

              // Uistite sa, že indentSize nie je záporný
              indentSize = Math.max(indentSize, 0);

              return ' '.repeat(indentSize * 2) + line;
          })
          .join('\n');

        return indentedHTML;
    }

    // formatHTML(htmlString) {
    //     // Definujte pole tried, ktoré chcete odstrániť
    //     const classesToRemove = ['lazy-loaded-image', 'lazy', 'wje-placement', 'wje-bottom-start', 'wje-bottom-end', 'wje-top-start', 'wje-top-end', 'wje-left-start', 'wje-left-end', 'wje-right-start', 'wje-right-end', 'wje-tooltip', 'wje-tooltip-content', 'wje-tooltip-arrow', 'wje-tooltip-inner', 'wje-tooltip-placement', 'wje-tooltip-placement-top', 'wje-tooltip-placement-bottom', 'wje-tooltip-placement-left', 'wje-tooltip-placement-right', 'wje-tooltip-placement-top-start', 'wje-tooltip-placement-top-end', 'wje-tooltip-placement-bottom-start', 'wje-tooltip-placement-bottom-end', 'wje-tooltip-placement-left-start', 'wje-tooltip-placement-left-end', 'wje-tooltip-placement-right-start', 'wje-tooltip-placement-right-end', 'wje-tooltip-placement-arrow', 'wje-tooltip-placement-arrow-top', 'wje-tooltip-placement-arrow-bottom', 'wje-tooltip-placement-arrow-left', 'wje-tooltip-placement-arrow-right', 'wje-tooltip-placement-arrow-top-start', 'wje-tooltip-placement-arrow-top-end', 'wje-tooltip-placement-arrow-bottom-start', 'wje-tooltip-placement-arrow-bottom-end', 'wje-tooltip-placement-arrow-left-start', 'wje-tooltip-placement-arrow-left-end', 'wje-tooltip-placement-arrow-right-start', 'wje-tooltip-placement-arrow-right-end', 'wje-tooltip-placement-arrow-top-start', 'wje-tooltip-placement-arrow-top-end', 'wje-tooltip-placement-arrow-bottom-start', 'wje-tooltip-placement-arrow-bottom-end', 'wje-tooltip-placement-arrow-left-start', 'wje-tooltip-placement-arrow-left-end', 'wje-tooltip-placement-arrow-right-start', 'wje-tooltip-placement-arrow-right-end', 'wje-tooltip-placement-arrow-top-start', 'wje-tooltip-placement-arrow-top-end', 'wje-tooltip-placement-arrow-bottom-start', 'wje-tooltip-placement-arrow-bottom-end', 'wje-tooltip-placement-arrow-left-start', 'wje-tooltip-placement-arrow-left-end', 'wje-tooltip-placement-arrow-right-start', 'wje-tooltip-placement-arrow-right-end', 'wje-tooltip-placement-arrow-top-start', 'wje-tooltip-placement-arrow-top-end', 'wje-tooltip-placement-arrow-bottom-start', 'wje-tooltip-placement-arrow-bottom-end', 'wje-tooltip-placement-arrow-left-start', 'wje-tooltip-placement-arrow-left-end', 'wje-tooltip-placement-arrow-right-start', 'wje-tooltip-placement-arrow-right-end', 'wje-tooltip-placement-arrow-top-start', 'wje-menu-variant-context'];
    //
    //     // Odstráňte všetky špecifikované triedy
    //     let cleanedHTML = htmlString;
    //     classesToRemove.forEach(className => {
    //         const regex = new RegExp(`class="[^"]*?\\b${className}\\b[^"]*?"`, 'g');
    //         cleanedHTML = cleanedHTML.replace(regex, match => {
    //             // Odstráňte konkrétnu triedu z atribútu class
    //             const updatedClassAttr = match.replace(new RegExp(`\\b${className}\\b`, 'g'), '').trim();
    //             // Ak po odstránení tried nezostali žiadne iné, odstráňte celý atribút class
    //             return updatedClassAttr === 'class=""' ? '' : updatedClassAttr;
    //         });
    //     });
    //
    //     // Odstráňte prázdne tagy (otvárací a uzatvárací tag na tom istom riadku bez obsahu)
    //     cleanedHTML = cleanedHTML.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '');
    //
    //     // Rozdeľte tagy do riadkov
    //     const lines = cleanedHTML
    //       .replace(/ shadow="open"/g, '')  // Odstráňte shadow="open" atribút
    //       .replace(/>\s*</g, '>\n<')  // Pridajte novú čiaru medzi tagmi
    //       .replace(/\s*[\r\n]+\s*/g, '\n')  // Odstráňte prebytočné prázdne miesta
    //       .split('\n');
    //
    //     // Upravte riadky tak, aby spojili prázdne tagy na jeden riadok
    //     const formattedLines = [];
    //
    //     for (let i = 0; i < lines.length; i++) {
    //         let line = lines[i].trim();
    //
    //         // Spojíme otvárací a uzatvárací tag na jednom riadku, ak je to prázdny element
    //         if (line.match(/^<[^/!][^>]*>$/) && lines[i + 1] && lines[i + 1].trim().match(/^<\/[^>]+>$/)) {
    //             // Spojíme otvárací a uzatvárací tag do jedného riadku
    //             formattedLines.push(`${line}${lines[i + 1].trim()}`);
    //             i++; // Preskočte ďalší riadok, pretože sme ho už spracovali
    //         } else {
    //             formattedLines.push(line);
    //         }
    //     }
    //
    //     // Pridajte zarážky k riadkom
    //     const indentedHTML = formattedLines
    //       .map((line, index, arr) => {
    //           let indentSize = 0;
    //
    //           // Určte veľkosť zarážky na základe otvorených a zatvorených tagov
    //           if (line.match(/^<\/[^>]+>/)) {
    //               indentSize--;
    //           }
    //           indentSize += arr.slice(0, index).reduce((acc, line) => {
    //               if (line.match(/<[^/!][^>]*[^/]>$/)) acc++;
    //               if (line.match(/^<\/[^>]+>/)) acc--;
    //               return acc;
    //           }, 0);
    //
    //           // Uistite sa, že indentSize nie je záporný
    //           indentSize = Math.max(indentSize, 0);
    //
    //           return ' '.repeat(indentSize * 2) + line;
    //       })
    //       .join('\n');
    //
    //     return indentedHTML;
    // }

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
