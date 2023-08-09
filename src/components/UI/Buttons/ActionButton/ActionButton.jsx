import React from 'react';
import styles from './ActionButton.module.css'
const ActionButton = ({onClick,children}) => {
    return (
                <button className={styles.ActionButton} onClick={onClick}>
                    {children}
                </button>
    );
};

export default ActionButton;