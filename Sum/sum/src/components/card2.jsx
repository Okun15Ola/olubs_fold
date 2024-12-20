import { useState, useEffect } from "react";
import aud from "../mg/audio.mp3"

const Card2 =(props)=>{
    
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
     <div className="w-full sm:w-full lg:w1/3 bg-neutral-900/5 sm:px-4 py-0 sm:py-2">
<div className="bg-neutral w-full sm:rounded-md p-2 text-md sm:border flex sm:block sm:border-neutral-500 font-thin">
    <div className="flex md:flex-col lg:flex-row sm:mt-4 item-start w-full">
        <img src={data4} alt="X" className="w-12 h-12 mr-2 rounded-full sm:border-neutral-300"/>
        <div className="flex flex-col">
        <h4 className="px-1">{data}</h4>
        <span className="text-sm font-normal italic sm:py-1 text-neutral-600">{data2}</span>
        </div>
    </div>
    <div className="w-full">
    <audio controls autoPlay className="sm:w-full w-52 mt:0 lg:rotate-0 md:rotate-90"><source src={data3}></source></audio>
    </div>
</div>
</div>
);
}
export default Card2;