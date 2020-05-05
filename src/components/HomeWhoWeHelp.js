import React from "react";
import decoration from "../assets/Decoration.svg";

const homeWhoWeHelp = ()=>{
    return (
        <div className="homeWhoWeHelp-container" id="homeWhoWeHelp">
                <h1 className="homeWhoWeHelp-header">Komu pomagamy?</h1>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="13%" height="13%" alt="Decoration"/>
                </div>
        </div>
    )
};
export default homeWhoWeHelp