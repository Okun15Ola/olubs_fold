const Load = (props) => {
    return(
     <>
     <div className="sm:mt-0 mb-2 mt-0 z-[999] h-full sm:mb-0 backdrop-blur-lg fixed text-2xl top-0 tracking-wide w-full sm:bg-transparent text-center">
       <div className=" mt-0 flex flex-col justify-center align-middle items-center h-full">

       <b className="mt-0">
        Loading
        </b> 
     <div className="flex flex-start justify-center flex-wrap mt-10">
  <div className="h-[100px] w-[100px] border-[20px] border-white border-solid animate-spin border-t-neutral-900 rounded-full">
  </div>
     </div>
     {/* <div className="mt-10">
  <a href="" className="mt-24 sm:mt-36 bg-green-600 rounded-3xl text-sm p-2">Loading</a>
       </div> */}
     </div>
     </div>
     </>
       
     );
   };
   
   export default Load;