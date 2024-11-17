import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li><NavLink to="/" className='linknav'>Home</NavLink></li>
{/*                     <li><NavLink to='/timer' className='linknav' >Timer</NavLink></li> */}
{/*                     <li>About</li> */}
{/*                     <li><NavLink to='/counter' className='linknav' >Counter</NavLink></li> */}
                    {/* <li><NavLsink to='/cards' className='linknav'>Cards</NavLsink></li> */}
                    <li><NavLink to="/contact" className='linknav'>Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
