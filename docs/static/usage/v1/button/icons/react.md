```tsx
import React from 'react';
import { Button, Icon } from '@elements/react';
function Example() {
  return (
    <wje-button>
      <wje-icon slot="start" name="star"></wje-icon>
      Left Icon
    </wje-button>

    <wje-button>
        Right Icon
        <wje-icon slot="end" name="star"></wje-icon>
    </wje-button>

    <wje-button>
      <wje-icon slot="icon-only" name="star"></wje-icon>
    </wje-button>

    <wje-button fill="outline">
        <wje-icon slot="start" name="star"></wje-icon>
        Left Icon
    </wje-button>

    <wje-button fill="outline">
        Right Icon
        <wje-icon slot="end" name="star"></wje-icon>
    </wje-button>

    <wje-button fill="outline">
      <wje-icon slot="icon-only" name="star"></wje-icon>
    </wje-button>
  );
}
export default Example;
```
