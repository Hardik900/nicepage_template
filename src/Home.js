import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Category from './Category';
import Ginger from './Ginger';
import Dishes from './Dishes'
import Menu from './Menu';
import Footer_banner from './Footer_banner';
import Details from './Details';

function Home(){
    return(
        <div className='pp'>
            <Navbar />
            <Banner />
            <Category />
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