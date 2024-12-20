import {useState, useEffect} from 'react';
import men from '../mg/menu.png'
import amen from '../mg/house-24.png'
import amen2 from '../mg/radio-2-16.png'
import amen3 from '../mg/music-2-16.png'





export const navItems = [
    { label:"Home", href: "/", mg: amen},
    { label:"Genre", href: "../genre", mg: amen3},
    { label:"Radio", href: "../radio", mg: amen2},
    { label:"Settings", href: "../settings", mg: amen3}
];
export const features =[
    {
        name: "Adona",
        art: "Nathanel Bassey",
    }, 
    {
        name: "Ese",
        art: "Sunday Theo",
    },
    {
        name: "Eledumare",
        art: "Nathanel Bassey",
    },
    {
        name: "Adona",
        art: "Nathanel Bassey",
    },
    {
        name: "Ese",
        art: "Sunday Theo",
    },
    {
        name: "Adona",
        art: "Nathanel Bassey",
    },
    {
        name: "Ese",
        art: "Sunday Theo",
    },
    {
        name: "Eledumare",
        art: "Nathanel Bassey",
    },
];
export const testim = [
    {
        user: "John Doe",
        company: "Apple Inc",
        image: "X",
        text: "I am extremely sat]sfed wth the servces provded.The team was responsve professonal and well mannered thans for all you do",
    },
    {
        user: "John Doe",
        company: "Apple Inc",
        image: "X",
        text: "I am extremely sat]sfed wth the servces provded.The team was responsve professonal and well mannered thans for all you do",
    },
    {
        user: "John Doe",
        company: "Apple Inc",
        image: "X",
        text: "I am extremely sat]sfed wth the servces provded.The team was responsve professonal and well mannered thans for all you do",
    },
    {
        user: "John Doe",
        company: "Apple Inc",
        image: "X",
        text: "I am extremely sat]sfed wth the servces provded.The team was responsve professonal and well mannered thans for all you do",
    },
    {
        user: "John Doe",
        company: "Apple Inc",
        image: "X",
        text: "I am extremely sat]sfed wth the servces provded.The team was responsve professonal and well mannered thans for all you do",
    },
    {
        user: "John Doe",
        company: "Apple Inc",
        image: "X",
        text: "I am extremely sat]sfed wth the servces provded.The team was responsve professonal and well mannered thans for all you do",
    },
];
 export const X =()=>{
    return(
        <>
        <h1>X</h1>
        </>
    )
}

const Menu =(props)=>{
    return(
        <>
        <img src={men} className='h-4'/>
        </>
    )
}
export default Menu;
