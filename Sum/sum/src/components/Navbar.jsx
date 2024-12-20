import {navItems} from "./index.jsx"
import { useState } from "react";
import Musicwasplaying from "./Musicwasplaying.jsx";
import tem from "../mg/music-2-16.png";
import {Link} from 'react-router-dom'
const Navbar = () => {
const [mobleDrawerOpen, setmobleDrawerOpen]= useState(false);
const show=()=>{
    setmobleDrawerOpen(!mobleDrawerOpen);
};




  // Create a reference for the target component


    return(  <nav className="fixed sm:fixed sm:block flex flex-col-reverse sm:rounded-xl rounded-none bottom-0 sm:top-0 sm:left-0 sm:w-1/6 md:w-2/12 w-full sm:h-lvh box-border z-50 py-0 sm:py-14 sm:backdrop-blur-none bg-neutral-900 sm:bg-transparent md:backdrop-blur-lg border-bottom-neutral-700/80 ">

<div className=" justify-center sm:flex gap-2 items-center hidden">
<img src={tem} alt="" className="h-1/3" />DimaMusc
    <b className="text-neutral-200"></b>
</div>
<div className="sm:py-20 py-0 px-1 items-center ">
<ul className="flex sm:flex-col  sm:space-y-5 space-y-0  space-x-1 md:items-center items-center">
  {navItems.map((tem,index)=>(
    <li key={index} className="active:bg-black  w-3/5 h-5/6 sm:justify-start sm:pl-4 md:pl-0 justify-center flex sm:gap-4   rounded-xl text-center py-1 hover:bg-green-600">
 
      <Link to={tem.href} className="active:bg-black  w-full h-full sm:justify-start sm:pl-4 justify-center flex sm:gap-4   rounded-xl text-center py-1 hover:bg-green-600">
      <img src={tem.mg} alt="" className="h-1/3" /><b className="hidden sm:block">{tem.label}</b>

      </Link>
</li>
  ))}
  
</ul>
</div>
<Musicwasplaying />
  </nav>
    );
}
export default Navbar;