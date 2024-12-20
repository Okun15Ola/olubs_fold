import Card5 from "../components/card5";
import features from "../components/index"
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { useState, useEffect } from "react";
import SearchCard from "../components/searchcard";

const Settings = (props)=>{
     
const [isOpen, setIsOpen]=useState(true);
const set=()=>{
    setIsOpen(true);
    setIsClose(false);
}
const sets=()=>{
    setIsOpen(false);
}

const [isClose, setIsClose]=useState(false);
const ses=()=>{
    setIsClose(true);
    setIsOpen(false);
}
const sess=()=>{
    setIsClose(false);
}

const songs = JSON.parse(
    localStorage.getItem("clickedSongs"));
console.log(songs);
const search = JSON.parse(localStorage.getItem("searchedSongs"));
console.log(search);
return(
    <>
        <div className="sm:w-5/6 w-full flex justify-between absolute right-0">
    <Navbar />

        <div className="tracking-wide h-fit sm:w-full w-full flex-col justify-end  flex sm:flex">
    <Searchbar />

    <div className="sm:flex">

    <>
        <>
    {songs &&
        <div className="mt-4 sm:ml-14 sm:w-5/6  w-full">
            <div className="flex justify-between m-4 sm:m-0">

        <b className="ml-2 sm:ml-0 sm:mt-0">Your play history</b>
        {!isOpen ? <b onClick={set} className="rotate-180 ml-2 sm:ml-0 sm:mt-0">^</b> :<b onClick={sets} className="rotate ml-2 sm:ml-0 sm:mt-0">^</b>
        }
            </div>
{isOpen &&
    <div className="flex sm:flex flex-start bg-neutral-800 sm:bg-transparent lg:flex-row sm:flex-row rounded-lg justify-start w-full sm:flex-wrap md:flex-nowrap lg:flex-wrap flex-col lg:overflow-hidden md:overflow-x-scroll md:overflow-scroll  lg:overflow-y-hidden sm:overflow-hidden sm:w-full gap-0 sm:gap-2 pb-3 sm:space-x-1 mt-3 sm:mt-">
   {songs.map((items, index)=>(
       <div key={index}>
       <Card5 name={items.name} art={items.art} />
</div>
    ))
   }
        </div>
}
</div>

}
{!songs && 
    <div className="mt-4 sm:ml-14 sm:w-5/6  w-full">
        <div className="flex justify-between m-4 sm:m-0">

    <b className="ml-2 sm:ml-0 sm:mt-0">Your play history</b>
    {!isOpen ? <b onClick={set} className="rotate-180 ml-2 sm:ml-0 sm:mt-0">^</b> :<b onClick={sets} className="rotate ml-2 sm:ml-0 sm:mt-0">^</b>
    }
        </div>
   {isOpen &&
    <p className="p-10 text-neutral-700 ">You haven't played any song yet, play a song to see it in your song history</p>
}
    </div>
}
</>

        </>
        
{search && 
    <div className=" sm:ml-14 sm:w-5/6 mt-4 w-full">
        <div className="flex justify-between m-4 sm:m-0">

    <b className="ml-2 sm:ml-0 sm:mt-0">Your search history</b>{!isClose ? <b onClick={ses} className="rotate-180 ml-2 sm:ml-0 sm:mt-0">^</b> :<b onClick={sess} className="rotate ml-2 sm:ml-0 sm:mt-0">^</b>
    }
    </div>
    {isClose &&
    <div className="flex flex-start bg-transparent sm:bg-transparent lg:flex-row sm:flex-row rounded-lg justify-start w-full sm:flex-wrap md:flex-nowrap lg:flex-wrap flex-col lg:overflow-hidden md:overflow-x-scroll md:overflow-scroll  lg:overflow-y-hidden sm:overflow-hidden sm:w-full gap-0 sm:gap-2 pb-3 sm:space-x-1 mt-3 sm:mt-">
   {search.map((items, index)=>(
       <div key={index}>
        <SearchCard name={items.searchArray} />
</div>
    ))
}
        </div>
}
    </div>

}

{!search && 
    <div className=" sm:ml-14 sm:w-5/6 mt-4 w-full">
        <div className="flex justify-between m-4 sm:m-0">

    <b className="ml-2 sm:ml-0 sm:mt-0">Your search history</b>
    {isClose ? <b onClick={sess} className=" ml-2 sm:ml-0 sm:mt-0">^</b> :<b onClick={ses} className="rotate-180 ml-2 sm:ml-0 sm:mt-0">^</b>
    }
    </div>
    {isClose && <p className="p-10 text-neutral-700">You haven't searched any song yet, search a song to see it in your song history</p>
}
    </div>
}
        </div>
    
</div>
</div>
        </>
)
}

export default Settings;