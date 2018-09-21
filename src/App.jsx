import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';

const FourOhFour = () => <h1>404</h1>;

/*
 * All application routing is handled here
*/
const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={FourOhFour} />
        </Switch>
    </BrowserRouter>
);

export default App;
