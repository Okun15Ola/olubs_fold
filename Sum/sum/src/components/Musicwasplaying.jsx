import { testim } from "./index";
import Card2 from "./card2";
import mage3 from '../mg/ace.jpg';

const Musicwasplaying = ()=>{
    return(
        <div className="sm:mt-0 mb-2 sm:mb-0 tracking-wide w-full bottom-0 sm:bg-transparent bg-neutral-800">
        <div className="flex flex-start justify-center flex-wrap">
        <Card2 sc={mage3} name="Addona" art="Nathanel Bassey"/>
        </div>
        </div>
    )
}
export default Musicwasplaying;