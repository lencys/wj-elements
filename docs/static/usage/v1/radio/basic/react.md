```tsx
import React from 'react';
import { Radio, RadioGroup } from '@elements/react';

function Example() {
  return (
    <wj-radio-group value="dog">
      <wj-radio value="cat">Cat</wj-radio>
      <wj-radio value="dog">Dog</wj-radio>
      <wj-radio value="elephant" disabled="">Elephant</wj-radio>
      <wj-radio value="rabbit" >Rabbit</wj-radio>
    </wj-radio-group>
  );
}
export default Example;
```
