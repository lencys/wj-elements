---
title: "ionic cordova plugin"
sidebar_label: "cordova plugin"
---




Manage Cordova plugins

```shell
$ ionic cordova plugin [action] [plugin] [options]
```

Like running `cordova plugin` directly, but provides friendly checks.

### action
`add` or `remove` a plugin; `ls` or `save` all project plugins


### plugin
The name of the plugin (corresponds to `add` and `remove`)




### Options

 - `--variable=<KEY=VALUE>`: Specify plugin variables 
      


### Advanced Options

 - `--force`: Force overwrite the plugin if it exists (corresponds to `add`) 
      

## Examples

```shell
$ ionic cordova plugin 
$ ionic cordova plugin add cordova-plugin-inappbrowser@latest
$ ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXX
$ ionic cordova plugin rm cordova-plugin-camera
```
