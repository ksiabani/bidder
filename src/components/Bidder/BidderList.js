import React from 'react';
import Bidder from './Bidder';
import PropTypes from "prop-types";

const BidderList = ({name, state, bidders}) => (
    <div className="bidders-list" data-testid={state}>
        <div className="bidders-list__name">{name}</div>
        {
            bidders
                .filter((bidder) => bidder.state === state)
                .map((bidder) => <Bidder
                    key={bidder.id}
                    id={bidder.id}
                    bidder={bidder}
                    name={bidder.name}
                    endpoint={bidder.endpoint}
                    action={state === "LIVE" ? "Check your bidder" : "Validate your bidder"}
                />)
        }
    </div>
);

BidderList.propTypes = {
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    bidders: PropTypes.array.isRequired
};

export default BidderList;
