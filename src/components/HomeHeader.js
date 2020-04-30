import React from "react";
import {NavLink} from "react-router-dom";

const HomeHeader = ()=>{
    return (
<header className="page-header">
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
    changeClick(e){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <ul onClick={e => this.changeClick(e)} className="top-nav-list" id="top-menu">
                    <li><NavLink activeStyle={activeStyle} to="/logowanie">Zaloguj</NavLink></li>
                    <li><NavLink activeStyle={activeStyle} to="/rejestracja">Załóż konto</NavLink></li>
                </ul>
            </>
        )
    }
};

class BottomNavigation extends React.Component {

    render() {
        return (
            <>
                <div>test bottom menu</div>
            </>
        )
    }
};
class TitleWithbuttons extends React.Component {

    render() {
        return (
            <>
                <div>test Title witht buttons - to be continued... </div>
            </>
        )
    }
};
export default HomeHeader