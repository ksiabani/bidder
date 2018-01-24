import React from 'react';
import {Route} from 'react-router-dom';
import Menu from '../Menu/Menu';
import Bidders from '../Bidder/Bidders';
import './Wrapper.css';
import EditBidder from "../Bidder/EditBidder";

const Wrapper = () => (

    <div className="side-menu-layout__container">
        {/* Menu */}
        <Menu/>
        {/* Content Wrapper */}
        <div className="side-menu-layout__content-wrapper">
            {/* Header */}
            <div className="side-menu-layout__header side-menu-layout__header--bidder">
                <h3 className="header__title"> BIDDERS </h3>
                <div className="header__text">All data are based on UTC timezone</div>
                <div className="dropdown">
                    <div className="dropdown-trigger dropdown-trigger--icon">
                        <button type="button">
                            <i className="icon users_circle-08 x3"/>
                        </button>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="side-menu-layout__content">
                <Route exact path='/bidder' component={Bidders}/>
                <Route exact path='/bidders' component={Bidders}/>
                <Route exact path='/bidders/:id/edit' component={EditBidder}/>
            </div>
        </div>
    </div>

);

export default Wrapper;
