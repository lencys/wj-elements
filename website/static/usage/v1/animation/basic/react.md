```tsx
import React from 'react';
import { Animation, Avatar, Image, Button } from '@elements/react';

function Example() {
  return (
    <>
      <wj-animation name="heartBeat">
        <wj-avatar>
          <wj-img src="/assets/img/avatar.svg"></wj-img>
        </wj-avatar>
      </wj-animation>
      <div style="margin-top: 1rem">
        <wj-button id="stop">Stop</wj-button>
        <wj-button id="play">Play</wj-button>
      </div>
    </>
  );
}
export default Example;
```
