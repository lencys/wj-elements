import { WJElement } from "../../website/static/wj-elements/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `<style>
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
        <wj-button dialog="open-modal">Open</wj-button>
        <wj-dialog trigger="open-modal" title="Title">
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
          <div slot="footer">
            <wj-button fill="outline" color="light">Zatvoriť</wj-button>
            <wj-button>Potvrdiť</wj-button>
          </div>
        </wj-dialog>
      </div>
    </div>

    <!--  PLACEMENT-->

    <h2>Placement</h2>
    <div class="playground">
      <div class="content">
        <wj-button dialog="open-modal-1">Open Slide Up</wj-button>
        <wj-button dialog="open-modal-2">Open Stick Up</wj-button>
        <wj-button dialog="open-modal-3">Open Fill In</wj-button>
        <wj-button dialog="open-modal-4">Open Slide Left</wj-button>
        <wj-button dialog="open-modal-5">Open Slide Right</wj-button>

        <wj-dialog trigger="open-modal-1" href="/nejaka-url/" placement="slide-up">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
        </wj-dialog>

        <wj-dialog trigger="open-modal-2" href="/nejaka-url/" placement="stick-up">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
        </wj-dialog>

        <wj-dialog trigger="open-modal-3" href="/nejaka-url/" placement="fill-in">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
        </wj-dialog>

        <wj-dialog trigger="open-modal-4" href="/nejaka-url/" placement="slide-left">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>
        </wj-dialog>

        <wj-dialog trigger="open-modal-5" href="/nejaka-url/" placement="slide-right">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>

          <p>Aenean imperdiet tortor ut ligula laoreet, laoreet vehicula diam molestie. Aliquam sed scelerisque ligula. Vestibulum condimentum, odio ac aliquet tempor, mauris lorem convallis tortor, sit amet rutrum orci dolor vitae orci. Etiam justo nisi, tincidunt nec lacus vel, lobortis tempor quam. Nullam accumsan, mauris et accumsan suscipit, purus enim fermentum mi, mattis dapibus augue nulla eu mi. Morbi dignissim mauris nec suscipit luctus. Donec aliquet euismod dui vitae porttitor. In dui risus, malesuada convallis accumsan quis, faucibus ac quam. Vestibulum quis interdum felis, quis bibendum odio. Vestibulum varius dui non sem ultrices, ut condimentum diam convallis. Phasellus eu nisi nec nisl euismod lobortis ut vitae nisl. Sed ut mi sed risus maximus volutpat. Maecenas ex quam, cursus vitae ex id, rutrum lobortis felis.</p>

          <p>Nulla elit dui, tincidunt quis maximus nec, bibendum non tortor. Donec quam metus, tristique at erat ut, rhoncus volutpat justo. Nunc turpis ipsum, malesuada at mauris sit amet, venenatis interdum risus. Nam interdum facilisis enim. Proin ornare faucibus posuere. Pellentesque tincidunt turpis ut orci aliquet, et cursus neque elementum. Cras vulputate orci non mollis lacinia. Quisque dictum odio ullamcorper orci lacinia venenatis. Integer felis massa, molestie at tristique ac, dictum vitae magna. Aenean nec dolor vestibulum, gravida purus iaculis, semper velit. Aenean fringilla malesuada felis, quis elementum ipsum consequat at. Suspendisse risus arcu, viverra ac elit vel, tempor ullamcorper orci. Mauris laoreet finibus orci sit amet posuere. Etiam posuere est id fermentum vestibulum. Donec mollis tristique iaculis.</p>

          <p>Sed sed dolor tristique, varius erat egestas, mattis purus. Nunc vehicula id justo eget pellentesque. Ut volutpat dolor libero, in vestibulum est auctor et. Sed pretium tortor ipsum, tempus imperdiet purus scelerisque scelerisque. Maecenas lobortis, mi at pretium dictum, tellus lectus viverra libero, vitae congue magna metus et neque. Aenean lorem ex, auctor quis ornare non, dapibus nec eros. Nam non diam suscipit leo dictum posuere mattis vel quam. Curabitur nisi magna, congue vitae arcu at, auctor rhoncus nisl. Cras sit amet luctus lacus. Aenean ornare ut ex id malesuada. Morbi nec lacinia ex.</p>
        </wj-dialog>
      </div>
    </div>

    <!-- SIZE -->

    <h2>Size</h2>
    <div class="playground">
      <div class="content">
        <wj-button dialog="open-modal-small">Small</wj-button>
        <wj-button dialog="open-modal-medium">Medium</wj-button>
        <wj-button dialog="open-modal-large">Large</wj-button>
        <wj-button dialog="open-modal-ex-large">Extra large</wj-button>

        <wj-dialog trigger="open-modal-small" size="small">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>
        </wj-dialog>

        <wj-dialog trigger="open-modal-medium" size="medium">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>
        </wj-dialog>

        <wj-dialog trigger="open-modal-large" size="large">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>
        </wj-dialog>

        <wj-dialog trigger="open-modal-ex-large" size="ex-large">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit. Donec iaculis nulla nunc, nec faucibus elit consectetur in. Vestibulum congue ultrices massa, eu feugiat nulla faucibus sed. Nulla eget consectetur magna. Fusce in erat eu leo mollis semper vel vitae velit. Integer maximus elementum sapien, at ultrices arcu fringilla et. Vestibulum volutpat quam id nisi faucibus lobortis.</p>
        </wj-dialog>
      </div>
    </div>
  </div>`;

export default class DemoDialog extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-dialog") || window.customElements.define("demo-dialog", DemoDialog);