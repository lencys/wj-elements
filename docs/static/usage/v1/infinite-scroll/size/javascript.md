```html
<wje-infinite-scroll url="/api/users" placement="wje-list" size="6">
  <wje-list>
    <template iterate>
      <wje-tooltip content="{{fullName}}">
        <wje-item>
          <wje-label>
            <h4>{{fullName}}</h4>
            <p>{{jobTitle}}</p>
          </wje-label>
        </wje-item>
      </wje-tooltip>
    </template>
  </wje-list>
</wje-infinite-scroll>
```
