```tsx
import React from 'react';
import { Button, Icon } from '@elements/react';
function Example() {
  return (
    <wj-button>
      <wj-icon slot="start" name="star"></wj-icon>
      Left Icon
    </wj-button>

    <wj-button>
        Right Icon
        <wj-icon slot="end" name="star"></wj-icon>
    </wj-button>
    
    <wj-button>
      <wj-icon slot="icon-only" name="star"></wj-icon>
    </wj-button>
    
    <wj-button fill="outline">
        <wj-icon slot="start" name="star"></wj-icon>
        Left Icon
    </wj-button>
    
    <wj-button fill="outline">
        Right Icon
        <wj-icon slot="end" name="star"></wj-icon>
    </wj-button>
    
    <wj-button fill="outline">
      <wj-icon slot="icon-only" name="star"></wj-icon>
    </wj-button>
  );
}
export default Example;
```
