```html
<wje-button onclick="document.querySelector('demo-skeleton-timing-card').display(true)" fill="outline">
  Znovu načítať
</wje-button>

<demo-skeleton-timing-card skeleton skeleton-delay="120" skeleton-min-duration="480">
  <div slot="skeleton" class="profile-skeleton">
    <div class="profile-skeleton__header">
      <div class="profile-skeleton__avatar"></div>
      <div class="profile-skeleton__content">
        <div class="profile-skeleton__line profile-skeleton__line--title"></div>
        <div class="profile-skeleton__line"></div>
      </div>
    </div>
  </div>
</demo-skeleton-timing-card>
```
