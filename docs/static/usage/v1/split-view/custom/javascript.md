```html
<wj-split-view id="custom">
    <div slot="start">Start</div>
    <wj-icon name="grip-vertical" slot="divider"></wj-icon>
    <div slot="end">End</div>
</wj-split-view>
<style>
    #custom {
    --wj-split-view-divider-background: mediumvioletred !important;
    --wj-split-view-divider-size: 1px !important;
    }
    #custom wj-icon {
    position: absolute;
    background-color: mediumvioletred;
    padding: .5rem 0.25rem;
    color: white;
    border-radius: 4px;
    }
</style>
```
