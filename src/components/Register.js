import React from "react";
import LogNavigation from "./LogNavigation"

import decoration from "../assets/Decoration.svg"

const Register = ()=>{
    return (
        <>
            <header className="LogHeader" id="LogHeader">
                <LogNavigation/>
            </header>
            <div className="homeFourSteps-header-wrapper">
                <h2>Załóż konto</h2>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="260px" height="40px" alt="Decoration"/>
                </div>
            </div>
        </>

    )
};

export default Register