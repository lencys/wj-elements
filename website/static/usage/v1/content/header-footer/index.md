import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angular from './angular.md';

<Playground
  version="7"
  code={{ javascript, react, vue, angular }}
  src="usage/v1/content/header-footer/demo.html"
  includeIonContent={false}
  devicePreview={true}
/>
