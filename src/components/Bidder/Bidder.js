import React from 'react';
import {Link} from 'react-router-dom';
import './Bidder.css';

const Bidder = (props) => (
    <Link to={`/bidders/${props.id}/edit`} className="bidder">
        <div className="bidder__outline">
            <div className="bidder__outline__details">
                <div className="bidder__name">{props.name}</div>
                <div className="bidder__endpoint">{props.endpoint}</div>
            </div>
            <div className="bidder__outline__icon">
                <i className="icon ui-1_settings-gear-63"/>
            </div>
        </div>
        <div className="bidder__action">{props.action}</div>
    </Link>
);

export default Bidder;