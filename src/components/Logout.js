import React from "react";
import LogNavigation from "./LogNavigation";
import decoration from "../assets/Decoration.svg";
import {HashLink as Link} from "react-router-hash-link";
const Logout = ()=>{
    return (
        <>
            <header className="LogHeader" id="LogHeader">
                <LogNavigation/>
            </header>
            <div className="homeFourSteps-header-wrapper">
                <h2>Wylogowanie nastąpiło<br/>pomyślnie!</h2>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="260px" height="40px" alt="Decoration"/>
                </div>
                <div className="Log-button-wrapper">
                    <Link to="/">
                        <button className="LogOut-button">Strona główna</button>
                    </Link>
                </div>
            </div>
        </>
    )
};
export default Logout