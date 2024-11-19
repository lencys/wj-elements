```html
<wje-item>
  <wje-button slot="start"> Start </wje-button>
  <wje-label>Default Buttons</wje-label>
  <wje-button slot="end"> End </wje-button>
</wje-item>

<wje-item>
  <wje-button slot="start">
    Start
    <wje-icon name="home" slot="end"></wje-icon>
  </wje-button>
  <wje-label>Buttons with Icons</wje-label>
  <wje-button slot="end">
    <wje-icon name="star" slot="end"></wje-icon>
    End
  </wje-button>
</wje-item>

<wje-item>
  <wje-button slot="start">
    <wje-icon slot="icon-only" name="user"></wje-icon>
  </wje-button>
  <wje-label>Icon only Buttons</wje-label>
  <wje-button slot="end">
    <wje-icon slot="icon-only" name="star"></wje-icon>
  </wje-button>
</wje-item>

<wje-item>
  <wje-label>Button Sizes</wje-label>
  <wje-button slot="end" size="small"> Small </wje-button>
  <wje-button slot="end" size="default"> Default </wje-button>
  <wje-button slot="end" size="large"> Large </wje-button>
</wje-item>
```
