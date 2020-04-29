import React from 'react';
import {Route,HashRouter as Router,Switch,NavLink} from "react-router-dom"
import NotFound from "./components/NotFound"

const activeStyle = {
  fontWeight: "bold"
};
class Navigation extends React.Component {
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

const Home = () => {
    return (
    <>
        <HomeHeader/>
        <HomeThreeColumns/>
    </>
)};


const App = () => (
    <div>
      <Router>
        <header className="page-header">
          <h1 className="main-logo">
            <a href="/">
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
          <Route path="/oddaj-rzeczy" component={Form} />
          <Route path="/logowanie" component={Login} />
          <Route path="/rejestracja" component={Register} />
          <Route path="/wylogowano" component={Logout} />
          <Route component={NotFound} />
        </Switch>
        <footer>

        </footer>
      </Router>
    </div>
);

export default App;
