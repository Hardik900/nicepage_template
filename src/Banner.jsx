import React from "react";
import Discount from "./Discount";

function Banner(){
    return(
        <>
            <div className="banner-container row m-0">
                <div className="col-md-1 kk m-0 p-0"></div>
                    <div className="col-12 col-md-5 ll my-lg-2 py-lg-5 ">
                        <Discount />
                        <p style={{color: "white", fontSize: "22px", fontWeight: "800"}}>New Restaurant</p>
                        <h1>Where every ingredient tells a story</h1>
                        <p>Image from Freepik</p>
                        <button>Read More</button>
                    </div>
                <div className="col-md-6 m-0 p-0"></div>
            </div>
            <br /><br />
        </>
    )
}

export default Banner;