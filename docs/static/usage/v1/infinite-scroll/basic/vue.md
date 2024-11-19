```html
<template>
  <wje-infinite-scroll url="/api/users" placement="wje-list">
    <wje-list>
      <wje-item iterate>
        <wje-label>
          <h4>{{fullName}}</h4>
          <p>{{jobTitle}}</p>
        </wje-label>
      </wje-item>
    </wje-list>
  </wje-infinite-scroll>
</template>

<script lang="ts">
  import {
    InfiniteScroll,
    InfiniteScrollContent,
    List,
    Item,
    Avatar,
    Img,
    Label,
    InfiniteScrollCustomEvent,
  } from '@elements/vue';
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    components: {
      InfiniteScroll,
      List,
      Item,
      Avatar,
      Img,
      Label,
    },
    setup() {
      return { ionInfinite, items };
    },
  });
</script>
```
