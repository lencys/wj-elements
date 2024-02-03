---
title: "Route"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v1/route/props.md';
import Events from '@ionic-internal/component-api/v1/route/events.md';
import Methods from '@ionic-internal/component-api/v1/route/methods.md';
import Parts from '@ionic-internal/component-api/v1/route/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/route/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/route/slots.md';

<head>
  <title>Route: API Route Component for Ionic Framework Apps</title>
  <meta name="description" content="Komponenta Route vykreslí zvolený komponent keď sa hodnota v jeho vlastnosti `url` zhoduje s URL v prehliadači." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

Komponenta Route vykreslí zvolený komponent keď sa hodnota v jeho vlastnosti `url` zhoduje s URL v prehliadači.

## Navigation Hooks

Navigation hooks can be used to perform tasks or act as navigation guards. Hooks are used by providing functions to the `beforeEnter` and `beforeLeave` properties on each `ion-route`. Returning `true` allows navigation to proceed, while returning `false` causes it to be cancelled. Returning an object of type `NavigationHookOptions` allows you to redirect navigation to another page.

## Interfaces

```typescript
interface NavigationHookOptions {
  /**
   * A valid path to redirect navigation to.
   */
  redirect: string;
}
```


## Použitie

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'Javascript' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="javascript">

```html
<wj-router>
  <wj-route url="/home" component="page-home"></wj-route>
  <wj-route url="/dashboard" component="page-dashboard"></wj-route>
  <wj-route url="/new-message" component="page-new-message"></wj-route>
  <wj-route url="/login" component="page-login"></wj-route>
</wj-router>
```

```javascript
const dashboardPage = document.querySelector('ion-route[url="/dashboard"]');
dashboardPage.beforeEnter = isLoggedInGuard;

const newMessagePage = document.querySelector('ion-route[url="/dashboard"]');
newMessagePage.beforeLeave = hasUnsavedDataGuard;

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
  
  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
  }
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

const confirmDiscardChanges = async () => {
  const alert = document.createElement('ion-alert');
  alert.header = 'Discard Unsaved Changes?';
  alert.message = 'Are you sure you want to leave? Any unsaved changed will be lost.';
  alert.buttons = [
    {
      text: 'Cancel',
      role: 'Cancel',
    },
    {
      text: 'Discard',
      role: 'destructive',
    }
  ];
  
  document.body.appendChild(alert);
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
```


</TabItem>


<TabItem value="stencil">

```typescript
import { Component, h } from '@stencil/core';
import { alertController } from '@ionic/core';

@Component({
  tag: 'router-example',
  styleUrl: 'router-example.css'
})
export class RouterExample {
  render() {
    return (
      <wj-router>
        <wj-route url="/home" component="page-home"></wj-route>
        <wj-route url="/dashboard" component="page-dashboard" beforeEnter={isLoggedInGuard}></wj-route>
        <wj-route url="/new-message" component="page-new-message" beforeLeave={hasUnsavedDataGuard}></wj-route>
        <wj-route url="/login" component="page-login"></wj-route>
      </wj-router>
    )
  }
}

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
  
  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
  }
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

const confirmDiscardChanges = async () => {
  const alert = await alertController.create({
    header: 'Discard Unsaved Changes?',
    message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
    buttons: [
      {
        text: 'Cancel',
        role: 'Cancel',
      },
      {
        text: 'Discard',
        role: 'destructive',
      }
    ]
  });
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-router>
    <ion-route url="/home" component="page-home"></ion-route>
    <ion-route url="/dashboard" component="page-dashboard" :beforeEnter="isLoggedInGuard"></ion-route>
    <ion-route url="/new-message" component="page-new-message" :beforeLeave="hasUnsavedDataGuard"></ion-route>
    <ion-route url="/login" component="page-login"></ion-route>
  </ion-router>
</template>

<script>
  import { alertController } from '@ionic/vue';

  const isLoggedInGuard = async () => {
    const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
    
    if (isLoggedIn) {
      return true;
    } else {
      return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
    }
  }
  
  const hasUnsavedDataGuard = async () => {
    const hasUnsavedData = await checkData(); // Replace this with actual validation
    
    if (hasUnsavedData) {
      return await confirmDiscardChanges();
    } else {
      return true;
    }
  }
  
  const confirmDiscardChanges = async () => {
    const alert = await alertController.create({
      header: 'Discard Unsaved Changes?',
      message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
        },
        {
          text: 'Discard',
          role: 'destructive',
        }
      ]
    });
    
    await alert.present();
    
    const { role } = await alert.onDidDismiss();
    
    return (role === 'Cancel') ? false : true;
  }
</script>
```

</TabItem>

</Tabs>

## Atribúty a Vlastnosti

### afterEnter

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `afterEnter` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### afterLeave

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `afterLeave` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |


### beforeEnter

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `beforeEnter` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### beforeLeave

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `beforeLeave` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### breadcrumbName

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `breadcrumbName` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### breadcrumbPath

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `breadcrumbPath` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### component

|  |  |
| --- | --- |
| Popis | Určuje komponentu, ktorý sa vykreslí, keď sa cesta zhoduje s URL prehliadača. Môže obsahovať funkciu, ktorá vráti komponentu. |
| Atribút | `component` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### name

|  |  |
| --- | --- |
| Popis | Poskytuje unikátny identifikátor pre cestu |
| Atribút | `name` |
| Typ | `"string"` |
| Predvolená hodnota | `undefined` |

### path

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `path` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### permissionsNeeded

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `permissionsNeeded` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### permissionCallback

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `permissionCallback` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### preserveActions

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `preserveActions` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### properties

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `properties` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### title

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `title` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

### url

|  |  |
| --- | --- |
| Popis |  |
| Atribút | `url` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

<Props />

## Eventy
<Events />

## Metódy
Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts
Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.
## CSS Custom vlastnosti
Pre tento komponent nie sú k dispozícií žiadne CSS Custom vlastnosti.

## Sloty
Pre tento komponent nie sú k dispozícii žiadne sloty.