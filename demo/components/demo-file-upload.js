import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `
<style>
    pre {
      overflow-x: auto;
      word-wrap: break-word;
      white-space: pre-wrap;
      padding: 10px;
      border: 1px solid hsla(240, 6%, 90%, 1);
      border-radius: 4px;
      background: #f9f9f9;
      max-width: 100%;
      font-size: 1em;
      line-height: 1.7rem;
      position: relative;
    }

    code {
      font-family: monospace;
      padding: 2px 4px;
      background: #f9f9f9;
      border-radius: 4px;
    }
  </style>
<h1>File upload</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-file-upload accepted-types="image/*">
          <p>Drag and drop files here</p>
        </wje-file-upload>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- ICON -->

    <h2>Icon</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-file-upload max-file-size="10000" accepted-types="mp4" icon>
          <wje-icon name="cloud-upload" style="--wje-icon-size: 4rem;"></wje-icon>
          <p>Drag and drop to upload</p>
        </wje-file-upload>
      </div>
    </div>

    <div class="html-snippet"></div>

    <h3>Javascript</h3>
    <pre>
      <code>
        handleDrop = (event) => {
          const fileList = event.dataTransfer.files;

          this.resetFormState();

          this.uploadFiles(fileList);
        }
      </code>
    </pre>
    <pre>
      <code>
        handleInputChange = (event) => {
          this.resetFormState();

          try {
            this.handleSubmit(event);
          } catch (err) {
            return;
          }
        }
      </code>
    </pre>
    <pre>
      <code>
        uploadFiles(files) {
          if (files.length === 0) {
            return;
          }

          Array.from(files).forEach(file => {
            this.assertFilesValid(file);
            let preview;

            let reader = new FileReader();
            reader.onload = (e) => {
              preview = this.createPreview(file, reader)
              this.fileList.appendChild(preview);
              uploadFile(file, this.chunkSize, preview);
            }

            reader.readAsDataURL(file);
          });
        }
      </code>
    </pre>
    <pre>
      <code>
        createThumbnail(file, reader) {
          let img = document.createElement("img");
          img.setAttribute("src", reader.result);

          return img;
        }
      </code>
    </pre>
  </div>`;

export default class DemoFileUpload extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-file-upload") || window.customElements.define("demo-file-upload", DemoFileUpload);