import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Search from "./components/NewComponent/Search";
import DisplayJson from "./components/DisplayJson/DisplayJson";
import PersonList from "./components/ReadApiWithAxios/PersonList"

const FourOhFour = () => <h1>404</h1>;

/*
 * All application routing is handled here
*/
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/DisplayJson" component={DisplayJson} />
      <Route exact parh="/PersonList" component={PersonList} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default App;
