import React from 'react';
import {Route,HashRouter as Router,Switch,NavLink} from "react-router-dom"
import NotFound from "./components/NotFound"
import HomeHeader from "./components/HomeHeader";
import Form from "./components/Form";
import Login from "./components/Login"
import Register from "./components/Register"
import Logout from "./components/Logout"

const Home = () => {
    return (
    <>
        <HomeHeader/>
        {/*<HomeThreeColumns/>*/}
        {/*<Foursteps/>*/}
        {/*<AboutUs/>*/}
        {/*<WhomWeHelp/>*/}
        {/*<Contact/>*/}
    </>
)};


const App = () => (
    <div>
      <Router>
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
