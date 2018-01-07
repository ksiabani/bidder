import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Bidders from '../Bidders/Bidders';
import './Wrapper.css';

const Wrapper = () => (

    <div className="side-menu-layout__container">
        {/* Menu */}
        <Menu />
        {/* Content Wrapper */}
        <div className="side-menu-layout__content-wrapper">
            {/* Header */}
            <div className="side-menu-layout__header side-menu-layout__header--bidder">
                <h3> Bidders </h3>
                <div className="dropdown">
                    <div className="dropdown-trigger dropdown-trigger--icon">
                        <button type="button">
                            <i className="icon users_circle-08 x3" />
                        </button>
                    </div>
                </div>
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