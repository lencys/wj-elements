import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';


<Playground
  version="7"
  size="300px"
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
      },
    },
    vue
  }}
  src="usage/v1/badge/theming/css-properties/demo.html"
/>

