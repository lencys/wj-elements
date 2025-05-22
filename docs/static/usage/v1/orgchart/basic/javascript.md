```html
<wje-orgchart>
  <wje-orgchart-item boss>
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
              <wje-orgchart-item>B1</wje-orgchart-item>
              <wje-orgchart-item>B2</wje-orgchart-item>
            </wje-orgchart>
          </wje-orgchart-item>

        </wje-orgchart>
      </wje-orgchart-item>
    </wje-orgchart>
  </wje-orgchart-item>
</wje-orgchart>
```
