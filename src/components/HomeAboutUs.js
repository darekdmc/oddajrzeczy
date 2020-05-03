import React from "react";
import decoration from "../assets/Decoration.svg";
import peopleBanner from "../assets/People.jpg";
import signaturesvg from "../assets/Signature.svg"

const HomeAboutUs = ()=>{
    return (
        <div className="homeAboutUs-container" id="homeAboutUs">
            <div className="homeAboutUs-col-left">
                <h1 className="homeAboutUs-header">O nas</h1>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="100%" height="100%" alt="Decoration"/>
                </div>
                <span className="homeAboutUs-text">Nori grape silver beet broccoli kombu beet</span>
                <span className="homeAboutUs-text">greens fava bean potato quandong celery. Bunya</span>
                <span className="homeAboutUs-text">nuts black-eyed pea prairie turnip leek lentil</span>
                <span className="homeAboutUs-text">turnip greens parsnip.</span>
                <div className="homeAboutUs-signature">
                    <img src={signaturesvg} width="100%" height="100%" alt="Signature"/>
                </div>
            </div>
            <div className="aboutUs-banner">
                <a href="/">
                    <img src={peopleBanner} width="139%" height="100%" alt="People"/>
                </a>
            </div>
        </div>
    )
};
export default HomeAboutUs