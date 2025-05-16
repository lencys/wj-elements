```html
<template>
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
    Tooltip,
    
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
      Tooltip,
    },
    setup() {
      return { ionInfinite, items };
    },
  });
</script>
```
