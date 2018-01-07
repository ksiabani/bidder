import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Bidders from '../Bidders/Bidders';

const Wrapper = () => (

    <div className="side-menu-layout__container">
        {/* Menu */}
        <Menu />
        {/* Content Wrapper */}
        <div className="side-menu-layout__content-wrapper">
            {/* Header */}
            <div className="side-menu-layout__header">
                <h3> Bidders </h3>
            </div>
            {/* Content */}
            <div className="side-menu-layout__content">
                <Switch>
                    <Route exact path='/' component={Bidders}/>
                    <Route path='/bidders' component={Bidders}/>
                </Switch>
            </div>
        </div>
    </div>

);

export default Wrapper;