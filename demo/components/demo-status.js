import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<style>
    .content {
      display: block;
    }
  </style>
  <h1>Status</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základné použitie komponentu <span class="tok tag">&lt;wje-status&gt;</span> s ikonou ako obsahom.
      Atribúty <span class="tok attr">color</span> a <span class="tok attr">border</span> určujú farebné
      a hranové zvýraznenie stavu (napr. <span class="tok attr">color="danger"</span>,
      <span class="tok attr">border="contrast-reverse"</span>).
    </p>
    <div class="playground">
      <div class="content" style="display: flex; justify-content: center;">
        <wje-status color="danger" border="contrast-reverse">
          <wje-icon name="minus" size="2x-small"></wje-icon>
        </wje-status>
      </div>
    </div>

    <!-- SLOTS -->

    <h2>Slots</h2>
    <p class="description">
      Status s textom v slotoch <span class="tok attr">start</span> a <span class="tok attr">end</span>
      okolo ikony. Umožňuje zobraziť label pred aj za ikonou (napr. stav „Dostupnosť – K dispozícii“).
    </p>
    <div class="playground">
      <div class="content" style="display: flex; justify-content: center;">
        <wje-status color="success">
          <span slot="start">Dostupnosť</span>
          <wje-icon name="check" size="2x-small"></wje-icon>
          <span slot="end">K dispozícii</span>
        </wje-status>
      </div>
    </div>
    
    <!-- SIZE -->

    <h2>Size</h2>
    <p class="description">
      Rôzne veľkosti stavu pomocou atribútu <span class="tok attr">size</span>
      (<span class="tok attr">medium</span>, <span class="tok attr">large</span>),
      v kombinácii s veľkosťou ikony cez <span class="tok attr">size</span> na
      <span class="tok tag">&lt;wje-icon&gt;</span>.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; justify-content: center; gap: .5rem;">
        <wje-status color="success">
          <wje-icon name="check" size="2x-small"></wje-icon>
        </wje-status>
        <wje-status color="success" size="medium">
          <wje-icon name="check" size="x-small"></wje-icon>
        </wje-status>
        <wje-status color="success" size="large">
          <wje-icon name="check" size="medium"></wje-icon>
        </wje-status>
      </div>
    </div>

    <!-- TYPES -->
    
    <!--available - Tento stav označuje, že objekt je k dispozícii alebo dostupný.-->
    <!--unavailable - Tento stav označuje, že objekt nie je k dispozícii alebo nedostupný.-->
    <!--busy - Tento stav označuje, že objekt je zaneprázdnený alebo nie je k dispozícii.-->
    <!--away - Tento stav označuje, že objekt je mimo kancelárie alebo nie je k dispozícii.-->
    <!--do-not-disturb - Tento stav označuje, že objekt je v režime Nerušiť alebo nedostupný.-->
    <!--out-of-office - Tento stav označuje, že objekt je mimo kancelárie alebo nie je k dispozícii.-->
    <!--online - Tento stav označuje, že objekt je online alebo aktívny.-->
    <!--offline - Tento stav označuje, že objekt je offline alebo neaktívny.-->
    <!--idle - Tento stav označuje, že objekt je v pokoji alebo nečinný, ale nie je vypnutý. -->
    <!--remote-work - Tento stav označuje, že objekt je v režime práce na diaľku alebo vzdialene.-->
    
    <!--active - Tento stav znamená, že objekt je aktívny alebo je v prevádzke.-->
    <!--inactive - Tento stav znamená, že objekt nie je aktívny alebo je dočasne nečinný.-->
    <!--pending - Tento stav signalizuje, že objekt čaká na nejakú akciu alebo spracovanie.-->
    <!--error - Tento stav sa používa, keď objekt narazil na chybu alebo problém.-->
    <!--maintenance - Tento stav označuje, že objekt je v režime údržby alebo aktualizácie.-->
    <!--unknown - Tento stav sa používa, keď nie je možné určiť aktuálny stav objektu.-->
    <!--loading - Tento stav znamená, že objekt sa načítava alebo je v procese načítania.-->
    <!--suspending - Tento stav znamená, že objekt je pozastavený alebo je dočasne nečinný.-->
    <!--completed - Tento stav znamená, že objekt je dokončený alebo je úspešne vykonaný.-->
    <!--failed - Tento stav znamená, že objekt zlyhal alebo sa nepodarilo vykonať.-->
    <!--connected - Tento stav znamená, že objekt je pripojený alebo je aktívny.-->
    <!--disconnected - Tento stav znamená, že objekt je odpojený alebo je neaktívny.-->
    <!--started - Tento stav znamená, že objekt je spustený alebo je v prevádzke.-->
    <!--stopped - Tento stav znamená, že objekt je zastavený alebo je neaktívny.-->
    <!--cancelled - Tento stav znamená, že objekt je zrušený alebo zastavený.-->
    <!--paused - Tento stav znamená, že objekt je pozastavený alebo zastavený.-->
    <!--blocked - Tento stav znamená, že objekt je blokovaný alebo nedostupný.-->

    <h2>Types</h2>
    <p class="description">
      Ukážka rôznych sémantických stavov (online, offline, busy, error, maintenance, …)
      reprezentovaných kombináciou farby <span class="tok attr">color</span>, voliteľného
      <span class="tok attr">border</span> a ikony vnútri <span class="tok tag">&lt;wje-status&gt;</span>.
      Slúži ako katalóg predvolených stavov, ktoré môžeš použiť v aplikácii.
    </p>
    <div class="playground">
      <div class="content" style="gap: 1rem; display: flex; flex-direction: column;">
        <wje-status color="success">
          <wje-icon name="check" size="2x-small"></wje-icon>
          <span slot="end">Available</span>
        </wje-status>
        
        <wje-status color="contrast">
          <span slot="end">Unavailable</span>
        </wje-status>
        
        <wje-status color="danger">
          <wje-icon name="minus" size="2x-small"></wje-icon>
          <span slot="end">Busy</span>
        </wje-status>
        
        <wje-status color="warning">
          <wje-icon name="clock" size="2x-small"></wje-icon>
          <span slot="end">Away</span>
        </wje-status>
        
        <wje-status color="primary">
          <wje-icon name="bell-off" size="2x-small"></wje-icon>
          <span slot="end">Do Not Disturb</span>
        </wje-status>
        
        <wje-status border="primary">
          <wje-icon name="arrow-right" size="2x-small"></wje-icon>
          <span slot="end">Out Of Office</span>
        </wje-status>
        
        <wje-status color="contrast">
          <span slot="end">Offline</span>
        </wje-status>
        
        <wje-status color="success">
          <span slot="end">Online</span>
        </wje-status>
        
        <wje-status color="warning">
          <wje-icon name="moon" size="2x-small"></wje-icon>
          <span slot="end">Idle</span>
        </wje-status>
        
        <wje-status color="contrast" border="success">
          <wje-icon name="check" size="2x-small"></wje-icon>
          <span slot="end">Remote Work</span>
        </wje-status>
        
        <wje-status color="complete">
          <wje-icon name="loader" size="2x-small"></wje-icon>
          <span slot="end">Loading</span>
        </wje-status>
        
        <wje-status color="complete">
          <wje-icon name="tools" size="2x-small"></wje-icon>
          <span slot="end">Maintenance</span>
        </wje-status>
        
        <wje-status color="danger">
          <wje-icon name="exclamation-mark" size="2x-small"></wje-icon>
          <span slot="end">Error</span>
        </wje-status>
        
        <wje-status color="warning">
          <wje-icon name="clock" size="2x-small"></wje-icon>
          <span slot="end">Pending</span>
        </wje-status>
        
        <wje-status color="contrast">
          <wje-icon name="clock-pause" size="2x-small"></wje-icon>
          <span slot="end">Suspended</span>
        </wje-status>
        
        <wje-status color="complete">
          <wje-icon name="progress" size="2x-small"></wje-icon>
          <span slot="end">In Progress</span>
        </wje-status>
        
        <wje-status color="success">
          <wje-icon name="check" size="2x-small"></wje-icon>
          <span slot="end">Completed</span>
        </wje-status>
        
        <wje-status color="danger">
          <wje-icon name="x" size="2x-small"></wje-icon>
          <span slot="end">Failed</span>
        </wje-status>
        
        <wje-status color="success">
          <wje-icon name="link" size="2x-small"></wje-icon>
          <span slot="end">Connected</span>
        </wje-status>
        
        <wje-status color="contrast-reverse">
          <wje-icon name="plug-off" size="2x-small"></wje-icon>
          <span slot="end">Disconnected</span>
        </wje-status>
        
        <wje-status color="success">
          <wje-icon name="check" size="2x-small"></wje-icon>
          <span slot="end">Active</span>
        </wje-status>
        
        <wje-status color="contrast">
