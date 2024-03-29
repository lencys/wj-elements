---
sidebar_label: 'NFC'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# NFC

The NFC plugin allows you to read and write NFC tags. You can also beam to, and receive from, other NFC enabled devices.

Use to

- read data from NFC tags
- write data to NFC tags
- send data to other NFC enabled devices
- receive data from NFC devices

This plugin uses NDEF (NFC Data Exchange Format) for maximum compatibilty between NFC devices, tag types, and operating systems.

<p>
  <a href="https://github.com/chariotsolutions/phonegap-nfc" target="_blank" rel="noopener" className="git-link">github.com/chariotsolutions/phonegap-nfc</a>
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
      $ npm install phonegap-nfc {'\n'}$ npm install @awesome-cordova-plugins/nfc {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add phonegap-nfc {'\n'}$ npm install @awesome-cordova-plugins/nfc {'\n'}
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

- Android
- iOS
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';

constructor(private nfc: NFC, private ndef: Ndef) { }

...

// Read NFC Tag - Android
// Once the reader mode is enabled, any tags that are scanned are sent to the subscriber
 let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
 this.readerMode$ = this.nfc.readerMode(flags).subscribe(
     tag => console.log(JSON.stringify(tag)),
     err => console.log('Error reading tag', err)
 );

// Read NFC Tag - iOS
// On iOS, a NFC reader session takes control from your app while scanning tags then returns a tag
try {
    let tag = await this.nfc.scanNdef();
    console.log(JSON.stringify(tag));
 } catch (err) {
     console.log('Error reading tag', err);
 }

```

For more details on NFC tag operations see https://github.com/chariotsolutions/phonegap-nfc
