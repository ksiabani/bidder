import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const Bidder = ({bidder, action}) => (
    <Link to={{pathname: `/bidders/${bidder.id}/edit`, bidder: bidder}} className="bidder" data-testid="bidder">
        <div className="bidder__outline">
            <div className="bidder__outline__details">
                <div className="bidder__name" data-testid="bidderName">{bidder.name}</div>
                <div className="bidder__endpoint" data-testid="bidderEndpoint">{bidder.endpoint}</div>
            </div>
            <div className="bidder__outline__icon">
                <i className="icon ui-1_settings-gear-63"/>
            </div>
        </div>
        <div className="bidder__action">{action}</div>
    </Link>
);

Bidder.propTypes = {
    bidder: PropTypes.object.isRequired,
    action: PropTypes.string.isRequired
};

export default Bidder;
