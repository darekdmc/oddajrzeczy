import React from 'react';
import {Route,HashRouter as Router,Switch,NavLink} from "react-router-dom"
import NotFound from "./components/NotFound"

const activeStyle = {
  fontWeight: "bold"
};
class Navigation extends React.Component {
  changeClick(e){
    const menu = document.querySelector('.main-nav-list');
    menu.classList.remove('show');
    window.scrollTo(0, 0)
  }
  render() {
    return (
        <>
          <ul onClick={e => this.changeClick(e)} className="main-nav-list" id="menu">
            <li><NavLink activeStyle={activeStyle} exact to="/">Strona główna</NavLink></li>
            <li><NavLink activeStyle={activeStyle} to="/offer">Oferta</NavLink></li>
            <li><NavLink activeStyle={activeStyle} to="/about">O nas</NavLink></li>
            <li><NavLink activeStyle={activeStyle} to="/gallery">Galeria</NavLink></li>
            <li><NavLink activeStyle={activeStyle} to="/contact">Kontakt</NavLink></li>
          </ul>
        </>
    )
  }
};

class Button extends React.Component {

  handleClick(e){
    const menu = document.querySelector('.main-nav-list');
    menu.classList.toggle('show');
  }
  render() {
    return (
        <button onClick={e => this.handleClick(e)} className="main-nav-toggle" aria-label="Pokaż menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
    )
  }
}
const App = () => (
    <div>
      <Router>
        <header className="page-header">
          <h1 className="main-logo">
            <a href="http://www.m-rdevelopment.pl">
              <img src={logo} width="248" height="68" alt="Logo"/>
            </a>
          </h1>
          <div className="main-nav">
            <Navigation/>
            <Button />
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/offer" component={Offer} />
          <Route path="/about" component={AboutUs} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <footer>

        </footer>
      </Router>
    </div>
);
export default App;
