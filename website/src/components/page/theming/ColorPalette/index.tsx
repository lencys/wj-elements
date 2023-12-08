import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from './styles.module.css';

export default function ColorPalette({ ...props }) {
  const [colors, setColors] = useState([]);

  const [activeColor, setActiveColor] = useState('');

  const el = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setColors(['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'dark', 'medium', 'light']);
  }, []);

  const getColors = useCallback(
    (color) => ({
      baseColor: getComputedStyle(el.current).getPropertyValue(`--wj-color-${color}`),
      shadeColor: getComputedStyle(el.current).getPropertyValue(`--wj-color-${color}-shade`),
      tintColor: getComputedStyle(el.current).getPropertyValue(`--wj-color-${color}-tint`),
    }),
    []
  );

  return (
    <div className="color-palette">
      <div style={{ backgroundColor: '#7252D3', color: 'white' }}>
        <p>Primary: #7252D3</p>
      </div>
      <div style={{ backgroundColor: '#0072EC', color: 'white' }}>
        <p>Complete: #0072EC</p>
      </div>
      <div style={{ backgroundColor: '#19AD79', color: 'white' }}>
        <p>Success: #19AD79</p>
      </div>
      <div style={{ backgroundColor: '#FFd945' }}>
        <p>Warning: #FFd945</p>
      </div>
      <div style={{ backgroundColor: '#D83C31', color: 'white' }}>
        <p>Danger: #D83C31</p>
      </div>
      <div style={{ backgroundColor: '#3B4752', color: 'white' }}>
        <p>Info: #3B4752</p>
      </div>
      <div style={{ backgroundColor: '#2b303b', color: 'white' }}>
        <p>Menu: #2b303b</p>
      </div>
      </div>
  );
}
