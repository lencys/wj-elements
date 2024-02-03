```tsx
import React from 'react';
import { TabGroup, Tab, Card } from '@elements/react';
function Example() {
  return (
    <>
    <wj-card>
        <wj-tab-group variant="start">
          <wj-tab slot="nav" panel="general">General</wj-tab>
          <wj-tab slot="nav" panel="custom" active>Custom</wj-tab>
          <wj-tab slot="nav" panel="advanced">Advanced</wj-tab>
          <wj-tab slot="nav" panel="disabled" disabled>Disabled</wj-tab>
        
          <wj-tab-panel name="general">This is the general tab panel.</wj-tab-panel>
          <wj-tab-panel name="custom">This is the custom tab panel.</wj-tab-panel>
          <wj-tab-panel name="advanced">This is the advanced tab panel.</wj-tab-panel>
          <wj-tab-panel name="disabled">This is a disabled tab panel.</wj-tab-panel>
        </wj-tab-group>
      </wj-card>
    </>
  );
}
export default Example;
```
