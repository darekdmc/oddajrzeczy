import React from "react";
import LogNavigation from "./LogNavigation"

import decoration from "../assets/Decoration.svg"
import {HashLink as Link} from "react-router-hash-link";

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
                <form className="Regform-container">
                    <div className="LogForm-wrapper">
                        <div className="Log-email-wrapper">
                            <label className="Log-labels">Email</label>
                            <input className="Log-email"></input>
                        </div>
                        <div className="Log-email-wrapper">
                            <label className="Log-labels">Hasło</label>
                            <input className="Log-pass"></input>
                        </div>
                        <div className="Log-email-wrapper">
                            <label className="Log-labels">Powtórz hasło</label>
                            <input className="Log-pass"></input>
                        </div>
                    </div>
                </form>
                <div className="Log-button-wrapper">
                    <Link to="/rejestracja">
                        <button className="Reg-button">Zaloguj się</button>
                    </Link>
                    <button className="Reg-button1" >Załóż konto</button>
                </div>
            </div>
        </>

    )
};

export default Register