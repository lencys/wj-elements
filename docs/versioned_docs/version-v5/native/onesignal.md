---
title: 'OneSignal | OneSignal Cordova SDK Push Notification Plugin'
description: 'The OneSignal Cordova SDK plugin is a simple implementation for delivering push notifications on Ionic apps. Read our OneSignal Documentation to learn more.'
sidebar_label: 'OneSignal'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# OneSignal

The OneSignal plugin is an client implementation for using the [OneSignal](https://onesignal.com/) Service.
OneSignal is a simple implementation for delivering push notifications.

Please view the official [OneSignal Ionic SDK Installation](https://documentation.onesignal.com/docs/ionic-sdk-setup) guide
for more information.

#### Icons

If you want to use generated icons with command `ionic cordova resources`:

1. Add a file to your `hooks` directory called `copy_android_notification_icons.js`

2. Configure the hook in your config.xml

```
    <platform name="android">
        <hook type="after_prepare" src="hooks/copy_android_notification_icons.js" />
    </platform>
```

3. Put the following code in it:

```
#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var filestocopy = [{
    "resources/android/icon/drawable-hdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-hdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-mdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-mdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xhdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-xhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxhdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-xxhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxxhdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-xxxhdpi/ic_stat_onesignal_default.png"
} ];

module.exports = function(context) {

    // no need to configure below
    var rootdir = context.opts.projectRoot;

    filestocopy.forEach(function(obj) {
        Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            var srcfile = path.join(rootdir, key);
            var destfile = path.join(rootdir, val);
            console.log("copying "+srcfile+" to "+destfile);
            var destdir = path.dirname(destfile);
            if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
                fs.createReadStream(srcfile).pipe(
                    fs.createWriteStream(destfile));
            }
        });
    });

};
```

3. From the root of your project make the file executable:
   `$ chmod +x hooks/copy_android_notification_icons.js`

<p>
  <a href="https://github.com/OneSignal/OneSignal-Cordova-SDK" target="_blank" rel="noopener" className="git-link">github.com/OneSignal/OneSignal-Cordova-SDK</a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer premium advisory services for both community plugins and premier plugins.</p>
    <DocsButton className="native-ee-detail">Contact Us Today!</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">Installation</a>
</h2>
<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install onesignal-cordova-plugin {'\n'}$ npm install @awesome-cordova-plugins/onesignal {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add onesignal-cordova-plugin {'\n'}$ npm install @awesome-cordova-plugins/onesignal {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">Learn More</a> or if you're interested in an enterprise version of this plugin <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us</a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- Amazon Fire OS
- Android
- iOS
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

constructor(private oneSignal: OneSignal) { }

...

this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

this.oneSignal.handleNotificationReceived().subscribe(() => {
 // do something when notification is received
});

this.oneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
});

this.oneSignal.endInit();
```
