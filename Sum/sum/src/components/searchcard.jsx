
 const SearchCard =(props)=>{
 return( 
     <div className="w-full sm:w-full lg:w-60 bg-neutral-900/5 sm:px-4 py-0 sm:py-2 border-b-2 border-[1px] border-neutral-900 sm:border-none">
<div className="bg-neutral w-full sm:h-10 sm:rounded-md p-2 text-md sm:border flex sm:block sm:border-neutral-500 font-thin">
    <div className="flex md:flex-col lg:flex-row sm:mt-0 item-start w-full">
        <div className="flex flex-col">
        <h4 className="px-1">{props.name}</h4>
        </div>
    </div>
</div>
</div>
);
}
export default SearchCard;