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
                "avatar": "./packages/wj-avatar/avatar.js",
                "badge": "./packages/wj-badge/badge.js",
                "button": "./packages/wj-button/button.js",
                "card": "./packages/wj-card/card.js",
                "card-header": "./packages/wj-card-header/card-header.js",
                "card-content": "./packages/wj-card-content/card-content.js",
                "card-controls": "./packages/wj-card-controls/card-controls.js",
                "card-subtitle": "./packages/wj-card-subtitle/card-subtitle.js",
                "card-title": "./packages/wj-card-title/card-title.js",
                "col": "./packages/wj-col/col.js",
                "dialog": "./packages/wj-dialog/dialog.js",
                "example-element": "./packages/wj-example-element/example-element.js",
                "grid": "./packages/wj-grid/grid.js",
                "chip": "./packages/wj-chip/chip.js",
                "icon": "./packages/wj-icon/icon.js",
                "infinite-scroll": "./packages/wj-infinite-scroll/infinite-scroll.js",
                "item": "./packages/wj-item/item.js",
                "label": "./packages/wj-label/label.js",
                "list": "./packages/wj-list/list.js",
                "progress-bar": "./packages/wj-progress-bar/progress-bar.js",
                "row": "./packages/wj-row/row.js",
                "slider": "./packages/wj-slider/slider.js",
                "thumbnail": "./packages/wj-thumbnail/thumbnail.js",
                "toggle": "./packages/wj-toggle/toggle.js"
            },
            name: 'MyLib',
            // the proper extensions will be added
            fileName: (format, name) => `wj-${name}.js`,
            formats: ['es'],
        },
    },
})

