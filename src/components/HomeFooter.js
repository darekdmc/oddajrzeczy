import React from "react";
import facebooksvg from "../assets/Facebook.svg";
import instagramsvg from "../assets/Instagram.svg"

const HomeFooter = ()=>{
        return (
            <footer className="HomeFooter-container">
                <div className="HomeFooter-wrapper">
                    <div className="HomeFooter-text">Copyright by Coders Lab</div>
                    <div className="HomeFooterIcon-wrapper">
                        <img className="HomeFooter-icon-fb" src={facebooksvg} width="2%" height="2%" alt="Decoration"/>
                        <img className="HomeFooter-icon-is" src={instagramsvg} width="2%" height="2%" alt="Decoration"/>
                    </div>
                </div>

            </footer>
        )
};

export default HomeFooter