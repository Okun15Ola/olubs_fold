import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Allmusic from '../components/Allmusic';
import axios from 'axios';


const Apps = () => {
  

  
  return (
    <>
    <div className='flex lg:pl-0 md:pl-36'>
    <Navbar />
    <Allmusic />
    </div>
    </>
  );
}

export default Apps;
