import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Grid</h1>
  <div class="container">
    <style>
      wje-col {
        background-color: #7252D3;
        /*border: 1px solid #fff;*/
        color: #fff;
        text-align: center;
        /*box-sizing: border-box;*/
      }
      wje-col[size="auto"], wje-col[size], wje-col[offset]  {
        background-color: #19AD79;
      }
      span {
        text-align: center;
      }
    </style>

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-grid>
          <wje-row>
            <wje-col size="4">1</wje-col>
            <wje-col size="4">2</wje-col>
            <wje-col size="4">3</wje-col>
          </wje-row>
        </wje-grid>

        <wje-grid>
          <wje-row>
            <wje-col>1</wje-col>
            <wje-col>2</wje-col>
            <wje-col>3</wje-col>
            <wje-col>4</wje-col>
            <wje-col>5</wje-col>
            <wje-col>6</wje-col>
          </wje-row>
        </wje-grid>

        <wje-grid>
          <wje-row>
            <wje-col>1</wje-col>
            <wje-col>2</wje-col>
            <wje-col>3</wje-col>
            <wje-col>4</wje-col>
            <wje-col>5</wje-col>
            <wje-col>6</wje-col>
            <wje-col>7</wje-col>
            <wje-col>8</wje-col>
            <wje-col>9</wje-col>
            <wje-col>10</wje-col>
            <wje-col>11</wje-col>
            <wje-col>12</wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- SIZE -->

    <h2>Auto size</h2>
    <div class="playground">
      <div class="content">
        <span>Stĺpec 1 má <strong>size</strong> nastavenú na <strong>"auto"</strong></span>
        <wje-grid>
          <wje-row>
            <wje-col size="auto">1</wje-col>
            <wje-col>2</wje-col>
            <wje-col>3</wje-col>
          </wje-row>
        </wje-grid>

        <span>Stĺpec 3 obsahuje text a má <strong>size "auto"</strong></span>
        <wje-grid>
          <wje-row>
            <wje-col>1</wje-col>
            <wje-col>2</wje-col>
            <wje-col size="auto">Som stĺpec 3</wje-col>
            <wje-col>4</wje-col>
            <wje-col>5</wje-col>
            <wje-col>6</wje-col>
          </wje-row>
        </wje-grid>

        <span>Stĺpec 2 má <strong>size</strong> <strong>"auto"</strong> a definovanú šírku</span>
        <wje-grid>
          <wje-row>
            <wje-col>1</wje-col>
            <wje-col size="auto">
              <div style="width: 150px">2</div>
            </wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- SIZE -->

    <h2>Size</h2>
    <div class="playground">
      <div class="content">
        <span>Slĺpec 2 má <strong>size</strong> <strong>"8"</strong></span>
        <wje-grid>
          <wje-row>
            <wje-col>1</wje-col>
            <wje-col size="8">2</wje-col>
            <wje-col>3</wje-col>
          </wje-row>
        </wje-grid>

        <span>Stĺpce 3 & 4 majú <strong>size</strong> <strong>"3"</strong></span>
        <wje-grid>
          <wje-row>
            <wje-col>1</wje-col>
            <wje-col>2</wje-col>
            <wje-col size="3">3</wje-col>
            <wje-col size="3">4</wje-col>
            <wje-col>5</wje-col>
            <wje-col>6</wje-col>
          </wje-row>
        </wje-grid>

        <span>Stĺpce 1 & 2 majú <strong>size</strong> nastavenú na <strong>"4"</strong></span>
        <wje-grid>
          <wje-row>
            <wje-col size="4">1</wje-col>
            <wje-col size="4">2</wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- RESPONSIVE SIZE -->

    <h2>Responsive size</h2>
    <div class="playground">
      <div class="content">
        <span>Naskladané pre xs breakpoint, rovnaká šírka pre sm a vyššie</span>
        <wje-grid>
          <wje-row>
            <wje-col size="12" size-sm="3">1</wje-col>
            <wje-col size="12" size-sm="3">2</wje-col>
            <wje-col size="12" size-sm="3">3</wje-col>
            <wje-col size="12" size-sm="3">4</wje-col>
          </wje-row>
        </wje-grid>

        <span>Rovnaká šírka do md, posledný stĺpec má plnú šírku pre md a vyššie</span>
        <wje-grid>
          <wje-row wrap>
            <wje-col size-md="6">1</wje-col>
            <wje-col size-md="6">2</wje-col>
            <wje-col size-md="12">3</wje-col>
          </wje-row>
        </wje-grid>

        <span>2 na riadok do breakpointu md, 3 na riadok pre md, rovnaká šírka pre lg a vyššie</span>
        <wje-grid>
          <wje-row wrap>
            <wje-col size="6" size-md="4" size-lg="2">1</wje-col>
            <wje-col size="6" size-md="4" size-lg="2">2</wje-col>
            <wje-col size="6" size-md="4" size-lg="2">3</wje-col>
            <wje-col size="6" size-md="4" size-lg="2">4</wje-col>
            <wje-col size="6" size-md="4" size-lg="2">5</wje-col>
            <wje-col size="6" size-md="4" size-lg="2">6</wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- OFFSET -->

    <h2>Offset</h2>
    <div class="playground">
      <div class="content">
        <span>Stĺpec 2 má <strong>offset</strong> nastavený na <strong>"3"</strong></span>
        <wje-grid>
          <wje-row>
            <wje-col>1</wje-col>
            <wje-col offset="3">2</wje-col>
            <wje-col>3</wje-col>
          </wje-row>
        </wje-grid>

        <span>Stĺpec 5 má <strong>offset</strong> nastavený na <strong>"2"</strong></span>
        <wje-grid>
          <wje-row>
            <wje-col>1</wje-col>
            <wje-col>2</wje-col>
            <wje-col>3</wje-col>
            <wje-col>4</wje-col>
            <wje-col offset="2">5</wje-col>
          </wje-row>
        </wje-grid>

        <span>Stĺpec 1 má <strong>offset</strong> nastavený na <strong>"4"</strong></span>
        <wje-grid>
          <wje-row>
            <wje-col size="2" offset="4">1</wje-col>
            <wje-col size="2">2</wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- RESPONSIVE OFFSET -->

    <h2>Responsive offset</h2>
    <div class="playground">
      <div class="content">
        <span>Žiadny offset pre breakpoint xs, posun 1. stĺpca pre sm a vyššie</span>
        <wje-grid>
          <wje-row>
            <wje-col offset-sm="2">1</wje-col>
            <wje-col>2</wje-col>
            <wje-col>3</wje-col>
            <wje-col>4</wje-col>
            <wje-col>5</wje-col>
          </wje-row>
        </wje-grid>

        <span>Žiadny offset pre breakpoint xs, offset posledných 3 stĺpcov pre md a vyššie</span>
        <wje-grid>
          <wje-row >
            <wje-col class="gx-sm-1">1</wje-col>
            <wje-col offset-md="2">2</wje-col>
            <wje-col offset-md="2">3</wje-col>
            <wje-col offset-md="2">4</wje-col>
          </wje-row>
        </wje-grid>

        <span>Offset všetkých stĺpcov o 6 pre breakpoint xs, offset o 4 pre md, offset o 2 pre lg a vyššie</span>
        <wje-grid>
          <wje-row wrap>
            <wje-col offset="6" offset-md="4" offset-lg="2">1</wje-col>
            <wje-col offset="6" offset-md="4" offset-lg="2">2</wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- ORDER -->

    <h2>Order</h2>
    <div class="playground">
      <div class="content">
        <span>Zmeníme poradie stĺpcov pomocou <strong>order</strong> z 3 2 1 na 1 2 3</span>
        <wje-grid>
          <wje-row>
            <wje-col order="3">3</wje-col>
            <wje-col order="2">2</wje-col>
            <wje-col order="1">1</wje-col>
          </wje-row>
        </wje-grid>

        <span>Stĺpec 2 presunieme na poziciu 4 a column 3 na poziciu 5</span>
        <wje-grid>
          <wje-row>
            <wje-col>1</wje-col>
            <wje-col order="first">2</wje-col>
            <wje-col order="5">3</wje-col>
            <wje-col>4</wje-col>
            <wje-col>5</wje-col>
            <wje-col>6</wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- ALIGNMENT -->
    
    <h2>Aligment</h2>
    <div class="playground">
      <div class="content">
        <b>Columns aligned at the start</b>
        <wje-grid>
          <wje-row class="wje-justify-content-start">
            <wje-col size="3"> 1 </wje-col>
            <wje-col size="3"> 2 </wje-col>
          </wje-row>
        </wje-grid>
        
        <b>Columns aligned at the center</b>
        <wje-grid>
          <wje-row class="wje-justify-content-center">
            <wje-col size="3"> 1 </wje-col>
            <wje-col size="3"> 2 </wje-col>
          </wje-row>
        </wje-grid>
        
        <b>Columns aligned at the end</b>
        <wje-grid>
          <wje-row class="wje-justify-content-end">
            <wje-col size="3"> 1 </wje-col>
            <wje-col size="3"> 2 </wje-col>
          </wje-row>
        </wje-grid>
        
        <b>Columns aligned with space around</b>
        <wje-grid>
          <wje-row class="wje-justify-content-around">
            <wje-col size="3"> 1 </wje-col>
            <wje-col size="3"> 2 </wje-col>
          </wje-row>
        </wje-grid>
        
        <b>Columns aligned with space between</b>
        <wje-grid>
          <wje-row class="wje-justify-content-between">
            <wje-col size="3"> 1 </wje-col>
            <wje-col size="3"> 2 </wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <div class="html-snippet"></div>
  
    <!-- ALIGNMENT -->
    
    <h2>Aligment</h2>
    <div class="playground">
      <div class="content">
        <b>Columns aligned at the top</b>
        <wje-grid>
          <wje-row class="wje-align-items-start">
            <wje-col> 1 </wje-col>
            <wje-col> 2 </wje-col>
            <wje-col> 3 </wje-col>
            <wje-col>
              4 <br />
              # <br />
              # <br />
              # <br />
            </wje-col>
          </wje-row>
        </wje-grid>
        
        <b>Columns aligned at the center</b>
        <wje-grid>
          <wje-row class="wje-align-items-center">
            <wje-col> 1 </wje-col>
            <wje-col> 2 </wje-col>
            <wje-col> 3 </wje-col>
            <wje-col>
              4 <br />
              # <br />
              # <br />
              # <br />
            </wje-col>
          </wje-row>
        </wje-grid>
        
        <b>Columns aligned at the bottom</b>
        <wje-grid>
          <wje-row class="wje-align-items-end">
            <wje-col> 1 </wje-col>
            <wje-col> 2 </wje-col>
            <wje-col> 3 </wje-col>
            <wje-col>
              4 <br />
              # <br />
              # <br />
              # <br />
            </wje-col>
          </wje-row>
        </wje-grid>
      </div>
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoGrid extends WJElement {
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

customElements.get("demo-grid") || window.customElements.define("demo-grid", DemoGrid);