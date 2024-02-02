---
title: "ionic cordova platform"
sidebar_label: "cordova platform"
---




Manage Cordova platform targets

```shell
$ ionic cordova platform [action] [platform] [options]
```

Like running `cordova platform` directly, but adds default Ionic icons and splash screen resources (during `add`) and provides friendly checks.

### action
`add`, `remove`, or `update` a platform; `ls`, `check`, or `save` all project platforms


### platform
The platform that you would like to add (`android`, `ios`)




### Options

 - `--no-resources`: Do not pregenerate icons and splash screen resources (corresponds to `add`) 
      

## Examples

```shell
$ ionic cordova platform 
$ ionic cordova platform add ios
$ ionic cordova platform add android
$ ionic cordova platform rm ios
```
