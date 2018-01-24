import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Wrapper from './Wrapper/Wrapper';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute';

const App = () => (
    <Switch>
        {/*<Wrapper />*/}
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={Wrapper} />
    </Switch>
);

export default App;
