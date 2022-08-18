import axios from "axios"


const findExchange = async (symbol)=>{
    try{
        const r = await axios.get(`http://api.coinlayer.com/api/live?access_key=7e5ff11c6314624067662064e3c8783b&symbols=BTC,LTC,XRP,DASH`);
        return r.data;
    }
    catch(e){
        if(e.response && e.response.data){
            return e.response.data;
        }
    }
}

export default findExchange;