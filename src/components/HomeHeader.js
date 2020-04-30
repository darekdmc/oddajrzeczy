import React from "react";
import {NavLink} from "react-router-dom";
import { Link } from "react-scroll";

const HomeHeader = ()=>{
    return (
<header className="page-header" id="homeHeader">
    <div className="main-banner">
        <a href="/">
            <img width="248" height="68" alt="Logo"/>
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
                    <li><NavLink activeStyle={activeStyle} to="/logowanie">Zaloguj</NavLink></li>
                    <li><NavLink activeStyle={activeStyle} to="/rejestracja">Załóż konto</NavLink></li>
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
                    >Start</Link>
                    <Link
                        activeClass="active"
                        to="homeThreeColumns"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {900}
                    >O co chodzi?</Link>
                    <Link
                        activeClass="active"
                        to="homeFourSteps"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {1800}
                    >O nas</Link>
                </ul>
            </div>
        )
    }
};
class TitleWithbuttons extends React.Component {

    render() {
        return (
            <>
                <div>test Title with buttons - to be continued... </div>
            </>
        )
    }
};
export default HomeHeader