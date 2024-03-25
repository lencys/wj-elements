```html
<wje-icon name="alarm" size="large"></wje-icon>
<wje-icon name="alarm" size="large" filled></wje-icon>
<style>
  wje-icon:not([filled])::part(svg) {
    color: yellow;
  }
  wje-icon[filled]::part(svg) {
    fill: red;
  }
</style>
```
