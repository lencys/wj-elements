---
sidebar_label: 'Push Notifications - WonderPush'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Push Notifications - WonderPush

Send unlimited push notifications to iOS and Android devices.

Get started in minutes: [Ionic Quickstart Guide](https://docs.wonderpush.com/docs/ionic-quickstart).

Advanced segmentation, automation and personalization of push messages for €1 per 1000 subscribers.

Requires the Cordova plugin `wonderpush-cordova-sdk`.

[WonderPush push notifications](https://www.wonderpush.com) are the most effective way
to retain your users and grow your audience while remaining fully GDPR compliant.

<p>
  <a href="https://github.com/wonderpush/wonderpush-cordova-sdk" target="_blank" rel="noopener" className="git-link">github.com/wonderpush/wonderpush-cordova-sdk</a>
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
      $ npm install wonderpush-cordova-sdk {'\n'}$ npm install @awesome-cordova-plugins/wonderpush {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add wonderpush-cordova-sdk {'\n'}$ npm install @awesome-cordova-plugins/wonderpush {'\n'}
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

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { WonderPush } from '@awesome-cordova-plugins/wonderpush';


constructor(private wonderPush: WonderPush) { }

...

// Subscribe user
this.wonderPush.subscribeToNotifications()
  .then(() => console.log("User subscribed to notifications"))
  .catch((error: any) => console.error(error));


// Send an event (a purchase in this example)
this.wonderPush.sendEvent('purchase', {
  float_price: 12.99,
  string_sku: "X123456"
});

// Tag users (as customers)
this.wonderPush.addTag('customer');

// Personalize
// 1. Store user details.
// 2. Use those details to create segments.
// 3. Include those details in your notifications.
this.wonderPush.putProperties({
  string_name: 'John D.',
  int_age: 24
});

// GDPR
// 1. set REQUIRES_USER_CONSENT=true to enable GDPR compliance.
// 2. WonderPush doesn't start until setUserConsent(true) is called.
const onClick = (userConsent: boolean) => this.wonderPush.setUserConsent(userConsent);

// Listen to notification clicks
document.addEventListener('wonderpush.notificationOpen', function(event) {
  console.log('Notification opened', event.notification);
  if (event.notificationType === 'data') {
    console.log('Silent notification', event.notification);
  }
});
```
