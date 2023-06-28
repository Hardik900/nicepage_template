import React from "react";
import Submit from "./Submit";

function Up_to_date(){
    return(
        <div className="uptodate-container ">
            <div className="container uptodate">
                <div className="uptodate-txt">
                    <h1>Keep up to date with us</h1>
                    <p>Sample text. Click to select the Text Element.</p>
                </div>
                <div className=" col-11 col-md-6 email_input">
                    <input type="email" placeholder="Enter a valid email address"/>
                    <button className="Submit">Submit</button>
                    {/* <Submit /> */}
                </div>
            </div>
        </div>
    )
}

export default Up_to_date;