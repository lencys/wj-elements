```tsx
import React from 'react';
import { QrCode } from '@elements/react';
function Example() {
  return (
    <wje-qr-code
      value="https://www.mcdonalds.sk/"
      size="200"
      padding="25"
      foregroung="black"
      foregroundAlpha="1"
      background="white"
      backgroundAlpha="1"
      level="L"
    >
      <h3 slot="top">Name on top of QR code</h3>
      <h3 slot="bottom">Name on bottom of QR code</h3>
    </wje-qr-code>
  );
}
export default Example;
```
