// src/components/Playground.tsx
import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { CodePreview } from 'docusaurus-plugin-code-preview';

export const Wjplayground = (props) => {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM){
      import("@local/wjelements")
    }
  }, []);
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <CodePreview {...props} src={useBaseUrl(props.src)} />
      }}
    </BrowserOnly>);
}