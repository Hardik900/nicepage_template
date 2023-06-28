import React from "react";
// import { Categor } from "./Data";

function Category(props) {
    console.log(props)
    return (
        <>
            <div className="category" style={{ backgroundImage: `url(${props.imgsrc})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '30px' }}>
                <p style={{ color: "white", fontSize:"22px" }}><b>{props.text}</b></p>
            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default Category;