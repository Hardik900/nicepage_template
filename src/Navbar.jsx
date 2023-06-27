import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li><NavLink to="/" className='linknav'>Home</NavLink></li>
                    <li>Landing</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Team</li>
                    <li><NavLink to="/contact" className='linknav'>Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;