import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../view/Home'
import About from '../view/About'
import Content from '../view/Content'
import NotFound from '../view/errors/NotFound';
import Navbar from '../components/Navbar';

function Router(props) {
    return (
        <div>
            <Switch>
                <Route path="/content">
                    <Navbar/>
                    <Content/>
                </Route>
                <Route path="/about">
                    <Navbar/>
                    <About/>
                </Route>
                <Route exact path="/">
                    <Navbar/>
                    <Home/>
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default Router;