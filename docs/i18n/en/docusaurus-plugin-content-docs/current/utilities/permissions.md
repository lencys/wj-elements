# Permissions

Webjet Elements provides a permission management system that allows you to show or hide components based on user-defined permissions.

## API for permissions

The `Permissions` class provides an interface for managing permissions in an application.

## Features

| Name            | Description                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `permissionKey` | Sets or gets the key used to store permissions in localStorage (default: 'permissions'). |
| `permissions`   | Sets or gets an array of permissions. Permissions are stored in localStorage.                               |

## Methods

| Name                                 | Parameters                                                 | Return value | Description                                                                                |
| ------------------------------------ | ---------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------ |
| `includesKey(key)`                   | key - string representing the permission                   | boolean      | Checks whether a specific permission is included in the permissions array. |
| `isPermissionFulfilled(permissions)` | permissions - an array of strings representing permissions | boolean      | Checks if at least one of the permissions in the provided field is met.    |

## Use

### Setting permissions

You can set permissions as follows:

```js
import { Permissions } from 'wj-elements';

// Sets the permissions field
Permissions.permissions = ['admin', 'editor', 'viewer'];

// Changes the key used in localStorage (optional)
Permissions.permissionKey = 'myPermissions';
```

### Checking entitlements

```js
// Check if the user has a specific permission
const hasAdminPermission = Permissions.includesKey('admin');

// Check if the user has at least one of the permissions
const hasPermission = Permissions.isPermissionFulfilled(['admin', 'editor']);
```

### Example of use in a component

Components can use attributes related to permissions:

```html
<!-- Štandardné tlačidlo bez obmedzení -->
<wje-button>Standard button</wje-button>

<!-- Tlačidlo, ktoré vyžaduje oprávnenie "test" -->
<wje-button permission="test" permission-check>Requires permission</wje-button>

<!-- Tlačidlo, ktoré sa nezobrazí, ak používateľ nemá oprávnenie "test" -->
<wje-button permission="test" permission-check no-show>Hidden without permission</wje-button>

<!-- Vždy skryté tlačidlo -->
<wje-button no-show>Hidden button</wje-button>
```