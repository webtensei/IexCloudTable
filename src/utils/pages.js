const getPageCount = (totalCount, limit) =>{
    return Math.ceil(totalCount/limit)
}
const getPagedData = (data,limit,page)=>{
    return data.slice((page)*limit, page=0?limit:page*limit+10)
}


export {getPageCount, getPagedData}