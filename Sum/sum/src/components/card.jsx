import {useState, useEffect} from "react"
import wed from "../mg/audio.mp3"

const Card =(props)=>{
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
    <div className="w-full mt-6 md:mt-20 lg:-mt-16 mb-24 sm:mt-0 sm:mb-0 sm:w-full lg:w1/3 z-50 sm:px-4 py-0 sm:py-2">
<div className="bg-neutral w-full sm:rounded-md p-2 text-md  flex items-center flex-col sm:block font-thin">
    <div className="flex flex-col justify-center sm:mt-4 items-center w-full">
        <img src={data4} alt="X" className=" h-72 sm:h-96 mr-2 rounded-md sm:border-neutral-300"/>
        <div className="flex flex-col sm:mt-2">
        <h4 className="px-1 sm:text-3xl text-2xl">{data}</h4>
        <span className="text-lg sm:text-lg font-normal italic sm:py-1 text-neutral-600">{data2}</span>
        </div>
    </div>
    <div className="w-full sm:mt-6 mt-8">
 
    <audio controls className="sm:w-full w-full mt:0"><source src={data3}></source></audio>
    </div>
</div>
</div>
)
}
export default Card;