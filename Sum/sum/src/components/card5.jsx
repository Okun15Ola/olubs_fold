import { useState, useEffect } from "react";
import aud from "../mg/audio.mp3"

const Card5 =(props)=>{
    
    const [data, setData]=useState(null);
    const [data2, setData2]=useState(null);
    const [data3, setData3]=useState(null);
    const [data4, setData4]=useState(null);

      
    useEffect(()=>{
        const fetchData=()=>{
            const storedData = localStorage.getItem("name");
            const storedData2 = localStorage.getItem("art");
            const storedData3 = localStorage.getItem("src");
            const storedData4 = localStorage.getItem("img");
            if(storedData){
                setData((storedData));
                setData2((storedData2));
                setData3((storedData3));
                setData4((storedData4));
            }
        }
        const intervalid=setInterval(fetchData,10);
        return()=>{ clearInterval(intervalid);}
    },[]);

 return( 
     <div className="w-full sm:w-96 lg:w-full bg-neutral-900/5 sm:px-4 py-0 sm:py-2 border-b-2 border-[1px] border-neutral-900 sm:border-none">
<div className="bg-neutral w-full sm:h-32 sm:rounded-md p-2 text-md sm:border flex sm:block sm:border-neutral-500 font-thin">
    <div className="flex md:flex-col lg:flex-row sm:mt-4 item-start w-full">
        <div className="flex flex-col">
        <h4 className="px-1">{data}</h4>
        <span className="text-sm font-normal italic sm:py-1 text-neutral-600">{data2}</span>
        </div>
    </div>
</div>
</div>
);
}
export default Card5;