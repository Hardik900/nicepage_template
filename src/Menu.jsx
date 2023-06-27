import React from 'react'
import {menu} from './Data'
import MenuCard from './MenuCard';

function Menu(){
    return(
        <div className='container menu-container'>
            <h1>View Our Menu</h1>
            <p>Sample text. Click to select the Text Element. Image from </p>
            <div className='qq'>
                <MenuCard img='main.jpg' items='hot pizza' />
                <MenuCard img='main.jpg' items='hot pizza' /> 
                {/* <MenuCard img='main.jpg' items='salads' />
                <MenuCard img='main.jpg' items='hot pizza' />
                <MenuCard img='main.jpg' items='salads' /> */}
            </div>
        </div>
    )
}

export default Menu;