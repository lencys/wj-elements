```tsx
import React from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
function Example() {
  return (
      <wje-accordion>
          <wje-accordion-item class="collapsed">
              <div slot="headline">
                  <wje-status color="success" size="large">
                      <wje-icon name="check" size="medium"></wje-icon>
                  </wje-status>
                  Headline
                  <wje-dropdown label="Start" placement="bottom-start" offset="5" <span class="attribute-empty">collapsible id="custom-dropdown-basic">
                  <wje-button fill="link" slot="trigger">
                      <wje-icon name="dots-vertical"></wje-icon>
                  </wje-button>
                  <wje-menu variant="context">
                      <wje-menu-item>
                          <wje-icon name="plane" slot="start"></wje-icon>
                          <wje-label>Menu item</wje-label>
                      </wje-menu-item>
                      <wje-menu-item>
                          <wje-icon name="book" slot="start"></wje-icon>
                          <wje-label>Menu item</wje-label>
                      </wje-menu-item>
                      <wje-menu-item>
                          <wje-icon name="music" slot="start"></wje-icon>
                          <wje-label>Menu item</wje-label>
                      </wje-menu-item>
                      <wje-menu-item>
                          <wje-icon name="video" slot="start"></wje-icon>
                          <wje-label>Menu item</wje-label>
                      </wje-menu-item>
                  </wje-menu>
              </wje-dropdown>
          </div>
          <div slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
          <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
      </wje-accordion-item>
</wje-accordion>
  );
}
export default Example;
```
