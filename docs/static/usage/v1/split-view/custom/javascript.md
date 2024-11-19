```html
<wje-split-view id="custom">
  <div slot="start">Start</div>
  <wje-icon name="grip-vertical" slot="divider"></wje-icon>
  <div slot="end">End</div>
</wje-split-view>
<style>
  #custom {
    --wje-split-view-divider-background: mediumvioletred !important;
    --wje-split-view-divider-size: 1px !important;
  }
  #custom wje-icon {
    position: absolute;
    background-color: mediumvioletred;
    padding: 0.5rem 0.25rem;
    color: white;
    border-radius: 4px;
  }
</style>
```
