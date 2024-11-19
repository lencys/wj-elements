```html
<wje-toolbar>
  <wje-breadcrumbs
    slot="start"
    max-items="3"
    items-before-collapse="1"
    routerlinks
    id="custom-dynamic"
  ></wje-breadcrumbs>
  <wje-toolbar-action slot="end">
    <wje-button>Create</wje-button>
    <wje-button>Read</wje-button>
    <wje-button>Update</wje-button>
    <wje-button>Delete</wje-button>
  </wje-toolbar-action>
</wje-toolbar>
<script>
  const objs = [
    {
      name: '',
      text: '<wje-icon slot="start" name="home"></wje-icon>',
      params: {},
      path: '/',
    },
    {
      name: 'a',
      text: 'A',
      params: {},
      path: '/a',
    },
    {
      name: 'b',
      text: 'B',
      params: {},
      path: '/a/b',
    },
    {
      name: 'c',
      text: 'C',
      params: {},
      path: '/a/b/c',
    },
  ];
  const breadcrumbs = document.querySelector('#custom-dynamic');
  objs.forEach((obj) => {
    let breadcrumb = document.createElement('wje-breadcrumb');
    breadcrumb.setAttribute('route', obj.name);
    breadcrumb.innerHTML = `${obj.text}<wje-icon slot="separator" name="minus" size="small" class="custom"></wje-icon>`;
    breadcrumbs.appendChild(breadcrumb);
  });
</script>
```
