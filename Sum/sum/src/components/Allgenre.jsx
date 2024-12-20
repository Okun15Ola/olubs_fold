import { useState } from "react";
import Categories from "./Categories";
import Searchbar from './Searchbar';
import Card from "./card";
import aud from "../mg/ace.jpg"

const Allgenre = ()=>{
    const [isHidden, setIsHidden]=useState(true);
    const stores =()=>{   
        setIsHidden(false); 
    } 
    const sto =()=>{   
        setIsHidden(true); 
    } 
    
    return(
        <>
        {!isHidden && 
        <div className="w-full h-full">

     <Searchbar />
        <div className="w-full flex flex-col justify-center">
        <b onClick={sto} className="text-3xl w-fit text-neutral-700 z-[999] rounded-full rotate-180 ">^</b>
        <Card sc={aud} />
        </div>
        </div>
        }

        {isHidden &&
        <div className=" tracking-wide h-fit w-full">
           <Searchbar />
          <Categories cat="Afrobeat" click={stores} url="https://itunes.apple.com/us/rss//limit=20/json"/>
          <div className="mb-32"></div>
          
        </div>  
        }
        </>
    )
}
export default Allgenre;