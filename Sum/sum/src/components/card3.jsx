
import React, { useState, useEffect } from 'react';
import aud from "../mg/audio.mp3"

// {const store = localStorage.setItem("name","klkl");}



const Card3 =(props)=>{



    // Step 1: Initialize state with an empty array
    const [clickedSongs, setClickedSongs] = useState([]);
  
    // Step 2: Load data from localStorage when the component mounts
    useEffect(() => {
      const storedSongs = localStorage.getItem('clickedSongs');
      if (storedSongs) {
        setClickedSongs(JSON.parse(storedSongs));
        // Load the stored songs into state
      }
    }, []); // Empty dependency array ensures this runs only once
  
  
    const handleSongClick = () => {
      
    const sname= localStorage.getItem("name");  
     const img = localStorage.getItem("img");   
      const art = localStorage.getItem("art");   
      const src = localStorage.getItem("src"); 
      const newSong = {sname, art, src, img };
      const updatedSongs = [...clickedSongs, newSong];
      setClickedSongs(updatedSongs);
      localStorage.setItem('clickedSongs', JSON.stringify(updatedSongs));
      console.log(clickedSongs)
    };  


    const store =()=>{
        localStorage.setItem("name",props.name);  
        localStorage.setItem("img",props.sc);   
        localStorage.setItem("art",props.art);   
        localStorage.setItem("src",props.src); 
        handleSongClick();
    } 
    
    return(
<>
        <div className="sm:w-1/5 w-1/3 px-1 py-1 mx-2 sm:mx-0 hover:scale-75 ease-in-out-2" onClick={()=>{props.click(); store();}}>
   <div className="rounded-xl  p-1 pt-0 text-md font-thin h-full sm:h-60 sm:w-52 w-44 flex flex-col items-center justify-center">
       <div className="flex flex-col mt-1 h-full items-center justify-center w-full">
           <img src={props.sc} alt="X" className="bg-neutral-500 w-full h-full mr-0 rounded-xl self-center border-neutral-300"/>
           
       </div>
       <div className="flex flex-col mt-0 items-start justify-center">
           <h4 className="text-white sm:text-base text-[16px] bg-clip-text text-wrap">{props.name}
           </h4>
           <span className="text-[10px] sm:text-xs font-normal italic py-0 text-neutral-600">{props.art}</span>
           </div>
   </div>
   </div>

</>
   );
   }
   export default Card3;