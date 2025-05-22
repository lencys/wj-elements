```tsx
import React from 'react';
import { OrgChart, OrgChartItem, OrgChartGroup } from '@elements/react';
function Example() {
  return (
<wje-orgchart>
          <wje-orgchart-item>
          Parent
          <wje-orgchart slot="child">
            <wje-orgchart-item>
              Child
              <wje-orgchart slot="child">
                <wje-orgchart-item>
                  A
                  <wje-orgchart slot="child">
                    <wje-orgchart-item>A1</wje-orgchart-item>
                    <wje-orgchart-item>A2</wje-orgchart-item>
                  </wje-orgchart>
                </wje-orgchart-item>
                <wje-orgchart-item>
                  B
                  <wje-orgchart slot="child">
                    <wje-orgchart-group>
                      <wje-orgchart-item>B1</wje-orgchart-item>
                      <wje-orgchart-item>B2</wje-orgchart-item>
                    </wje-orgchart-group>
                    <wje-orgchart-item>
                      B3
                      <wje-orgchart slot="child">
                        <wje-orgchart-item>
                          B3-1
                          <wje-orgchart slot="child">
                            <wje-orgchart-group>
                              <wje-orgchart-item>B3-1-1</wje-orgchart-item>
                              <wje-orgchart-item>B3-1-2</wje-orgchart-item>
                            </wje-orgchart-group>
                          </wje-orgchart>
                        </wje-orgchart-item>
                        <wje-orgchart-item>B3-2</wje-orgchart-item>
                      </wje-orgchart>
                    </wje-orgchart-item>
                  </wje-orgchart>
                </wje-orgchart-item>
               
              </wje-orgchart>
            </wje-orgchart-item>
          </wje-orgchart>
        </wje-orgchart-item>
        </wje-orgchart>
  );
}
export default Example;
```
