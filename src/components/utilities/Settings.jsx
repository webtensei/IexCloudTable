import React, {useEffect, useState} from 'react';
import styles from './Settings.module.css'
import DefaultInput from "../UI/Inputs/DefaultInput/DefaultInput";
const Settings = ({iexApiKey, setIexApiKey}) => {
    const [localIexApiKey, setLocalIexApiKey] = useState(localStorage.getItem('iexApiKey'))
    useEffect(()=>{
        if(iexApiKey !== localIexApiKey){
            setIexApiKey(localIexApiKey)
            localStorage.setItem('iexApiKey', localIexApiKey)
        }
    },[localIexApiKey])
    return (
        <div className={styles.settings}>
            <p className={styles.title}>Настройки</p>
            <hr/>
            <div>
                IEX Cloud API KEY: <DefaultInput value={localIexApiKey} onChange={e=>{setLocalIexApiKey(e.target.value)}} width={'50%'}></DefaultInput>
            </div>
        </div>
    );
};

export default Settings;