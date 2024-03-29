/** @type {import('vite').UserConfig} */
import { fetchAndParseCSS } from "./packages/utils/animations.js";

export default ({
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
        minify: true,
        outDir: './dist',
        lib: {
            entry: {
                "master": "./packages/index.js",
                "fetchAndParseCSS": "./packages/utils/animations.js",
                "store": "./packages/wj-store/store.js",
                "element": "./packages/wj-element/wj-element.js",
                "animation": "./packages/wj-animation/animation.js",
                "aside": "./packages/wj-aside/aside.js",
                "avatar": "./packages/wj-avatar/avatar.js",
                "badge": "./packages/wj-badge/badge.js",
                "breadcrumb": "./packages/wj-breadcrumb/breadcrumb.js",
                "breadcrumbs": "./packages/wj-breadcrumbs/breadcrumbs.js",
                "button": "./packages/wj-button/button.js",
                "button-group": "./packages/wj-button-group/button-group.js",
                "card": "./packages/wj-card/card.js",
                "card-header": "./packages/wj-card-header/card-header.js",
                "card-content": "./packages/wj-card-content/card-content.js",
                "card-controls": "./packages/wj-card-controls/card-controls.js",
                "card-subtitle": "./packages/wj-card-subtitle/card-subtitle.js",
                "card-title": "./packages/wj-card-title/card-title.js",
                "carousel": "./packages/wj-carousel/carousel.js",
                "carousel-item": "./packages/wj-carousel-item/carousel-item.js",
                "checkbox": "./packages/wj-checkbox/checkbox.js",
                "chip": "./packages/wj-chip/chip.js",
                "col": "./packages/wj-col/col.js",
                "color-picker": "./packages/wj-color-picker/color-picker.js",
                "copy-button": "./packages/wj-copy-button/copy-button.js",
                "container": "./packages/wj-container/container.js",
                "dialog": "./packages/wj-dialog/dialog.js",
                "divider": "./packages/wj-divider/divider.js",
                "dropdown": "./packages/wj-dropdown/dropdown.js",
                "file-upload": "./packages/wj-file-upload/file-upload.js",
                "file-upload-item": "./packages/wj-file-upload-item/file-upload-item.js",
                "form": "./packages/wj-form/form.js",
                "footer": "./packages/wj-footer/footer.js",
                "format-digital": "./packages/wj-format-digital/format-digital.js",
                "grid": "./packages/wj-grid/grid.js",
                "header": "./packages/wj-header/header.js",
                "icon": "./packages/wj-icon/icon.js",
                "icon-picker": "./packages/wj-icon-picker/icon-picker.js",
                "img": "./packages/wj-img/img.js",
                "img-comparer": "./packages/wj-img-comparer/img-comparer.js",
                "infinite-scroll": "./packages/wj-infinite-scroll/infinite-scroll.js",
                "input": "./packages/wj-input/input.js",
                "input-file": "./packages/wj-input-file/input-file.js",
                "item": "./packages/wj-item/item.js",
                "label": "./packages/wj-label/label.js",
                "list": "./packages/wj-list/list.js",
                "main": "./packages/wj-main/main.js",
                "masonry": "./packages/wj-masonry/masonry.js",
                "menu": "./packages/wj-menu/menu.js",
                "menu-button": "./packages/wj-menu-button/menu-button.js",
                "menu-item": "./packages/wj-menu-item/menu-item.js",
                "menu-label": "./packages/wj-menu-label/menu-label.js",
                "popup": "./packages/wj-popup/popup.js",
                "progress-bar": "./packages/wj-progress-bar/progress-bar.js",
                "radio": "./packages/wj-radio/radio.js",
                "radio-group": "./packages/wj-radio-group/radio-group.js",
                "rate": "./packages/wj-rate/rate.js",
                "relative-time": "./packages/wj-relative-time/relative-time.js",
                "route": "./packages/wj-route/route.js",
                "routerx": "./packages/wj-router/router.js",
                "router-link": "./packages/wj-router-link/router-link.js",
                "router-outlet": "./packages/wj-router-outlet/router-outlet.js",
                "row": "./packages/wj-row/row.js",
                "slider": "./packages/wj-slider/slider.js",
                "split-view": "./packages/wj-split-view/split-view.js",
                // "table": "./packages/wj-table/table.js",
                "textarea": "./packages/wj-textarea/textarea.js",
                "thumbnail": "./packages/wj-thumbnail/thumbnail.js",
                "toast": "./packages/wj-toast/toast.js",
                "toggle": "./packages/wj-toggle/toggle.js",
                "toolbar": "./packages/wj-toolbar/toolbar.js",
                "toolbar-action": "./packages/wj-toolbar-action/toolbar-action.js",
                "tooltip": "./packages/wj-tooltip/tooltip.js",
                "visually-hidden": "./packages/wj-visually-hidden/visually-hidden.js"
            },
            name: 'WjElements',
            fileName: (format, name) => `wj-${name}.js`,
            formats: ['es'],
            publicDir: false,
        },
    },
});

