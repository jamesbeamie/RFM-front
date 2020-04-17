import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./componentFiles/home";
import AboutPage from "./componentFiles/about";
import Header from "./common/header";
import AuthPage from "./componentFiles/signUp";
import LoginPage from "./componentFiles/login";
import ResetRequest from "./componentFiles/requestPwdReset";
import PwdReset from "./componentFiles/pwdReset";
import CreateBlog from "./containers/createBlog";
import PageNotFound from "./common/PageNotFound";
import CreateEngagement from "./containers/createEngagement";
import CreateBump from "./containers/createBump";
import CreateChild from "./containers/createChildren";
import CreateFamily from "./containers/createFamily";
import CreatePotrait from "./containers/createPotrait";
import CreateEvent from "./containers/createEvent";
import { ToastContainer } from "react-toastify";
const App = () => {
  const userToken = localStorage.getItem("token");
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        {!userToken && <Route path='/signup' component={AuthPage} />}
        {!userToken && <Route path='/signin' component={LoginPage} />}
        {userToken && <Redirect from='/signin' to='/' exact />}
        <Route path='/link-to-reset' component={ResetRequest} />
        <Route path='/about' component={AboutPage} />
        <Route path='/authenticate-reset' component={PwdReset} />
        <Route path='/blog' component={CreateBlog} />
        <Route path='/engagements' component={CreateEngagement} />
        <Route path='/bumps' component={CreateBump} />
        <Route path='/kids' component={CreateChild} />
        <Route path='/family' component={CreateFamily} />
        <Route path='/potraits' component={CreatePotrait} />
        <Route path='/events' component={CreateEvent} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer />
    </div>
  );
};
export default App;
