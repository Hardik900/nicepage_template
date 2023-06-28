import React from 'react';
import Submit from './Submit';

function Input_forms(){
    return(
        <>
            <div className="container">
                <div className="row m-auto tt">
                    {/* <div className=' bg-info'>  */}
                        <div className='col-lg-5 input-div'>
                            <label htmlFor="">Email</label> <br />
                            <input type="email" className='input' placeholder='Enter a valid email address'/>
                        </div>
                        <div className='col-lg-5 input-div'>
                            <label htmlFor="">Name</label> <br />
                            <input type="text" className='input' placeholder='Enter your Name' />
                        </div>
                    {/* </div> */}
                </div>
                <div className="row m-auto">
                    <div className=" col-12 col-lg-10 m-auto input-div">
                        <label htmlFor="">Message</label> <br />
                        <textarea placeholder='Enter the Text here...'></textarea>
                    </div>
                </div>
                <Submit  />
            </div>
        </>
    )
}

export default Input_forms