---
sidebar_label: 'WebSocket Server'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# WebSocket Server

This plugin allows you to run a single, lightweight, barebone WebSocket Server.

<p>
  <a href="https://github.com/becvert/cordova-plugin-websocket-server" target="_blank" rel="noopener" className="git-link">github.com/becvert/cordova-plugin-websocket-server</a>
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
      $ npm install cordova-plugin-websocket-server {'\n'}$ npm install @awesome-cordova-plugins/web-socket-server{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-websocket-server {'\n'}$ npm install
      @awesome-cordova-plugins/web-socket-server {'\n'}
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
import { WebSocketServer } from '@awesome-cordova-plugins/web-socket-server';

constructor(private wsserver: WebSocketServer) { }

...

// start websocket server
this.wsserver.start(8888, {}).subscribe({
  next: server => console.log(`Listening on ${server.addr}:${server.port}`),
  error: error => console.log(`Unexpected error`, error);
});

// watch for any messages
this.wsserver.watchMessage().subscribe(result => {
  console.log(`Received message ${result.msg} from ${result.conn.uuid}`);
});

// send message to connection with specified uuid
this.wsserver.send({ uuid: '8e7c4f48-de68-4b6f-8fca-1067a353968d' }, 'Hello World');

// stop websocket server
this.wsserver.stop().then(server => {
  console.log(`Stop listening on ${server.addr}:${server.port}`);
});

```
