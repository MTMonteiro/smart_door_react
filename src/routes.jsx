import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/';
import Dashboard from './pages/Dashboard';
import Salas from './Components/Salas';
import Acesso from './Components/Acesso';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/salas" component={Salas}/>
                <Route path="/acesso" component={Acesso}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;