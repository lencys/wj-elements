```tsx
import React from 'react';
import { Avatar, Image } from '@elements/react';
function Example() {
  return (
    <>
        <wje-avatar label="Petr Rahman" status-placement="top-start" initials>
          <wje-status color="success" slot="status">
            <wje-icon name="check" size="2x-small"></wje-icon>
          </wje-status>
                </wje-avatar>
                <wje-avatar label="Petr Rahman" status-placement="top-end" initials>
          <wje-status color="success" slot="status">
            <wje-icon name="check" size="2x-small"></wje-icon>
          </wje-status>
                  </wje-avatar>
                  <wje-avatar label="Petr Rahman" status-placement="bottom-start" initials>
          <wje-status color="success" slot="status">
            <wje-icon name="check" size="2x-small"></wje-icon>
          </wje-status>
                    </wje-avatar>
                    <wje-avatar label="Petr Rahman" status-placement="bottom-end" initials>
          <wje-status color="success" slot="status">
            <wje-icon name="check" size="2x-small"></wje-icon>
          </wje-status>
        </wje-avatar>
    </>
  );
}
export default Example;
```
