```tsx
import React from 'react';
import { Item, Label, List } from '@elements/react';

function Example() {
  return (
    <wj-list lines="full">
      <wj-item>
        <wj-label>Full Lines</wj-label>
      </wj-item>
      <wj-item>
        <wj-label>Full Lines</wj-label>
      </wj-item>
      <wj-item>
        <wj-label>Full Lines</wj-label>
      </wj-item>
    </wj-list>

    <wj-list lines="inset">
      <wj-item>
        <wj-label>Inset Lines</wj-label>
      </wj-item>
      <wj-item>
        <wj-label>Inset Lines</wj-label>
      </wj-item>
      <wj-item>
        <wj-label>Inset Lines</wj-label>
      </wj-item>
    </wj-list>

    <wj-list lines="none">
      <wj-item>
        <wj-label>No Lines</wj-label>
      </wj-item>
      <wj-item>
        <wj-label>No Lines</wj-label>
      </wj-item>
      <wj-item>
        <wj-label>No Lines</wj-label>
      </wj-item>
    </wj-list>
  );
}
export default Example;
```
