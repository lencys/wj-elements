```tsx
import React from 'react';
import { Animation, Avatar, Image, Button } from '@elements/react';

function Example() {
  return (
    <>
      <wje-animation name="heartBeat">
        <wje-avatar>
          <wje-img src="/assets/img/avatar.svg"></wje-img>
        </wje-avatar>
      </wje-animation>
      <div style="margin-top: 1rem">
        <wje-button id="stop">Stop</wje-button>
        <wje-button id="play">Play</wje-button>
      </div>
    </>
  );
}
export default Example;
```
