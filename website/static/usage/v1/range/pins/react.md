```tsx
import React from 'react';
import { IonRange } from '@ionic/react';
function Example() {
  return <IonRange aria-label="Range with pin" pin={true} pinFormatter={(value: number) => `${value}%`}></IonRange>;
}
export default Example;
```
