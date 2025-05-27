```html
<wje-select label="Label" variant="standard" placeholder="Select option">
  <wje-option value="option-1">Option 1</wje-option>
  <wje-option value="option-2">
    Option 2
    <wje-icon name="heart" slot="end"></wje-icon>
  </wje-option>
  <wje-option value="option-3">
    Option 3
    <wje-dropdown id="custom-dropdown" placement="right-start" offset="5" collapsible>
      <wje-avatar label="Petr Rahman" initials slot="trigger"></wje-avatar>
      <wje-menu class="custom-menu" active>
        <div>
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <h5>Petr Rahman</h5>
        </div>
        <wje-divider></wje-divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
        <wje-divider></wje-divider>
        <wje-menu-item>Link A <wje-icon name="check" slot="end">
        </wje-icon>
        </wje-menu-item>
        <wje-menu-item>Link B</wje-menu-item>
      </wje-menu>
    </wje-dropdown>
  </wje-option>
  <wje-option value="option-4">Option 4</wje-option>
</wje-select>
<wje-select placeholder="Select options" variant="standard" max-options="1" max-height="200px" multiple clearable>
  <wje-options url="/api/options" item-value="value" item-text="text"></wje-options>
</wje-select>
```
