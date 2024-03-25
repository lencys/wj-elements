```tsx
import React from 'react';
import { Badge, Item, Label, List } from '@elements/react';
function Example() {
  return (
    <wje-list>
      <wje-item>
        <wje-badge slot="start">11</wje-badge>
        <wje-label>Badge in start slot</wje-label>
      </wje-item>
      <wje-item>
        <wje-badge slot="end">22</wje-badge>
        <wje-label>Badge in end slot</wje-label>
      </wje-item>
    </wje-list>
  );
}
export default Example;
```
