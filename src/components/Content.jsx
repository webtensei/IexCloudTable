import React from 'react';
import Table from "./table/Table";
import DefaultAlert from "./UI/Alerts/DefaultAlert/DefaultAlert";
import {getPagedData} from "../utils/pages";
const Content = ({errors, data,limit, page}) => {
    const pagedData = getPagedData(data,limit,page)
    return (
        <div style={{height:'100%', overflowX:'auto'}}>
            {errors.length
                ?errors.map((e,index)=>{
                    return <DefaultAlert key={index} message={e}/>
                })
                :<Table data={pagedData}/>
            }
        </div>
    );
};

export default Content;