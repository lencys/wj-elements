```html
  <wj-item>
    <wj-button slot="start"> Start </wj-button>
    <wj-label>Default Buttons</wj-label>
    <wj-button slot="end"> End </wj-button>
  </wj-item>

  <wj-item>
    <wj-button slot="start">
      Start
      <wj-icon name="home" slot="end"></wj-icon>
    </wj-button>
    <wj-label>Buttons with Icons</wj-label>
    <wj-button slot="end">
      <wj-icon name="star" slot="end"></wj-icon>
      End
    </wj-button>
  </wj-item>

  <wj-item>
    <wj-button slot="start">
      <wj-icon slot="icon-only" name="user"></wj-icon>
    </wj-button>
    <wj-label>Icon only Buttons</wj-label>
    <wj-button slot="end">
      <wj-icon slot="icon-only" name="star"></wj-icon>
    </wj-button>
  </wj-item>

  <wj-item>
    <wj-label>Button Sizes</wj-label>
    <wj-button slot="end" size="small"> Small </wj-button>
    <wj-button slot="end" size="default"> Default </wj-button>
    <wj-button slot="end" size="large"> Large </wj-button>
  </wj-item>
```
