```tsx
import React from 'react';
import { Img, ImgComparer } from '@elements/react';

function Example() {
  return (
    <wje-img-comparer>
      <wje-img src="./../../../../img/example-image.svg" slot="before"></wje-img>
      <wje-img src="./../../../../img/example-image2.svg" slot="after"></wje-img>
    </wje-img-comparer>
  );
}
export default Example;
```
