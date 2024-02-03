```tsx
import React from 'react';
import { Radio, RadioGroup } from '@elements/react';

function Example() {
  return (
    <wj-radio-group value="complete">
      <wj-radio value="default">Default</wj-radio>
      <wj-radio value="success" color="success">Success</wj-radio>
      <wj-radio value="primary" color="primary">Primary</wj-radio>
      <wj-radio value="complete" color="complete">Complete</wj-radio>
      <wj-radio value="warning" color="warning">Warning</wj-radio>
      <wj-radio value="danger" color="danger">Danger</wj-radio>
      <wj-radio value="neutral" color="neutral">Neutral</wj-radio>
    </wj-radio-group>
  );
}
export default Example;
```
