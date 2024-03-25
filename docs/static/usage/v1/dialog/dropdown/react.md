```tsx
import React from 'react';
import { Avatar, Dropdown, Menu } from '@elements/react';

function Example() {
  return (
    <>
      <wje-dropdown id="custom-dropdown" placement="right-start" trigger="hover" offset="5">
        <wje-avatar label="Lukáš Ondrejček" initials slot="trigger"></wje-avatar>
        <wje-menu id="custom-menu" active>
          <h5 style="margin: 0;">Petr Rahman</h5>
          <p class="hint-text">Frontend Developer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
        </wje-menu>
      </wje-dropdown>
    </>
  );
}
export default Example;
```
