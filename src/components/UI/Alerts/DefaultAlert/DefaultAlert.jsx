import React, {useState} from 'react';
import styles from './DefaultAlert.module.css'
import closeIcon from '../../../../assets/img/closeIcon.svg'
const DefaultAlert = ({message}) => {
    const [handleClose, setHandleClose] = useState(false)
    return (
        <div className={styles.allertBox} style={handleClose?{display:'none'}:{}}>
            <p className={styles.allertText}>{message}</p>
            <button
                className={styles.closeHandler}
                onClick={e=>{setHandleClose(true)}}
            >
                <img className={styles.closeIcon} alt={'Закрыть'} src={closeIcon}/>
            </button>
        </div>
    );
};

export default DefaultAlert;