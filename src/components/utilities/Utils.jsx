import React, {useState} from 'react';
import styles from './Utils.module.css'
import ActionButton from "../UI/Buttons/ActionButton/ActionButton";
import settingsIcon from '../../assets/img/settingsIcon.svg'
import reloadIcon from '../../assets/img/reloadIcon.svg'
import {ComplexAnimatedModal} from "../UI/Modal/ComplexAnimatedModal";
import Settings from "./Settings";
const Utils = ({iexApiKey, setIexApiKey, reload}) => {
    const [openedSettings, setOpenedSettings] = useState(false);

    return (
        <div className={styles.wrapper}>
            <ActionButton onClick={e=>{setOpenedSettings(true)}}><img alt={'Настройки'} src={settingsIcon}/></ActionButton>
            <ComplexAnimatedModal opened={openedSettings} onClose={e=>{setOpenedSettings(false)}}><Settings iexApiKey={iexApiKey} setIexApiKey={setIexApiKey}/></ComplexAnimatedModal>
            <ActionButton onClick={e=>{reload()}}><img alt={'Принудительное обновление данных'} src={reloadIcon}/></ActionButton>
        </div>
    );
};

export default Utils;