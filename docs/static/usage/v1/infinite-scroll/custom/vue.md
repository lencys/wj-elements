```html
<template>
  <wj-infinite-scroll url="/api/users" placement="wj-row" size="20" class="example" height="440px">
    <wj-grid>
      <wj-row wrap>
        <wj-col size="6" iterate>
          <wj-card>
            <wj-img src="{{image}}"></wj-img>
            <wj-card-header>
              <wj-card-subtitle>{{jobTitle}}</wj-card-subtitle>
              <wj-card-title>{{fullName}}</wj-card-title>
            </wj-card-header>
            <wj-card-content>
              <p>{{description}}</p>
            </wj-card-content>
          </wj-card>
        </wj-col>
      </wj-row>
    </wj-grid>
    <style>
      .example {
        padding: 0 1rem;
      }
    </style>
  </wj-infinite-scroll>
</template>

<script lang="ts">
  import {
    InfiniteScroll,
    Card,
    CardHeader,
    CardSubtitle,
    CardTitle,
    CardContent,
    Img,
    Grid,
    Row,
    Col,
  } from '@elements/vue';
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    components: {
      InfiniteScroll,
      Card,
      CardHeader,
      CardSubtitle,
      CardTitle,
      CardContent,
      Img,
      Grid,
      Row,
      Col,
    },
    setup() {
      return { ionInfinite, items };
    },
  });
</script>
```
