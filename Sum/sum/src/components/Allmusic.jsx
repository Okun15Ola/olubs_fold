import { useState } from "react";
import Categories from "./Categories";
import Searchbar from './Searchbar';
import Card from "./card";
import aud from "../mg/ace.jpg"

const Allmusic = ()=>{
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
          <Categories cat="Hot 100 US" click={stores} url="https://itunes.apple.com/us/rss/topsongs/limit=20/json"/>
          <Categories cat="Hot 100 NG" click={stores} url="https://itunes.apple.com/ng/rss/topsongs/limit=12/json
"/>
          <Categories cat="Hot 100 UK" click={stores} url="https://itunes.apple.com/gb/rss/topsongs/limit=12/json
"/>
          <Categories cat="Trending SA" click={stores} url="https://itunes.apple.com/sa/rss/topsongs/limit=12/json
"/>
          <Categories cat="Trending Ghana" click={stores} url="https://itunes.apple.com/gh/rss/topsongs/limit=12/json
"/>
          <div className="mb-32"></div>
          
        </div>
        }
        </>
    )
}
export default Allmusic;