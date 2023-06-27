import React from "react";
import { Categor } from "./Data";

function Category(){
    return(
        <div>
            <div className="category-container">
            {
                    Categor.map(function(Data,i){
                        return(
                            <div className="category">
                                <img src={Data.imgsrc} alt="image"/>
                                <p style={{color:"grey"}}>{Data.text}</p>
                            </div>
                        )
                    })
            }
            </div> <br /><br /><br /><br />
        </div>
    )
}

export default Category;