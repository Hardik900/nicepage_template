import React from "react";

function Ginger(props){
    return(
        <>
            <div className="Ginger-Container col-md-12">
                <div className="col-10 Ginger-txt col-md-5">
                    <h1>$27</h1>
                    <h3>BEEF WITH GINGER</h3>
                    <p>
                    Article evident arrived express highest men did boy. 
                    Mistress sensible entirely am so. Quick can manor 
                    smart money hopes worth too. Comfort produce husband 
                    boy her had hearing. Law others theirs passed but 
                    wishes. You day real less till dear read. Considered 
                    use dispatched melancholy sympathize discretion led. 
                    Oh feel if up to till like.
                    </p>
                </div>
                <div className="col-10 Ginger-img col-md-5">
                    <img src={props.imgsrc} alt="Ginger" />
                </div>
            </div> <br />
        </>
    )
}

export default Ginger;