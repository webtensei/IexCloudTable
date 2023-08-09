import React from 'react';
import styles from './Table.module.css'

const Table = ({data}) => {
    const dateOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    const currencyOptions = {style: 'currency', currency: 'USD'}
    return (
        <table className={styles.table} rules="groups">
            <thead className={styles.thead}>
            <tr>
                <th className={styles.symbol}>
                    Символ, компания
                </th>
                <th className={styles.open}>
                    Открытие
                </th>
                <th className={styles.close}>
                    Закрытие
                </th>
                <th className={styles.lastClose}>
                    Прошлое закрытие
                </th>
                <th className={styles.closeTime}>
                    Последний трейд (локальное)
                </th>
                <th className={styles.volume}>
                    Объем
                </th>
            </tr>
            </thead>
            <tbody>
            {data.map((el, index) => {
                return <tr
                    key={el.symbol}
                    className={'tableElement'}
                    style={{borderBottom: '1px solid grey'}}
                >
                    <th>{`${el.symbol}, ${el.companyName}`}</th>
                    <th>{Intl.NumberFormat('RU-ru', currencyOptions).format(el.open)}</th>
                    <th style={el.close > el.open ? {color: 'green'} : el.close !== el.open ? {color: 'red'} : {}}>{Intl.NumberFormat('RU-ru', currencyOptions).format(el.close)}</th>
                    <th>{Intl.NumberFormat('RU-ru', currencyOptions).format(el.previousClose)}</th>
                    <th>{el.lastTradeTime ? Intl.DateTimeFormat('RU-ru', dateOptions).format(el.lastTradeTime) : 'no info'}</th>
                    <th>{Intl.NumberFormat().format(el.volume)}</th>

                </tr>
            })}
            </tbody>
        </table>


    );
};

export default Table;