'use client'
import React, { PropsWithChildren} from 'react';
import styles from '../page.module.css'

function Wrapper({ children, title }: PropsWithChildren & { title: string }) {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
        <div className={styles.wrapper_content}>
              {children}
        </div>
    </div>
  );
}

export default Wrapper;
