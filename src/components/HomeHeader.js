import React from "react";
import {NavLink} from "react-router-dom";
import { Link } from "react-scroll";
import headerBanner from "../assets/Home-Hero-Image.jpg"
import decoration from "../assets/Decoration.svg"

const HomeHeader = ()=>{
    return (
<header className="page-header" id="homeHeader">
    <div className="header-banner">
        <a href="/">
            <img src={headerBanner} width="100%" height="100%" alt="Logo"/>
        </a>
    </div>
    <div className="main-nav">
        <TopNavigation/>
        <BottomNavigation/>
        <TitleWithbuttons/>
    </div>
</header>
    )
};
const activeStyle = {
    fontWeight: "bold"
};

class TopNavigation extends React.Component {

    render() {
        return (
            <nav>
                <ul className="top-nav-list" id="top-menu">
                    <li><NavLink activeStyle={activeStyle} className="top-nav-list-link1" to="/logowanie">Zaloguj</NavLink></li>
                    <li><NavLink activeStyle={activeStyle} className="top-nav-list-link2" to="/rejestracja">Załóż konto</NavLink></li>
                </ul>
            </nav>
        )
    }
};

class BottomNavigation extends React.Component {

    render() {
        return (
            <div>
                <ul className="bottom-nav-list" id="bottom-menu">
                    <Link
                        activeClass="active"
                        to="homeHeader"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="bottom-nav-list-link1"
                    >Start</Link>
                    <Link
                        activeClass="active"
                        to="homeFourSteps"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {900}
                        className="bottom-nav-list-link"
                    >O co chodzi?</Link>
                    <Link
                        activeClass="active"
                        to="homeAboutUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {1800}
                        className="bottom-nav-list-link"
                    >O nas</Link>
                    <Link
                        activeClass="active"
                        to="homeWhomWeHelp"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {1800}
                        className="bottom-nav-list-link"
                    >Fundacja i organizacje</Link>
                    <Link
                        activeClass="active"
                        to="homeContact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {1800}
                        className="bottom-nav-list-link"
                    >Kontakt</Link>
                </ul>
            </div>
        )
    }
};
class TitleWithbuttons extends React.Component {

    render() {
        return (
            <div className="page-header-main">
                <div className="page-header-main-text">Zacznij pomagać!</div>
                <div className="page-header-main-text">Oddaj niechciane rzeczy w zaufane ręce</div>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="35%" height="35%" alt="Decoration"/>
                </div>
                <div className="page-header-main-buttons-wrapper">
                    <button className="page-header-main-button">ODDAJ <br/> RZECZY</button>
                    <button className="page-header-main-button">ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                </div>


            </div>
        )
    }
};
export default HomeHeader