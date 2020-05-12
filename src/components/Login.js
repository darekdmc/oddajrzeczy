import React from "react";
import LogNavigation from "./LogNavigation"

import decoration from "../assets/Decoration.svg"

const Login = ()=>{
    return (
        <>
        <header className="LogHeader" id="LogHeader">
                <LogNavigation/>
        </header>
            <div className="homeFourSteps-header-wrapper">
                <h2>Zaloguj się</h2>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="260px" height="40px" alt="Decoration"/>
                </div>
                <form className="Logform-container">
                    <div className="LogForm-wrapper">
                        <div className="Log-email-wrapper">
                            <label className="Log-labels">Email</label>
                            <input className="Log-email"></input>
                        </div>
                        <div className="Log-email-wrapper">
                            <label className="Log-labels">Hasło</label>
                            <input className="Log-pass"></input>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
};


export default Login