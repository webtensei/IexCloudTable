import React from 'react';
import NavigateButton from "./UI/Buttons/NavigateButton/NavigateButton";
import DefaultInput from "./UI/Inputs/DefaultInput/DefaultInput";

const Pagination = ({page,totalPages, setPage,limit}) => {
    function handleInputChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            if (Number(e.target.value) === 0){
                return setPage(0)
            }
            if (Number(e.target.value) > totalPages){
                return setPage(totalPages-1)
            }
            setPage(e.target.value-1)
        }
    }
    return (
        <div style={{height:'100%'}}>
            Страница:<DefaultInput width={'35px'} value={totalPages?page+1:page} onChange={e => {handleInputChange(e)}}/>/{totalPages}
            <NavigateButton disabled={page===0} onClick={e=>{setPage(page-1)}} style={{marginRight:2}}>Назад</NavigateButton>
            <NavigateButton disabled={page+1===totalPages} onClick={e=>{setPage(page+1)}}>Вперед</NavigateButton>
        </div>
    );
};

export default Pagination;