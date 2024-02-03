import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

export default function ColorPalette({ ...props }) {

  return (
    <div className={styles.colorPalette}>
      <div className={styles.color} style={{ backgroundColor: 'var(--wj-color-primary)', color: 'white'}}>
        <span>Primary</span><span>#7252D3</span>
      </div>
      <div className={styles.color} style={{ backgroundColor: 'var(--wj-color-complete)', color: 'white'}}>
        <span>Complete</span><span>#0072EC</span>
      </div>
      <div className={styles.color} style={{ backgroundColor: 'var(--wj-color-success)', color: 'white'}}>
        <span>Success</span><span>#19AD79</span>
      </div>
      <div className={styles.color} style={{ backgroundColor: 'var(--wj-color-warning)'}}>
        <span>Warning</span><span>#FFd945</span>
      </div>
      <div className={styles.color} style={{ backgroundColor: 'var(--wj-color-danger)', color: 'white'}}>
        <span>Danger</span><span>#D83C31</span>
      </div>
      <div className={styles.color} style={{ backgroundColor: 'var(--wj-color-info)', color: 'white'}}>
        <span>Info</span><span>#3B4752</span>
      </div>
      <div className={styles.color} style={{ backgroundColor: 'var(--wj-color-menu)', color: 'white'}}>
        <span>Menu</span><span>#2b303b</span>
      </div>
    </div>
  );
}
