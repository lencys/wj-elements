```tsx
import React from 'react';
import { CopyButton, Input } from '@elements/react';

function Example() {
  return (
  <wj-input label="Label" id="copy-wj-input" value="I am copy - WJ Input">
    <wj-copy-button for="copy-wj-input" slot="end"></wj-copy-button>
  </wj-input>
  )
}
export default Example;
```
