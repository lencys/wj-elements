```html
<wje-infinite-scroll url="/api/users" placement="wje-row" size="20" class="example" height="440px">
  <wje-grid>
    <wje-row wrap>
      <template iterate>
        <wje-col size="6">
          <wje-card>
            <wje-img src="{{image}}"></wje-img>
            <wje-card-header>
              <wje-card-subtitle>{{jobTitle}}</wje-card-subtitle>
              <wje-card-title>{{fullName}}</wje-card-title>
            </wje-card-header>
            <wje-card-content>
              <p>{{description}}</p>
            </wje-card-content>
          </wje-card>
        </wje-col>
      </template>
    </wje-row>
  </wje-grid>
  <style>
    .example {
      padding: 0 1rem;
    }
  </style>
  <wje-icon name="arrow-bar-to-down" size="large" slot="ending"></wje-icon>
  <wje-icon name="loader" size="large" slot="loader"></wje-icon>
</wje-infinite-scroll>
```
