class CodeSnippet {
  /**
   * Generates and inserts HTML code snippets for each `.playground` element in the provided demo document.
   * It creates a code snippet with syntax highlighting and a copy button for easier code reuse.
   * @param {Document} elementDemoDocument The demo document containing `.playground` elements.
   * @param {string} elementTemplate The template string representing the custom element.
   */
  generateSnippet(elementDemoDocument, elementTemplate = "") {
    const playgrounds = elementDemoDocument.querySelectorAll('.playground');

    playgrounds.forEach((pg, index) => {
      const contentPart = pg.querySelector('.content');

      // Skontrolujte, či element .content existuje
      if (!contentPart) {
        console.warn(`No .content found in .playground at index ${index}`);
        return; // Prejsť na ďalší .playground
      }

      const content = contentPart.innerHTML.trim();
      let highlightedContent;

      let template = elementTemplate ? elementTemplate.trim() : content;

      // Uistite sa, že formátovanie a zvýraznenie funguje správne
      const formattedHTML = this.formatHTML(template);
      highlightedContent = this.highlightHTML(this.escapeHTML(formattedHTML));

      // Vytvorte <pre> a <code> elementy pre snippet
      const preElement = document.createElement('pre');
      preElement.classList.add('snippet');
      const codeElement = document.createElement('code');

      // Použitie preddefinovaných štýlov
      // this.applyStyles(preElement, this.preStyles());
      // this.applyStyles(codeElement, this.codeStyles());

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

  /**
   * Formats and cleans an HTML string by removing specific classes, attributes, and empty tags.
   * It also adds proper indentation and ensures a cleaner structure for easier readability.
   * @param {string} htmlString The HTML string to be formatted.
   * @returns {string} The formatted and cleaned HTML string with proper indentation.
   * @example
   * const html = '<div class="lazy wje-placement">Content</div>';
   * const formattedHTML = formatHTML(html);
   * console.log(formattedHTML);
   * Output:
   * <div>
   *    Content
   * </div>
   */
  formatHTML(htmlString) {
    // Definujte pole tried, ktoré chcete odstrániť
    const classesToRemove = [
      'lazy-loaded-image',
      'lazy',
      'wje-placement',
      'wje-bottom-start',
      'wje-bottom-end',
      'wje-top-start',
      'wje-top-end',
      'wje-left-start',
      'wje-left-end',
      'wje-right-start',
      'wje-right-end',
      'wje-menu-variant-context',
      'fade',
      'slide-up',
      'undefined',
      'parent-group',
      'wje-col-3',
      'wje-col-4',
      'wje-col-8',
      'wje-col-auto',
    ];

    // Definujte pole atribútov, ktoré chcete odstrániť
    const attributesToRemove = ['active-class', 'tabindex', 'relative-time', 'style'];

    // Odstráňte všetky špecifikované triedy a prázdne tagy
    let cleanedHTML = htmlString;
    classesToRemove.forEach((className) => {
      const regex = new RegExp(`class="([^"]*?)\\b${className}\\b([^"]*?)"`, 'g');
      cleanedHTML = cleanedHTML.replace(regex, (match, before, after) => {
        // Odstráňte konkrétnu triedu z atribútu class
        const updatedClasses = `${before} ${after}`.trim().replace(/\s+/g, ' '); // Spojí zvyšné triedy, ak nejaké sú
        // Ak po odstránení tried nezostali žiadne iné, odstráňte celý atribút class
        return updatedClasses ? `class="${updatedClasses}"` : '';
      });
    });

    // Odstráňte špecifikované atribúty s rôznymi hodnotami
    attributesToRemove.forEach((attribute) => {
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
      .replace(/ shadow="open"/g, '') // Odstráňte shadow="open" atribút
      .replace(/>\s*</g, '>\n<') // Pridajte novú čiaru medzi tagmi
      .replace(/\s*[\r\n]+\s*/g, '\n') // Odstráňte prebytočné prázdne miesta
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

  /**
   * Escapes special HTML characters in a string to prevent HTML injection.
   * @param {string} htmlString The HTML string to be escaped.
   * @returns {string} The escaped HTML string.
   * @example
   * const html = '<div>Content & more</div>';
   * const escapedHTML = escapeHTML(html);
   * console.log(escapedHTML);
   * // Output: '<div>Content &amp; more</div>'
   */
  escapeHTML(htmlString) {
    return htmlString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /**
   * Highlights parts of an HTML string by wrapping them in span elements with specific classes.
   * This function is useful for syntax highlighting in HTML preview or editor environments.
   * @param {string} htmlString The escaped HTML string to be highlighted.
   * @returns {string} The HTML string with highlighted syntax.
   * @example
   * const html = '&lt;div class="example"&gt;Hello, World!&lt;/div&gt;';
   * const highlighted = highlightHTML(html);
   * console.log(highlighted);
   * // Output:
   * // '<span class="symbol">&lt;</span><span class="tag">div</span>
   * //  <span class="attribute">class</span>="<span class="value">example</span>"
   * //  <span class="symbol">&gt;</span><span class="text">Hello, World!</span>
   * //  <span class="symbol">&lt;</span><span class="tag">/div</span><span class="symbol">&gt;</span>'
   */
  highlightHTML(htmlString) {
    let insideTag = false;
    return htmlString.replace(
      /(&lt;!--[\s\S]*?--&gt;|&lt;style&gt;[\s\S]*?&lt;\/style&gt;|&lt;\/?[\w-]+|&gt;|[\w-]+="[^"]*"|[\w-]+|[^&<>]+)/g,
      (match) => {
        if (match.startsWith('&lt;!--') && match.endsWith('--&gt;')) {
          // Celý komentár
          return `<span class="comment">${match}</span>`;
        } else if (match.startsWith('&lt;style&gt;') || match.startsWith('&lt;/style&gt;')) {
          // Spracovanie obsahu vo vnútri <style> ako bežné tagy
          return match
            .replace(
              /(&lt;style&gt;)([\s\S]*?)(?=&lt;\/style&gt;)/g,
              (full, openTag, content) =>
                `<span class="symbol">&lt;</span><span class="tag">style</span><span class="symbol">&gt;</span><span class="style-content">${content}</span>`
            )
            .replace(
              /&lt;\/style&gt;/g,
              '<span class="symbol">&lt;</span><span class="tag">/style</span><span class="symbol">&gt;</span>'
            );
        } else if (match.startsWith('&lt;') || match === '&gt;') {
          // Bežné tagy
          if (match === '&gt;') {
            insideTag = true;
            return `<span class="symbol">${match}</span>`;
          } else {
            insideTag = false;
            return `<span class="symbol">&lt;</span><span class="tag">${match.slice(4)}</span>`;
          }
        } else if (!insideTag && /[\w-]+="[^"]*"|[\w-]+/g.test(match)) {
          // Spracovanie atribútov
          return match.replace(/([\w-]+)(="[^"]*")?/g, (full, attr, value) => {
            if (value) {
              return `<span class="attribute">${attr}</span>=<span class="value">"${value.slice(2, -1)}"</span>`;
            } else {
              return `<span class="attribute-empty">${attr}</span>`;
            }
          });
        } else {
          // Text medzi tagmi
          return `<span class="text">${match}</span>`;
        }
      }
    );
  }

  /**
   * Copies the provided HTML content to the clipboard after formatting it.
   * This function removes syntax highlighting spans and converts the content to plain text.
   * @param {string} content The highlighted HTML content to be copied to the clipboard.
   * @example
   * const highlightedHTML = `
   *   &lt;span class="symbol">&lt;&lt;/span>&lt;span class="tag">div&lt;/span>
   *   &lt;span class="attribute">class&lt;/span>="&lt;span class="value">example&lt;/span>"
   *   &lt;span class="symbol">&gt;&lt;/span>Content&lt;span class="symbol">&lt;/&lt;/span>&lt;span class="tag">div&lt;/span>&lt;span class="symbol">&gt;&lt;/span>
   * `;
   * copyToClipboard(highlightedHTML); // Copies '&lt;div class="example">Content&lt;/div>' to clipboard
   */
  copyToClipboard(content) {
    const formattedContent = content
      .replace(/<span class="symbol">&lt;<\/span>/g, '<')
      .replace(/<span class="symbol">&gt;<\/span>/g, '>')
      .replace(/<span class="symbol">/g, '&lt;')
      .replace(/<span class="tag">/g, '&lt;')
      .replace(/<span class="text">/g, '')
      .replace(/<\/span>/g, '')
      .replace(/&lt;/g, '')
      .replace(/<span class="attribute">/g, '')
      .replace(/<span class="value">/g, '');

    const tempElement = document.createElement('textarea');
    tempElement.value = formattedContent;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
  }
}

export default CodeSnippet;
