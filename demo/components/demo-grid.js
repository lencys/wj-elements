import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Grid</h1>
  <div class="container">
    <style>
      wj-col {
        background-color: #7252D3;
        border: solid 1px #fff;
        color: #fff;
        text-align: center;
      }
      wj-col[size="auto"], wj-col[size], wj-col[offset]  {
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
        <wj-grid>
          <wj-row>
            <wj-col size="4">1</wj-col>
            <wj-col size="4">2</wj-col>
            <wj-col size="4">3</wj-col>
          </wj-row>
        </wj-grid>

        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col>2</wj-col>
            <wj-col>3</wj-col>
            <wj-col>4</wj-col>
            <wj-col>5</wj-col>
            <wj-col>6</wj-col>
          </wj-row>
        </wj-grid>

        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col>2</wj-col>
            <wj-col>3</wj-col>
            <wj-col>4</wj-col>
            <wj-col>5</wj-col>
            <wj-col>6</wj-col>
            <wj-col>7</wj-col>
            <wj-col>8</wj-col>
            <wj-col>9</wj-col>
            <wj-col>10</wj-col>
            <wj-col>11</wj-col>
            <wj-col>12</wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>

    <!-- SIZE -->

    <h2>Auto size</h2>
    <div class="playground">
      <div class="content">
        <span>Stĺpec 1 má <strong>size</strong> nastavenú na <strong>"auto"</strong></span>
        <wj-grid>
          <wj-row class="row">
            <wj-col size="auto">1</wj-col>
            <wj-col>2</wj-col>
            <wj-col>3</wj-col>
          </wj-row>
        </wj-grid>

        <span>Stĺpec 3 obsahuje text a má <strong>size "auto"</strong></span>
        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col>2</wj-col>
            <wj-col size="auto">Som stĺpec 3</wj-col>
            <wj-col>4</wj-col>
            <wj-col>5</wj-col>
            <wj-col>6</wj-col>
          </wj-row>
        </wj-grid>

        <span>Stĺpec 2 má <strong>size</strong> <strong>"auto"</strong> a definovanú šírku</span>
        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col size="auto">
              <div style="width: 150px">2</div>
            </wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>

    <!-- SIZE -->

    <h2>Size</h2>
    <div class="playground">
      <div class="content">
        <span>Slĺpec 2 má <strong>size</strong> <strong>"8"</strong></span>
        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col size="8">2</wj-col>
            <wj-col>3</wj-col>
          </wj-row>
        </wj-grid>

        <span>Stĺpce 3 & 4 majú <strong>size</strong> <strong>"3"</strong></span>
        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col>2</wj-col>
            <wj-col size="3">3</wj-col>
            <wj-col size="3">4</wj-col>
            <wj-col>5</wj-col>
            <wj-col>6</wj-col>
          </wj-row>
        </wj-grid>

        <span>Stĺpce 1 & 2 majú <strong>size</strong> nastavenú na <strong>"4"</strong></span>
        <wj-grid>
          <wj-row>
            <wj-col size="4">1</wj-col>
            <wj-col size="4">2</wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>

    <!-- RESPONSIVE SIZE -->

    <h2>Responsive size</h2>
    <div class="playground">
      <div class="content">
        <span>Naskladané pre xs breakpoint, rovnaká šírka pre sm a vyššie</span>
        <wj-grid>
          <wj-row>
            <wj-col size="12" size-sm="3">1</wj-col>
            <wj-col size="12" size-sm="3">2</wj-col>
            <wj-col size="12" size-sm="3">3</wj-col>
            <wj-col size="12" size-sm="3">4</wj-col>
          </wj-row>
        </wj-grid>

        <span>Rovnaká šírka do md, posledný stĺpec má plnú šírku pre md a vyššie</span>
        <wj-grid>
          <wj-row wrap>
            <wj-col size-md="6">1</wj-col>
            <wj-col size-md="6">2</wj-col>
            <wj-col size-md="12">3</wj-col>
          </wj-row>
        </wj-grid>

        <span>2 na riadok do breakpointu md, 3 na riadok pre md, rovnaká šírka pre lg a vyššie</span>
        <wj-grid>
          <wj-row wrap>
            <wj-col size="6" size-md="4" size-lg="2">1</wj-col>
            <wj-col size="6" size-md="4" size-lg="2">2</wj-col>
            <wj-col size="6" size-md="4" size-lg="2">3</wj-col>
            <wj-col size="6" size-md="4" size-lg="2">4</wj-col>
            <wj-col size="6" size-md="4" size-lg="2">5</wj-col>
            <wj-col size="6" size-md="4" size-lg="2">6</wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>

    <!-- OFFSET -->

    <h2>Offset</h2>
    <div class="playground">
      <div class="content">
        <span>Stĺpec 2 má <strong>offset</strong> nastavený na <strong>"3"</strong></span>
        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col offset="3">2</wj-col>
            <wj-col>3</wj-col>
          </wj-row>
        </wj-grid>

        <span>Stĺpec 5 má <strong>offset</strong> nastavený na <strong>"2"</strong></span>
        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col>2</wj-col>
            <wj-col>3</wj-col>
            <wj-col>4</wj-col>
            <wj-col offset="2">5</wj-col>
          </wj-row>
        </wj-grid>

        <span>Stĺpec 1 má <strong>offset</strong> nastavený na <strong>"4"</strong></span>
        <wj-grid>
          <wj-row>
            <wj-col size="2" offset="4">1</wj-col>
            <wj-col size="2">2</wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>

    <!-- RESPONSIVE OFFSET -->

    <h2>Responsive offset</h2>
    <div class="playground">
      <div class="content">
        <span>Žiadny offset pre breakpoint xs, posun 1. stĺpca pre sm a vyššie</span>
        <wj-grid>
          <wj-row>
            <wj-col offset-sm="2">1</wj-col>
            <wj-col>2</wj-col>
            <wj-col>3</wj-col>
            <wj-col>4</wj-col>
            <wj-col>5</wj-col>
          </wj-row>
        </wj-grid>

        <span>Žiadny offset pre breakpoint xs, offset posledných 3 stĺpcov pre md a vyššie</span>
        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col offset-md="2">2</wj-col>
            <wj-col offset-md="2">3</wj-col>
            <wj-col offset-md="2">4</wj-col>
          </wj-row>
        </wj-grid>

        <span>Offset všetkých stĺpcov o 6 pre breakpoint xs, offset o 4 pre md, offset o 2 pre lg a vyššie</span>
        <wj-grid>
          <wj-row wrap>
            <wj-col offset="6" offset-md="4" offset-lg="2">1</wj-col>
            <wj-col offset="6" offset-md="4" offset-lg="2">2</wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>

    <!-- ORDER -->

    <h2>Order</h2>
    <div class="playground">
      <div class="content">
        <span>Zmeníme poradie stĺpcov pomocou <strong>order</strong> z 3 2 1 na 1 2 3</span>
        <wj-grid>
          <wj-row>
            <wj-col order="3">3</wj-col>
            <wj-col order="2">2</wj-col>
            <wj-col order="1">1</wj-col>
          </wj-row>
        </wj-grid>

        <span>Stĺpec 2 presunieme na poziciu 4 a column 3 na poziciu 5</span>
        <wj-grid>
          <wj-row>
            <wj-col>1</wj-col>
            <wj-col order="4">2</wj-col>
            <wj-col order="5">3</wj-col>
            <wj-col>4</wj-col>
            <wj-col>5</wj-col>
            <wj-col>6</wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>

    <!-- ALIGNMENT -->
    
    <h2>Aligment</h2>
    <div class="playground">
      <div class="content">
        <b>Columns aligned at the start</b>
        <wj-grid>
          <wj-row class="wj-justify-content-start">
            <wj-col size="3"> 1 </wj-col>
            <wj-col size="3"> 2 </wj-col>
          </wj-row>
        </wj-grid>
        
        <b>Columns aligned at the center</b>
        <wj-grid>
          <wj-row class="wj-justify-content-center">
            <wj-col size="3"> 1 </wj-col>
            <wj-col size="3"> 2 </wj-col>
          </wj-row>
        </wj-grid>
        
        <b>Columns aligned at the end</b>
        <wj-grid>
          <wj-row class="wj-justify-content-end">
            <wj-col size="3"> 1 </wj-col>
            <wj-col size="3"> 2 </wj-col>
          </wj-row>
        </wj-grid>
        
        <b>Columns aligned with space around</b>
        <wj-grid>
          <wj-row class="wj-justify-content-around">
            <wj-col size="3"> 1 </wj-col>
            <wj-col size="3"> 2 </wj-col>
          </wj-row>
        </wj-grid>
        
        <b>Columns aligned with space between</b>
        <wj-grid>
          <wj-row class="wj-justify-content-between">
            <wj-col size="3"> 1 </wj-col>
            <wj-col size="3"> 2 </wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>
  
    <!-- ALIGNMENT -->
    
    <h2>Aligment</h2>
    <div class="playground">
      <div class="content">
        <b>Columns aligned at the top</b>
        <wj-grid>
          <wj-row class="wj-align-items-start">
            <wj-col> 1 </wj-col>
            <wj-col> 2 </wj-col>
            <wj-col> 3 </wj-col>
            <wj-col>
              4 <br />
              # <br />
              # <br />
              # <br />
            </wj-col>
          </wj-row>
        </wj-grid>
        
        <b>Columns aligned at the center</b>
        <wj-grid>
          <wj-row class="wj-align-items-center">
            <wj-col> 1 </wj-col>
            <wj-col> 2 </wj-col>
            <wj-col> 3 </wj-col>
            <wj-col>
              4 <br />
              # <br />
              # <br />
              # <br />
            </wj-col>
          </wj-row>
        </wj-grid>
        
        <b>Columns aligned at the bottom</b>
        <wj-grid>
          <wj-row class="wj-align-items-end">
            <wj-col> 1 </wj-col>
            <wj-col> 2 </wj-col>
            <wj-col> 3 </wj-col>
            <wj-col>
              4 <br />
              # <br />
              # <br />
              # <br />
            </wj-col>
          </wj-row>
        </wj-grid>
      </div>
    </div>
  </div>`;

export default class DemoGrid extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-grid") || window.customElements.define("demo-grid", DemoGrid);