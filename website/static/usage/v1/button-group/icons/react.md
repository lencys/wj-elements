```tsx
import React from 'react';
import { Button, ButtonGroup, Icon, Tooltip } from '@elements/react';
function Example() {
  return (
    <wj-button-group style="margin-right: 1rem;">
      <wj-tooltip content="Bold">
        <wj-button>
          <wj-icon slot="icon-only" name="bold"></wj-icon>
        </wj-button>
      </wj-tooltip>
      <wj-tooltip content="Italic">
        <wj-button>
          <wj-icon slot="icon-only" name="italic"></wj-icon>
        </wj-button>
      </wj-tooltip>
      <wj-tooltip content="Bold">
        <wj-button>
          <wj-icon slot="icon-only" name="underline"></wj-icon>
        </wj-button>
      </wj-tooltip>
    </wj-button-group>
    <wj-button-group>
      <wj-tooltip content="Align left">
        <wj-button>
          <wj-icon slot="icon-only" name="align-left"></wj-icon>
        </wj-button>
        </wj-tooltip>
      <wj-tooltip content="Align center">
        <wj-button>
          <wj-icon slot="icon-only" name="align-center"></wj-icon>
        </wj-button>
      </wj-tooltip>
      <wj-tooltip content="Align right">
        <wj-button>
          <wj-icon slot="icon-only" name="align-right"></wj-icon>
        </wj-button>
      </wj-tooltip>
      <wj-tooltip content="Align justify">
        <wj-button>
          <wj-icon slot="icon-only" name="align-justified"></wj-icon>
        </wj-button>
      </wj-tooltip>
    </wj-button-group>
  );
}
export default Example;
```
