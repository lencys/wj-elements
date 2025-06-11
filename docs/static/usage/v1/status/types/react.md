```tsx
import React from 'react';
import { Status, Icon } from '@elements/react';

function Example() {
  return (
    <wje-status color="success">
      <wje-icon name="check" size="2x-small"></wje-icon>
      <span slot="end">Available</span>
    </wje-status>
    <wje-status color="contrast">
      <span slot="end">Unavailable</span>
    </wje-status>
    <wje-status color="danger">
      <wje-icon name="minus" size="2x-small"></wje-icon>
      <span slot="end">Busy</span>
    </wje-status>
    <wje-status color="warning">
      <wje-icon name="clock" size="2x-small"></wje-icon>
      <span slot="end">Away</span>
    </wje-status>
    <wje-status color="primary">
      <wje-icon name="bell-off" size="2x-small"></wje-icon>
      <span slot="end">Do Not Disturb</span>
    </wje-status>
    <wje-status border="primary">
      <wje-icon name="arrow-right" size="2x-small"></wje-icon>
      <span slot="end">Out Of Office</span>
    </wje-status>
    <wje-status color="contrast">
      <span slot="end">Offline</span>
    </wje-status>
    <wje-status color="success">
      <span slot="end">Online</span>
    </wje-status>
    <wje-status color="warning">
      <wje-icon name="moon" size="2x-small"></wje-icon>
      <span slot="end">Idle</span>
    </wje-status>
    <wje-status color="contrast" border="success">
      <wje-icon name="check" size="2x-small"></wje-icon>
      <span slot="end">Remote Work</span>
    </wje-status>
    <wje-status color="complete">
      <wje-icon name="loader" size="2x-small"></wje-icon>
      <span slot="end">Loading</span>
    </wje-status>
    <wje-status color="complete">
      <wje-icon name="tools" size="2x-small"></wje-icon>
      <span slot="end">Maintenance</span>
    </wje-status>
    <wje-status color="danger">
      <wje-icon name="exclamation-mark" size="2x-small"></wje-icon>
      <span slot="end">Error</span>
    </wje-status>
    <wje-status color="warning">
      <wje-icon name="clock" size="2x-small"></wje-icon>
      <span slot="end">Pending</span>
    </wje-status>
    <wje-status color="contrast">
      <wje-icon name="clock-pause" size="2x-small"></wje-icon>
      <span slot="end">Suspended</span>
    </wje-status>
    <wje-status color="complete">
      <wje-icon name="progress" size="2x-small"></wje-icon>
      <span slot="end">In Progress</span>
    </wje-status>
    <wje-status color="success">
      <wje-icon name="check" size="2x-small"></wje-icon>
      <span slot="end">Completed</span>
    </wje-status>
    <wje-status color="danger">
      <wje-icon name="x" size="2x-small"></wje-icon>
      <span slot="end">Failed</span>
    </wje-status>
    <wje-status color="success">
      <wje-icon name="link" size="2x-small"></wje-icon>
      <span slot="end">Connected</span>
    </wje-status>
    <wje-status color="contrast-reverse">
      <wje-icon name="plug-off" size="2x-small"></wje-icon>
      <span slot="end">Disconnected</span>
    </wje-status>
    <wje-status color="success">
      <wje-icon name="check" size="2x-small"></wje-icon>
      <span slot="end">Active</span>
    </wje-status>
    <wje-status color="contrast">
      <!--          <wje-icon name="circle" size="2x-small">
      </wje-icon>-->
      <span slot="end">Inactive</span>
    </wje-status>
    <wje-status color="complete">
      <wje-icon name="player-play" size="2x-small"></wje-icon>
      <span slot="end">Starting</span>
    </wje-status>
    <wje-status color="danger">
      <wje-icon name="square" size="2x-small"></wje-icon>
      <span slot="end">Stopping</span>
    </wje-status>
    <wje-status color="warning">
      <wje-icon name="power" size="2x-small"></wje-icon>
      <span slot="end">Standby</span>
    </wje-status>
    <wje-status color="complete">
      <wje-icon name="settings" size="2x-small"></wje-icon>
      <span slot="end">Initializing</span>
    </wje-status>
    <wje-status color="contrast-reverse">
      <wje-icon name="x" size="2x-small"></wje-icon>
      <span slot="end">Terminated</span>
    </wje-status>
    <wje-status color="complete">
      <wje-icon name="refresh" size="2x-small"></wje-icon>
      <span slot="end">Updating</span>
    </wje-status>
    <wje-status color="warning">
      <wje-icon name="player-pause" size="2x-small"></wje-icon>
      <span slot="end">Paused</span>
    </wje-status>
    <wje-status color="complete">
      <wje-icon name="rotate" size="2x-small"></wje-icon>
      <span slot="end">Rebooting</span>
    </wje-status>
    <wje-status color="complete">
      <wje-icon name="rotate" size="2x-small"></wje-icon>
      <span slot="end">Resetting</span>
    </wje-status>
  );
}
export default Example;
```
