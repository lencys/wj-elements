```tsx
import React from 'react';
import { ProgressBar, Label } from '@elemets/react';
function Example() {
  return (
    <wje-progress-bar progress="60" type="circle" radius="30">
      <wje-label slot="start">Slot Start</wje-label>
      <wje-label slot="end">Slot End</wje-label>
    </wje-progress-bar>
  );
}
export default Example;
```
