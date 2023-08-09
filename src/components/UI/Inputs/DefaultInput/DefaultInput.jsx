import React from 'react';
import styles from './DefaultInput.module.css'
const DefaultInput = ({ value, width = 'auto', onChange}) => {
    return (
            <input value={value} onChange={onChange} style={{width:width}} className={styles.defaultInput}/>
    );
};

export default DefaultInput;