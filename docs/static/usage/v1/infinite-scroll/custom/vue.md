```html
<template>
  <wje-infinite-scroll placement="wje-list" id="custom-data">
    <wje-list></wje-list>
    <wje-icon name="arrow-bar-to-down" size="large" slot="ending"></wje-icon>
    <wje-icon name="loader" size="large" slot="loader"></wje-icon>
  </wje-infinite-scroll>
</template>

<script lang="ts">
import {
  InfiniteScroll,
  List,
  Icon
} from '@elements/vue';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  components: {
    InfiniteScroll,
    List,
    Icon
  },
  setup() {
    onMounted(() => {
      const infiniteScroll = document.querySelector('#custom-data');
      
      infiniteScroll.setCustomData = async () => {
        infiniteScroll.infiniteScrollTemplate = `<wje-item">
          <wje-label>
            <h4>{{title}}</h4>
            <p>{{description}}</p>
          </wje-label>
        </wje-item>`;

        return {
          page: 0,
          size: 1,
          totalPages: 1,
          data: [
            {
              id: '1',
              title: 'Lorem ipsum dolor sit amet',
              description: 'Quasi cervus sordeo deprimo tunc curriculum verbum vox beatae turpis.',
              time: '2024-06-24T10:00:00Z',
            },
            {
              id: '2',
              title: 'Lorem ipsum dolor sit amet',
              description: 'Quasi cervus sordeo deprimo tunc curriculum verbum vox beatae turpis.',
              time: '2024-06-23T12:00:00Z',
            },
            {
              id: '3',
              title: 'Lorem ipsum dolor sit amet',
              description: 'Quasi cervus sordeo deprimo tunc curriculum verbum vox beatae turpis.',
              time: '2024-06-24T14:00:00Z',
            },
          ],
        };
      };

      infiniteScroll.customForeach = (data) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let addedTodayHeader = false;
        let addedOlderHeader = false;

        data.forEach((item) => {
          let itemDate = new Date(item.time);
          itemDate.setHours(0, 0, 0, 0);

          if (itemDate.getTime() === today.getTime() && !addedTodayHeader) {
            let todayHeader = document.createElement('h5');
            todayHeader.textContent = 'Dnes';
            infiniteScroll.placementObj.insertAdjacentElement('beforeend', todayHeader);
            addedTodayHeader = true;
          }

          if (itemDate.getTime() !== today.getTime() && !addedOlderHeader) {
            let olderHeader = document.createElement('h5');
            olderHeader.textContent = 'Staršie';
            infiniteScroll.placementObj.insertAdjacentElement('beforeend', olderHeader);
            addedOlderHeader = true;
          }

          let element = infiniteScroll.dataToHtml(item);
          infiniteScroll.placementObj.insertAdjacentElement('beforeend', element);
        });
      };
    });
  }
});
</script>
```
