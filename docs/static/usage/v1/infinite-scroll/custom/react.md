```tsx
import React, { useState, useEffect } from 'react';
import {
  InfiniteScroll,
  Card,
  CardHeader,
  CardSubtitle,
  CardTitle,
  CardContent,
  Img,
  Grid,
  Row,
  Col,
} from '@elements/react';

function Example() {
  return (
    <wje-infinite-scroll url="/api/users" placement="wje-row" size="20" class="example" height="440px">
      <wje-grid>
        <wje-row wrap>
          <wje-col size="6" iterate>
            <wje-card>
              <wje-img src="{{image}}"></wje-img>
              <wje-card-header>
                <wje-card-subtitle>{{jobTitle}}</wje-card-subtitle>
                <wje-card-title>{{fullName}}</wje-card-title>
              </wje-card-header>
              <wje-card-content>
                <p>{{description}}</p>
              </wje-card-content>
            </wje-card>
          </wje-col>
        </wje-row>
      </wje-grid>
      <style>
        .example {
          padding: 0 1rem;
        }
      </style>
    </wje-infinite-scroll>
  );
}
export default Example;
```
