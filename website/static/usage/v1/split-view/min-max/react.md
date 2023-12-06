```tsx
import React from 'react';
import { SplitView } from '@elements/react';
function Example() {
  return (
    <>
      <wj-split-view min="50" max="50" initial="75">
        <div slot="start">Start</div>
        <div slot="end">End</div>
      </wj-split-view>
    </>
  );
}
export default Example;
```
