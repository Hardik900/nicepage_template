import React from 'react'
import {data} from './Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
// import 

function Details() {

    return (
        <>
            <div className="row py-5 m-0 text-white Details-constainer">
                {
                    data.map(function(m){
                        return(
                            <div className="col-11 col-lg-3 m-auto Details ">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} style={{fontSize : "40px"}} ></FontAwesomeIcon>
                                </div>
                                <div className="text">
                                    <h4>{m.medium}</h4>
                                    <p><b>{m.txt}</b></p>
                                    <p style={{color:"green"}}>{m.mail}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Details;