<!--          <wje-icon name="circle" size="2x-small"></wje-icon>-->
          <span slot="end">Inactive</span>
        </wje-status>
        
        <wje-status color="complete">
          <wje-icon name="player-play" size="2x-small"></wje-icon>
          <span slot="end">Starting</span>
        </wje-status>
        
        <wje-status color="danger">
          <wje-icon name="square" size="2x-small"></wje-icon>
          <span slot="end">Stopping</span>
        </wje-status>
        
        <wje-status color="warning">
          <wje-icon name="power" size="2x-small"></wje-icon>
          <span slot="end">Standby</span>
        </wje-status>
        
        <wje-status color="complete">
          <wje-icon name="settings" size="2x-small"></wje-icon>
          <span slot="end">Initializing</span>
        </wje-status>
        
        <wje-status color="contrast-reverse">
          <wje-icon name="x" size="2x-small"></wje-icon>
          <span slot="end">Terminated</span>
        </wje-status>
        
        <wje-status color="complete">
          <wje-icon name="refresh" size="2x-small"></wje-icon>
          <span slot="end">Updating</span>
        </wje-status>
        
        <wje-status color="warning">
          <wje-icon name="player-pause" size="2x-small"></wje-icon>
          <span slot="end">Paused</span>
        </wje-status>
        
        <wje-status color="complete">
          <wje-icon name="rotate" size="2x-small"></wje-icon>
          <span slot="end">Rebooting</span>
        </wje-status>
        
        <wje-status color="complete">
          <wje-icon name="rotate" size="2x-small"></wje-icon>
          <span slot="end">Resetting</span>
        </wje-status>
      </div>
    </div>
  </div>`;

export default class DemoStatus extends WJElement {
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
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-status') || window.customElements.define('demo-status', DemoStatus);
