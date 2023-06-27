import React from 'react';
import { dish } from './Data';

function Images() {
    return (
        <>
            <div className='container'>
                <div className="row m-0 p-0 ">
                    {
                        dish.map(function(a){
                            return (
                                <div className="col-10 col-xl-4 p-3 my-2 my-lg-5 m-auto" style={{height : "400px"}}>
                                    <img src={a.imgpath} style={{ height: "100%", width: "100%", borderRadius: "20px" }} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Images;