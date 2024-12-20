import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
const Error = () => {
    return(
     <>
     <div className="sm:mt-0 mr-96- mb-2 mt-0 z-[990] h-full sm:mb-0 backdrop-blur-lg  fixed text-2xl top-0 tracking-wide w-full sm:bg-transparent text-center">
       <div className="mt-0 flex flex-col justify-center align-middle items-center h-full">

       <b className="mt-0">
        Network Error
        </b> 
     <div className="flex flex-start justify-center flex-wrap mt-0">
  <div className="h-[100px] w-[100px] animate-pulse text-2xl"><b className="text-[100px]">...</b>
  </div>
     </div>
       <div className="mt-0">
  <a href="" className="mt-24 sm:mt-36 bg-green-600 rounded-3xl text-sm p-2">Reload</a>
       </div>
     </div>
     </div>
     </>
       
     );
   };
   
   export default Error;