```html
<wje-button onclick="document.querySelector('demo-skeleton-slot-card').display(true)" fill="outline">
  Znovu načítať
</wje-button>

<demo-skeleton-slot-card skeleton>
  <div slot="skeleton" class="profile-skeleton">
    <div class="profile-skeleton__header">
      <div class="profile-skeleton__avatar"></div>
      <div class="profile-skeleton__content">
        <div class="profile-skeleton__line profile-skeleton__line--title"></div>
        <div class="profile-skeleton__line"></div>
        <div class="profile-skeleton__line profile-skeleton__line--short"></div>
      </div>
    </div>
  </div>
</demo-skeleton-slot-card>
```
