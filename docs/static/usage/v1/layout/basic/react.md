```tsx
import React from 'react';
import { Container, Header, Footer, Aside } from '@elements/react';

function Example() {
  return (
    <>
      <wje-container vertical>
        <wje-header>Header</wje-header>
        <wje-main>Main</wje-main>
      </wje-container>

      <wje-container vertical>
        <wje-header>Header</wje-header>
        <wje-main>Main</wje-main>
        <wje-footer>Footer</wje-footer>
      </wje-container>

      <wje-container>
        <wje-aside width="200px">Aside</wje-aside>
        <wje-main>Main</wje-main>
      </wje-container>

      <wje-container vertical>
        <wje-header>Header</wje-header>
        <wje-container>
          <wje-aside width="200px">Aside</wje-aside>
          <wje-main>Main</wje-main>
        </wje-container>
      </wje-container>

      <wje-container vertical>
        <wje-header>Header</wje-header>
        <wje-container>
          <wje-aside width="200px">Aside</wje-aside>
          <wje-container vertical>
            <wje-main>Main</wje-main>
            <wje-footer>Footer</wje-footer>
          </wje-container>
        </wje-container>
      </wje-container>

      <wje-container>
        <wje-aside width="200px">Aside</wje-aside>
        <wje-container vertical>
          <wje-header>Header</wje-header>
          <wje-main>Main</wje-main>
        </wje-container>
      </wje-container>

      <wje-container>
        <wje-aside width="200px">Aside</wje-aside>
        <wje-container vertical>
          <wje-header>Header</wje-header>
          <wje-container>
            <wje-aside width="200px">Aside</wje-aside>
            <wje-aside width="200px">Aside</wje-aside>
            <wje-main>Main</wje-main>
          </wje-container>

          <wje-footer>Footer</wje-footer>
        </wje-container>
      </wje-container>
    </>
  );
}
export default Example;
```
