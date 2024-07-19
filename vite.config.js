import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
// import { terser } from 'rollup-plugin-terser';
// import javascriptObfuscator from 'vite-plugin-javascript-obfuscator';

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {

    dotenv.config({ path: path.resolve(__dirname, `.env.${mode}`) });

    return {
        // port to 5199
        server: {
            port: 5199,
            watch: {
                paths: ['dist/**/*'],
                ignored: ['!**/dist/**'],
                usePolling: true, // Enable polling
                interval: 100 // Polling interval in milliseconds
            }
        },
        ...(mode === 'development' ? {
            define: {
                'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || 'http://localhost:3000'),
                'process.env.VITE_ASSETS_URL': JSON.stringify(process.env.VITE_ASSETS_URL || 'http://localhost:3000/assets'),
            },
        } : {}),
        base: '/',
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `$injectedColor: orange;`
                }
            },
        },
        build: {
            assetsInlineLimit: 0,
            minify: false,// 'terser',
            // rollupOptions: {
            //     plugins: [
            //         terser({
            //             compress: {
            //                 drop_console: true, // Odstráň konzolové výpisy
            //                 drop_debugger: true, // Odstráň debugger statements
            //             },
            //             format: {
            //                 comments: false, // Odstráň komentáre
            //             },
            //             mangle: true,
            //         })
            //     ]
            // },
            sourcemap: false, //mode === 'production', // Enable source maps in production build
            cssCodeSplit: true,
            outDir: './dist',
            lib: {
                entry: {
                    "orgchart-item": "packages/wje-orgchart-item/orgchart-item.js",
                    "master": "./packages/index.js",
                    "styles": "./packages/styles/styles.css",
                    "light": "./packages/themes/light.css",
                    "localize": "./packages/utils/localize.js",
                    "dark": "./packages/themes/dark.css",
                    "fetchAndParseCSS": "./packages/utils/animations.js",
                    "store": "./packages/wje-store/store.js",
                    "accordion": "./packages/wje-accordion/accordion.js",
                    "accordion-item": "./packages/wje-accordion-item/accordion-item.js",
                    "animation": "./packages/wje-animation/animation.js",
                    "aside": "./packages/wje-aside/aside.js",
                    "avatar": "./packages/wje-avatar/avatar.js",
                    "badge": "./packages/wje-badge/badge.js",
                    "breadcrumb": "./packages/wje-breadcrumb/breadcrumb.js",
                    "breadcrumbs": "./packages/wje-breadcrumbs/breadcrumbs.js",
                    "button": "./packages/wje-button/button.js",
                    "button-group": "./packages/wje-button-group/button-group.js",
                    "card": "./packages/wje-card/card.js",
                    "card-header": "./packages/wje-card-header/card-header.js",
                    "card-content": "./packages/wje-card-content/card-content.js",
                    "card-controls": "./packages/wje-card-controls/card-controls.js",
                    "card-subtitle": "./packages/wje-card-subtitle/card-subtitle.js",
                    "card-title": "./packages/wje-card-title/card-title.js",
                    "carousel": "./packages/wje-carousel/carousel.js",
                    "carousel-item": "./packages/wje-carousel-item/carousel-item.js",
                    "checkbox": "./packages/wje-checkbox/checkbox.js",
                    "chip": "./packages/wje-chip/chip.js",
                    "col": "./packages/wje-col/col.js",
                    "color-picker": "./packages/wje-color-picker/color-picker.js",
                    "copy-button": "./packages/wje-copy-button/copy-button.js",
                    "container": "./packages/wje-container/container.js",
                    "dialog": "./packages/wje-dialog/dialog.js",
                    "divider": "./packages/wje-divider/divider.js",
                    "dropdown": "./packages/wje-dropdown/dropdown.js",
                    "element": "./packages/wje-element/element.js",
                    "file-upload": "./packages/wje-file-upload/file-upload.js",
                    "file-upload-item": "./packages/wje-file-upload-item/file-upload-item.js",
                    "form": "./packages/wje-form/form.js",
                    "footer": "./packages/wje-footer/footer.js",
                    "format-digital": "./packages/wje-format-digital/format-digital.js",
                    "grid": "./packages/wje-grid/grid.js",
                    "header": "./packages/wje-header/header.js",
                    "icon": "./packages/wje-icon/icon.js",
                    "icon-picker": "./packages/wje-icon-picker/icon-picker.js",
                    "img": "./packages/wje-img/img.js",
                    "img-comparer": "./packages/wje-img-comparer/img-comparer.js",
                    "infinite-scroll": "./packages/wje-infinite-scroll/infinite-scroll.js",
                    "input": "./packages/wje-input/input.js",
                    "input-file": "./packages/wje-input-file/input-file.js",
                    "item": "./packages/wje-item/item.js",
                    "label": "./packages/wje-label/label.js",
                    "list": "./packages/wje-list/list.js",
                    "main": "./packages/wje-main/main.js",
                    "masonry": "./packages/wje-masonry/masonry.js",
                    "menu": "./packages/wje-menu/menu.js",
                    "menu-button": "./packages/wje-menu-button/menu-button.js",
                    "menu-item": "./packages/wje-menu-item/menu-item.js",
                    "menu-label": "./packages/wje-menu-label/menu-label.js",
                    "option": "./packages/wje-option/option.js",
                    "options": "./packages/wje-options/options.js",
                    "orgchart": "packages/wje-orgchart/orgchart.js",
                    "orgchartItem": "packages/wje-orgchart-item/orgchart-item.js",
                    "popup": "./packages/wje-popup/popup.js",
                    "progress-bar": "./packages/wje-progress-bar/progress-bar.js",
                    "qr-code": "./packages/wje-qr-code/qr-code.js",
                    "radio": "./packages/wje-radio/radio.js",
                    "radio-group": "./packages/wje-radio-group/radio-group.js",
                    "rate": "./packages/wje-rate/rate.js",
                    "relative-time": "./packages/wje-relative-time/relative-time.js",
                    "reorder": "./packages/wje-reorder/reorder.js",
                    "reorder-dropzone": "./packages/wje-reorder-dropzone/reorder-dropzone.js",
                    "reorder-handle": "./packages/wje-reorder-handle/reorder-handle.js",
                    "reorder-item": "./packages/wje-reorder-item/reorder-item.js",
                    "route": "./packages/wje-route/route.js",
                    "routerx": "./packages/wje-router/router.js",
                    "router-link": "./packages/wje-router-link/router-link.js",
                    "router-outlet": "./packages/wje-router-outlet/router-outlet.js",
                    "row": "./packages/wje-row/row.js",
                    "select": "./packages/wje-select/select.js",
                    "slider": "./packages/wje-slider/slider.js",
                    "sliding-container": "./experimental-packages/wje-sliding-container/sliding-container.js",
                    "split-view": "./packages/wje-split-view/split-view.js",
                    "status": "./packages/wje-status/status.js",
                    "tab": "./packages/wje-tab/tab.js",
                    "tab-group": "./packages/wje-tab-group/tab-group.js",
                    "tab-panel": "./packages/wje-tab-panel/tab-panel.js",
                    "textarea": "./packages/wje-textarea/textarea.js",
                    "thumbnail": "./packages/wje-thumbnail/thumbnail.js",
                    "toast": "./packages/wje-toast/toast.js",
                    "toggle": "./packages/wje-toggle/toggle.js",
                    "toolbar": "./packages/wje-toolbar/toolbar.js",
                    "toolbar-action": "./packages/wje-toolbar-action/toolbar-action.js",
                    "tooltip": "./packages/wje-tooltip/tooltip.js",
                    "visually-hidden": "./packages/wje-visually-hidden/visually-hidden.js"
                },
                name: 'WjElements',
                fileName: (format, name) => {
                    console.log("Format:", format, "Name:", name);
                    if (name === 'localize')
                        return name + '.js';
                    return 'wje-' + name + '.js';
                },
                formats: ['es'],
                publicDir: false,
            },
        },
        resolve: {
            alias: {
                'wje-master': path.resolve(__dirname, './dist/wje-master.js')
            },
        },
        // plugins: [
        //     javascriptObfuscator({
        //         compact: true,
        //         controlFlowFlattening: true,
        //         controlFlowFlatteningThreshold: 0.75,
        //         numbersToExpressions: true,
        //         simplify: true,
        //         stringArrayShuffling: true,
        //         splitStrings: true,
        //         stringArrayThreshold: 0.75
        //     }),
        // ],
    }
});

