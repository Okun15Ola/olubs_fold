import {features} from "./index.jsx"
import mage3 from '../mg/ace.jpg';
import Card3 from "./card3.jsx";
import { useState, useEffect } from "react";
import axios from 'axios'
import Load from './loading.jsx'
import Error from "./error.jsx";


const Categories = (props)=>{
  const apiurl = props.url;
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(true);

  useEffect(() => {
    const fetchTrendingMusic = async () => {
      try {
        // Make a request to the iTunes Search API
        const response = await fetch(apiurl);
        const data = await response.json();
        console.log(data);
        // Set the fetched tracks into the state
        setTracks(data.feed.entry);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending music:', error);
        setLoading(false);
        setErr(false);
      }
    };

    fetchTrendingMusic();
  }, []);
  if (!err) return(
    <>
    <div className="mr-[300px]">
    <Error />;
    </div>
    
    </>
  ) ;
    

  if (loading) return <Load />;
    return(
        <>
        <div className="mt-4 sm:ml-14">
        <b className="ml-2 sm:ml-0 sm:mt-10">{props.cat}</b>
        <div className="flex flex-start justify-start sm:flex-wrap overflow-x-scroll md:flex-nowrap lg:flex-wrap lg:overflow-hidden md:overflow-x-scroll md:overflow-scroll  lg:overflow-y-hidden sm:overflow-hidden sm:w-full gap-0 sm:gap-2 pb-3 sm:space-x-1 mt-3 sm:mt-">
            {tracks.map((tems, index)=>(
                <div key={index}>

                <Card3 name={tems["im:name"].label} sc={tems['im:image'][2].label} art={tems["im:artist"].label} click={props.click} src={tems.link.attributes}/>
                </div>
            ))}
        </div>
            </div>
        
    
            </>
    )
}

export default Categories;