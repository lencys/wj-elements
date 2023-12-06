```tsx
import React from 'react';
import { SplitView, Icon } from '@ionic/react';

import './main.css';

function Example() {
  return (
  <wj-split-view id="custom">
    <div slot="start">Start</div>
    <wj-icon name="grip-vertical" slot="divider"></wj-icon>
    <div slot="end">End</div>
  </wj-split-view>
  );
}
export default Example;
```
