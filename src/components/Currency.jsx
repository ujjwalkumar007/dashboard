import React from 'react'
import findExchange from "../utils/findExchange"
function Currency({currency_name,symbol,Icon,color}) {

    const [data,setData] = React.useState(null);

    // React.useEffect(()=>{
    //     findExchange().then((d)=>{
    //         console.log(d);
    //         setData(d)
    //     })
    // },[])
   
  return (
    <div className="bg-gray-600 rounded-md py-3 px-3 flex items-start justify-between">
        <div className="currency-symbol flex gap-2 items-center">
            <div className={`cuurency_sign w-12 h-12 ${color} text-3xl flex items-center justify-center text-black rounded-full`}>
                <Icon/>
            </div>
            <p>{currency_name}</p>
        </div>
        <div className="currency-meta">
                <p>0.0002{symbol}</p>
                <p>0.175 USD</p>
        </div>
    </div>
  )
}

export default Currency