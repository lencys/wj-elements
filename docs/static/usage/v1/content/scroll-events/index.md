import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';
import react from './react.md';

<Playground
  version="7"
  code={{
    javascript,
    react,
    vue
  }}
  src="usage/v1/content/scroll-events/demo.html"
  includeIonContent={false}
  devicePreview={true}
/>
