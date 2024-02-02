---
title: "ionic live-update configure"
sidebar_label: "live-update configure"
---




Overrides Ionic Live Updates plugin configuration

```shell
$ ionic live-update configure [platform] [options]
```

This command overrides configuration for the Ionic Live Updates plugin (`cordova-plugin-ionic`) in Capacitor projects.

For Capacitor projects, if the plugin is already installed, it overrides the configuration variables in the native projects.

For Cordova projects this is not implemented because it is better to reinstall the plugin with the different parameters and let Cordova deal with the changes.

### platform
The native platform (e.g. `ios`, `android`)




### Options

 - `--app-id=<id>`: Your Appflow app ID 
      
 - `--channel-name=<name>`: The channel to check for updates from 
      
 - `--update-method=<name>`: The update method that dictates the behavior of the plugin 
      


### Advanced Options

 - `--max-store=<quantity>`: The maximum number of downloaded versions to store on the device 
      
 - `--min-background-duration=<seconds>`: The minimum duration after which the app checks for an update in the background 
      

## Examples

```shell
$ ionic live-update configure 
$ ionic live-update configure --app-id=abcd1234 --channel-name="Master" --update-method=background
$ ionic live-update configure --max-store=2 --min-background-duration=30
$ ionic live-update configure --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30
$ ionic live-update configure android
$ ionic live-update configure ios
```
