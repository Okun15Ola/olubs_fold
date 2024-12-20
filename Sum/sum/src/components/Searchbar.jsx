import mage from '../mg/img1.jpg';
import mage2 from '../mg/image2.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Searchbar = () =>
    {

      const [searchedSongs, setSearchedSongs] = useState([]);
  
      // Step 2: Load data from localStorage when the component mounts
      useEffect(() => {
        const storedSongs = localStorage.getItem('searchedSongs');
        if (storedSongs) {
          setSearchedSongs(JSON.parse(storedSongs));
          searchedSongs.forEach((item)=>{
            item.timestamp = Date.now();
          }) // Load the stored songs into state
        }
      }, []); // Empty dependency array ensures this runs only once
    
    
      const handleSongSearch = () => {
        
      const searchArray= localStorage.getItem("searchValue");  

        const newSong = {searchArray};
        const updatedSongs = [...searchedSongs, newSong];
        setSearchedSongs(updatedSongs);
        localStorage.setItem('searchedSongs', JSON.stringify(updatedSongs));
        console.log(searchedSongs)
      };  
  

const history = useNavigate();      
const [searchItem, setSearchItem]=useState("");
const handleSearchChange = (event) =>{
  setSearchItem(event.target.value);
}
      const search =()=>{
      localStorage.setItem("searchValue",searchItem);
        history('../search');
        handleSongSearch();
      }



        return(
        <>
        <div className="w-full py-5 flex justify-center z-50 sm:px-2 md:px-6 px-4 sticky top-[-10px] bg-neutral-900/55 sm:bg-transparent bg-opacity-100 backdrop-blur-xl">
        <input type="search" value={searchItem} onChange={handleSearchChange} className="sm:w-2/4 md:w-11/12 w-10/12 h-8 rounded-xl placeholder:text-neutral-500 text-neutral-500 bg-transparent text-sm text-center border rounded-r-none border-neutral-400" placeholder="Search Music Here"/>
        <input onClick={search} type="submit" className="w-2/12 sm:w-1/12 h-8 rounded-xl placeholder:text-neutral-500 text-neutral-500 bg-transparent text-[9px] sm:text-sm text-center border rounded-l-none border-neutral-400" placeholder="Search"/>
        <button className="hidden md:hidden lg:block sm:block w-1/12 h-8 rounded-xl placeholder:text-neutral-500 ml-56 text-white sm:text-sm text-[7px] text-center  bg-green-500 border-neutral-500" placeholder="Log in">
        Log In
        </button>
      </div>
        </>
    );
}
export default Searchbar;