```html
<wje-button fill="link" toggle="off" value="off" id="remove-locked">
  <span slot="toggle">Locked</span>
  <span slot="toggle">Unlocked</span>
</wje-button>
<wje-menu id="parent" active>                   
    <wje-menu-item>
        <div slot="start">
            <wje-reorder-handle dropzone="wje-menu" parent="wje-menu-item">
                <wje-icon name="arrows-move"></wje-icon>
            </wje-reorder-handle>
            Item 1
        </div>
    </wje-menu-item>
    <wje-menu-item>
        <div slot="start">
            <wje-reorder-handle dropzone="wje-menu" parent="wje-menu-item">
                <wje-icon name="arrows-move"></wje-icon>
            </wje-reorder-handle>
            Item 2
        </div>
    </wje-menu-item>
    <wje-menu-item>
        <div slot="start">
            <wje-reorder-handle dropzone="wje-menu" parent="wje-menu-item">
                <wje-icon name="arrows-move"></wje-icon>
            </wje-reorder-handle>
            Item 3
        </div>
    </wje-menu-item>
    <wje-menu-item>
        <div slot="start">
            <wje-reorder-handle dropzone="wje-menu" parent="wje-menu-item">
                <wje-icon name="arrows-move"></wje-icon>
            </wje-reorder-handle>
            Item 4
        </div>
    </wje-menu-item>
</wje-menu>
```
