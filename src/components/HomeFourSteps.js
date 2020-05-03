import React from "react";
import decoration from "../assets/Decoration.svg";
import shirtsvg from "../assets/Icon-1.svg";
import bagsvg from "../assets/Icon-2.svg";
import magnifiersvg from "../assets/Icon-3.svg";
import arrowssvg from "../assets/Icon-4.svg";
import {NavLink} from "react-router-dom";

const HomeFourSteps = ()=>{
    return (
        <div className="homeFourSteps-header-wrapper" id="homeFourSteps">
            <h2>Wystarczą 4 proste kroki</h2>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="260px" height="40px" alt="Decoration"/>
                </div>
            <div className="homeFourSteps-steps-wrapper">
                <div className="homeFourSteps-steps">
                    <img src={shirtsvg} width="80%" height="80%" alt="Decoration"/>
                    <span className="homeFourSteps-steps-title">Wybierz rzeczy</span>
                    <span className="homeFourSteps-steps-line"></span>
                    <span className="homeFourSteps-steps-text">ubrania, zabawki,</span>
                    <span>sprzęt i inne</span>
                </div>
                <div className="homeFourSteps-steps">
                    <img src={bagsvg} width="80%" height="80%" alt="Decoration"/>
                    <span className="homeFourSteps-steps-title">Spakuj je</span>
                    <span className="homeFourSteps-steps-line"></span>
                    <span className="homeFourSteps-steps-text">skorzystaj z</span>
                    <span>worków na śmieci</span>
                </div>
                <div className="homeFourSteps-steps">
                    <img src={magnifiersvg} width="80%" height="80%" alt="Decoration"/>
                    <span className="homeFourSteps-steps-title">Zdecyduj komu</span>
                    <span className="homeFourSteps-steps-title2row">chcesz pomóc</span>
                    <span className="homeFourSteps-steps-line"></span>
                    <span className="homeFourSteps-steps-text">wybierz zaufane</span>
                    <span>miejsce</span>
                </div>
                <div className="homeFourSteps-steps">
                    <img src={arrowssvg} width="80%" height="80%" alt="Decoration"/>
                    <span className="homeFourSteps-steps-title">Zamów kuriera</span>
                    <span className="homeFourSteps-steps-line"></span>
                    <span className="homeFourSteps-steps-text">kurier przyjedzie</span>
                    <span>w dogodnym terminie</span>
                </div>
            </div>
            <div className="homeFourSteps-button-wrapper">
                <NavLink to="/logowanie">
                    <button className="homeFourSteps-button">ODDAJ <br/> RZECZY</button>
                </NavLink>
            </div>
        </div>
    )
};
export default HomeFourSteps