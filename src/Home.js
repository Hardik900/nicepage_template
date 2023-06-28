import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Category from './Category';
import Ginger from './Ginger';
import Dishes from './Dishes'
import Menu from './Menu';
import Footer_banner from './Footer_banner';
import Details from './Details';
import image1 from "./Image/main.jpg"

function Home(){
    return(
        <div className='pp'>
            <Navbar />
            <Banner />
            <div className='category-container'>
                <Category imgsrc="main.jpg" text="FOOD SOURCING"/>
                <Category imgsrc='main.jpg' text="MENU DEVELOPMENT"/>
                <Category imgsrc='main.jpg' text="RESTAURANT"/>
            </div>
            <Ginger imgsrc="main.jpg"/>
            <Dishes />
            <Menu />
            <Ginger imgsrc="main.jpg"/>
            {/* <Menu img='main.jpg' itms='hi'/> */}
            <Footer_banner />
            <Details />
        </div>
    )
}

export default Home;