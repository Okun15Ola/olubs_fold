import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Allgenre from '../components/Allgenre';


const Genre = () => {
  

  
  return (
    <>
    <div className='flex lg:pl-0 md:pl-36'>
    <Navbar />
    <Allgenre />
    </div>
    </>
  );
}

export default Genre;
