import {features} from "../components/index.jsx"
import Error from "../components/error.jsx";
import Load from "../components/loading.jsx";
import Card4 from "../components/card4.jsx"
import Searchbar from "../components/Searchbar.jsx";
import Navbar from "../components/Navbar.jsx";
import { useState, useEffect } from "react";
import Card from "../components/card.jsx";

const Search = (props)=>{
    const [data, setData]=useState(null);
    const [data2, setData2]=useState(null);
    useEffect(()=>{
        const fetchData=()=>{
            const storedData2 = localStorage.getItem("name");
            const storedData = localStorage.getItem("searchTerm");
            if(storedData){
                setData((storedData));
                setData2((storedData2));
            }
        }
            const intervalid=setInterval(fetchData,10);
            return()=>{ clearInterval(intervalid);}
        },[]);

    const [isHidden, setIsHidden]=useState(true);
    const sto =()=>{   
        setIsHidden(false); 
    }
      const store =()=>{   
        setIsHidden(true); 
    } 


    const apiurl = `https://itunes.apple.com/search?term=${data}&entity=song&limit=30`;
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
    if (!err) return <Error />;
  
    if (loading) return <Load />;

    return(
<>
{!isHidden && 
     <div className="w-full h-full">
         <Navbar/>

        <div className="sm:w-9/12  flex flex-col justify-center sm:ml-80">
            <Searchbar />
        <b onClick={store} className="text-3xl w-fit text-neutral-700 z-[999] rounded-full rotate-180 ">^</b>
        <Card />
        </div>
        </div>
        }
        {isHidden && 
        <>
        <Navbar />
        <div className="sm:flex sm:justify-center sm:h-fit sm:w-9/12 sm:ml-72 md:ml-32 lg:ml-80">
        <Searchbar />
        
</div>
        <div className="mt-0 sm:ml-0 sm:w-11/12 sm:pl-64">
        <b className="ml-2 sm:ml-0 sm:mt-10 h-full">Results</b>
        <div className="flex flex-start w-lvw justify-center sm:flex-wrap h-full flex-wrap overflow-y-hidden sm:overflow-hidden sm:w-full gap-0 sm:gap-2 pb-3 sm:space-x-1 mt-3">
            {tracks.map((tems, index)=>(
                <div key={index}>

<Card4 name={tems["im:name"].label} sc={tems['im:image'][2].label} art={tems["im:artist"].label} click={props.click} src={tems.link.attributes}/>
</div>
            ))}
        </div>
            </div>
            </>
    
        }
        </>
           
    )
}
export default Search;