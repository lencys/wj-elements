```tsx
import React from 'react';
import { SplitView } from '@elements/react';
function Example() {
  return (
    <>
      <wje-split-view initial="50">
        <div slot="start">Start</div>
        <div slot="end">
          <wje-split-view vertical id="custom-vertical-2">
            <div slot="start">Top</div>
            <div slot="end">Bottom</div>
          </wje-split-view>
        </div>
      </wje-split-view>
    </>
  );
}
export default Example;
```
