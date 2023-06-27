import React from "react";
import { menu } from './Data';

function MenuCard(props) {
    return (
        <>
            <div className="">
                <div className=" menu ">
                    {
                        menu.map(function (t) {
                            return (
                                <>
                                    <div className="menu-img">
                                        <img src={t.img} alt="" />
                                    </div>
                                    <p>{t.items}</p>
                                    <button>READ MORE</button>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MenuCard;