```tsx
import React from 'react';
import { Badge, Item, Label, List } from '@elements/react';
function Example() {
  return (
    <wj-list>
      <wj-item shadow="open" class="wj-item-list">
        <wj-badge slot="start" shadow="open">11</wj-badge>
        <wj-label shadow="open">Badge in start slot</wj-label>
      </wj-item>
      <wj-item shadow="open" class="wj-item-list">
        <wj-badge slot="end" shadow="open">22</wj-badge>
        <wj-label shadow="open">Badge in end slot</wj-label>
      </wj-item>
    </wj-list>
  );
}
export default Example;
```
