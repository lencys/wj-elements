/** @type {import('vite').UserConfig} */

import { resolve } from 'path'

export default ({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`,
            }
        },
    },
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: {
                "main": "./packages/index.js",
                "element": "./packages/wj-element/wj-element.js",
                "slider": "./packages/wj-slider/slider.js",
                "example-element": "./packages/wj-example-element/example-element.js",
            },
            name: 'MyLib',
            // the proper extensions will be added
            fileName: (format, name) => `wj-${name}.js`,
            formats: ['es'],
        }
    },

})

