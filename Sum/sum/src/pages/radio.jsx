import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
 
const Radio =()=>{
return(
    <>
        <div className="sm:w-5/6 w-full flex justify-between absolute right-0">
    <Navbar />

        <div className="tracking-wide h-fit sm:w-full w-full flex-col justify-end  flex sm:flex-col">
    <Searchbar />
    <div className="mt-4 sm:ml-0 sm:w-full  w-full">
            <div className="flex justify-between m-4 sm:m-0">
            <p className="p-10 text-xl text-neutral-400 ">Ooops <br></br>Radio service is not available in your location</p>

            </div>
            </div>
  
    </div>
    </div>

</>
)
}
export default Radio;