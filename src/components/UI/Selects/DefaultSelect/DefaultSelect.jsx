import React from 'react';
import styles from './DefaultSelect.module.css'
const DefaultSelect = ({options,collectionName, label, setCollectionName}) => {
    return (
        <div>
            <label>{label}</label>
            <select className={styles.defaultSelect} defaultValue={collectionName} onChange={e => {setCollectionName(e.target.value)}}>
                {options.map((e)=>{
                    return <option value={e.name} key={e.name}>{e.name}</option>
                })}
            </select>
        </div>
    );
};

export default DefaultSelect;