```html
<wj-grid>
    <wj-row class="gx-2">
    <wj-col size="6">
        <wj-input variant="standard" label="Project name"></wj-input>
    </wj-col>
    <wj-col size="6">
        <wj-input variant="standard" label="Project code" placeholder="6 digit code" minlength="6" maxlength="6" message="Toto je moja hlaska" validate-on-change custom-error-display></wj-input>
    </wj-col>
    </wj-row>
    <wj-row>
    <wj-col size="12">
        <wj-input variant="standard" label="Project URL">
        <span slot="start"><wj-icon name="globe"></wj-icon></span>
        <span slot="end">.com</span>
        </wj-input>
    </wj-col>
    </wj-row>
    <wj-row class="gx-2">
    <wj-col size="6">
        <wj-input variant="standard" label="Profit">
        <span slot="end">&euro;</span>
        </wj-input>
    </wj-col>
    <wj-col size="6">
        <wj-input variant="standard" label="Email"></wj-input>
    </wj-col>
    </wj-row>
</wj-grid>
```
