```tsx
import React from 'react';
import { Stepper, Step, Button, Icon } from '@elements/react';

function Example() {
  return (
    <wje-stepper active="primary" done="success">
      <wje-step active>
        Content 1
      </wje-step>
      <wje-step label="Step 2">
        Content 2
      </wje-step>
      <wje-step label="Step 3">
        Content 3
      </wje-step>

      <wje-button slot="prev"  label="Prev" color="primary">
        <wje-icon name="chevron-left"></wje-icon>Previous AA
      </wje-button>
      <wje-button slot="next" label="Next" color="primary">
        Next<wje-icon name="chevron-right"></wje-icon>
      </wje-button>
      <wje-button slot="finish" label="Finish" color="primary">
        Finish<wje-icon name="chevron-right"></wje-icon>
      </wje-button>
    </wje-stepper>
  );
}
export default Example;
```
