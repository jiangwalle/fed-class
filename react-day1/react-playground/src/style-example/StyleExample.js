import React from 'react';
import styles from './StyleExample.module.css';

const StyleExample = (props) => {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Style Examples</h2>
      <h3>方式1：使用style内联方式</h3>
      <h3>方式2：使用global样式import</h3>
      <h3>方式3：使用import class with name</h3>
      <p>This is a testing message. The word <span className={styles.highlight}>movie</span> will be hightlighted.</p>
    </div>
  )
}

export default StyleExample;