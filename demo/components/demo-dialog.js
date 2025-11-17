import WJElement from '../../dist/wje-element.js';
import { event } from '../../packages/utils/event.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';
import '../assets/js/demo.js';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    .content {
      display: block;
    }
  </style>
  <h1>Dialog</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-button dialog="open-modal">Open</wje-button>
        <wje-dialog trigger="open-modal" headline="Title" class="example">
          <wje-button fill="link" size="small" slot="header"><wje-icon name="arrows-diagonal" slot="icon-only"></wje-icon></wje-button>
          <wje-button fill="link" size="small" slot="header"><wje-icon name="dots" slot="icon-only"></wje-icon></wje-button>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
          <wje-shadow-element>
            <wje-shadow-element></wje-shadow-element>
          </wje-shadow-element>
            
        </wje-dialog>
      </div>
    </div>
    
    <!-- HIDDEN HEADER, FOOTER -->

    <h2>Hidden Header, Footer</h2>
    <div class="playground">
      <div class="content">
        <wje-button dialog="open-modal-hidden">Open</wje-button>
        <wje-dialog trigger="open-modal-hidden" headline="Title" hidden-header hidden-footer>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
        </wje-dialog>
      </div>
    </div>
    
    <!-- BODY SCROLL -->

    <h2>Body scroll</h2>
    <div class="playground">
      <div class="content">
        <wje-button dialog="open-modal-body-scroll">Open</wje-button>
        <wje-dialog trigger="open-modal-body-scroll" class="scroll-body" headline="Title">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
          
          <div slot="footer"><wje-button color="primary">Send</wje-button></div>
        </wje-dialog>
      </div>
    </div>
    
    <!-- JS Open -->

    <h2>JS Open</h2>
    <div class="playground">
      <div class="content">
        <wje-button id="example-js-open">JS Open</wje-button>
      </div>
    </div>
    
    <!-- CANCELABLE -->

    <h2>Cancelable</h2>
    <div class="playground">
      <div class="content">
        <wje-button dialog="open-modal-cancelable">Open</wje-button>
        <wje-dialog trigger="open-modal-cancelable" headline="Title" close-hidden>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
          <div slot="footer">
            <wje-button class="close">Zatvoriť</wje-button>
            <wje-button id="save" color="primary">Potvrdiť</wje-button>
          </div>
        </wje-dialog>
      </div>
    </div>
    
    <!-- ELEMENT -->

    <h2>Element</h2>
    <div class="playground">
      <div class="content">
        <div id="open-modal-button" dialog="open-modal-div"><p>Open</p></div>
        <wje-dialog trigger="open-modal-div" headline="Title" async>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
          <div slot="footer">
            <wje-button class="close">Zatvoriť</wje-button>
            <wje-button id="save" color="primary">Potvrdiť</wje-button>
          </div>
        </wje-dialog>
      </div>
    </div>

    <!--  PLACEMENT-->

    <h2>Placement</h2>
    <div class="playground">
      <div class="content">
        <wje-button dialog="open-modal-1">Open Slide Up</wje-button>
        <wje-button dialog="open-modal-2">Open Stick Up</wje-button>
        <wje-button dialog="open-modal-3">Open Fill In</wje-button>
        <wje-button dialog="open-modal-4">Open Slide Left</wje-button>
        <wje-button dialog="open-modal-5">Open Slide Right</wje-button>

        <wje-dialog trigger="open-modal-1" href="/nejaka-url/" placement="slide-up">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
        </wje-dialog>

        <wje-dialog trigger="open-modal-2" href="/nejaka-url/" placement="stick-up">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
        </wje-dialog>

        <wje-dialog trigger="open-modal-3" href="/nejaka-url/" placement="fill-in">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
        </wje-dialog>

        <wje-dialog trigger="open-modal-4" href="/nejaka-url/" placement="slide-left">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
        </wje-dialog>

        <wje-dialog trigger="open-modal-5" href="/nejaka-url/" placement="slide-right">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>

          <p>Nulla elit dui, tincidunt quis maximus nec, bibendum non tortor. Donec quam metus, tristique at erat ut, rhoncus volutpat justo. Nunc turpis ipsum, malesuada at mauris sit amet, venenatis interdum risus. Nam interdum facilisis enim. Proin ornare faucibus posuere. Pellentesque tincidunt turpis ut orci aliquet, et cursus neque elementum. Cras vulputate orci non mollis lacinia. Quisque dictum odio ullamcorper orci lacinia venenatis. Integer felis massa, molestie at tristique ac, dictum vitae magna. Aenean nec dolor vestibulum, gravida purus iaculis, semper velit. Aenean fringilla malesuada felis, quis elementum ipsum consequat at. Suspendisse risus arcu, viverra ac elit vel, tempor ullamcorper orci. Mauris laoreet finibus orci sit amet posuere. Etiam posuere est id fermentum vestibulum. Donec mollis tristique iaculis.</p>

          <p>Sed sed dolor tristique, varius erat egestas, mattis purus. Nunc vehicula id justo eget pellentesque. Ut volutpat dolor libero, in vestibulum est auctor et. Sed pretium tortor ipsum, tempus imperdiet purus scelerisque scelerisque. Maecenas lobortis, mi at pretium dictum, tellus lectus viverra libero, vitae congue magna metus et neque. Aenean lorem ex, auctor quis ornare non, dapibus nec eros. Nam non diam suscipit leo dictum posuere mattis vel quam. Curabitur nisi magna, congue vitae arcu at, auctor rhoncus nisl. Cras sit amet luctus lacus. Aenean ornare ut ex id malesuada. Morbi nec lacinia ex.</p>
        </wje-dialog>
      </div>
    </div>

    <!-- SIZE -->

    <h2>Size</h2>
    <div class="playground">
      <div class="content">
        <wje-button dialog="open-modal-small">Small</wje-button>
        <wje-button dialog="open-modal-medium">Medium</wje-button>
        <wje-button dialog="open-modal-large">Large</wje-button>
        <wje-button dialog="open-modal-ex-large">Extra large</wje-button>

        <wje-dialog trigger="open-modal-small" size="small">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>
        </wje-dialog>

        <wje-dialog trigger="open-modal-medium" size="medium">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>
        </wje-dialog>

        <wje-dialog trigger="open-modal-large" size="large">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>
        </wje-dialog>

        <wje-dialog trigger="open-modal-ex-large" size="ex-large">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>
        </wje-dialog>
      </div>
    </div>

	<!-- REGISTER BLOCKING EVENT -->

    <h2>Register blocking event</h2>
    <div class="playground">
      <div class="content">
        <wje-button dialog="open-modal-blocking-event">Open</wje-button>
        <wje-dialog trigger="open-modal-blocking-event" headline="Title">
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
          <div slot="footer">
            <wje-button class="close">Zatvoriť</wje-button>
            <wje-button id="save-blocking-event" color="primary">Potvrdiť</wje-button>
          </div>
        </wje-dialog>
      </div>
    </div>
	
  </div>`;

export default class DemoDialog extends WJElement {
   constructor() {
    super();
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  afterDraw() {

    this.querySelector('#example-js-open').addEventListener('click', (e) => {
      let myDialog = document.createElement('wje-dialog');
      myDialog.setAttribute('headline', 'Title');
      myDialog.innerHTML = '<h4 slot="header">Headline</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.';

      this.appendChild(myDialog);

      myDialog.onOpen();
    });

    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    this.querySelectorAll('wje-button').forEach((button) => {
      if (button.classList.contains('close')) {
        button.addEventListener('wje-button:click', (e) => {
          e.target.closest(`wje-dialog`).close();
        });
      }
    });

    document.getElementById('save').addEventListener('wje-button:click', (e) => {
      console.log('Save clicked');
    });

    // ukazka ako sa da zmenit content dialogu pred zobrazenim
    // po kliku na button dispatchneme custom event
    // na dialogu staci vytvorit async funkciu beforeShow v nej budeme editovat obsah dialogu
    // taketo funkcie mozu byt beforeShow, afterShow, beforeHide, afterHide
    let customButton = this.querySelector('#open-modal-button');

    customButton.addEventListener('click', function (e) {
      event.dispatchCustomEvent(this, this.getAttribute('dialog'));
    });

    this.querySelector('[trigger=open-modal-div]').beforeOpen = async (element) => {
      const date = new Date().toLocaleString();
      element.innerHTML = 'Changed content' + date;
    };

	// ukazka ako sa da zaregistrovat blocking event s datami
	let data = {
		id: 1,
		name: 'John Doe'
	}
	document.querySelector('[trigger="open-modal-blocking-event"]').registerBlockingEvent(document.querySelector("#save-blocking-event"), () => this.save(data));
  }

  save(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('✅ Saved with data:', data);
            resolve(data);
        }, 1000);
    });
}
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-dialog') || window.customElements.define('demo-dialog', DemoDialog);
