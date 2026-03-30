```html
<script type="module">
  import WJElement from '/wje-elementy/wje-element.js';

  class DemoSkeletonAuthoringCard extends WJElement {
    static get cssStyleSheet() {
      return ':host { display: block; width: min(100%, 26rem); }';
    }

    setupAttributes() {
      this.isShadowRoot = 'open';
    }

    async draw(context, store, params) {
      await new Promise((resolve) => setTimeout(resolve, 900));

      return `
        <wje-card>
          <wje-card-header>
            <wje-card-title>Autorský skeleton</wje-card-title>
          </wje-card-header>
          <wje-card-content>
            <p>Placeholder dodal priamo hook renderSkeleton().</p>
          </wje-card-content>
        </wje-card>
      `;
    }

    renderSkeleton() {
      return `
        <div class="profile-skeleton">
          <div class="profile-skeleton__header">
            <div class="profile-skeleton__avatar"></div>
            <div class="profile-skeleton__content">
              <div class="profile-skeleton__line profile-skeleton__line--title"></div>
              <div class="profile-skeleton__line"></div>
            </div>
          </div>
        </div>
      `;
    }
  }

  customElements.define('demo-skeleton-authoring-card', DemoSkeletonAuthoringCard);
</script>

<demo-skeleton-authoring-card skeleton></demo-skeleton-authoring-card>
```
