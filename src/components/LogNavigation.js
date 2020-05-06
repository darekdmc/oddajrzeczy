import React from "react";
import {NavLink} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";

const LogNavigation=()=>{
    return (
  <>
      <TopNavigation/>
      <BottomNavigation/>
  </>
    )
};


class TopNavigation extends React.Component {

    render() {
        return (
            <nav>
                <ul className="top-nav-list" id="top-menu">
                    <li><NavLink className="top-nav-list-link1" to="/logowanie">Zaloguj</NavLink></li>
                    <li><NavLink className="top-nav-list-link2" to="/rejestracja">Załóż konto</NavLink></li>
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
                        to="/#homeHeader"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="bottom-nav-list-link"
                    >Start</Link>
                    <Link
                        activeClass="active"
                        to="/#homeFourSteps"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {900}
                        className="bottom-nav-list-link"
                    >O co chodzi?</Link>
                    <Link
                        activeClass="active"
                        to="/#homeAboutUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {1600}
                        className="bottom-nav-list-link"
                    >O nas</Link>
                    <Link
                        activeClass="active"
                        to="/#homeWhoWeHelp"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {1800}
                        className="bottom-nav-list-link"
                    >Fundacja i organizacje</Link>
                    <Link
                        activeClass="active"
                        to="/#homeContact"
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
export default LogNavigation