import React from "react";
import Forms from "./Forms";
import Navbar from "./Navbar";
import Up_to_date from "./Up_to_date";
//import Timer from "./Timer";

function Contact(){
    return(
        <div className="con">
            <Navbar/>
            <Forms />
            <Up_to_date />
            {/* <Timer/> */}
        </div>
    )
}

export default Contact;