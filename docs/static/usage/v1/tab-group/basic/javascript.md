```html
<wje-card>
    <wje-tab-group variant="top">
        <wje-tab slot="nav" panel="general">General</wje-tab>
        <wje-tab slot="nav" panel="custom" active>Custom</wje-tab>
        <wje-tab slot="nav" panel="advanced">Advanced</wje-tab>
        <wje-tab slot="nav" panel="disabled" disabled>Disabled</wje-tab>

        <wje-tab-panel name="general">This is the <b>general</b> tab panel.</wje-tab-panel>
        <wje-tab-panel name="custom">This is the <b>custom</b> tab panel.</wje-tab-panel>
        <wje-tab-panel name="advanced">This is the <b>advanced</b> tab panel.</wje-tab-panel>
        <wje-tab-panel name="disabled">This is a disabled tab panel.</wje-tab-panel>
    </wje-tab-group>
</wje-card>
```
