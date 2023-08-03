import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useEffect } from 'react';

export const Webcomponent = ({color, min=0, max=100, value=50, step=1, bubble=false}) => {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM){
      import("@local/wjelements")
    }
  }, []);
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return (<span style={{
          display: "block",
          width: "100%",
          padding: "2rem",
          borderWidth: "1px",
          borderColor: "var(--ifm-toc-border-color)",
          borderStyle: "solid",
          borderRadius: "var(--ifm-code-border-radius)",
          marginBottom: "var(--ifm-leading)"
        }}>
          <wj-slider color={color} min={min} max={max} value={value} step={step} {...(bubble && {bubble})}></wj-slider>
        </span>)
      }}
    </BrowserOnly>
  )
};