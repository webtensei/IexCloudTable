import axios from "axios";
export default class IexCloudService  {
    static async getAllSectors(token){
        return await axios.get('https://cloud.iexapis.com/stable/ref-data/sectors/',{
            params:{
                token
            }
        })
    }
    static async getSectorCollection(collectionName,token){

        return await axios.get('https://cloud.iexapis.com/stable/stock/market/collection/sector', {
            params:{
                collectionName,
                token
            }
        })
    }

}