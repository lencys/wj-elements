---
title: "ionic capacitor sync"
sidebar_label: "capacitor sync"
---




Sync (copy + update) an Ionic project

```shell
$ ionic capacitor sync [platform] [options]
```

`ionic capacitor sync` will do the following:
- Perform an Ionic build, which compiles web assets
- Copy web assets to Capacitor native platform(s)
- Update Capacitor native platform(s) and dependencies
- Install any discovered Capacitor or Cordova plugins

### platform
The platform to sync (e.g. `android`, `ios`)




### Options

 - `--no-build`: Do not invoke an Ionic build 
      
 - `--inline`: Use inline source maps  (only available on capacitor 4.1.0+) 
      
 - `--prod`: Flag to use the `production` configuration 
      


### Advanced Options

 - `--configuration=<conf>`: Specify the configuration to use. (or `-c`)
      
 - `--source-map`: Output source maps 
      
 - `--watch`: Rebuild when files change 
      
