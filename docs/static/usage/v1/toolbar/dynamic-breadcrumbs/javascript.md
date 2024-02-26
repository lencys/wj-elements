```html
 <wj-toolbar>
    <wj-breadcrumbs slot="start" max-items="3" items-before-collapse="1" routerlinks id="custom-dynamic"></wj-breadcrumbs>
    <wj-toolbar-action slot="end">
    <wj-button>Create</wj-button>
    <wj-button>Read</wj-button>
    <wj-button>Update</wj-button>
    <wj-button>Delete</wj-button>
    </wj-toolbar-action>
</wj-toolbar>
<script>
  const objs = [
    {
      "name": "",
      "text": '<wj-icon slot="start" name="home"></wj-icon>',
      "params": {},
      "path": "/"
    },
    {
      "name": "a",
      "text": "A",
      "params": {},
      "path": "/a"
    },
    {
      "name": "b",
      "text": "B",
      "params": {},
      "path": "/a/b"
    },
    {
      "name": "c",
      "text": "C",
      "params": {},
      "path": "/a/b/c"
    }
  ]
  const breadcrumbs = document.querySelector("#custom-dynamic");
  objs.forEach((obj) => {
    let breadcrumb = document.createElement("wj-breadcrumb");
    breadcrumb.setAttribute("route", obj.name);
    breadcrumb.innerHTML = `${obj.text}<wj-icon slot="separator" name="minus" size="small" class="custom"></wj-icon>`;
    breadcrumbs.appendChild(breadcrumb);
  });
</script>
```
