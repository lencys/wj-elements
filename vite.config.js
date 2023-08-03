/** @type {import('vite').UserConfig} */

import { resolve } from 'path'

export default ({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        },
    },
    build: {
        outDir: './website/static/wj-elements',
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: {
                "main": "./packages/index.js",
                "store": "./packages/wj-store/store.js",
                "element": "./packages/wj-element/wj-element.js",
                "slider": "./packages/wj-slider/slider.js",
                "example-element": "./packages/wj-example-element/example-element.js",
                "item": "./packages/wj-item/item.js",
                "card": "./packages/wj-card/card.js",
                "card-header": "./packages/wj-card-header/card-header.js",
                "card-title": "./packages/wj-card-title/card-title.js",
                "card-subtitle": "./packages/wj-card-subtitle/card-subtitle.js",
                "card-controls": "./packages/wj-card-controls/card-controls.js",
                "card-content": "./packages/wj-card-content/card-content.js",
                "thumbnail": "./packages/wj-thumbnail/thumbnail.js",
                "label": "./packages/wj-label/label.js",
            },
            name: 'MyLib',
            // the proper extensions will be added
            fileName: (format, name) => `wj-${name}.js`,
            formats: ['es'],
        },
    },

})

