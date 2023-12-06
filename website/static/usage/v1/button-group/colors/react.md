```tsx
import React from 'react';
import { Button, ButtonGroup } from '@elements/react';

function Example() {
  return (
     <p>
      <wj-button-group>
        <wj-button>Default</wj-button>
        <wj-button>Default</wj-button>
        <wj-button>Default</wj-button>
      </wj-button-group>
    </p>
    <p>
      <wj-button-group>
        <wj-button color="primary">Primary</wj-button>
        <wj-button color="primary">Primary</wj-button>
        <wj-button color="primary">Primary</wj-button>
      </wj-button-group>
    </p>
    <p>
      <wj-button-group>
        <wj-button color="complete">Complete</wj-button>
        <wj-button color="complete">Complete</wj-button>
        <wj-button color="complete">Complete</wj-button>
      </wj-button-group>
    </p>
    <p>
      <wj-button-group>
        <wj-button color="success">Success</wj-button>
        <wj-button color="success">Success</wj-button>
        <wj-button color="success">Success</wj-button>
      </wj-button-group>
    </p>
    <p>
      <wj-button-group>
        <wj-button color="warning">Warning</wj-button>
        <wj-button color="warning">Warning</wj-button>
        <wj-button color="warning">Warning</wj-button>
      </wj-button-group>
    </p>
    <p>
      <wj-button-group>
        <wj-button color="danger">Danger</wj-button>
        <wj-button color="danger">Danger</wj-button>
        <wj-button color="danger">Danger</wj-button>
      </wj-button-group>
    </p>
    <p>
      <wj-button-group>
        <wj-button color="neutral">Neutral</wj-button>
        <wj-button color="neutral">Neutral</wj-button>
        <wj-button color="neutral">Neutral</wj-button>
      </wj-button-group>
    </p>
  );
}
export default Example;
```
