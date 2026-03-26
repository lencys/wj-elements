---
title: 'FileUpload Item'
---

import Props from '@ionic-internal/component-api/v1/file-upload-item/props.md';
import Events from '@ionic-internal/component-api/v1/file-upload-item/events.md';
import Methods from '@ionic-internal/component-api/v1/file-upload-item/methods.md';
import Parts from '@ionic-internal/component-api/v1/file-upload-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/file-upload-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/file-upload-item/slots.md';

<head>
  <title>FileUploadItem | Item (file) within the FileUpload component</title>
  <meta
    name="description"
    content="The FileUploadItem element represents an individual item (file) within the FileUpload component. Displays details such as file name, size, upload progress, and provides actions such as."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The FileUploadItem element represents an individual item (file) within the FileUpload component. Displays details such as file name, size, upload progress, and provides actions such as deleting the file. This component is intended to be used in the context of the FileUpload component.

For more information on using FileUploadItem, navigate to the documentation of the [FileUpload](./file-upload) element

## Basic usage

This example shows a single uploaded-file row in its default state, as it would typically appear in a file list after selection.

import Basic from '@site/static/usage/v1/file-upload-item/basic/index.md';

<Basic />

## With picture

This example uses the image variant of the file-upload item so you can compare preview-driven content with a generic file row.

import Icon from '@site/static/usage/v1/file-upload-item/image/index.md';

<Icon />

## Is uploaded

The `is-uploaded` attribute displays the element in the uploaded file state.

import IsUploaded from '@site/static/usage/v1/file-upload-item/isuploaded/index.md';

<IsUploaded />


## When to use

Use `wje-file-upload-item` when users need to enter values, choose options, or trigger form-related actions.

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
