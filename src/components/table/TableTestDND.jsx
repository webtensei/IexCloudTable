import React, {useEffect, useState} from 'react';
import styles from './Table.module.css'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const Tabletest = ({data}) => {
    const [workflowData, setWorkFlowData] = useState(data)
    useEffect(()=>{setWorkFlowData(data)},[data])
    const dateOptions = {day:'numeric', month:'numeric',year:'numeric', hour:'numeric',minute:'numeric',second:'numeric'}
    const currencyOptions={style:'currency',currency:'USD'}
    const handleDragEnd = (results)=>{
        if(!results.destination) {
            return 0;
        }
        let tempData=[...workflowData]
        let [selectedRow] = tempData.splice(results.source.index,1)
        tempData.splice(results.destination.index, 0,selectedRow)
         setWorkFlowData(tempData)
    }
    return (
            <table className={styles.table} rules="groups">
                <thead className={styles.thead} >
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
                <DragDropContext onDragEnd={(results)=>handleDragEnd(results)}>
                <Droppable droppableId="tbody">
                    {(provided)=>(
                        <tbody ref={provided.innerRef} {...provided.droppableProps}>
                        {workflowData.map((el,index)=> (
                            <Draggable key={el.symbol} index={index} draggableId={el.symbol}>
                                {(provided)=>(
                                    <tr ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        key={el.symbol}
                                        className={'tableElement'}
                                        style={{borderBottom:'1px solid grey'}}
                                    >
                                        <th>{`${el.symbol}, ${el.companyName}`}</th>
                                        <th>{Intl.NumberFormat('RU-ru',currencyOptions).format(el.open)}</th>
                                        <th style={el.close>el.open ?{color:'green'} :el.close!==el.open?{color:'red'} :{}}>{Intl.NumberFormat('RU-ru',currencyOptions).format(el.close)}</th>
                                        <th>{Intl.NumberFormat('RU-ru',currencyOptions).format(el.previousClose)}</th>
                                        <th>{el.lastTradeTime?Intl.DateTimeFormat('RU-ru',dateOptions).format(el.lastTradeTime):'no info'}</th>
                                        <th>{Intl.NumberFormat().format(el.volume)}</th>

                                    </tr>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </tbody>
                    )}
                </Droppable>
        </DragDropContext>
            </table>


    );
};

export default Tabletest;