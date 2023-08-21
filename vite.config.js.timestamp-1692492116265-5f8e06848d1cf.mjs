// vite.config.js
var vite_config_default = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  },
  build: {
    outDir: "./website/static/wj-elements",
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
      name: "MyLib",
      // the proper extensions will be added
      fileName: (format, name) => `wj-${name}.js`,
      formats: ["es"]
    }
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbG9uZHJlamNlay9JZGVhUHJvamVjdHMvd2otZWxlbWVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9sb25kcmVqY2VrL0lkZWFQcm9qZWN0cy93ai1lbGVtZW50cy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbG9uZHJlamNlay9JZGVhUHJvamVjdHMvd2otZWxlbWVudHMvdml0ZS5jb25maWcuanNcIjsvKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXG5cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICAgIGNzczoge1xuICAgICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbERhdGE6IGAkaW5qZWN0ZWRDb2xvcjogb3JhbmdlO2BcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIG91dERpcjogJy4vd2Vic2l0ZS9zdGF0aWMvd2otZWxlbWVudHMnLFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgICAgICAgZW50cnk6IHtcbiAgICAgICAgICAgICAgICBcIm1haW5cIjogXCIuL3BhY2thZ2VzL2luZGV4LmpzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yZVwiOiBcIi4vcGFja2FnZXMvd2otc3RvcmUvc3RvcmUuanNcIixcbiAgICAgICAgICAgICAgICBcImVsZW1lbnRcIjogXCIuL3BhY2thZ2VzL3dqLWVsZW1lbnQvd2otZWxlbWVudC5qc1wiLFxuICAgICAgICAgICAgICAgIFwiYXZhdGFyXCI6IFwiLi9wYWNrYWdlcy93ai1hdmF0YXIvYXZhdGFyLmpzXCIsXG4gICAgICAgICAgICAgICAgXCJiYWRnZVwiOiBcIi4vcGFja2FnZXMvd2otYmFkZ2UvYmFkZ2UuanNcIixcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiOiBcIi4vcGFja2FnZXMvd2otYnV0dG9uL2J1dHRvbi5qc1wiLFxuICAgICAgICAgICAgICAgIFwiY2FyZFwiOiBcIi4vcGFja2FnZXMvd2otY2FyZC9jYXJkLmpzXCIsXG4gICAgICAgICAgICAgICAgXCJjYXJkLWhlYWRlclwiOiBcIi4vcGFja2FnZXMvd2otY2FyZC1oZWFkZXIvY2FyZC1oZWFkZXIuanNcIixcbiAgICAgICAgICAgICAgICBcImNhcmQtY29udGVudFwiOiBcIi4vcGFja2FnZXMvd2otY2FyZC1jb250ZW50L2NhcmQtY29udGVudC5qc1wiLFxuICAgICAgICAgICAgICAgIFwiY2FyZC1jb250cm9sc1wiOiBcIi4vcGFja2FnZXMvd2otY2FyZC1jb250cm9scy9jYXJkLWNvbnRyb2xzLmpzXCIsXG4gICAgICAgICAgICAgICAgXCJjYXJkLXN1YnRpdGxlXCI6IFwiLi9wYWNrYWdlcy93ai1jYXJkLXN1YnRpdGxlL2NhcmQtc3VidGl0bGUuanNcIixcbiAgICAgICAgICAgICAgICBcImNhcmQtdGl0bGVcIjogXCIuL3BhY2thZ2VzL3dqLWNhcmQtdGl0bGUvY2FyZC10aXRsZS5qc1wiLFxuICAgICAgICAgICAgICAgIFwiY29sXCI6IFwiLi9wYWNrYWdlcy93ai1jb2wvY29sLmpzXCIsXG4gICAgICAgICAgICAgICAgXCJkaWFsb2dcIjogXCIuL3BhY2thZ2VzL3dqLWRpYWxvZy9kaWFsb2cuanNcIixcbiAgICAgICAgICAgICAgICBcImV4YW1wbGUtZWxlbWVudFwiOiBcIi4vcGFja2FnZXMvd2otZXhhbXBsZS1lbGVtZW50L2V4YW1wbGUtZWxlbWVudC5qc1wiLFxuICAgICAgICAgICAgICAgIFwiZ3JpZFwiOiBcIi4vcGFja2FnZXMvd2otZ3JpZC9ncmlkLmpzXCIsXG4gICAgICAgICAgICAgICAgXCJjaGlwXCI6IFwiLi9wYWNrYWdlcy93ai1jaGlwL2NoaXAuanNcIixcbiAgICAgICAgICAgICAgICBcImljb25cIjogXCIuL3BhY2thZ2VzL3dqLWljb24vaWNvbi5qc1wiLFxuICAgICAgICAgICAgICAgIFwiaW5maW5pdGUtc2Nyb2xsXCI6IFwiLi9wYWNrYWdlcy93ai1pbmZpbml0ZS1zY3JvbGwvaW5maW5pdGUtc2Nyb2xsLmpzXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtXCI6IFwiLi9wYWNrYWdlcy93ai1pdGVtL2l0ZW0uanNcIixcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiLi9wYWNrYWdlcy93ai1sYWJlbC9sYWJlbC5qc1wiLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBcIi4vcGFja2FnZXMvd2otbGlzdC9saXN0LmpzXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9ncmVzcy1iYXJcIjogXCIuL3BhY2thZ2VzL3dqLXByb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuanNcIixcbiAgICAgICAgICAgICAgICBcInJvd1wiOiBcIi4vcGFja2FnZXMvd2otcm93L3Jvdy5qc1wiLFxuICAgICAgICAgICAgICAgIFwic2xpZGVyXCI6IFwiLi9wYWNrYWdlcy93ai1zbGlkZXIvc2xpZGVyLmpzXCIsXG4gICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxcIjogXCIuL3BhY2thZ2VzL3dqLXRodW1ibmFpbC90aHVtYm5haWwuanNcIixcbiAgICAgICAgICAgICAgICBcInRvZ2dsZVwiOiBcIi4vcGFja2FnZXMvd2otdG9nZ2xlL3RvZ2dsZS5qc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZTogJ015TGliJyxcbiAgICAgICAgICAgIC8vIHRoZSBwcm9wZXIgZXh0ZW5zaW9ucyB3aWxsIGJlIGFkZGVkXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCwgbmFtZSkgPT4gYHdqLSR7bmFtZX0uanNgLFxuICAgICAgICAgICAgZm9ybWF0czogWydlcyddLFxuICAgICAgICB9LFxuICAgIH0sXG59KVxuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBSUEsSUFBTyxzQkFBUztBQUFBLEVBQ1osS0FBSztBQUFBLElBQ0QscUJBQXFCO0FBQUEsTUFDakIsTUFBTTtBQUFBLFFBQ0YsZ0JBQWdCO0FBQUEsTUFDcEI7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBO0FBQUEsTUFFRCxPQUFPO0FBQUEsUUFDSCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixlQUFlO0FBQUEsUUFDZixnQkFBZ0I7QUFBQSxRQUNoQixpQkFBaUI7QUFBQSxRQUNqQixpQkFBaUI7QUFBQSxRQUNqQixjQUFjO0FBQUEsUUFDZCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixtQkFBbUI7QUFBQSxRQUNuQixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixtQkFBbUI7QUFBQSxRQUNuQixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixnQkFBZ0I7QUFBQSxRQUNoQixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixhQUFhO0FBQUEsUUFDYixVQUFVO0FBQUEsTUFDZDtBQUFBLE1BQ0EsTUFBTTtBQUFBO0FBQUEsTUFFTixVQUFVLENBQUMsUUFBUSxTQUFTLE1BQU07QUFBQSxNQUNsQyxTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2xCO0FBQUEsRUFDSjtBQUNKOyIsCiAgIm5hbWVzIjogW10KfQo=
