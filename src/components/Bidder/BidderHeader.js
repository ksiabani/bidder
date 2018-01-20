import React from 'react';
import {Link} from 'react-router-dom';
import './BidderHeader.css';

const Breadcrumps = ({bidder}) => (
    <div className="bidders-header">
        <i className="icon design_code x3 bidders-header__icon"/>
        {!bidder && <div className="bidders-header__title">View your bidders</div>}
        {bidder &&
        <div className="bidders-header__breadcrumps">
            <Link to="/bidders" className="bidders-header__link">View your bidders</Link>
            <i className="icon arrows-1_minimal-right bidders-header__arrow"/>
            <span className="bidders-header__bidder-name">{bidder.name}</span>
        </div>
        }
    </div>
);

export default Breadcrumps;