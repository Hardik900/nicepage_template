import React from "react";
import Discount from "./Discount";

function Footer_banner(){
    return(
        <>
            <div className="banner-container row m-0">
                <div className="col-md-1 m-0 p-0"></div>
                    <div className="col-12 col-md-5 ll my-lg-2 py-lg-5 ">
                        <Discount />
                        <p style={{color: "white", fontSize: "22px", fontWeight: "800"}}>New Restaurant</p>
                        <h1>Keep up to date with us</h1>
                        <p>Image from Freepik</p>
                    </div>
                    {/* <div>
                        <input type="text" />
                        <button>Sumbit</button>
                    </div> */}
                <div className="col-md-6 m-0 p-0"></div>
            </div>
        </>
    )
}

export default Footer_banner;