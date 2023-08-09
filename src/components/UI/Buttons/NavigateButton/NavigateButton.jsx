import React from 'react';
import styles from "../NavigateButton/NavigateButton.module.css";

const NavigateButton = ({disabled,onClick, children}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={styles.NavigateButton}
        >
            {children}
        </button>
    );
};

export default NavigateButton;