---
title: "ionic capacitor copy"
sidebar_label: "capacitor copy"
---




Copy web assets to native platforms

```shell
$ ionic capacitor copy [platform] [options]
```

`ionic capacitor copy` will do the following:
- Perform an Ionic build, which compiles web assets
- Copy web assets to Capacitor native platform(s)

### platform
The platform to copy (e.g. `android`, `ios`)




### Options

 - `--no-build`: Do not invoke an Ionic build 
      
 - `--inline`: Use inline source maps (only available on capacitor 4.2.0+) 
      
 - `--prod`: Flag to use the `production` configuration 
      


### Advanced Options

 - `--configuration=<conf>`: Specify the configuration to use. (or `-c`)
      
 - `--source-map`: Output source maps 
      
 - `--watch`: Rebuild when files change 
      
