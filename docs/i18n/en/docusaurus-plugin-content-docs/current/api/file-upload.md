---
title: 'FileUpload'
---

import Props from '@ionic-internal/component-api/v1/file-upload/props.md';
import Events from '@ionic-internal/component-api/v1/file-upload/events.md';
import Methods from '@ionic-internal/component-api/v1/file-upload/methods.md';
import Parts from '@ionic-internal/component-api/v1/file-upload/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/file-upload/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/file-upload/slots.md';

<head>
  <title>FileUpload | File Upload for Web Apps</title>
  <meta
    name="description"
    content="The FileUpload component provides a universal file upload function for web applications. It supports customizable attributes such as allowed file types, part size or also maximum file size,."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The FileUpload component provides a universal file upload function for web applications. It supports customizable attributes such as allowed file types, part size or also maximum file size, along with drag-and-drop methods and traditional file selection.

## Basic usage

import Basic from '@site/static/usage/v1/file-upload/basic/index.md';

<Basic />

## With the icon

import Icon from '@site/static/usage/v1/file-upload/icon/index.md';

<Icon />


## When to use

Use `wje-file-upload` when users need to enter values, choose options, or trigger form-related actions.

## When not to use

Do not use it as a decorative element without interaction. Prefer presentational components in that case.

## Accessibility

Always provide a label (`label`/`aria-label`), keep keyboard support, and surface clear validation feedback.

## Best Practices

- Keep validation rules and error behavior consistent across the entire form.
- Show loading or disabled states during async operations.
- Split complex forms into smaller sections with immediate feedback.

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
