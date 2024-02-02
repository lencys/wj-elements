---
title: "ionic cordova compile"
sidebar_label: "cordova compile"
---




Compile native platform code

```shell
$ ionic cordova compile [platform] [options]
```

Like running `cordova compile` directly, but provides friendly checks.

### platform
The platform to compile (`android`, `ios`)




### Options

 - `--debug`: Mark as a debug build 
      
 - `--release`: Mark as a release build 
      
 - `--device`: Deploy build to a device 
      
 - `--emulator`: Deploy build to an emulator 
      


### Advanced Options

 - `--buildConfig=<file>`: Use the specified build configuration 
      

## Examples

```shell
$ ionic cordova compile ios
$ ionic cordova compile ios --device
$ ionic cordova compile android
```
