# Permissions

WebJET Elements includes a lightweight permission system that lets you conditionally render or remove components from the DOM based on the current user's permissions.

## How it works

The `Permissions` class stores a permission list in `localStorage`. The base `WJElement` class then evaluates the `permission`, `permission-check`, and `no-show` attributes during rendering.

This means permission checks can stay close to the component markup instead of being repeated manually in every view.

## Permissions API

| Name | Type | Description |
| --- | --- | --- |
| `permissionKey` | `string` | The key used to store permissions in `localStorage`. The default value is `'permissions'`. |
| `permissions` | `string[]` | The current user's permission list. When set, it is persisted to `localStorage`. |

## Methods

| Name | Parameters | Return value | Description |
| --- | --- | --- | --- |
| `includesKey(key)` | `key: string` | `boolean` | Checks whether the user has a specific permission. |
| `isPermissionFulfilled(permissions)` | `permissions: string[]` | `boolean` | Returns `true` if at least one permission from the provided array is present. |

## Setting permissions

```js
import { Permissions } from 'wj-elements';

// Set the current user's permissions
Permissions.permissions = ['admin', 'editor', 'viewer'];

// Optionally change the localStorage key
Permissions.permissionKey = 'myPermissions';
```

To clear permissions, set an empty array:

```js
Permissions.permissions = [];
```

## Checking permissions in JavaScript

```js
const hasAdminPermission = Permissions.includesKey('admin');
const hasAnyPermission = Permissions.isPermissionFulfilled(['admin', 'editor']);
```

## Checking permissions in a component

Components can use three related attributes:

- `permission` – a comma-separated list of required permissions,
- `permission-check` – enables permission evaluation during render,
- `no-show` – removes the component from the DOM during render regardless of permissions.

```html
<!-- Standard button with no restriction -->
<wje-button>Standard button</wje-button>

<!-- Without permission-check, the permission attribute alone is not evaluated -->
<wje-button permission="admin">Permission attribute only</wje-button>

<!-- Rendered if the user has admin or editor -->
<wje-button permission="admin,editor" permission-check>
  Requires permission
</wje-button>

<!-- Removed from the DOM if the permission is missing -->
<wje-button permission="admin" permission-check no-show>
  Hidden without permission
</wje-button>
```

## Important notes

- The `permission` attribute is split by commas internally, so use values such as `permission="admin,editor"`.
- `isPermissionFulfilled()` uses an “at least one permission matches” rule.
- If you want a custom storage key, set `Permissions.permissionKey` before the first permission read.
