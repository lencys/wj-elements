```html
<wje-infinite-scroll url="/api/users" placement="wje-list" size="20">
  <wje-list>
    <wje-item iterate>
      <wje-label>
        <h4>{{fullName}}</h4>
        <p>{{jobTitle}}</p>
      </wje-label>
    </wje-item>
  </wje-list>
</wje-infinite-scroll>
```
