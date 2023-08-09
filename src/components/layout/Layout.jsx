import React, {useEffect, useState} from 'react';
import styles from './Layout.module.css'
import Navbar from "../navbar/Navbar";
import Utils from "../utilities/Utils";
import Pagination from "../Pagination";
import Content from "../Content";
import IexCloudService from "../../API/iexcloudService";
import {getPageCount} from "../../utils/pages"; // REFACTOR
import DefaultLoader from "../UI/Loaders/DefaultLoader/DefaultLoader";
import DefaultSelect from "../UI/Selects/DefaultSelect/DefaultSelect";
const Layout = () => {
    const [iexCloudData, setIexCloudData] = useState([])
    const [iexDataSectors, setIexDataSectors] = useState([])

    const [iexApiKey, setIexApiKey] = useState(localStorage.getItem('iexApiKey')||'')

    const [isLoading, setIsLoading] = useState(false)
    const [errors,setError] = useState([])

    const [collectionName, setCollectionName] = useState('Educational Services')

    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [limitPerPage, setLimitPerPage] = useState(10)

    // разбивать логику на отдельный utils не стал, оставил так.
    async function fetchCloudData(collectionName,iexApiKey) {
           try {
               setIsLoading(true)
               await IexCloudService.getSectorCollection(collectionName,iexApiKey)
                   .then((response)=> {
                       setIexCloudData(response.data);
                       setTotalPages(getPageCount(response.data.length,limitPerPage))
                       setError([])
                   })
           } catch (e) {
               switch (e.response.status) {
                   case 400:
                       setError([e.response.data.error])
                       break
                   case 403:
                       setError([e.response.data])
                       break
                   default:
                       setError(['uncaught error'])
                       break
               }
           }
           finally {
               setIsLoading(false)
           }
    }
    async function fetchIexDataSectors(iexApiKey){
            await IexCloudService.getAllSectors(iexApiKey)
                .then((response)=> {
                    setIexDataSectors(response.data)
                }).catch((e)=>{})
    }
    function forceReload() {
        void fetchCloudData(collectionName,iexApiKey)
    }
    useEffect(()=>{
        if(!localStorage.getItem('iexApiKey')){
            localStorage.setItem('iexApiKey','')
        }
        if(!localStorage.getItem('theme')){
            localStorage.setItem('theme','dark')
        }
    },[])

    useEffect( ()=>{
        void fetchCloudData(collectionName, iexApiKey)
    },[iexApiKey,collectionName])


    useEffect(()=>{
        if ( iexCloudData.length && !iexDataSectors.length){
            void fetchIexDataSectors(iexApiKey)
        }
    },[iexCloudData])
    return (
        <div className={styles.layout}>
            <div className={styles.navBar}>
                <Navbar/>
            </div>

            <div className={styles.utilities}>
                <Utils iexApiKey={iexApiKey} setIexApiKey={setIexApiKey} reload={forceReload}/>
            </div>

            <div className={styles.content}>
                {isLoading?<DefaultLoader/>:<Content errors={errors} data={iexCloudData} limit={limitPerPage} page={page}/>}
            </div>
            <div className={styles.selector}>
                { iexDataSectors.length?<DefaultSelect options={iexDataSectors} collectionName={collectionName} setCollectionName={setCollectionName} label={'Выбрать сектор: '}/>:<></>}
            </div>
            <div className={styles.pagination}>
                <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
            </div>
            <div className={styles.footer}>

            </div>
        </div>
    );
};

export default Layout;