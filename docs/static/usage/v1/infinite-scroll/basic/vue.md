```html
<template>
  <wj-infinite-scroll url="/api/users" placement="wj-list">
    <wj-list>
      <wj-item iterate>
        <wj-label>
          <h4>{{fullName}}</h4>
          <p>{{jobTitle}}</p>
        </wj-label>
      </wj-item>
    </wj-list>
  </wj-infinite-scroll>
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
