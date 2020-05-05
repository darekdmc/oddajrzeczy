import React from 'react';
import {Route,HashRouter as Router,Switch,NavLink} from "react-router-dom"
import NotFound from "./components/NotFound"
import HomeHeader from "./components/HomeHeader";
import Form from "./components/Form";
import Login from "./components/Login"
import Register from "./components/Register"
import Logout from "./components/Logout"
import HomeThreeColumns from "./components/HomeThreeColumns";
import HomeFourSteps from "./components/HomeFourSteps";
import HomeAboutUs from "./components/HomeAboutUs";
import HomeWhoWeHelp from "./components/HomeWhoWeHelp";

const Home = () => {
    return (
    <>
        <HomeHeader/>
        <HomeThreeColumns/>
        <HomeFourSteps/>
        <HomeAboutUs/>
        <HomeWhoWeHelp/>
        {/*<HomeContact/>*/}
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
      </Router>
    </div>
);

export default App;
