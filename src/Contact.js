import React from "react";
import Forms from "./Forms";
import Navbar from "./Navbar";
import Up_to_date from "./Up_to_date";

function Contact(){
    return(
        <div className="con">
            <Navbar/>
            <Forms />
            <Up_to_date />
        </div>
    )
}

export default Contact;