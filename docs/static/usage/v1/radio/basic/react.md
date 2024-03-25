```tsx
import React from 'react';
import { Radio, RadioGroup } from '@elements/react';

function Example() {
  return (
    <wje-radio-group value="dog">
      <wje-radio value="cat">Cat</wje-radio>
      <wje-radio value="dog">Dog</wje-radio>
      <wje-radio value="elephant" disabled="">Elephant</wje-radio>
      <wje-radio value="rabbit" >Rabbit</wje-radio>
    </wje-radio-group>
  );
}
export default Example;
```
