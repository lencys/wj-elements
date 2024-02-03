```tsx
import React from 'react';
import { Badge, Item, Label, List } from '@elements/react';
function Example() {
  return (
    <wj-list>
      <wj-item>
        <wj-badge slot="start">11</wj-badge>
        <wj-label>Badge in start slot</wj-label>
      </wj-item>
      <wj-item>
        <wj-badge slot="end">22</wj-badge>
        <wj-label>Badge in end slot</wj-label>
      </wj-item>
    </wj-list>
  );
}
export default Example;
```
