```tsx
import React from 'react';
import { SplitView, Icon } from '@ionic/react';

import './main.css';

function Example() {
  return (
  <wje-split-view id="custom">
    <div slot="start">Start</div>
    <wje-icon name="grip-vertical" slot="divider"></wje-icon>
    <div slot="end">End</div>
  </wje-split-view>
  );
}
export default Example;
```
